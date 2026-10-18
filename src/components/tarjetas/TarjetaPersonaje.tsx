import { Link } from "react-router";
import type { Personaje } from "../../data/personajes";
import ListaApariciones from "../ui/ListaApariciones";

function TarjetaPersonaje({ personaje }: { personaje: Personaje }) {
    return (
        <Link
            to={`/personajes/${personaje.id}`}
            className="group flex flex-col overflow-hidden rounded-xl border border-[#49351f] bg-[#17100b] shadow-lg shadow-black/30 transition-colors hover:border-[#d9ad63]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#edc577]"
        >
            {/* FOTO: degradado de respaldo + imagen (si existe) */}
            <div className="overflow-hidden border-b border-[#49351f]">
                <div
                    className="aspect-[3/4] w-full bg-[#1a120b] bg-cover bg-top transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{
                        backgroundImage: `url("${personaje.foto}"), radial-gradient(ellipse at 50% 35%, #4a321c 0%, #1a120b 70%)`,
                    }}
                    role="img"
                    aria-label={`Retrato de ${personaje.nombre}`}
                />
            </div>

            <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-3xl font-semibold leading-none text-[#f5eee2]">{personaje.nombre}</h3>
                <p className="mt-1 font-serif text-lg italic text-[#d9ad63]">{personaje.epiteto}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#eee7dc]/85">{personaje.resumen}</p>

                {personaje.historias.length > 0 && (
                    <div className="mt-4 border-t border-[#49351f] pt-4">
                        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#d9ad63]">Aparece en</p>
                        <ListaApariciones ids={personaje.historias} />
                    </div>
                )}

                <span className="mt-4 text-sm text-[#edc577] transition-colors group-hover:text-[#f5eee2]">
                    Ver ficha completa <span aria-hidden="true">→</span>
                </span>
            </div>
        </Link>
    );
}

export default TarjetaPersonaje;
