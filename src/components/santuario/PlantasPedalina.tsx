import { useId } from "react";
import { brazoEspiral } from "../../utils/espiral";
import { rutaPublica } from "../../utils/rutaPublica";

// Ilustración de las plantas de Pedalina, de frente y sobre fondo negro.
// Las posiciones de abajo están medidas sobre ella: si se cambia la imagen, hay que ajustarlas.
const IMAGEN = "/fondos/plantas-pedalina.webp";
const ANCHO = 784;
const ALTO = 1168;

// Yemas de los dedos de cada pie, del más grande al más pequeño (en píxeles de la imagen).
const DEDOS_IZQUIERDO = [
    { cx: 325, cy: 440, r: 62 },
    { cx: 228, cy: 435, r: 42 },
    { cx: 176, cy: 472, r: 38 },
    { cx: 134, cy: 516, r: 36 },
    { cx: 98, cy: 568, r: 33 },
];
// El pie derecho no es un reflejo exacto del izquierdo en la ilustración: sus dedos están medidos aparte.
const DEDOS_DERECHO = [
    { cx: 472, cy: 450, r: 62 },
    { cx: 567, cy: 435, r: 42 },
    { cx: 621, cy: 469, r: 38 },
    { cx: 663, cy: 514, r: 36 },
    { cx: 699, cy: 571, r: 33 },
];

// Centro de cada planta, donde nace la espiral.
const CENTROS = [
    { x: 232, y: 770 },
    { x: 552, y: 770 },
];
const ESPIRAL_DORADA = brazoEspiral(75, 2.5);
const ESPIRAL_PURPURA = brazoEspiral(75, 2.5, Math.PI);

// Las plantas de Pedalina para la cuenta del santuario. «encendidos» dice cuántos dedos
// brillan ya (en los dos pies a la vez); el último en encenderse late un instante.
// Al completar la cuenta, en el centro de cada planta se enciende una espiral púrpura y dorada,
// como las del capítulo 7 de «Barefoot Café».
function PlantasPedalina({ encendidos, className = "" }: { encendidos: number; className?: string }) {
    const id = useId();
    const espiralesEncendidas = encendidos >= DEDOS_IZQUIERDO.length;

    return (
        <div
            className={`relative [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_78%)] ${className}`}
            style={{ aspectRatio: `${ANCHO} / ${ALTO}` }}
        >
            {/* «lighten» hace desaparecer el fondo negro de la imagen sobre la oscuridad del santuario */}
            <img src={rutaPublica(IMAGEN)} alt="" className="absolute inset-0 h-full w-full mix-blend-lighten" />

            <svg viewBox={`0 0 ${ANCHO} ${ALTO}`} className="absolute inset-0 h-full w-full" aria-hidden="true">
                <defs>
                    {/* Brillo dorado de un dedo: intenso en el centro, con un halo que desborda la yema */}
                    <radialGradient id={`${id}-luz`}>
                        <stop offset="0%" stopColor="#fff6e0" stopOpacity={1} />
                        <stop offset="35%" stopColor="#f7d48f" stopOpacity={0.85} />
                        <stop offset="70%" stopColor="#edc577" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#edc577" stopOpacity={0} />
                    </radialGradient>
                </defs>

                {/* Brillos de los dedos (se suman a la luz de la imagen) */}
                {[DEDOS_IZQUIERDO, DEDOS_DERECHO].map((dedos, pie) =>
                    dedos.map((dedo, indice) => (
                        <circle
                            key={`${pie}-${indice}`}
                            cx={dedo.cx}
                            cy={dedo.cy}
                            r={dedo.r * 1.5}
                            fill={`url(#${id}-luz)`}
                            className={`origin-center mix-blend-screen transition-opacity duration-[1500ms] [transform-box:fill-box] ${
                                indice === encendidos - 1 ? "motion-safe:animate-pulso" : ""
                            }`}
                            style={{ opacity: indice < encendidos ? 1 : 0 }}
                        />
                    )),
                )}

                {/* Las espirales, que aparecen y empiezan a girar al terminar la cuenta */}
                {CENTROS.map((centro) => (
                    <g key={centro.x} transform={`translate(${centro.x} ${centro.y})`}>
                        <g
                            className="origin-center transition-[opacity,transform] duration-[2500ms] ease-out [transform-box:fill-box]"
                            style={{
                                opacity: espiralesEncendidas ? 1 : 0,
                                transform: `scale(${espiralesEncendidas ? 1 : 0.3})`,
                            }}
                        >
                            <g className="origin-center drop-shadow-[0_0_10px_rgba(155,107,216,0.9)] motion-safe:animate-[girar_8s_linear_infinite] [transform-box:fill-box]">
                                <path
                                    d={ESPIRAL_PURPURA}
                                    fill="none"
                                    stroke="#9b6bd8"
                                    strokeWidth={8}
                                    strokeLinecap="round"
                                />
                                <path
                                    d={ESPIRAL_DORADA}
                                    fill="none"
                                    stroke="#edc577"
                                    strokeWidth={8}
                                    strokeLinecap="round"
                                />
                            </g>
                        </g>
                    </g>
                ))}
            </svg>
        </div>
    );
}

export default PlantasPedalina;
