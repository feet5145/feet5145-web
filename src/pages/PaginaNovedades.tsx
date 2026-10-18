import EncabezadoSeccion from "../components/ui/EncabezadoSeccion";
import { formatearFecha, novedadesOrdenadas } from "../data/novedades";
import { useTituloPagina } from "../hooks/useTituloPagina";

function PaginaNovedades() {
    useTituloPagina("Novedades");

    return (
        <div className="mx-auto w-full max-w-4xl px-5 py-16 md:px-9 md:py-20">
            <EncabezadoSeccion nivel="h1" etiqueta="Novedades" titulo="Todas las novedades" />

            {novedadesOrdenadas.length > 0 ? (
                <ol className="mt-12 space-y-10 border-l border-[#49351f] pl-8">
                    {novedadesOrdenadas.map((novedad) => (
                        <li key={`${novedad.fecha}-${novedad.titulo}`} className="relative">
                            <span
                                className="absolute -left-[37px] top-1 h-3 w-3 rotate-45 border border-[#d9ad63] bg-[#100b07]"
                                aria-hidden="true"
                            />
                            <time
                                dateTime={novedad.fecha}
                                className="text-xs font-medium uppercase tracking-[0.2em] text-[#d9ad63]"
                            >
                                {formatearFecha(novedad.fecha)}
                            </time>
                            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#f5eee2]">
                                {novedad.titulo}
                            </h2>
                            <p className="mt-3 leading-relaxed text-[#eee7dc]/85">{novedad.texto}</p>
                        </li>
                    ))}
                </ol>
            ) : (
                <p className="mt-10 text-[#eee7dc]/70">Todavía no hay novedades. ¡Vuelve pronto!</p>
            )}
        </div>
    );
}

export default PaginaNovedades;
