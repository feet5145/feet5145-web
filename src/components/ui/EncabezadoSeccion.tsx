import type { ReactNode } from "react";

type Props = {
    etiqueta: string;
    titulo: string;
    // h1 en las páginas propias, h2 en las secciones de la página principal.
    nivel?: "h1" | "h2";
    // Contenido opcional a la derecha (texto, enlace «Ver todos»…).
    children?: ReactNode;
};

function EncabezadoSeccion({ etiqueta, titulo, nivel = "h2", children }: Props) {
    const Titulo = nivel;

    return (
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#d9ad63]">{etiqueta}</p>
                <span className="mt-2 block h-px w-24 bg-[#d9ad63]" aria-hidden="true" />
                <Titulo
                    className={`mt-4 font-serif font-semibold text-[#f5eee2] ${nivel === "h1" ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"}`}
                >
                    {titulo}
                </Titulo>
            </div>

            {children}
        </div>
    );
}

export default EncabezadoSeccion;
