import { DEDOS_PIE, PLANTA_PIE, VIEWBOX_PIE } from "../../utils/formaPie";

// La planta de un pie cuyos dedos se iluminan uno a uno, del más grande al más pequeño,
// durante la cuenta de Pedalina. «encendidos» indica cuántos dedos brillan ya.
function PlantaContando({ encendidos, className = "" }: { encendidos: number; className?: string }) {
    return (
        <svg viewBox={VIEWBOX_PIE} className={`overflow-visible ${className}`} aria-hidden="true">
            <path d={PLANTA_PIE} fill="#edc577" fillOpacity={0.12} stroke="#d9ad63" strokeOpacity={0.6} strokeWidth={0.5} />
            {DEDOS_PIE.map((dedo, indice) => {
                const encendido = indice < encendidos;
                return (
                    <circle
                        key={dedo.cx}
                        {...dedo}
                        fill="#edc577"
                        fillOpacity={encendido ? 1 : 0.12}
                        stroke="#d9ad63"
                        strokeOpacity={0.6}
                        strokeWidth={0.5}
                        className="transition-[fill-opacity,filter] duration-[1500ms]"
                        style={{ filter: encendido ? "drop-shadow(0 0 2.5px rgba(237,197,119,0.9))" : "none" }}
                    />
                );
            })}
        </svg>
    );
}

export default PlantaContando;
