import { useEffect } from "react";
import { useLocation } from "react-router";

// Al navegar: si la dirección lleva una sección (/#historias), baja hasta ella;
// si no, sube al principio de la página nueva.
function GestorDesplazamiento() {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        if (hash) {
            const seccion = document.getElementById(decodeURIComponent(hash.slice(1)));
            if (seccion) {
                seccion.scrollIntoView();
                return;
            }
        }
        window.scrollTo({ top: 0, behavior: "instant" });
        // `key` cambia en cada navegación, aunque se repita el mismo enlace.
    }, [pathname, hash, key]);

    return null;
}

export default GestorDesplazamiento;
