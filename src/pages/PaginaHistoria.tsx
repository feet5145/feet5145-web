import { Link, useParams } from "react-router";
import TarjetaPersonaje from "../components/tarjetas/TarjetaPersonaje";
import IconoPluma from "../components/ui/IconoPluma";
import { buscarHistoria, lineas } from "../data/historias";
import { personajes } from "../data/personajes";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { rutaPublica } from "../utils/rutaPublica";
import PaginaNoEncontrada from "./PaginaNoEncontrada";

function PaginaHistoria() {
    const { id = "" } = useParams();
    const historia = buscarHistoria(id);
    useTituloPagina(historia?.titulo);

    if (!historia) return <PaginaNoEncontrada />;

    const proximamente = historia.publicada === false;
    const linea = lineas.find((linea) => linea.id === historia.linea);
    // Los personajes se buscan solos: los que tienen esta historia en su lista «historias».
    const reparto = personajes.filter((personaje) => personaje.historias.includes(historia.id));
    const parrafos = historia.sinopsis ?? [historia.descripcion];

    return (
        <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-9 md:py-16">
            <Link
                to="/historias"
                className="inline-flex items-center gap-2 text-sm text-[#edc577] transition-colors hover:text-[#f5eee2]"
            >
                <span aria-hidden="true">←</span>
                Todas las historias
            </Link>

            <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-14">
                {/* PORTADA */}
                <div className="lg:sticky lg:top-24 lg:self-start">
                    <div className="relative w-full max-w-sm lg:max-w-none">
                        <div
                            className="aspect-[2/3] w-full overflow-hidden rounded-2xl border border-[#d9ad63]/40 bg-[#1a120b] bg-cover bg-center shadow-2xl shadow-black/40"
                            style={{
                                backgroundImage: `url("${rutaPublica(historia.portada)}"), radial-gradient(ellipse at 50% 40%, #4a321c 0%, #1a120b 70%)`,
                            }}
                            role="img"
                            aria-label={`Portada de ${historia.titulo}`}
                        />
                        {proximamente && (
                            <span className="absolute right-3 top-3 rounded-full border border-[#d9ad63]/60 bg-[#100b07]/85 px-3 py-1 text-xs font-medium text-[#edc577]">
                                Próximamente
                            </span>
                        )}
                    </div>
                </div>

                {/* INFORMACIÓN */}
                <div className="space-y-10">
                    <header>
                        {linea && (
                            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#d9ad63]">
                                {linea.titulo}
                            </p>
                        )}
                        <h1 className="font-serif text-5xl font-semibold leading-none text-[#f5eee2] sm:text-6xl">
                            {historia.titulo}
                        </h1>

                        {historia.etiquetas.length > 0 && (
                            <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[#d9ad63]">
                                <IconoPluma />
                                {historia.etiquetas.map((etiqueta, index) => (
                                    <span key={etiqueta} className="flex items-center gap-2">
                                        {index > 0 && <span aria-hidden="true">•</span>}
                                        {etiqueta}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div className="mt-6 max-w-2xl space-y-4 leading-relaxed text-[#eee7dc]/90">
                            {parrafos.map((parrafo) => (
                                <p key={parrafo}>{parrafo}</p>
                            ))}
                        </div>

                        {proximamente ? (
                            <p className="mt-8 inline-block rounded-md border border-dashed border-[#d9ad63]/60 px-6 py-3 font-medium text-[#edc577]">
                                Próximamente
                            </p>
                        ) : (
                            historia.enlace && (
                                <a
                                    href={historia.enlace}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#d9ad63] px-6 py-3 font-medium text-[#100b07] shadow-lg shadow-black/30 transition-colors hover:bg-[#edc577] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#edc577] focus-visible:ring-offset-2 focus-visible:ring-offset-[#100b07]"
                                >
                                    Leer la historia
                                    <span aria-hidden="true">↗</span>
                                </a>
                            )
                        )}
                    </header>

                    {reparto.length > 0 && (
                        <section className="border-t border-[#49351f] pt-8">
                            <h2 className="font-serif text-3xl font-semibold text-[#f5eee2]">Personajes</h2>
                            <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                                {reparto.map((personaje) => (
                                    <TarjetaPersonaje key={personaje.id} personaje={personaje} />
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PaginaHistoria;
