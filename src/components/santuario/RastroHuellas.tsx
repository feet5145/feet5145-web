import { useEffect, useRef, useState } from "react";
import { DEDOS_PIE, PLANTA_PIE, VIEWBOX_PIE } from "../../utils/formaPie";

// Distancia (en píxeles) entre una pisada y la siguiente, y separación entre pie izquierdo y derecho.
const PASO = 70;
const SEPARACION = 12;
const MAXIMO = 14;

type Pisada = { id: number; x: number; y: number; angulo: number; lado: number };

// Al mover el ratón (o el dedo) por el santuario, quedan pequeñas huellas doradas
// que se desvanecen, como si alguien caminara descalzo por la pantalla.
function RastroHuellas() {
    const [pisadas, setPisadas] = useState<Pisada[]>([]);
    const ultima = useRef<{ x: number; y: number } | null>(null);
    const contador = useRef(0);

    useEffect(() => {
        function alMover(evento: PointerEvent) {
            const { clientX: x, clientY: y } = evento;
            if (!ultima.current) {
                ultima.current = { x, y };
                return;
            }
            const dx = x - ultima.current.x;
            const dy = y - ultima.current.y;
            if (Math.hypot(dx, dy) < PASO) return;

            // Los pies alternan a un lado y otro de la dirección del movimiento.
            const angulo = Math.atan2(dy, dx);
            const lado = contador.current % 2 === 0 ? 1 : -1;
            const pisada = {
                id: contador.current++,
                x: x - Math.sin(angulo) * SEPARACION * lado,
                y: y + Math.cos(angulo) * SEPARACION * lado,
                angulo: (angulo * 180) / Math.PI + 90,
                lado,
            };
            ultima.current = { x, y };
            setPisadas((anteriores) => [...anteriores.slice(-(MAXIMO - 1)), pisada]);
        }

        window.addEventListener("pointermove", alMover);
        return () => window.removeEventListener("pointermove", alMover);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-10" aria-hidden="true">
            {pisadas.map((pisada) => (
                <svg
                    key={pisada.id}
                    viewBox={VIEWBOX_PIE}
                    className="absolute w-4 animate-pisada fill-[#edc577] drop-shadow-[0_0_4px_rgba(237,197,119,0.7)]"
                    style={{
                        left: pisada.x,
                        top: pisada.y,
                        // El pie de un lado es el reflejo del otro.
                        transform: `translate(-50%, -50%) rotate(${pisada.angulo}deg) scaleX(${pisada.lado})`,
                    }}
                    onAnimationEnd={() =>
                        setPisadas((anteriores) => anteriores.filter((otra) => otra.id !== pisada.id))
                    }
                >
                    <path d={PLANTA_PIE} />
                    {DEDOS_PIE.map((dedo) => (
                        <circle key={dedo.cx} {...dedo} />
                    ))}
                </svg>
            ))}
        </div>
    );
}

export default RastroHuellas;
