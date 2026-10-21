import { Link } from "react-router";
import { useTituloPagina } from "../hooks/useTituloPagina";

// Lo que Pedalina le dice a quien se ha perdido. Cada elemento es un párrafo.
const DISCURSO_PEDALINA = [
    "Shhh… No pasa nada. Mira mis pies… así. Respira hondo.",
    "Te has equivocado de camino, ¿y qué? No tiene ninguna importancia. Deja que ese pequeño error se disuelva con cada respiración… Ya no pesa. Ya no está.",
    "Solo queda la calma… y una sensación cálida que te sube despacio desde los pies.",
    "Muy bien… Cuando quieras, pulsa el botón y vuelve conmigo al inicio. Te estaré esperando.",
];

function PaginaNoEncontrada() {
    useTituloPagina("Página no encontrada");

    return (
        <div className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center px-5 py-16 text-center">
            <p className="font-serif text-7xl font-semibold text-[#d9ad63]">404</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold text-[#f5eee2]">Este rincón no existe</h1>

            <figure className="mt-8 max-w-xl">
                <blockquote className="space-y-3 font-serif text-xl italic leading-relaxed text-[#eee7dc]/90">
                    {DISCURSO_PEDALINA.map((parrafo) => (
                        <p key={parrafo}>{parrafo}</p>
                    ))}
                </blockquote>
                <figcaption className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-[#d9ad63]">
                    — Pedalina
                </figcaption>
            </figure>

            <p className="mt-8 text-sm text-[#eee7dc]/60">
                El enlace puede estar mal escrito, o la página se ha movido.
            </p>
            <Link
                to="/"
                className="mt-4 rounded-md bg-[#d9ad63] px-6 py-3 font-medium text-[#100b07] transition-colors hover:bg-[#edc577]"
            >
                Volver al inicio
            </Link>
        </div>
    );
}

export default PaginaNoEncontrada;
