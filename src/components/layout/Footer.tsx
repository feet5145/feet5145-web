import { Link } from "react-router";
import { enlaces } from "../../data/enlaces";
import { navLinks } from "../../data/navegacion";

// URL del repositorio de GitHub. Mientras esté vacía, el texto se muestra sin enlace.
const URL_REPOSITORIO = "https://github.com/feet5145/feet5145-web";
// Enlaces de data/enlaces.ts que aparecen en el pie.
const ENLACES_PIE = ["Inkitt", "Descargar historias", "Discord"];

const claseTituloColumna = "text-xs font-medium uppercase tracking-[0.2em] text-[#d9ad63]";
const claseEnlace = "text-sm text-[#eee7dc]/80 transition-colors hover:text-[#edc577]";

function Footer() {
    const enlacesPie = enlaces.filter((enlace) => ENLACES_PIE.includes(enlace.nombre));

    return (
        <footer className="border-t border-[#49351f] bg-[#0c0805] text-[#f5eee2]">
            <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 md:grid-cols-[2fr_1fr_1fr] md:px-9">
                {/* FIRMA */}
                <div>
                    <p className="font-serif text-4xl font-semibold leading-none">feet5145</p>
                    <p className="mt-3 text-sm text-[#edc577]">👣 Sin miedo, sin ruido, solo calma</p>
                </div>

                {/* NAVEGACIÓN */}
                <nav aria-label="Navegación del pie de página">
                    <p className={claseTituloColumna}>Secciones</p>
                    <ul className="mt-4 space-y-2">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <Link to={link.href} className={claseEnlace}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* DÓNDE ENCONTRARME */}
                <div>
                    <p className={claseTituloColumna}>Dónde encontrarme</p>
                    <ul className="mt-4 space-y-2">
                        {enlacesPie.map((enlace) => (
                            <li key={enlace.nombre}>
                                {enlace.tipo === "url" && enlace.url ? (
                                    <a href={enlace.url} target="_blank" rel="noopener noreferrer" className={claseEnlace}>
                                        {enlace.nombre}
                                    </a>
                                ) : enlace.tipo === "id" && enlace.valor ? (
                                    <span className="text-sm text-[#eee7dc]/80">
                                        {enlace.nombre}: <span className="text-[#edc577]">{enlace.valor}</span>
                                    </span>
                                ) : (
                                    <span className="text-sm text-[#eee7dc]/50">{enlace.nombre} (próximamente)</span>
                                )}
                            </li>
                        ))}
                        <li>
                            <Link to="/#enlaces" className={claseEnlace}>
                                Todos los enlaces →
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* FRANJA INFERIOR: AVISOS */}
            <div className="border-t border-[#49351f]">
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-6 text-xs leading-relaxed text-[#eee7dc]/60 md:flex-row md:items-end md:justify-between md:px-9">
                    <div className="max-w-2xl space-y-1">
                        <p className="text-[#edc577]/90">
                            Contenido de ficción para mayores de 18 años. Todos los personajes son adultos.
                        </p>
                        <p>Imágenes generadas con IA. Las historias son obra original del autor.</p>
                        <p>Proyecto sin ánimo de lucro: no busco ganar dinero de ninguna forma con estas historias ni con esta web.</p>
                        <p>
                            Esta web es de{" "}
                            {URL_REPOSITORIO ? (
                                <a
                                    href={URL_REPOSITORIO}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#d9ad63] underline-offset-4 hover:underline"
                                >
                                    código abierto
                                </a>
                            ) : (
                                "código abierto"
                            )}
                            .
                        </p>
                        <p>© {new Date().getFullYear()} feet5145</p>
                    </div>

                    <button
                        type="button"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="inline-flex shrink-0 items-center gap-2 self-start rounded-md border border-[#49351f] px-4 py-2 text-sm text-[#edc577] transition-colors hover:border-[#d9ad63] hover:bg-[#332316] md:self-auto"
                    >
                        Volver arriba
                        <span aria-hidden="true">↑</span>
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
