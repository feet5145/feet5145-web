import { historiasDestacadas, type Historia } from "../../data/historias";

// Destino del enlace "Ver todas las historias" (por ejemplo, tu perfil de Wattpad).
const ENLACE_TODAS_LAS_HISTORIAS = "#enlaces";

function IconoPluma({ className = "h-4 w-4" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden="true">
            <path d="M20 4C12 4 6 9 5 19m15-15c0 7-5 12-12 12m12-12-9 9" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 20l1-1" strokeLinecap="round" />
        </svg>
    );
}

function TarjetaHistoria({ historia }: { historia: Historia }) {
    const contenido = (
        <>
            {/* PORTADA: degradado de respaldo + imagen (si existe) */}
            <div
                className="aspect-[16/10] w-full border-b border-[#49351f] bg-[#1a120b] bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
                style={{
                    backgroundImage: `url("${historia.portada}"), radial-gradient(ellipse at 50% 40%, #4a321c 0%, #1a120b 70%)`,
                }}
                role="img"
                aria-label={`Portada de ${historia.titulo}`}
            />

            <div className="relative flex flex-1 flex-col bg-[#17100b] p-5">
                <h3 className="font-serif text-2xl font-semibold leading-tight text-[#f5eee2]">
                    {historia.titulo}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#eee7dc]/85">
                    {historia.descripcion}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[#d9ad63]">
                    <IconoPluma />
                    {historia.etiquetas.map((etiqueta, index) => (
                        <span key={etiqueta} className="flex items-center gap-2">
                            {index > 0 && <span aria-hidden="true">•</span>}
                            {etiqueta}
                        </span>
                    ))}
                </div>
            </div>
        </>
    );

    const clases =
        "group flex flex-col overflow-hidden rounded-xl border border-[#49351f] shadow-lg shadow-black/30 transition-colors hover:border-[#d9ad63]/70";

    return historia.enlace ? (
        <a
            href={historia.enlace}
            target="_blank"
            rel="noopener noreferrer"
            className={`${clases} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#edc577]`}
        >
            {contenido}
        </a>
    ) : (
        <article className={clases}>{contenido}</article>
    );
}

function Historias() {
    return (
        <section id="historias" className="mx-auto w-full max-w-7xl px-5 py-16 md:px-9 md:py-20">
            {/* ENCABEZADO */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#d9ad63]">
                        Historias para descansar
                    </p>
                    <span className="mt-2 block h-px w-24 bg-[#d9ad63]" aria-hidden="true" />
                    <h2 className="mt-4 font-serif text-3xl font-semibold text-[#f5eee2] sm:text-4xl">
                        Historias acogedoras con toques que invitan a soñar
                    </h2>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:gap-10">
                    <div className="flex max-w-sm items-start gap-3 text-sm leading-relaxed text-[#eee7dc]/85">
                        <IconoPluma className="mt-0.5 h-6 w-6 shrink-0 text-[#d9ad63]" />
                        <p>
                            Relatos tranquilos, ambientes cálidos y elementos de hipnosis suave que te guían a
                            un estado de calma profunda.
                        </p>
                    </div>
                    <a
                        href={ENLACE_TODAS_LAS_HISTORIAS}
                        className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-[#edc577] transition-colors hover:text-[#f5eee2]"
                    >
                        Ver todas las historias
                        <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>

            {/* TARJETAS */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {historiasDestacadas.map((historia) => (
                    <TarjetaHistoria key={historia.titulo} historia={historia} />
                ))}
            </div>

            {/* ADORNO FINAL */}
            <div className="mt-12 flex items-center justify-center gap-3 text-[#d9ad63]" aria-hidden="true">
                <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#d9ad63]/70" />
                <span>♥</span>
                <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#d9ad63]/70" />
            </div>
        </section>
    );
}

export default Historias;
