import { formatearFecha, novedadesRecientes, type Novedad } from "../../data/novedades";
import EncabezadoSeccion from "../ui/EncabezadoSeccion";
import EnlaceVerTodos from "../ui/EnlaceVerTodos";

function TarjetaNovedad({ novedad }: { novedad: Novedad }) {
    return (
        <article className="flex flex-col rounded-xl border border-[#49351f] bg-[#17100b] p-6 shadow-lg shadow-black/30 transition-colors hover:border-[#d9ad63]/70">
            <time dateTime={novedad.fecha} className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#d9ad63]">
                <span className="h-2 w-2 rotate-45 border border-[#d9ad63]" aria-hidden="true" />
                {formatearFecha(novedad.fecha)}
            </time>
            <h3 className="mt-4 font-serif text-2xl font-semibold leading-tight text-[#f5eee2]">{novedad.titulo}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#eee7dc]/85">{novedad.texto}</p>
        </article>
    );
}

function Novedades() {
    return (
        <section id="novedades" className="mx-auto w-full max-w-7xl px-5 py-16 md:px-9 md:py-20">
            <EncabezadoSeccion etiqueta="Novedades" titulo="Lo último desde el santuario de Pedalina">
                <EnlaceVerTodos to="/novedades" texto="Ver todas las novedades" />
            </EncabezadoSeccion>

            {/* TARJETAS */}
            {novedadesRecientes.length > 0 ? (
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {novedadesRecientes.map((novedad) => (
                        <TarjetaNovedad key={`${novedad.fecha}-${novedad.titulo}`} novedad={novedad} />
                    ))}
                </div>
            ) : (
                <p className="mt-10 text-[#eee7dc]/70">Todavía no hay novedades. ¡Vuelve pronto!</p>
            )}
        </section>
    );
}

export default Novedades;
