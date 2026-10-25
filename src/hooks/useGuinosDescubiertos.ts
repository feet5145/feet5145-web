import { useSyncExternalStore } from "react";
import { EVENTO_GUINO, guinosDescubiertos } from "../utils/guinos";

function suscribir(avisar: () => void) {
    window.addEventListener(EVENTO_GUINO, avisar);
    // También si se descubren en otra pestaña de la web.
    window.addEventListener("storage", avisar);
    return () => {
        window.removeEventListener(EVENTO_GUINO, avisar);
        window.removeEventListener("storage", avisar);
    };
}

// Ids de los guiños que el visitante ya ha descubierto; se actualiza al descubrir uno.
export function useGuinosDescubiertos() {
    return useSyncExternalStore(suscribir, guinosDescubiertos);
}
