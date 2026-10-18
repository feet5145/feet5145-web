import { buscarHistoria } from "../../data/historias";
import { personajesDestacados, type Personaje } from "../../data/personajes";

// Destino del enlace "Ver todos los personajes". Cambiará a la página propia cuando exista.
const ENLACE_TODOS_LOS_PERSONAJES = "#personajes";
const HUECOS_ESCAPARATE = 4;

function TarjetaPersonaje({ personaje }: { personaje: Personaje }) {
    const apariciones = personaje.historias
        .map((id) => buscarHistoria(id))
        .filter((historia) => historia !== undefined);

    return (
        <article className="group flex flex-col overflow-hidden rounded-xl border border-[#49351f] bg-[#17100b] shadow-lg shadow-black/30 transition-colors hover:border-[#d9ad63]/70">
            {/* FOTO: degradado de respaldo + imagen (si existe) */}
            <div className="overflow-hidden border-b border-[#49351f]">
                <div
                    className="aspect-[3/4] w-full bg-[#1a120b] bg-cover bg-top transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{
                        backgroundImage: `url("${personaje.foto}"), radial-gradient(ellipse at 50% 35%, #4a321c 0%, #1a120b 70%)`,
                    }}
                    role="img"
                    aria-label={`Retrato de ${personaje.nombre}`}
                />
            </div>

            <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-3xl font-semibold leading-none text-[#f5eee2]">
                    {personaje.nombre}
                </h3>
                <p className="mt-1 font-serif text-lg italic text-[#d9ad63]">{personaje.epiteto}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#eee7dc]/85">{personaje.resumen}</p>

                {apariciones.length > 0 && (
                    <div className="mt-4 border-t border-[#49351f] pt-4">
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#d9ad63]">Aparece en</p>
                        <ul className="mt-2 flex flex-wrap gap-2">
                            {apariciones.map((historia) =>
                                historia.publicada === false ? (
                                    <li
                                        key={historia.id}
                                        className="rounded-full border border-dashed border-[#49351f] px-3 py-1 text-xs text-[#eee7dc]/60"
                                    >
                                        {historia.titulo}
                                        <span className="ml-1 italic text-[#d9ad63]/80">· próximamente</span>
                                    </li>
                                ) : (
                                    <li
                                        key={historia.id}
                                        className="rounded-full border border-[#49351f] px-3 py-1 text-xs text-[#eee7dc]"
                                    >
                                        {historia.titulo}
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </article>
    );
}

function HuecoPersonaje() {
    return (
        <div
            className="hidden min-h-64 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[#49351f] text-[#d9ad63]/60 sm:flex"
            aria-hidden="true"
        >
            <span className="font-serif text-4xl">?</span>
            <span className="text-sm">Próximamente</span>
        </div>
    );
}

function Personajes() {
    const huecosLibres = Math.max(0, HUECOS_ESCAPARATE - personajesDestacados.length);

    return (
        <section id="personajes" className="mx-auto w-full max-w-7xl px-5 py-16 md:px-9 md:py-20">
            {/* ENCABEZADO */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#d9ad63]">
                        Conoce a los personajes
                    </p>
                    <span className="mt-2 block h-px w-24 bg-[#d9ad63]" aria-hidden="true" />
                    <h2 className="mt-4 font-serif text-3xl font-semibold text-[#f5eee2] sm:text-4xl">
                        Los rostros que conectan cada historia
                    </h2>
                </div>

                <a
                    href={ENLACE_TODOS_LOS_PERSONAJES}
                    className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-[#edc577] transition-colors hover:text-[#f5eee2]"
                >
                    Ver todos los personajes
                    <span aria-hidden="true">→</span>
                </a>
            </div>

            {/* TARJETAS */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {personajesDestacados.map((personaje) => (
                    <TarjetaPersonaje key={personaje.id} personaje={personaje} />
                ))}
                {Array.from({ length: huecosLibres }, (_, index) => (
                    <HuecoPersonaje key={index} />
                ))}
            </div>
        </section>
    );
}

export default Personajes;
