import { Link } from "react-router";
import { buscarHistoria } from "../../data/historias";

type Props = {
    // Ids de historias (ver data/historias.ts).
    ids: string[];
    // true para que cada historia enlace a su página. No usar dentro de otro enlace.
    enlazar?: boolean;
};

const claseChip = "inline-block rounded-full border px-3 py-1 text-xs";

function ListaApariciones({ ids, enlazar = false }: Props) {
    const apariciones = ids.map((id) => buscarHistoria(id)).filter((historia) => historia !== undefined);

    if (apariciones.length === 0) return null;

    return (
        <ul className="flex flex-wrap gap-2">
            {apariciones.map((historia) => {
                const proximamente = historia.publicada === false;
                const texto = (
                    <>
                        {historia.titulo}
                        {proximamente && <span className="ml-1 italic text-[#d9ad63]/80">· próximamente</span>}
                    </>
                );
                const estilo = proximamente
                    ? "border-dashed border-[#49351f] text-[#eee7dc]/60"
                    : "border-[#49351f] text-[#eee7dc]";

                return (
                    <li key={historia.id}>
                        {enlazar ? (
                            <Link
                                to={`/historias/${historia.id}`}
                                className={`${claseChip} ${estilo} transition-colors hover:border-[#d9ad63] hover:text-[#edc577]`}
                            >
                                {texto}
                            </Link>
                        ) : (
                            <span className={`${claseChip} ${estilo}`}>{texto}</span>
                        )}
                    </li>
                );
            })}
        </ul>
    );
}

export default ListaApariciones;
