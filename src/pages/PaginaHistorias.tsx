import { useState } from "react";
import TarjetaHistoria from "../components/tarjetas/TarjetaHistoria";
import EncabezadoSeccion from "../components/ui/EncabezadoSeccion";
import { historias } from "../data/historias";
import { useTituloPagina } from "../hooks/useTituloPagina";

// Imagen de las líneas temporales (exportada desde Obsidian Canvas): colócala en public/.
const IMAGEN_LINEAS_TEMPORALES = "/lineas-temporales.png";

// Primero las publicadas y después las que están por llegar, respetando el orden del archivo de datos.
const historiasOrdenadas = [
    ...historias.filter((historia) => historia.publicada !== false),
    ...historias.filter((historia) => historia.publicada === false),
];

function LineasTemporales() {
    const [sinImagen, setSinImagen] = useState(false);

    return (
        <section className="mt-20">
            <EncabezadoSeccion etiqueta="Líneas temporales" titulo="Cómo se conectan las historias" />
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#eee7dc]/85">
                Muchas historias comparten mundo y personajes. Este mapa muestra en qué orden ocurren y cómo se
                relacionan entre sí.
            </p>

            <figure className="mt-8 overflow-hidden rounded-xl border border-[#49351f] bg-[#17100b]">
                {sinImagen ? (
                    <div className="flex aspect-[16/9] flex-col items-center justify-center gap-2 text-[#d9ad63]/70">
                        <span className="font-serif text-3xl">Próximamente</span>
                        <span className="text-sm">El mapa de líneas temporales está en preparación.</span>
                    </div>
                ) : (
                    <a href={IMAGEN_LINEAS_TEMPORALES} target="_blank" rel="noopener noreferrer">
                        <img
                            src={IMAGEN_LINEAS_TEMPORALES}
                            alt="Mapa de las líneas temporales de las historias"
                            onError={() => setSinImagen(true)}
                            className="w-full"
                        />
                    </a>
                )}
                {!sinImagen && (
                    <figcaption className="border-t border-[#49351f] px-5 py-3 text-xs text-[#eee7dc]/60">
                        Pulsa la imagen para verla a tamaño completo.
                    </figcaption>
                )}
            </figure>
        </section>
    );
}

function PaginaHistorias() {
    useTituloPagina("Historias");

    return (
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-9 md:py-20">
            <EncabezadoSeccion nivel="h1" etiqueta="Historias" titulo="Todas las historias" />

            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {historiasOrdenadas.map((historia) => (
                    <TarjetaHistoria key={historia.id} historia={historia} />
                ))}
            </div>

            <LineasTemporales />
        </div>
    );
}

export default PaginaHistorias;
