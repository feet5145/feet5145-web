import { historiasDestacadas } from "../../data/historias";
import TarjetaHistoria from "../tarjetas/TarjetaHistoria";
import EncabezadoSeccion from "../ui/EncabezadoSeccion";
import EnlaceVerTodos from "../ui/EnlaceVerTodos";

function Historias() {
    return (
        <section id="historias" className="mx-auto w-full max-w-7xl px-5 py-16 md:px-9 md:py-20">
            <EncabezadoSeccion
                etiqueta="Historias para disfrutar"
                titulo="Historias acogedoras con tintes sensuales e hipnóticos"
            >
                <EnlaceVerTodos to="/historias" texto="Ver todas las historias" />
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
