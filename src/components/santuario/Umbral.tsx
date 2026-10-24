import { useRef, useState } from "react";
import type { PointerEvent } from "react";
import { umbral } from "../../data/santuario";
import { usePrefiereMenosMovimiento } from "../../hooks/usePrefiereMenosMovimiento";

// Distancia a partir de la cual soltar los zapatos cuenta como apartarlos.
const DISTANCIA_APARTAR = 80;

function Zapato({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 64 34" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden="true">
            {/* Zapatilla de perfil: talón a la izquierda, puntera a la derecha */}
            <path
                d="M6 26V10c0-2 2-3 4-2l9 4c4 2 8 1 11-1l5-4c2-1 4 0 5 2 4 6 12 9 17 12 3 2 3 5 0 5H6Z"
                strokeLinejoin="round"
            />
            <path d="M4 26h56v2c0 1.5-1 2.5-2.5 2.5h-51C5 30.5 4 29.5 4 28v-2Z" strokeLinejoin="round" />
            <path d="M33 11l3 4M38 10l2.5 4M42 13l2 3.5" strokeLinecap="round" />
        </svg>
    );
}

// Primera pantalla del santuario: hay que apartar los zapatos (arrastrándolos o
// tocándolos) para poder entrar.
function Umbral({ alEntrar }: { alEntrar: () => void }) {
    const menosMovimiento = usePrefiereMenosMovimiento();
    const [desplazamiento, setDesplazamiento] = useState(0);
    const [apartados, setApartados] = useState(false);
    const [arrastrando, setArrastrando] = useState(false);
    const inicio = useRef<number | null>(null);

    function apartar() {
        if (menosMovimiento) {
            alEntrar();
        } else {
            setApartados(true);
        }
    }

    function alPulsar(evento: PointerEvent<HTMLButtonElement>) {
        if (apartados) return;
        inicio.current = evento.clientX;
        setArrastrando(true);
        evento.currentTarget.setPointerCapture(evento.pointerId);
    }

    function alMover(evento: PointerEvent<HTMLButtonElement>) {
        if (inicio.current === null) return;
        setDesplazamiento(evento.clientX - inicio.current);
    }

    function alSoltar() {
        if (inicio.current === null) return;
        inicio.current = null;
        setArrastrando(false);
        // Un toque sin apenas movimiento también vale.
        if (Math.abs(desplazamiento) > DISTANCIA_APARTAR || Math.abs(desplazamiento) < 6) {
            apartar();
        } else {
            setDesplazamiento(0);
        }
    }

    const sentido = desplazamiento < 0 ? -1 : 1;

    return (
        <div className="flex flex-col items-center gap-10 text-center motion-safe:animate-aparecer">
            <h1 className="font-serif text-4xl italic text-[#f5eee2] sm:text-5xl">{umbral.titulo}</h1>

            <button
                type="button"
                aria-label={umbral.pista}
                onPointerDown={alPulsar}
                onPointerMove={alMover}
                onPointerUp={alSoltar}
                onPointerCancel={alSoltar}
                // Con teclado (Enter o espacio) no hay arrastre: se apartan directamente.
                onClick={(evento) => evento.detail === 0 && apartar()}
                onTransitionEnd={(evento) => apartados && evento.propertyName === "opacity" && alEntrar()}
                className="flex cursor-grab touch-none select-none gap-2 rounded-xl p-4 text-[#d9ad63] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#edc577] active:cursor-grabbing"
                style={{
                    transform: apartados ? `translateX(${sentido * 70}vw)` : `translateX(${desplazamiento}px)`,
                    opacity: apartados ? 0 : 1,
                    transition: arrastrando ? "none" : "transform 700ms ease-in, opacity 700ms ease-in",
                }}
            >
                <Zapato className="w-20 sm:w-24" />
                <Zapato className="mt-3 w-20 sm:w-24" />
            </button>

            <p className="text-sm uppercase tracking-[0.25em] text-[#eee7dc]/60">{umbral.pista}</p>
        </div>
    );
}

export default Umbral;
