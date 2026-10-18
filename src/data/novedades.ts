export type Novedad = {
    // Formato AAAA-MM-DD. El orden se calcula solo: no importa dónde la añadas en la lista.
    fecha: string;
    titulo: string;
    texto: string;
};

// TODO: EJEMPLOS. Sustituir por novedades reales antes de publicar la web.
export const novedades: Novedad[] = [
    {
        fecha: "2026-10-18",
        titulo: "¡Bienvenidos a la web!",
        texto: "Por fin tengo un rincón propio, lejos de las restricciones de otras plataformas. Aquí iré compartiendo historias, personajes y novedades.",
    },
    {
        fecha: "2026-10-10",
        titulo: "«Castigo de pies parte 2» en camino",
        texto: "La segunda parte de la historia de Marina está casi lista. Muy pronto podréis ver qué le espera en el Barefoot Café.",
    },
    {
        fecha: "2026-10-02",
        titulo: "Aviso sobre mi perfil",
        texto: "Si notáis algún problema para acceder a mis historias en otras plataformas, aquí intentaré tener los enlaces actualizados.",
    },
];

// Fechas en formato ISO: ordenarlas como texto equivale a ordenarlas por fecha.
export const novedadesOrdenadas = [...novedades].sort((a, b) => b.fecha.localeCompare(a.fecha));

export const novedadesRecientes = novedadesOrdenadas.slice(0, 3);

const formatoFecha = new Intl.DateTimeFormat("es-ES", { day: "numeric", month: "long", year: "numeric" });

export function formatearFecha(fecha: string) {
    const [anio, mes, dia] = fecha.split("-").map(Number);
    // Fecha local (no UTC) para que no se desplace un día según la zona horaria.
    return formatoFecha.format(new Date(anio, mes - 1, dia));
}
