import { useEffect, useState } from "react";
import { susurros } from "../../data/santuario";

const INTERVALO_MS = 7000;

// Rincones donde puede aparecer cada susurro.
const POSICIONES = [
    "left-[6%] top-[8%]",
    "right-[6%] top-[12%] text-right",
    "bottom-[10%] left-[8%]",
    "bottom-[14%] right-[6%] text-right",
];

type Susurro = { id: number; texto: string; posicion: string };

function elegir(anterior?: Susurro): Susurro {
    let texto = anterior?.texto;
    while (texto === anterior?.texto) {
        texto = susurros[Math.floor(Math.random() * susurros.length)];
    }
    const posicion = POSICIONES[Math.floor(Math.random() * POSICIONES.length)];
    return { id: (anterior?.id ?? 0) + 1, texto: texto ?? "", posicion };
}

// Frases de las historias que aparecen y se desvanecen, una cada vez, en los bordes.
function Susurros() {
    const [actual, setActual] = useState<Susurro>(() => elegir());

    useEffect(() => {
        const intervalo = window.setInterval(() => setActual((anterior) => elegir(anterior)), INTERVALO_MS);
        return () => window.clearInterval(intervalo);
    }, []);

    return (
        <p
            key={actual.id}
            aria-hidden="true"
            className={`pointer-events-none absolute max-w-[40vw] font-serif text-sm italic text-[#d9ad63] opacity-0 motion-safe:animate-susurro sm:max-w-xs sm:text-lg ${actual.posicion}`}
        >
            {actual.texto}
        </p>
    );
}

export default Susurros;
