export type Linea = "principal" | "alternativa" | "independiente";

// Apartados de la página de historias, en el orden en que se muestran.
export const lineas: { id: Linea; titulo: string; descripcion: string }[] = [
    {
        id: "principal",
        titulo: "Línea principal",
        descripcion: "Historias conectadas entre sí, de la más reciente a la más antigua.",
    },
    {
        id: "alternativa",
        titulo: "Línea alternativa",
        descripcion: "Versiones que se separan de la línea principal: los mismos personajes, otros caminos.",
    },
    {
        id: "independiente",
        titulo: "Historias independientes",
        descripcion: "Relatos que se leen por separado, sin conexión con el resto.",
    },
];

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
    // Apartado de la página de historias en el que aparece.
    linea: Linea;
    // Las destacadas son las que aparecen en la página principal.
    destacada?: boolean;
    // false si aún no está publicada; se muestra como «Próximamente».
    publicada?: boolean;
};

// Dentro de cada línea, ordenadas por publicación: de la más reciente a la más antigua.
// Las nuevas van arriba del todo de su línea.
export const historias: Historia[] = [
    {
        id: "pedalina",
        titulo: "Pedalina",
        descripcion:
            "Como buen escritor, saco la precuela mucho tiempo después de la original. Conoce los orígenes de uno de los personajes con los que más me he encariñado, y que sirve como unión de una parte importante de las historias.",
        etiquetas: ["Orígenes", "Pedalina", "Diosa"],
        portada: "/portadas/pedalina.webp",
        linea: "principal",
        publicada: false,
    },
    {
        id: "castigo-de-pies-parte-2",
        titulo: "Castigo de pies parte 2",
        descripcion:
            "Los actos tienen consecuencias, por mucho que hayas aprendido la lección, tu alrededor no olvida. Marina pide a Pedalina que aquel momento nunca hubiera sucedido, y ella le propondrá un trato.",
        etiquetas: ["Redención", "Magia"],
        portada: "/portadas/castigo-de-pies-parte-2.webp",
        linea: "principal",
        publicada: false,
    },
    {
        id: "barefoot-cafe",
        titulo: "Barefoot Café",
        descripcion: "Un lugar para respirar, para aislarte del ruido exterior.",
        etiquetas: ["Hipnosis", "Relax"],
        portada: "/portadas/barefoot-cafe.webp",
        linea: "principal",
        enlace: "https://www.inkitt.com/stories/1905745",
        destacada: true,
    },
    {
        id: "solo-una-foto-mas",
        titulo: "Solo una foto más",
        descripcion:
            "Una chica gótica modelo de pies desea a un chico que le adore los suyos, en su soledad, formula un deseo sin saber que alguien importante lo escuchará.",
        etiquetas: ["Hipnosis", "Chica gótica"],
        portada: "/portadas/solo-una-foto-mas.webp",
        linea: "principal",
        enlace: "https://www.inkitt.com/stories/1676935",
    },
    {
        id: "castigo-de-pies",
        titulo: "Castigo de pies",
        descripcion:
            "Pedalina no quiere hacerle daño a nadie, pero sí que la gente aprenda su lección, si te burlas del fetiche, ella te escuchará.",
        etiquetas: ["Castigo", "Magia"],
        portada: "/portadas/castigo-de-pies.webp",
        linea: "principal",
        enlace: "https://www.inkitt.com/stories/1643329",
    },
    {
        id: "la-diosa-de-los-pies",
        titulo: "La Diosa de los pies",
        descripcion: "Conoce al personaje que más me ha gustado desarrollar, y que he usado como excusa para conectar las historias.",
        etiquetas: ["Dioses", "Hipnosis", "Pedalina"],
        portada: "/portadas/la-diosa-de-los-pies.webp",
        linea: "principal",
        enlace: "https://www.inkitt.com/stories/1643318",
        destacada: true,
    },
    {
        id: "los-pies-de-mi-companera",
        titulo: "Los pies de mi compañera",
        descripcion:
            "Un simple trabajo en parejas puede hacer que 2 personas se conozcan más de lo que esperaban y, quién sabe, quizás aquí aparezca el primer cameo.",
        etiquetas: ["Universidad", "Psicología"],
        portada: "/portadas/los-pies-de-mi-companera.webp",
        linea: "principal",
        enlace: "https://www.inkitt.com/stories/1643276",
    },
    {
        id: "los-deseos-de-mis-pies",
        titulo: "Los deseos de mis pies",
        descripcion:
            "Mis orígenes como escritor, no es la mejor historia del mundo pero le puse mucho aprecio e imaginación.",
        etiquetas: ["Hipnosis", "Adoración"],
        portada: "/portadas/los-deseos-de-mis-pies.webp",
        linea: "principal",
        enlace: "https://www.inkitt.com/stories/1643023",
    },
    {
        id: "los-zapatos-en-la-entrada",
        titulo: "Los zapatos en la entrada",
        descripcion: "Una nueva amiga peculiar, que solo quiere alguien a quien amar.",
        etiquetas: ["Hipnosis", "Amistad"],
        portada: "/portadas/los-zapatos-en-la-entrada.webp",
        linea: "alternativa",
        enlace: "https://www.inkitt.com/stories/1643822",
        destacada: true,
    },
    {
        id: "a-los-pies-de-la-bruja",
        titulo: "A los pies de la bruja",
        descripcion: "Bastante diferente a lo que acostumbro: aquí no hay relax hasta el final, sino dominación.",
        etiquetas: ["Bruja", "Hipnosis"],
        portada: "/portadas/a-los-pies-de-la-bruja.webp",
        linea: "independiente",
        enlace: "https://www.inkitt.com/stories/1643334",
        destacada: true,
    },
    {
        id: "a-los-pies-de-spider-gwen",
        titulo: "A los pies de Spider-Gwen",
        descripcion:
            "Descubre una versión de Gwen donde no solo vuelve a tener alguien a quien amar, sino que despierta un deseo que no sabía que tenía.",
        etiquetas: ["SpiderWoman", "Fanfic"],
        portada: "/portadas/a-los-pies-de-spider-gwen.webp",
        linea: "independiente",
        enlace: "https://www.inkitt.com/stories/1848978",
    },
];

export const historiasDestacadas = historias.filter((historia) => historia.destacada);

export function buscarHistoria(id: string) {
    return historias.find((historia) => historia.id === id);
}
