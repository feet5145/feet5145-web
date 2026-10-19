

import { Link, useLocation } from "react-router";
import { navLinks } from "../../data/navegacion";
import { rutaPublica } from "../../utils/rutaPublica";

function Header() {
    const { pathname, hash } = useLocation();

    // En la página principal se marca la sección del enlace pulsado; en las demás, la de su página.
    function estaActivo(link: (typeof navLinks)[number]) {
        if (pathname === "/") return link.href === `/${hash || "#inicio"}`;
        return link.pagina !== undefined && pathname.startsWith(link.pagina);
    }

    return (<header className="sticky top-0 z-50 w-full border-b border-[#49351f] bg-[#100b07]/95 text-[#f5eee2] backdrop-blur-md"> <nav
        aria-label="Navegación principal"
        className="relative mx-auto flex min-h-[68px] w-full items-center justify-between px-5 py-3 md:px-9"
    > {/* IZQUIERDA: FOTO DE PERFIL */} <Link
        to="/"
        aria-label="Ir al inicio"
        className="z-10 shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#edc577]"
    > <img
                src={rutaPublica("/perfil.webp")}
                alt="Foto de perfil"
                className="h-15 w-15 rounded-full border border-[#d9ad63] object-cover shadow-md shadow-black/30"
            /> </Link>

        {/* CENTRO: ENLACES DE NAVEGACIÓN */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 xl:flex 2xl:gap-9">
            {navLinks.map((link) => (
                <Link
                    key={link.label}
                    to={link.href}
                    className={`relative whitespace-nowrap py-2 text-sm transition-colors duration-200 hover:text-[#edc577] ${estaActivo(link)
                            ? "text-[#edc577] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#edc577]"
                            : "text-[#eee7dc]"
                        }`}
                >
                    {link.label}
                </Link>
            ))}
        </div>

        {/* DERECHA: HUELLAS Y FRASE */}
        <div className="ml-auto flex shrink-0 items-center gap-2 text-[#edc577]">
            <span className="hidden whitespace-nowrap text-sm 2xl:inline">
                👣 Sin miedo, sin ruido, solo calma
            </span>
        </div>

        {/* MÓVIL Y TABLET: MENÚ DESPLEGABLE */}
        <div className="ml-4 xl:hidden">
            <details className="group relative">
                <summary
                    aria-label="Abrir menú de navegación"
                    className="flex h-10 w-10 cursor-pointer list-none flex-col items-center justify-center gap-1.5 rounded-md border border-[#49351f] transition-colors hover:border-[#d9ad63] [&::-webkit-details-marker]:hidden"
                >
                    <span className="h-px w-5 bg-[#edc577]" />
                    <span className="h-px w-5 bg-[#edc577]" />
                    <span className="h-px w-5 bg-[#edc577]" />
                </summary>

                <div className="absolute right-0 top-12 flex w-64 flex-col rounded-lg border border-[#49351f] bg-[#17100b] p-2 shadow-xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            to={link.href}
                            onClick={(event) => {
                                event.currentTarget
                                    .closest("details")
                                    ?.removeAttribute("open");
                            }}
                            className="rounded-md px-4 py-3 text-sm transition-colors hover:bg-[#332316] hover:text-[#edc577]"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </details>
        </div>
    </nav>
    </header>


    );
}

export default Header;