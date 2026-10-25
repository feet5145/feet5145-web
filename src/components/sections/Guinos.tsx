import { guinos } from "../../data/guinos";
import { useGuinosDescubiertos } from "../../hooks/useGuinosDescubiertos";
import { olvidarGuinos } from "../../utils/guinos";
import EncabezadoSeccion from "../ui/EncabezadoSeccion";

// Lista de los detalles escondidos de la web: los descubiertos se cuentan,
// los demás solo dejan ver su pista.
function Guinos() {
    const descubiertos = useGuinosDescubiertos();
    const total = guinos.length;
    const cuantos = guinos.filter((guino) => descubiertos.includes(guino.id)).length;

    function olvidar() {
        if (window.confirm("¿Olvidar todos tus guiños descubiertos y empezar de cero?")) olvidarGuinos();
    }

    return (
        <section id="guinos" className="mx-auto w-full max-w-7xl px-5 py-16 md:px-9 md:py-20">
            <EncabezadoSeccion etiqueta="Guiños" titulo="Guiños descubiertos">
                <p className="font-serif text-2xl text-[#eee7dc]">
                    <span className="text-[#edc577]">{cuantos}</span> de {total}
                </p>
            </EncabezadoSeccion>

            <p className="mt-6 max-w-2xl text-[#eee7dc]/80">
                Esta web esconde pequeños secretos. Ve descubriéndolos a tu ritmo: se guardan solo en tu navegador.
            </p>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {guinos.map((guino) => {
                    const descubierto = descubiertos.includes(guino.id);
                    return (
                        <li
                            key={guino.id}
                            className={`rounded-xl border p-5 transition-colors ${
                                descubierto
                                    ? "border-[#d9ad63]/60 bg-[#17100b]"
                                    : "border-dashed border-[#49351f] bg-[#100b07]"
                            }`}
                        >
                            <p
                                className={`font-serif text-xl ${
                                    descubierto ? "text-[#edc577]" : "tracking-[0.3em] text-[#eee7dc]/40"
                                }`}
                            >
                                {descubierto ? `👣 ${guino.titulo}` : "???"}
                            </p>
                            <p className={`mt-2 text-sm ${descubierto ? "text-[#eee7dc]/85" : "italic text-[#eee7dc]/55"}`}>
                                {descubierto ? guino.descripcion : guino.pista}
                            </p>
                        </li>
                    );
                })}
            </ul>

            {cuantos > 0 && (
                <button
                    type="button"
                    onClick={olvidar}
                    className="mt-8 text-sm text-[#eee7dc]/50 underline-offset-4 transition-colors hover:text-[#edc577] hover:underline"
                >
                    Olvidar mis guiños
                </button>
            )}
        </section>
    );
}

export default Guinos;
