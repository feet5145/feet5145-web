import type { GuinoId } from "../data/guinos";

// Los guiños descubiertos se guardan solo en el navegador del visitante (localStorage),
// como una lista de ids. Nunca salen de su ordenador.
const CLAVE_GUARDADO = "feet5145-guinos";
// Evento que se lanza al descubrir uno nuevo (lo escuchan la sección y el aviso).
export const EVENTO_GUINO = "feet5145-guino";

let guardadoEnMemoria = "[]";

function leerGuardado() {
    try {
        return localStorage.getItem(CLAVE_GUARDADO) ?? "[]";
    } catch {
        // Navegación privada o almacenamiento bloqueado: se recuerdan solo durante esta visita.
        return guardadoEnMemoria;
    }
}

function guardar(ids: GuinoId[]) {
    guardadoEnMemoria = JSON.stringify(ids);
    try {
        localStorage.setItem(CLAVE_GUARDADO, guardadoEnMemoria);
    } catch {
        // Si no se puede guardar, quedan en memoria hasta que se cierre la página.
    }
}

// Lista de ids descubiertos. Se reutiliza el mismo array mientras no cambie lo guardado,
// para que React no vuelva a pintar sin motivo.
let ultimoTexto = "";
let ultimaLista: GuinoId[] = [];

export function guinosDescubiertos(): GuinoId[] {
    const texto = leerGuardado();
    if (texto !== ultimoTexto) {
        ultimoTexto = texto;
        try {
            const datos: unknown = JSON.parse(texto);
            ultimaLista = Array.isArray(datos) ? (datos as GuinoId[]) : [];
        } catch {
            ultimaLista = [];
        }
    }
    return ultimaLista;
}

// Marca un guiño como descubierto. Solo avisa la primera vez.
export function descubrirGuino(id: GuinoId) {
    const actuales = guinosDescubiertos();
    if (actuales.includes(id)) return;
    guardar([...actuales, id]);
    window.dispatchEvent(new CustomEvent<GuinoId>(EVENTO_GUINO, { detail: id }));
}

// Borra todos los guiños, para volver a jugar desde cero.
export function olvidarGuinos() {
    guardar([]);
    window.dispatchEvent(new CustomEvent(EVENTO_GUINO));
}
