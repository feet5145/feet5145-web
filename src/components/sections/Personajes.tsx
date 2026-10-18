import { personajesDestacados } from "../../data/personajes";
import TarjetaPersonaje from "../tarjetas/TarjetaPersonaje";
import EncabezadoSeccion from "../ui/EncabezadoSeccion";
import EnlaceVerTodos from "../ui/EnlaceVerTodos";

const HUECOS_ESCAPARATE = 4;

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
            <EncabezadoSeccion etiqueta="Conoce a los personajes" titulo="Los rostros que conectan cada historia">
                <EnlaceVerTodos to="/personajes" texto="Ver todos los personajes" />
            </EncabezadoSeccion>

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
