import { useSyncExternalStore } from "react";

const CONSULTA = "(prefers-reduced-motion: reduce)";

function suscribir(avisar: () => void) {
    const consulta = window.matchMedia(CONSULTA);
    consulta.addEventListener("change", avisar);
    return () => consulta.removeEventListener("change", avisar);
}

// Indica si el visitante ha pedido a su sistema reducir las animaciones.
// Sirve para lo que no se puede resolver solo con las clases motion-safe de Tailwind.
export function usePrefiereMenosMovimiento() {
    return useSyncExternalStore(suscribir, () => window.matchMedia(CONSULTA).matches);
}
