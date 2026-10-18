import { Link } from "react-router";
import { buscarPersonaje, buscarPersonajePorNombre } from "../../data/personajes";

// Texto de las fichas con el mismo formato que Obsidian:
//   **negrita**, _cursiva_ y [[Nombre]] o [[id|Texto visible]].
// Un [[...]] enlaza a la ficha del personaje si existe (primero por id, después por nombre); si no, se muestra
// como texto normal. Con dos personajes del mismo nombre (las dos Lucías), usar la forma [[id|Nombre]].
const PATRON = /(\*\*.+?\*\*|_[^_]+_|\[\[[^\]]+\]\])/g;

function TextoFicha({ texto }: { texto: string }) {
    return (
        <>
            {texto.split(PATRON).map((trozo, index) => {
                if (trozo.startsWith("**") && trozo.endsWith("**") && trozo.length > 4) {
                    return (
                        <strong key={index} className="font-semibold text-[#f5eee2]">
                            <TextoFicha texto={trozo.slice(2, -2)} />
                        </strong>
                    );
                }

                if (trozo.startsWith("_") && trozo.endsWith("_") && trozo.length > 2) {
                    return <em key={index}>{trozo.slice(1, -1)}</em>;
                }

                if (trozo.startsWith("[[") && trozo.endsWith("]]")) {
                    const [destino, visible] = trozo.slice(2, -2).split("|");
                    const personaje = buscarPersonaje(destino) ?? buscarPersonajePorNombre(destino);
                    const textoVisible = visible ?? destino;

                    return personaje ? (
                        <Link
                            key={index}
                            to={`/personajes/${personaje.id}`}
                            className="text-[#edc577] underline-offset-4 hover:underline"
                        >
                            {textoVisible}
                        </Link>
                    ) : (
                        <span key={index}>{textoVisible}</span>
                    );
                }

                return trozo;
            })}
        </>
    );
}

export default TextoFicha;
