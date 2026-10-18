import { buscarHistoria } from "../../data/historias";

type Props = {
    // Ids de historias (ver data/historias.ts).
    ids: string[];
    // true para que cada historia publicada enlace a Inkitt. No usar dentro de otro enlace.
    enlazar?: boolean;
};

const claseChip = "rounded-full border px-3 py-1 text-xs";

function ListaApariciones({ ids, enlazar = false }: Props) {
    const apariciones = ids.map((id) => buscarHistoria(id)).filter((historia) => historia !== undefined);

    if (apariciones.length === 0) return null;

    return (
        <ul className="flex flex-wrap gap-2">
            {apariciones.map((historia) => (
                <li key={historia.id}>
                    {historia.publicada === false ? (
                        <span className={`${claseChip} inline-block border-dashed border-[#49351f] text-[#eee7dc]/60`}>
                            {historia.titulo}
                            <span className="ml-1 italic text-[#d9ad63]/80">· próximamente</span>
                        </span>
                    ) : enlazar && historia.enlace ? (
                        <a
                            href={historia.enlace}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${claseChip} inline-block border-[#49351f] text-[#eee7dc] transition-colors hover:border-[#d9ad63] hover:text-[#edc577]`}
                        >
                            {historia.titulo} <span aria-hidden="true">↗</span>
                        </a>
                    ) : (
                        <span className={`${claseChip} inline-block border-[#49351f] text-[#eee7dc]`}>{historia.titulo}</span>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default ListaApariciones;
