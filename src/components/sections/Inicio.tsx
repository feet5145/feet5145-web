import { rutaPublica } from "../../utils/rutaPublica";
import Huella from "../ui/Huella";

// Imagen de fondo: colócala en public/fondos/inicio.jpg.
// Mientras no exista, se ve solo el degradado cálido de respaldo.
const FONDO_INICIO = "/fondos/inicio.webp";

function Separador({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-3 text-[#d9ad63] ${className}`} aria-hidden="true">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#d9ad63]/70" />
            <span className="h-2 w-2 rotate-45 border border-[#d9ad63]" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#d9ad63]/70" />
        </div>
    );
}

function IconoLibro() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5" aria-hidden="true">
            <path d="M12 6.5C10 5 7 4.5 3 5v13c4-.5 7 0 9 1.5m0-13c2-1.5 5-2 9-1.5v13c-4-.5-7 0-9 1.5m0-13v13" strokeLinejoin="round" />
        </svg>
    );
}

function IconoTaza() {
    return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-10 w-10" aria-hidden="true">
            <path d="M20 6c-2 2 2 4 0 7M26 6c-2 2 2 4 0 7" strokeLinecap="round" />
            <path d="M9 20h26v6a11 11 0 0 1-11 11h-4A11 11 0 0 1 9 26v-6Z" strokeLinejoin="round" />
            <path d="M35 23h2a4 4 0 0 1 0 8h-3" />
            <path d="M6 41h32" strokeLinecap="round" />
        </svg>
    );
}

function Inicio() {
    return (
        <section id="inicio" className="relative isolate overflow-hidden border-b border-[#49351f]">
            {/* FONDO: degradado de respaldo + imagen (si existe) + velo oscuro para legibilidad */}
            <div
                className="absolute inset-0 -z-10 bg-[#1a120b] bg-cover bg-[position:70%_center] lg:bg-center"
                style={{
                    backgroundImage: `url("${rutaPublica(FONDO_INICIO)}"), radial-gradient(ellipse at 70% 30%, #4a321c 0%, #1a120b 55%, #100b07 100%)`,
                }}
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#100b07]/95 via-[#100b07]/70 to-[#100b07]/30" />
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-[#100b07] to-transparent" />

            <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 md:px-9 md:py-24 lg:grid-cols-[1fr_auto] lg:py-28">
                {/* IZQUIERDA: TÍTULO Y PRESENTACIÓN */}
                <div className="max-w-xl">
                    {/* MONOGRAMA */}
                    {/* Detalle escondido: al pasar el ratón por encima aparece el mensaje del title */}
                    <span title="Mira la espiral fijamente… sin parpadear…" className="mb-6 inline-block">
                        <Huella className="h-16 w-auto text-[#d9ad63] drop-shadow-[0_0_14px_rgba(237,197,119,0.55)] transition-colors duration-700 hover:text-[#edc577] sm:h-20" />
                    </span>

                    <h1 className="font-serif text-6xl font-semibold leading-none tracking-tight text-[#f5eee2] sm:text-7xl md:text-8xl">
                        feet5145
                    </h1>

                    <Separador className="my-6 max-w-sm" />

                    <p className="font-serif text-3xl text-[#f5eee2] sm:text-4xl">
                        Un refugio lejos del ruido
                    </p>

                    <p className="mt-4 max-w-md text-base leading-relaxed text-[#eee7dc]/90 sm:text-lg">
                        Escápate del estrés diario y sumérgete en historias acogedoras, escritas para
                        dejarse hipnotizar por Pedalina.
                    </p>

                    <a
                        href="#historias"
                        className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#d9ad63] px-6 py-3 font-medium text-[#100b07] shadow-lg shadow-black/30 transition-colors hover:bg-[#edc577] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#edc577] focus-visible:ring-offset-2 focus-visible:ring-offset-[#100b07]"
                    >
                        <IconoLibro />
                        Explorar historias
                    </a>
                </div>

                {/* DERECHA: CITA */}
                <figure className="w-full max-w-sm justify-self-center lg:self-end rounded-2xl border border-[#d9ad63]/40 bg-[#17100b]/80 p-8 shadow-2xl shadow-black/40 backdrop-blur-sm lg:justify-self-end">
                    <span className="block font-serif text-6xl leading-none text-[#d9ad63]" aria-hidden="true">
                        “
                    </span>
                    <blockquote className="font-serif text-2xl leading-snug text-[#f5eee2]">
                        Obsesionado con mezclar pies femeninos con hipnosis.
                    </blockquote>
                    <div className="mt-6 flex justify-center text-[#d9ad63]">
                        <IconoTaza />
                    </div>
                    <Separador className="mt-4" />
                </figure>
            </div>
        </section>
    );
}

export default Inicio;
