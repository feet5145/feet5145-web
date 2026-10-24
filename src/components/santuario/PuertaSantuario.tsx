import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { ReactNode } from "react";
import { useNavigate } from "react-router";
import { usePrefiereMenosMovimiento } from "../../hooks/usePrefiereMenosMovimiento";
import EspiralSantuario from "./EspiralSantuario";

// Cuánto hay que mantener pulsada la huella para entrar.
const DURACION_MS = 1500;

// Detalle escondido: al mantener pulsado su contenido (la huella de la portada) se llena
// un anillo dorado; si se completa, una espiral crece hasta llenar la pantalla y lleva
// al santuario. Si se suelta antes, el anillo se vacía.
function PuertaSantuario({ children }: { children: ReactNode }) {
    const navegar = useNavigate();
    const menosMovimiento = usePrefiereMenosMovimiento();
    const [pulsando, setPulsando] = useState(false);
    const [entrando, setEntrando] = useState(false);
    const temporizador = useRef<number | undefined>(undefined);

    useEffect(() => () => window.clearTimeout(temporizador.current), []);

    function empezar() {
        if (entrando) return;
        setPulsando(true);
        temporizador.current = window.setTimeout(() => {
            setPulsando(false);
            navigator.vibrate?.(30);
            if (menosMovimiento) {
                navegar("/santuario");
            } else {
                setEntrando(true);
            }
        }, DURACION_MS);
    }

    function soltar() {
        window.clearTimeout(temporizador.current);
        setPulsando(false);
    }

    return (
        <>
            <span
                onPointerDown={empezar}
                onPointerUp={soltar}
                onPointerLeave={soltar}
                onPointerCancel={soltar}
                onContextMenu={(evento) => evento.preventDefault()}
                className="relative inline-grid cursor-pointer select-none place-items-center [-webkit-touch-callout:none]"
            >
                {children}
                <svg
                    viewBox="0 0 100 100"
                    className="pointer-events-none absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2 -rotate-90 sm:size-32"
                    aria-hidden="true"
                >
                    <circle
                        cx="50"
                        cy="50"
                        r="47"
                        fill="none"
                        stroke="#edc577"
                        strokeWidth={2}
                        strokeLinecap="round"
                        pathLength={1}
                        strokeDasharray={1}
                        className="drop-shadow-[0_0_6px_rgba(237,197,119,0.8)]"
                        style={{
                            strokeDashoffset: pulsando ? 0 : 1,
                            opacity: pulsando ? 1 : 0,
                            transition: pulsando
                                ? `stroke-dashoffset ${DURACION_MS}ms linear, opacity 200ms`
                                : "stroke-dashoffset 300ms ease-out, opacity 300ms",
                        }}
                    />
                </svg>
            </span>

            {/* Fuera de la portada (en el body), para quedar por encima de la cabecera */}
            {entrando &&
                createPortal(
                    <div className="fixed inset-0 z-[90] grid place-items-center overflow-hidden bg-[#0b0705] motion-safe:animate-oscurecer">
                        <div className="animate-tragar" onAnimationEnd={() => navegar("/santuario")}>
                            <EspiralSantuario className="relative w-[80vmin]" />
                        </div>
                    </div>,
                    document.body,
                )}
        </>
    );
}

export default PuertaSantuario;
