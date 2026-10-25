import { useEffect, useState } from "react";
import { guinos, type Guino, type GuinoId } from "../../data/guinos";
import { EVENTO_GUINO } from "../../utils/guinos";

// Cuánto tiempo se ve cada aviso.
const DURACION_MS = 4500;

// Mensaje dorado en una esquina al descubrir un guiño. Si se descubren varios seguidos,
// se muestran de uno en uno.
function AvisoGuino() {
    const [cola, setCola] = useState<Guino[]>([]);
    const actual = cola[0];

    useEffect(() => {
        function alDescubrir(evento: Event) {
            const id = (evento as CustomEvent<GuinoId | undefined>).detail;
            const guino = guinos.find((otro) => otro.id === id);
            if (guino) setCola((anterior) => [...anterior, guino]);
        }
        window.addEventListener(EVENTO_GUINO, alDescubrir);
        return () => window.removeEventListener(EVENTO_GUINO, alDescubrir);
    }, []);

    useEffect(() => {
        if (!actual) return;
        const temporizador = window.setTimeout(() => setCola((anterior) => anterior.slice(1)), DURACION_MS);
        return () => window.clearTimeout(temporizador);
    }, [actual]);

    return (
        <div aria-live="polite" className="pointer-events-none fixed bottom-5 right-5 z-[95] max-w-xs">
            {actual && (
                <div
                    key={actual.id}
                    className="rounded-xl border border-[#d9ad63]/60 bg-[#17100b]/95 px-5 py-4 shadow-2xl shadow-black/60 backdrop-blur-sm motion-safe:animate-aparecer"
                >
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#d9ad63]">✨ Guiño descubierto</p>
                    <p className="mt-1 font-serif text-lg italic text-[#f5eee2]">{actual.titulo}</p>
                </div>
            )}
        </div>
    );
}

export default AvisoGuino;
