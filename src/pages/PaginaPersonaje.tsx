import type { ReactNode } from "react";
import { Link, useParams } from "react-router";
import ListaApariciones from "../components/ui/ListaApariciones";
import TextoFicha from "../components/ui/TextoFicha";
import { buscarHistoria } from "../data/historias";
import { buscarPersonaje } from "../data/personajes";
import { useTituloPagina } from "../hooks/useTituloPagina";
import PaginaNoEncontrada from "./PaginaNoEncontrada";
import { rutaPublica } from "../utils/rutaPublica";

function Apartado({ titulo, children }: { titulo: string; children: ReactNode }) {
    return (
        <section className="border-t border-[#49351f] pt-8">
            <h2 className="font-serif text-3xl font-semibold text-[#f5eee2]">{titulo}</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-[#eee7dc]/90">{children}</div>
        </section>
    );
}

function ListaRelaciones({ relaciones }: { relaciones: string[] }) {
    return (
        <ul className="list-disc space-y-3 pl-5 marker:text-[#d9ad63]">
            {relaciones.map((relacion) => (
                <li key={relacion}>
                    <TextoFicha texto={relacion} />
                </li>
            ))}
        </ul>
    );
}

function PaginaPersonaje() {
    const { id = "" } = useParams();
    const personaje = buscarPersonaje(id);
    useTituloPagina(personaje?.nombre);

    if (!personaje) return <PaginaNoEncontrada />;

    // Rol y relaciones propios de cada historia (solo algunos personajes, como Cristina).
    const porHistoria = (personaje.porHistoria ?? []).map((apartado) => ({
        ...apartado,
        titulo: buscarHistoria(apartado.historia)?.titulo ?? apartado.historia,
    }));

    return (
        <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-9 md:py-16">
            <Link
                to="/personajes"
                className="inline-flex items-center gap-2 text-sm text-[#edc577] transition-colors hover:text-[#f5eee2]"
            >
                <span aria-hidden="true">←</span>
                Todos los personajes
            </Link>

            <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-14">
                {/* FOTO */}
                <div className="lg:sticky lg:top-24 lg:self-start">
                    <div
                        className={`aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-[#d9ad63]/40 bg-[#1a120b] bg-cover bg-top shadow-2xl shadow-black/40 lg:max-w-none ${
                            // Solo la Diosa: su retrato «respira» con un halo dorado
                            personaje.id === "pedalina"
                                ? "motion-safe:animate-respirar motion-reduce:shadow-[0_0_40px_rgba(237,197,119,0.35)]"
                                : ""
                        }`}
                        style={{
                            backgroundImage: `url("${rutaPublica(personaje.foto)}"), radial-gradient(ellipse at 50% 35%, #4a321c 0%, #1a120b 70%)`,
                        }}
                        role="img"
                        aria-label={`Retrato de ${personaje.nombre}`}
                    />
                </div>

                {/* FICHA */}
                <div className="space-y-10">
                    <header>
                        <h1 className="font-serif text-5xl font-semibold leading-none text-[#f5eee2] sm:text-6xl">
                            {personaje.nombre}
                        </h1>
                        <p className="mt-2 font-serif text-2xl italic text-[#d9ad63]">{personaje.epiteto}</p>
                        <p className="mt-4 max-w-2xl leading-relaxed text-[#eee7dc]/90">{personaje.resumen}</p>

                        {personaje.historias.length > 0 && (
                            <div className="mt-6">
                                <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#d9ad63]">
                                    Aparece en
                                </p>
                                <ListaApariciones ids={personaje.historias} enlazar />
                            </div>
                        )}
                    </header>

                    {personaje.datosBasicos.length > 0 && (
                        <Apartado titulo="Datos básicos">
                            <dl className="grid gap-x-6 gap-y-4 sm:grid-cols-[180px_1fr]">
                                {personaje.datosBasicos.map((dato) => (
                                    <div key={dato.etiqueta} className="contents">
                                        <dt className="text-sm font-medium uppercase tracking-wider text-[#d9ad63]">
                                            {dato.etiqueta}
                                        </dt>
                                        <dd className="-mt-3 sm:mt-0">
                                            <TextoFicha texto={dato.valor} />
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </Apartado>
                    )}

                    {personaje.personalidad.length > 0 && (
                        <Apartado titulo="Personalidad">
                            {personaje.personalidad.map((parrafo) => (
                                <p key={parrafo}>
                                    <TextoFicha texto={parrafo} />
                                </p>
                            ))}
                        </Apartado>
                    )}

                    {personaje.rol && personaje.rol.length > 0 && (
                        <Apartado titulo="Rol en la historia">
                            {personaje.rol.map((parrafo) => (
                                <p key={parrafo}>
                                    <TextoFicha texto={parrafo} />
                                </p>
                            ))}
                        </Apartado>
                    )}

                    {porHistoria.map(
                        (apartado) =>
                            apartado.rol &&
                            apartado.rol.length > 0 && (
                                <Apartado key={`rol-${apartado.historia}`} titulo={`Rol en «${apartado.titulo}»`}>
                                    {apartado.rol.map((parrafo) => (
                                        <p key={parrafo}>
                                            <TextoFicha texto={parrafo} />
                                        </p>
                                    ))}
                                </Apartado>
                            ),
                    )}

                    {personaje.relaciones.length > 0 && (
                        <Apartado titulo="Relaciones">
                            <ListaRelaciones relaciones={personaje.relaciones} />
                        </Apartado>
                    )}

                    {porHistoria.map(
                        (apartado) =>
                            apartado.relaciones &&
                            apartado.relaciones.length > 0 && (
                                <Apartado
                                    key={`relaciones-${apartado.historia}`}
                                    titulo={`Relaciones en «${apartado.titulo}»`}
                                >
                                    <ListaRelaciones relaciones={apartado.relaciones} />
                                </Apartado>
                            ),
                    )}

                    {personaje.notas && personaje.notas.length > 0 && (
                        <Apartado titulo="Notas y evolución">
                            <ul className="list-disc space-y-2 pl-5 marker:text-[#d9ad63]">
                                {personaje.notas.map((nota) => (
                                    <li key={nota}>
                                        <TextoFicha texto={nota} />
                                    </li>
                                ))}
                            </ul>
                        </Apartado>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PaginaPersonaje;
