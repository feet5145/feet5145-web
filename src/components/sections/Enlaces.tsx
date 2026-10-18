import { useState } from "react";
import { enlaces, type Enlace, type Icono } from "../../data/enlaces";

const TRAZOS: Record<Icono, string> = {
    libro: "M12 6.5C10 5 7 4.5 3 5v13c4-.5 7 0 9 1.5m0-13c2-1.5 5-2 9-1.5v13c-4-.5-7 0-9 1.5m0-13v13",
    chat: "M4 5h16v11H9l-5 4V5Zm4 5h.01M12 10h.01M16 10h.01",
    candado: "M6 11h12v9H6v-9Zm2 0V8a4 4 0 0 1 8 0v3m-4 4v2",
};

function IconoEnlace({ icono, className = "h-6 w-6" }: { icono: Icono; className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden="true">
            <path d={TRAZOS[icono]} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

const claseBoton =
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#edc577]";
const claseBotonPrincipal = `${claseBoton} bg-[#d9ad63] text-[#100b07] hover:bg-[#edc577]`;
const claseBotonSecundario = `${claseBoton} border border-[#49351f] text-[#edc577] hover:border-[#d9ad63] hover:bg-[#332316]`;
const claseBotonInactivo = `${claseBoton} cursor-not-allowed border border-dashed border-[#49351f] text-[#eee7dc]/50`;

function BotonCopiar({ valor }: { valor: string }) {
    const [copiado, setCopiado] = useState(false);

    async function copiar() {
        try {
            await navigator.clipboard.writeText(valor);
            setCopiado(true);
            setTimeout(() => setCopiado(false), 2000);
        } catch {
            // Sin acceso al portapapeles: el ID sigue visible para copiarlo a mano.
        }
    }

    return (
        <button type="button" onClick={copiar} className={claseBotonSecundario}>
            {copiado ? "¡Copiado!" : "Copiar ID"}
        </button>
    );
}

function Accion({ enlace, principal }: { enlace: Enlace; principal: boolean }) {
    if (enlace.tipo === "id") {
        return enlace.valor ? (
            <BotonCopiar valor={enlace.valor} />
        ) : (
            <span className={claseBotonInactivo}>Próximamente</span>
        );
    }

    return enlace.url ? (
        <a
            href={enlace.url}
            target="_blank"
            rel="noopener noreferrer"
            className={principal ? claseBotonPrincipal : claseBotonSecundario}
        >
            Visitar
            <span aria-hidden="true">→</span>
        </a>
    ) : (
        <span className={claseBotonInactivo}>Próximamente</span>
    );
}

function DetallesId({ enlace }: { enlace: Enlace }) {
    if (enlace.tipo !== "id") return null;

    return (
        <div className="mt-3 space-y-2">
            {enlace.valor && (
                <code className="block break-all rounded-md border border-[#49351f] bg-[#100b07] px-3 py-2 font-mono text-xs text-[#eee7dc]">
                    {enlace.valor}
                </code>
            )}
            {enlace.ayuda && (
                <a
                    href={enlace.ayuda.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs text-[#d9ad63] underline-offset-4 hover:underline"
                >
                    {enlace.ayuda.texto}
                </a>
            )}
        </div>
    );
}

function EnlaceDestacado({ enlace }: { enlace: Enlace }) {
    return (
        <article className="relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-[#d9ad63]/60 bg-gradient-to-br from-[#332316] to-[#17100b] p-6 shadow-2xl shadow-black/40 sm:flex-row sm:items-center sm:p-8">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#d9ad63] text-[#edc577]">
                <IconoEnlace icono={enlace.icono} className="h-8 w-8" />
            </div>
            <div className="flex-1">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#d9ad63]">Recomendado</p>
                <h3 className="mt-1 font-serif text-3xl font-semibold text-[#f5eee2]">{enlace.nombre}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#eee7dc]/85">{enlace.descripcion}</p>
                <DetallesId enlace={enlace} />
            </div>
            <Accion enlace={enlace} principal />
        </article>
    );
}

function TarjetaEnlace({ enlace }: { enlace: Enlace }) {
    return (
        <article className="flex flex-col rounded-xl border border-[#49351f] bg-[#17100b] p-6 shadow-lg shadow-black/30 transition-colors hover:border-[#d9ad63]/70">
            <div className="flex items-center gap-3 text-[#d9ad63]">
                <IconoEnlace icono={enlace.icono} />
                <h3 className="font-serif text-2xl font-semibold text-[#f5eee2]">{enlace.nombre}</h3>
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[#eee7dc]/85">{enlace.descripcion}</p>
            <DetallesId enlace={enlace} />
            <div className="mt-5">
                <Accion enlace={enlace} principal={false} />
            </div>
        </article>
    );
}

function Enlaces() {
    const destacado = enlaces.find((enlace) => enlace.destacado);
    const resto = enlaces.filter((enlace) => !enlace.destacado);

    return (
        <section id="enlaces" className="mx-auto w-full max-w-7xl px-5 py-16 md:px-9 md:py-20">
            {/* ENCABEZADO */}
            <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#d9ad63]">Enlaces</p>
                <span className="mt-2 block h-px w-24 bg-[#d9ad63]" aria-hidden="true" />
                <h2 className="mt-4 font-serif text-3xl font-semibold text-[#f5eee2] sm:text-4xl">
                    Dónde encontrarme
                </h2>
            </div>

            <div className="mt-10 space-y-6">
                {destacado && <EnlaceDestacado enlace={destacado} />}

                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {resto.map((enlace) => (
                        <TarjetaEnlace key={enlace.nombre} enlace={enlace} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Enlaces;
