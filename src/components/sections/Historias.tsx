import { historiasDestacadas } from "../../data/historias";
import TarjetaHistoria from "../tarjetas/TarjetaHistoria";
import EncabezadoSeccion from "../ui/EncabezadoSeccion";
import EnlaceVerTodos from "../ui/EnlaceVerTodos";
import IconoPluma from "../ui/IconoPluma";

function Historias() {
    return (
        <section id="historias" className="mx-auto w-full max-w-7xl px-5 py-16 md:px-9 md:py-20">
            <EncabezadoSeccion
                etiqueta="Historias para descansar"
                titulo="Historias acogedoras con toques que invitan a soñar"
            >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:gap-10">
                    <div className="flex max-w-sm items-start gap-3 text-sm leading-relaxed text-[#eee7dc]/85">
                        <IconoPluma className="mt-0.5 h-6 w-6 shrink-0 text-[#d9ad63]" />
                        <p>
                            Relatos tranquilos, ambientes cálidos y elementos de hipnosis suave que te guían a
                            un estado de calma profunda.
                        </p>
                    </div>
                    <EnlaceVerTodos to="/historias" texto="Ver todas las historias" />
                </div>
            </EncabezadoSeccion>

            {/* TARJETAS */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {historiasDestacadas.map((historia) => (
                    <TarjetaHistoria key={historia.id} historia={historia} />
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
