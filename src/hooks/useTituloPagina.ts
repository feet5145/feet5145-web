import { useEffect } from "react";

// Cambia el título de la pestaña del navegador. Sin título, muestra solo «feet5145».
export function useTituloPagina(titulo?: string) {
    useEffect(() => {
        document.title = titulo ? `${titulo} · feet5145` : "feet5145";
    }, [titulo]);
}
