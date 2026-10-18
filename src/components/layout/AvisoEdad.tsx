import { useEffect, useState } from "react";

const CLAVE_GUARDADO = "feet5145-mayor-de-edad";
// A dónde se envía a quien indica que es menor de edad.
const URL_SALIDA = "https://www.google.com";

function yaConfirmado() {
    try {
        return localStorage.getItem(CLAVE_GUARDADO) === "si";
    } catch {
        // Navegación privada o almacenamiento bloqueado: se vuelve a preguntar.
        return false;
    }
}

function AvisoEdad() {
    const [visible, setVisible] = useState(() => !yaConfirmado());

    // Bloquea el desplazamiento de la página mientras el aviso está abierto.
    useEffect(() => {
        if (!visible) return;
        const anterior = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = anterior;
        };
    }, [visible]);

    function confirmar() {
        try {
            localStorage.setItem(CLAVE_GUARDADO, "si");
        } catch {
            // Si no se puede guardar, se cierra igualmente para esta visita.
        }
        setVisible(false);
    }

    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#100b07]/90 px-5 backdrop-blur-md">
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="aviso-edad-titulo"
                aria-describedby="aviso-edad-texto"
                className="w-full max-w-md rounded-2xl border border-[#d9ad63]/50 bg-[#17100b] p-8 text-center shadow-2xl shadow-black/60"
            >
                <p className="font-serif text-5xl font-semibold text-[#d9ad63]">+18</p>
                <h2 id="aviso-edad-titulo" className="mt-4 font-serif text-3xl font-semibold text-[#f5eee2]">
                    Antes de entrar
                </h2>
                <p id="aviso-edad-texto" className="mt-3 text-sm leading-relaxed text-[#eee7dc]/85">
                    Esta web contiene historias de ficción para mayores de 18 años. Todos los personajes son
                    adultos. ¿Confirmas que eres mayor de edad?
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <button
                        type="button"
                        onClick={confirmar}
                        autoFocus
                        className="rounded-md bg-[#d9ad63] px-6 py-3 font-medium text-[#100b07] transition-colors hover:bg-[#edc577] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#edc577] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17100b]"
                    >
                        Sí, soy mayor de 18
                    </button>
                    <a
                        href={URL_SALIDA}
                        className="rounded-md border border-[#49351f] px-6 py-3 text-[#eee7dc] transition-colors hover:border-[#d9ad63] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#edc577]"
                    >
                        No, salir
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AvisoEdad;
