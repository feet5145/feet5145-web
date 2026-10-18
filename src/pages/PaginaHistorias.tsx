import TarjetaHistoria from "../components/tarjetas/TarjetaHistoria";
import EncabezadoSeccion from "../components/ui/EncabezadoSeccion";
import { historias, lineas } from "../data/historias";
import { useTituloPagina } from "../hooks/useTituloPagina";

function PaginaHistorias() {
    useTituloPagina("Historias");

    return (
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-9 md:py-20">
            <EncabezadoSeccion nivel="h1" etiqueta="Historias" titulo="Todas las historias" />

            {lineas.map((linea) => {
                const historiasLinea = historias.filter((historia) => historia.linea === linea.id);
                if (historiasLinea.length === 0) return null;

                return (
                    <section key={linea.id} className="mt-14 first-of-type:mt-10">
                        <div className="flex items-center gap-4">
                            <h2 className="shrink-0 font-serif text-3xl font-semibold text-[#f5eee2]">{linea.titulo}</h2>
                            <span className="h-px flex-1 bg-gradient-to-r from-[#d9ad63]/60 to-transparent" aria-hidden="true" />
                        </div>
                        <p className="mt-2 text-sm text-[#eee7dc]/75">{linea.descripcion}</p>

                        <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                            {historiasLinea.map((historia) => (
                                <TarjetaHistoria key={historia.id} historia={historia} />
                            ))}
                        </div>
                    </section>
                );
            })}
        </div>
    );
}

export default PaginaHistorias;
