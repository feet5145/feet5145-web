import type { Historia } from "../../data/historias";
import IconoPluma from "../ui/IconoPluma";
import { rutaPublica } from "../../utils/rutaPublica";

function TarjetaHistoria({ historia }: { historia: Historia }) {
    const proximamente = historia.publicada === false;

    const contenido = (
        <>
            {/* PORTADA: degradado de respaldo + imagen (si existe) */}
            <div className="relative overflow-hidden border-b border-[#49351f]">
                <div
                    className="aspect-[2/3] w-full bg-[#1a120b] bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
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

            <div className="relative flex flex-1 flex-col bg-[#17100b] p-5">
                <h3 className="font-serif text-2xl font-semibold leading-tight text-[#f5eee2]">
                    {historia.titulo}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#eee7dc]/85">
                    {historia.descripcion}
                </p>
                {historia.etiquetas.length > 0 && (
                    <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[#d9ad63]">
                        <IconoPluma />
                        {historia.etiquetas.map((etiqueta, index) => (
                            <span key={etiqueta} className="flex items-center gap-2">
                                {index > 0 && <span aria-hidden="true">•</span>}
                                {etiqueta}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </>
    );

    const clases =
        "group flex flex-col overflow-hidden rounded-xl border border-[#49351f] shadow-lg shadow-black/30 transition-colors hover:border-[#d9ad63]/70";

    return historia.enlace && !proximamente ? (
        <a
            href={historia.enlace}
            target="_blank"
            rel="noopener noreferrer"
            className={`${clases} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#edc577]`}
        >
            {contenido}
        </a>
    ) : (
        <article className={`${clases} ${proximamente ? "opacity-80" : ""}`}>{contenido}</article>
    );
}

export default TarjetaHistoria;
