import TarjetaPersonaje from "../components/tarjetas/TarjetaPersonaje";
import EncabezadoSeccion from "../components/ui/EncabezadoSeccion";
import { personajes } from "../data/personajes";
import { useTituloPagina } from "../hooks/useTituloPagina";

function PaginaPersonajes() {
    useTituloPagina("Personajes");

    return (
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-9 md:py-20">
            <EncabezadoSeccion nivel="h1" etiqueta="Conoce a los personajes" titulo="Todos los personajes" />
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#eee7dc]/85">
                Pulsa en cualquier personaje para ver su ficha completa.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {personajes.map((personaje) => (
                    <TarjetaPersonaje key={personaje.id} personaje={personaje} />
                ))}
            </div>
        </div>
    );
}

export default PaginaPersonajes;
