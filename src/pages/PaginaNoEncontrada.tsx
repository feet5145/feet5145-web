import { useEffect } from "react";
import { Link } from "react-router";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { descubrirGuino } from "../utils/guinos";
import { rutaPublica } from "../utils/rutaPublica";

// Pedalina, descalza, sentada en un pasillo vacío. Mientras la imagen no exista, se ve solo el degradado.
const FONDO_404 = "/fondos/404.webp";

// Lo que Pedalina le dice a quien se ha perdido. Cada elemento es un párrafo.
const DISCURSO_PEDALINA = [
    "Shhh… No pasa nada. Mira mis pies… así. Respira hondo.",
    "Te has equivocado de camino, ¿y qué? No tiene ninguna importancia. Deja que ese pequeño error se disuelva con cada respiración… Ya no pesa. Ya no está.",
    "Solo queda la calma… y una sensación cálida que te sube despacio desde los pies.",
    "Muy bien… Cuando quieras, pulsa el botón y vuelve conmigo al inicio. Te estaré esperando.",
];

const fondo = `url("${rutaPublica(FONDO_404)}"), radial-gradient(ellipse at 40% 50%, #4a321c 0%, #1a120b 55%, #100b07 100%)`;

function PaginaNoEncontrada() {
    useTituloPagina("Página no encontrada");
    // Guiño: haberse perdido
    useEffect(() => descubrirGuino("desvio"), []);

    return (
        <section className="relative isolate overflow-hidden">
            {/* Resplandor cálido de fondo */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_30%_50%,#2a1a10_0%,#100b07_65%)]" />

            <div className="mx-auto grid min-h-[70vh] w-full max-w-7xl items-center gap-10 px-5 py-16 md:px-9 lg:grid-cols-2 lg:gap-14">
                {/* IMAGEN entera (encima del texto en móvil, a su izquierda en pantallas grandes),
                    para que se vean sus pies */}
                <div
                    className="aspect-[3/2] w-full rounded-2xl border border-[#d9ad63]/40 bg-[#1a120b] bg-cover bg-center shadow-2xl shadow-black/40"
                    style={{ backgroundImage: fondo }}
                    role="img"
                    aria-label="Pedalina, descalza, sentada en un pasillo bañado de sol"
                />

                <div className="flex flex-col items-center text-center">
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
            </div>
        </section>
    );
}

export default PaginaNoEncontrada;
