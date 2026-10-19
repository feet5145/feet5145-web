import { Link } from "react-router";
import { useTituloPagina } from "../hooks/useTituloPagina";

function PaginaNoEncontrada() {
    useTituloPagina("Página no encontrada");

    return (
        <div className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center px-5 py-16 text-center">
            <p className="font-serif text-7xl font-semibold text-[#d9ad63]">404</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold text-[#f5eee2]">Este rincón no existe</h1>
            <p className="mt-3 text-[#eee7dc]/80">
                Quizá Pedalina te ha distraído un momento con sus pies…
            </p>
            <p className="mt-1 text-sm text-[#eee7dc]/60">
                O puede que el enlace esté mal escrito o que la página se haya movido.
            </p>
            <Link
                to="/"
                className="mt-8 rounded-md bg-[#d9ad63] px-6 py-3 font-medium text-[#100b07] transition-colors hover:bg-[#edc577]"
            >
                Volver al inicio
            </Link>
        </div>
    );
}

export default PaginaNoEncontrada;
