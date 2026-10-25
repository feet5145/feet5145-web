import { useEffect } from "react";
import { descubrirGuino } from "../../utils/guinos";

const TITULO_AUSENTE = "Vuelve... Pedalina quiere mimarte";

// Detalle escondido: cuando el visitante se va a otra pestaña, el título le pide que vuelva.
function TituloAusente() {
    useEffect(() => {
        let tituloOriginal = document.title;

        function alCambiarVisibilidad() {
            if (document.hidden) {
                tituloOriginal = document.title;
                document.title = TITULO_AUSENTE;
            } else if (document.title === TITULO_AUSENTE) {
                document.title = tituloOriginal;
                // Guiño: volver cuando Pedalina te llamaba
                descubrirGuino("ausencia");
            }
        }

        document.addEventListener("visibilitychange", alCambiarVisibilidad);
        return () => document.removeEventListener("visibilitychange", alCambiarVisibilidad);
    }, []);

    return null;
}

export default TituloAusente;
