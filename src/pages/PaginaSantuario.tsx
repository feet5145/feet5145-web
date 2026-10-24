import { useEffect, useState } from "react";
import { Link } from "react-router";
import AvisoEdad from "../components/layout/AvisoEdad";
import TituloAusente from "../components/layout/TituloAusente";
import EspiralSantuario from "../components/santuario/EspiralSantuario";
import PlantaContando from "../components/santuario/PlantaContando";
import RastroHuellas from "../components/santuario/RastroHuellas";
import Susurros from "../components/santuario/Susurros";
import Umbral from "../components/santuario/Umbral";
import {
    bienvenida,
    botonDespertar,
    botonTrance,
    botonVolver,
    cuenta,
    despedida,
    despedidaPuchero,
    firmaPuchero,
    minutosQuietud,
    premioQuietud,
} from "../data/santuario";
import { usePrefiereMenosMovimiento } from "../hooks/usePrefiereMenosMovimiento";
import { useTituloPagina } from "../hooks/useTituloPagina";

type Fase = "umbral" | "bienvenida" | "trance" | "despertar";

// Segundos entre una línea de la bienvenida y la siguiente, y duración de cada paso de la cuenta.
const PAUSA_LINEA = 2.8;
const PASO_CUENTA_MS = 6000;

const claseBoton =
    "rounded-full border border-[#d9ad63]/60 px-7 py-3 font-serif text-xl italic text-[#f5eee2] transition-colors hover:border-[#edc577] hover:bg-[#d9ad63]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#edc577]";

// Bienvenida de Pedalina: las líneas aparecen una detrás de otra y, al final, el botón.
function Bienvenida({ alSeguir }: { alSeguir: () => void }) {
    return (
        <div className="flex max-w-xl flex-col items-center gap-6 text-center">
            {bienvenida.map((linea, indice) => (
                <p
                    key={linea}
                    className="font-serif text-2xl italic leading-relaxed text-[#f5eee2] [text-shadow:0_0_14px_#0b0705,0_0_4px_#0b0705] motion-safe:animate-aparecer sm:text-3xl"
                    style={{ animationDelay: `${indice * PAUSA_LINEA}s` }}
                >
                    {linea}
                </p>
            ))}
            <button
                type="button"
                onClick={alSeguir}
                className={`mt-4 motion-safe:animate-aparecer ${claseBoton}`}
                style={{ animationDelay: `${bienvenida.length * PAUSA_LINEA}s` }}
            >
                {botonTrance}
            </button>
        </div>
    );
}

// La cuenta de los deditos: introducción, un dedo cada pocos segundos y el cierre.
function Trance({ alDespertar }: { alDespertar: () => void }) {
    const [paso, setPaso] = useState(0);
    const terminado = paso > cuenta.dedos.length;

    useEffect(() => {
        if (terminado) return;
        const temporizador = window.setTimeout(() => setPaso((actual) => actual + 1), PASO_CUENTA_MS);
        return () => window.clearTimeout(temporizador);
    }, [paso, terminado]);

    const texto = paso === 0 ? cuenta.introduccion : (cuenta.dedos[paso - 1] ?? cuenta.cierre);

    return (
        <div className="flex max-w-xl flex-col items-center gap-8 text-center">
            <div className="relative grid place-items-center">
                {/* Un halo que crece y mengua, al ritmo de la respiración */}
                <div className="absolute size-40 rounded-full bg-[#edc577]/20 blur-2xl motion-safe:animate-latir sm:size-52" />
                <PlantaContando encendidos={Math.min(paso, cuenta.dedos.length)} className="relative h-40 sm:h-52" />
            </div>

            <p
                key={paso}
                aria-live="polite"
                className="min-h-[6rem] font-serif text-2xl italic leading-relaxed text-[#f5eee2] [text-shadow:0_0_14px_#0b0705,0_0_4px_#0b0705] motion-safe:animate-aparecer sm:text-3xl"
            >
                {texto}
            </p>

            {terminado && (
                <button
                    type="button"
                    onClick={alDespertar}
                    className={`motion-safe:animate-aparecer ${claseBoton}`}
                    style={{ animationDelay: "2s" }}
                >
                    {botonDespertar}
                </button>
            )}
        </div>
    );
}

