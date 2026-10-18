export type Historia = {
    titulo: string;
    descripcion: string;
    etiquetas: string[];
    // Ruta dentro de public/. Si la imagen aún no existe, la tarjeta muestra un degradado.
    portada: string;
    // Enlace a la historia (Wattpad, etc.). Si se deja vacío, la tarjeta no es clicable.
    enlace?: string;
};

export const historiasDestacadas: Historia[] = [
    {
        titulo: "Barefoot Café",
        descripcion: "Un lugar para respirar, para aislarte del ruido exterior.",
        etiquetas: ["Hipnosis", "Relax"],
        portada: "/portadas/barefoot-cafe.jpg",
    },
    {
        titulo: "Los zapatos en la entrada",
        descripcion: "Una nueva amiga peculiar, que solo quiere alguien a quien amar.",
        etiquetas: ["Hipnosis", "Amistad"],
        portada: "/portadas/los-zapatos-en-la-entrada.jpg",
    },
    {
        titulo: "A los pies de la bruja",
        descripcion: "Bastante diferente a lo que acostumbro: aquí no hay relax hasta el final, sino dominación.",
        etiquetas: ["Bruja", "Hipnosis"],
        portada: "/portadas/a-los-pies-de-la-bruja.jpg",
    },
    {
        titulo: "La Diosa de los pies",
        descripcion: "Conoce al personaje que más me ha gustado desarrollar, y que he usado como excusa para conectar las historias.",
        etiquetas: ["Dioses", "Hipnosis", "Pedalina"],
        portada: "/portadas/la-diosa-de-los-pies.jpg",
    },
];
