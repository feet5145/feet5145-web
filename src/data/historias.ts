export type Historia = {
    // Identificador corto, usado por los personajes para indicar en qué historias aparecen.
    id: string;
    titulo: string;
    descripcion: string;
    etiquetas: string[];
    // Ruta dentro de public/. Si la imagen aún no existe, la tarjeta muestra un degradado.
    portada: string;
    // Enlace a la historia (Wattpad, etc.). Si se deja vacío, la tarjeta no es clicable.
    enlace?: string;
    // Las destacadas son las que aparecen en la página principal.
    destacada?: boolean;
    // false si aún no está publicada; se muestra como «Próximamente».
    publicada?: boolean;
};

export const historias: Historia[] = [
    {
        id: "barefoot-cafe",
        titulo: "Barefoot Café",
        descripcion: "Un lugar para respirar, para aislarte del ruido exterior.",
        etiquetas: ["Hipnosis", "Relax"],
        portada: "/portadas/barefoot-cafe.jpg",
        enlace: "https://www.inkitt.com/stories/1905745",
        destacada: true,
    },
    {
        id: "los-zapatos-en-la-entrada",
        titulo: "Los zapatos en la entrada",
        descripcion: "Una nueva amiga peculiar, que solo quiere alguien a quien amar.",
        etiquetas: ["Hipnosis", "Amistad"],
        portada: "/portadas/los-zapatos-en-la-entrada.jpg",
        enlace: "https://www.inkitt.com/stories/1643822",
        destacada: true,
    },
    {
        id: "a-los-pies-de-la-bruja",
        titulo: "A los pies de la bruja",
        descripcion: "Bastante diferente a lo que acostumbro: aquí no hay relax hasta el final, sino dominación.",
        etiquetas: ["Bruja", "Hipnosis"],
        portada: "/portadas/a-los-pies-de-la-bruja.jpg",
        enlace: "https://www.inkitt.com/stories/1643334",
        destacada: true,
    },
    {
        id: "la-diosa-de-los-pies",
        titulo: "La Diosa de los pies",
        descripcion: "Conoce al personaje que más me ha gustado desarrollar, y que he usado como excusa para conectar las historias.",
        etiquetas: ["Dioses", "Hipnosis", "Pedalina"],
        portada: "/portadas/la-diosa-de-los-pies.jpg",
        enlace: "https://www.inkitt.com/stories/1643318",
        destacada: true,
    },
    // TODO: completar descripción y etiquetas.
    {
        id: "castigo-de-pies",
        titulo: "Castigo de pies",
        descripcion: "",
        etiquetas: [],
        portada: "/portadas/castigo-de-pies.jpg",
    },
    // TODO: completar descripción y etiquetas.
    {
        id: "castigo-de-pies-parte-2",
        titulo: "Castigo de pies parte 2",
        descripcion: "",
        etiquetas: [],
        portada: "/portadas/castigo-de-pies-parte-2.jpg",
        publicada: false,
    },
    // TODO: completar descripción y etiquetas.
    {
        id: "solo-una-foto-mas",
        titulo: "Solo una foto más",
        descripcion: "",
        etiquetas: [],
        portada: "/portadas/solo-una-foto-mas.jpg",
    },
    // TODO: completar descripción y etiquetas.
    {
        id: "los-deseos-de-mis-pies",
        titulo: "Los deseos de mis pies",
        descripcion: "",
        etiquetas: [],
        portada: "/portadas/los-deseos-de-mis-pies.jpg",
    },
    // TODO: completar descripción y etiquetas.
    {
        id: "los-pies-de-mi-companera",
        titulo: "Los pies de mi compañera",
        descripcion: "",
        etiquetas: [],
        portada: "/portadas/los-pies-de-mi-companera.jpg",
    },
    // TODO: completar descripción y etiquetas.
    {
        id: "pedalina",
        titulo: "Pedalina",
        descripcion: "",
        etiquetas: [],
        portada: "/portadas/pedalina.jpg",
        publicada: false,
    },
];

export const historiasDestacadas = historias.filter((historia) => historia.destacada);

export function buscarHistoria(id: string) {
    return historias.find((historia) => historia.id === id);
}