// Tras el chasquido: un destello y la despedida de Pedalina.
// Si el visitante se ha escapado con Esc, en su lugar hace un puchero.
function Despertar({ escapado }: { escapado: boolean }) {
    const lineas = escapado ? despedidaPuchero : despedida;
    return (
        <div className="flex max-w-xl flex-col items-center gap-6 text-center">
            {lineas.map((linea, indice) => (
                <p
                    key={linea}
                    className="font-serif text-2xl italic leading-relaxed text-[#f5eee2] [text-shadow:0_0_14px_#0b0705,0_0_4px_#0b0705] motion-safe:animate-aparecer sm:text-3xl"
                    style={{ animationDelay: `${0.8 + indice * 2}s` }}
                >
                    {linea}
                </p>
            ))}
            <p
                className="text-sm font-medium uppercase tracking-[0.2em] text-[#d9ad63] motion-safe:animate-aparecer"
                style={{ animationDelay: `${0.8 + lineas.length * 2}s` }}
            >
                {escapado ? firmaPuchero : "— Pedalina"}
            </p>
            <Link
                to="/"
                className={`mt-4 motion-safe:animate-aparecer ${claseBoton}`}
                style={{ animationDelay: `${1.6 + lineas.length * 2}s` }}
            >
                {botonVolver}
            </Link>
        </div>
    );
}

// Página secreta: se llega manteniendo pulsada la huella de la portada.
// No tiene cabecera ni pie, solo la oscuridad, la espiral y la voz de Pedalina.
function PaginaSantuario() {
    useTituloPagina("Shhh… estás en el santuario");
    const menosMovimiento = usePrefiereMenosMovimiento();
    const [fase, setFase] = useState<Fase>("umbral");
    const [quieto, setQuieto] = useState(false);
    const [escapado, setEscapado] = useState(false);

    // Escape despierta a cualquiera, esté donde esté… aunque a Pedalina no le hace gracia.
    useEffect(() => {
        if (fase === "despertar") return;
        function alPulsarTecla(evento: KeyboardEvent) {
            if (evento.key !== "Escape") return;
            setEscapado(true);
            setFase("despertar");
        }
        window.addEventListener("keydown", alPulsarTecla);
        return () => window.removeEventListener("keydown", alPulsarTecla);
    }, [fase]);

    // El secreto del secreto: un mensaje para quien se queda un buen rato sin tocar nada.
    useEffect(() => {
        if (fase === "umbral" || fase === "despertar") return;
        let temporizador = 0;
        function reiniciar() {
            window.clearTimeout(temporizador);
            setQuieto(false);
            temporizador = window.setTimeout(() => setQuieto(true), minutosQuietud * 60_000);
        }
        reiniciar();
        const eventos = ["pointermove", "pointerdown", "keydown"] as const;
        eventos.forEach((nombre) => window.addEventListener(nombre, reiniciar));
        return () => {
            window.clearTimeout(temporizador);
            eventos.forEach((nombre) => window.removeEventListener(nombre, reiniciar));
        };
    }, [fase]);

    const conEspiral = fase === "bienvenida" || fase === "trance";

    return (
        <div className="relative isolate flex min-h-dvh items-center justify-center overflow-hidden bg-[#0b0705] px-5 py-16">
            <AvisoEdad />
            <TituloAusente />

            {/* Fondo: un resplandor cálido y, detrás del texto, la espiral */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,#2a1a10_0%,#0b0705_70%)]" />
            {conEspiral && (
                <EspiralSantuario
                    className={`absolute left-1/2 top-1/2 -z-10 w-[min(110vmin,820px)] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-[3000ms] ${
                        fase === "trance" ? "opacity-40" : "opacity-25"
                    }`}
                />
            )}

            {conEspiral && <Susurros />}
            {!menosMovimiento && <RastroHuellas />}

            <div className="relative z-20">
                {fase === "umbral" && <Umbral alEntrar={() => setFase("bienvenida")} />}
                {fase === "bienvenida" && <Bienvenida alSeguir={() => setFase("trance")} />}
                {fase === "trance" && <Trance alDespertar={() => setFase("despertar")} />}
                {fase === "despertar" && <Despertar escapado={escapado} />}
            </div>

            {quieto && conEspiral && (
                <p className="absolute inset-x-5 bottom-8 z-20 text-center font-serif text-lg italic text-[#edc577] motion-safe:animate-aparecer sm:text-xl">
                    {premioQuietud}
                </p>
            )}

            {/* El chasquido: un destello dorado que se apaga (quien se escapa no se lo gana) */}
            {fase === "despertar" && !escapado && (
                <div className="pointer-events-none absolute inset-0 z-30 bg-[#f5eee2] opacity-0 motion-safe:animate-destello" />
            )}
        </div>
    );
}

export default PaginaSantuario;
