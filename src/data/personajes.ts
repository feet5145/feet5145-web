export type Relacion = {
    // Nombre del otro personaje, tal como aparece en su ficha.
    personaje: string;
    descripcion: string;
};

export type Personaje = {
    id: string;
    nombre: string;
    // Frase corta bajo el nombre (su título o papel).
    epiteto: string;
    // Texto breve para la tarjeta del escaparate.
    resumen: string;
    // Ruta dentro de public/. Si la imagen aún no existe, la tarjeta muestra un degradado.
    foto: string;
    // Ids de las historias (ver data/historias.ts) en las que aparece, en orden.
    historias: string[];
    // Los destacados aparecen en la página principal (máximo 4).
    destacado?: boolean;

    // Ficha completa, para la página con todos los personajes.
    datosBasicos: { etiqueta: string; valor: string }[];
    // Cada elemento es un párrafo.
    personalidad: string[];
    rol: string[];
    relaciones: Relacion[];
    // Cada elemento es un punto de la lista.
    notas?: string[];
};

export const personajes: Personaje[] = [
    {
        id: "pedalina",
        nombre: "Pedalina",
        epiteto: "La Diosa de los pies",
        resumen:
            "Serena, elegante, protectora y ligeramente traviesa. Una mortal corriente convertida en Diosa, capaz de influir en cualquiera con pura suavidad.",
        foto: "/personajes/Pedalina.png",
        historias: ["la-diosa-de-los-pies", "castigo-de-pies", "solo-una-foto-mas", "barefoot-cafe"],
        destacado: true,
        datosBasicos: [
            {
                etiqueta: "Edad estimada",
                valor: "Desconocida (Diosa inmortal), pero aparenta ser una chica joven de unos 25 años",
            },
            { etiqueta: "Altura", valor: "1,72 m (media-alta)" },
            { etiqueta: "Complexión", valor: "Esbelta, elegante y muy femenina. Movimientos gráciles y pausados." },
            { etiqueta: "Color de piel", valor: "Morena cálida" },
            {
                etiqueta: "Color de cabello",
                valor: "Castaño muy oscuro, casi negro, largo hasta la cintura, abundante y con suaves ondas sedosas.",
            },
            {
                etiqueta: "Color de ojos",
                valor: "Marrones profundos. En ciertas ocasiones parecen cambiar sutilmente de tono (más dorados o más oscuros) según su estado de ánimo o el poder que esté usando.",
            },
            {
                etiqueta: "Rasgos destacados",
                valor: "Belleza serena y casi hipnótica. Presencia que impone sin necesidad de alzar la voz. Voz melodiosa, calmada y ligeramente grave. Sonrisa que puede ser maternal, pícara o peligrosamente indulgente. Siempre lleva un vestido blanco casual, de manga larga, con bordados florales de varios colores (rojo, azul, verde…)",
            },
            {
                etiqueta: "Pies",
                valor: "Excepcionalmente perfectos. Arcos altos y elegantes, dedos largos y simétricos, piel tan suave que parece irreal al tacto, con un leve aroma dulce e hipnótico que se queda en la memoria. Parecen esculpidos por la misma belleza en persona. Mirarlos demasiado tiempo es peligroso… uno empieza a notar cada curva, cada sombra, la forma en que los dedos se mueven apenas, llamando. Suaves. Perfectos. Tan fáciles de mirar. Tan fáciles de… no apartes la vista. No hace falta. Solo observa. Solo…",
            },
        ],
        personalidad: [
            "Serena, elegante, protectora y ligeramente traviesa. Habla con calma y seguridad. Tiene una capacidad casi sobrenatural para influir en las personas a través de la suavidad y la hipnosis sutil.",
        ],
        rol: ["De mortal común y corriente a Diosa del fetiche de pies."],
        relaciones: [
            { personaje: "Artenón", descripcion: "Mejor amiga" },
            { personaje: "El que elige", descripcion: "Elegida por él" },
        ],
        notas: ["Es la Diosa del fetiche de pies. Su primera aparición fue en «La Diosa de los pies»."],
    },
    {
        id: "cristina",
        nombre: "Cristina",
        epiteto: "La Hechicera",
        resumen:
            "Dulce, paciente y cariñosa, con un lado juguetón y dominante. Una Hechicera misteriosa que guía y cuida a través de la hipnosis, y el nexo entre el mundo mágico y las protagonistas.",
        foto: "/personajes/Cristina.png",
        historias: ["los-deseos-de-mis-pies", "los-pies-de-mi-companera"],
        destacado: true,
        datosBasicos: [
            { etiqueta: "Edad estimada", valor: "24-26 años" },
            { etiqueta: "Altura", valor: "1,68 – 1,70 m" },
            { etiqueta: "Complexión", valor: "Delgada, esbelta y con curvas suaves" },
            { etiqueta: "Color de piel", valor: "Morena / bronceada clara" },
            { etiqueta: "Color de cabello", valor: "Castaño oscuro, largo y liso (parecido al de Carolina)" },
            { etiqueta: "Color de ojos", valor: "Castaños cálidos, con mirada pícara y seductora" },
            {
                etiqueta: "Rasgos destacados",
                valor: "Sonrisa traviesa y confiada, presencia hipnótica, movimiento elegante y deliberado",
            },
            {
                etiqueta: "Pies",
                valor: "Muy hermosos, de planta suave y dedos largos y bien formados. Son una de sus mayores fuentes de poder y orgullo",
            },
        ],
        personalidad: [
            "Dulce, paciente y cariñosa, pero con un lado claramente juguetón y dominante. Le gusta guiar y cuidar a través de la hipnosis y la adoración de pies. No es cruel ni sádica; prefiere la entrega voluntaria y el placer mutuo. Tiene un punto misterioso y seguro de sí misma.",
        ],
        rol: ["Hechicera obsesionada con los pies femeninos. Aparece en la vida de Carolina ofreciéndole un contrato: sus pies a cambio de deseos y poder. Se convierte en amante, mentora y pareja de Carolina y Lucía. Es el nexo entre el mundo mágico y las protagonistas."],
        relaciones: [
            {
                personaje: "Carolina",
                descripcion:
                    "Su “propiedad” consentida y después su amante. La ayuda a superar su trauma con los pies descalzos.",
            },
            {
                personaje: "Lucía",
                descripcion: "Termina formando parte del trío. Cristina la acepta y la integra con naturalidad.",
            },
            { personaje: "Silvana", descripcion: "Su antigua maestra. Le tiene mucho respeto y cariño." },
        ],
        notas: ["Al principio se presenta como una figura misteriosa y casi peligrosa, pero rápidamente se revela como alguien protectora y afectuosa. A lo largo de la historia pasa de ser “la hechicera que quiere los pies de Carolina” a convertirse en el centro emocional y mágico del trío. Su poder tiene un efecto calmamente hipnótico tanto en los demás como en ella misma."],
    },
    {
        id: "marina",
        nombre: "Marina",
        epiteto: "Una chica común muy subidita",
        resumen:
            "Arrogante y burlona hasta que un hechizo le dio la vuelta a su vida. Entre la vergüenza y una curiosidad que le cuesta admitir, empieza a descubrir lo que se siente al ser adorada.",
        foto: "/personajes/Marina.jpg",
        historias: ["castigo-de-pies", "castigo-de-pies-parte-2"],
        destacado: true,
        datosBasicos: [
            { etiqueta: "Edad estimada", valor: "20 años" },
            { etiqueta: "Altura", valor: "1.64 metros" },
            { etiqueta: "Complexión", valor: "Delgada pero con curvas suaves, aspecto juvenil y algo frágil." },
            {
                etiqueta: "Color de piel",
                valor: "Clara, con un tono ligeramente rosado en las mejillas cuando se sonroja o se emociona.",
            },
            {
                etiqueta: "Color de cabello",
                valor: "Castaño medio-oscuro, algo ondulado y con tendencia a enredarse. Suele llevarlo suelto o semi-recogido de forma descuidada.",
            },
            {
                etiqueta: "Color de ojos",
                valor: "Marrón avellana, expresivos y muy fáciles de leer (se le nota todo en la mirada).",
            },
            {
                etiqueta: "Rasgos destacados",
                valor: "Rostro algo redondeado, labios medianos, cejas naturales. Tiene una expresión que alterna entre inseguridad, determinación y, cada vez más, una curiosidad contenida. Cuando se pone nerviosa se muerde el labio inferior.",
            },
            {
                etiqueta: "Pies",
                valor: "Talla 37. Plantas suaves y bien cuidadas (desde que empezó a trabajar en el Barefoot Café se esfuerza más en ello). Dedos proporcionados, arco medio. No son “perfectos” al nivel de Pedalina, pero tienen un atractivo natural y juvenil. Se ponen fácilmente rosados.",
            },
        ],
        personalidad: [
            "Al principio de la primera historia era arrogante, sarcástica y bastante cruel con sus burlas, especialmente cuando se trataba de pies. Después del hechizo y la humillación pública se volvió mucho más insegura, ansiosa y huraña.",
            "En la Parte 2 está en un punto intermedio: ya no es cruel, se esfuerza por ser amable y cumplir su palabra, pero arrastra mucha vergüenza y resentimiento hacia la gente que la sigue humillando. Tiene un fondo de orgullo herido y un fuerte deseo de recuperar el control de su vida. Cuando se siente segura puede mostrar un lado más sarcástico (pero ya sin maldad). Es más inteligente y observadora de lo que parece.",
        ],
        rol: [
            "Protagonista.",
            "Pasa de víctima de las consecuencias de su propio pasado a alguien que, por necesidad, empieza a relacionarse de forma voluntaria y consciente con el fetiche de pies. Su arco gira en torno a aceptar lo que le pasó, dejar de pelear constantemente contra ello y descubrir que puede haber placer y poder también del otro lado (siendo adorada).",
        ],
        relaciones: [
            {
                personaje: "Pedalina",
                descripcion:
                    "Relación compleja. Le tiene respeto, algo de miedo y una creciente fascinación. La ve como una figura de autoridad absoluta a la que no puede mentir.",
            },
            {
                personaje: "Resto de amigas / compañeros de universidad",
                descripcion: "Relación deteriorada. La mayoría la sigue viendo como el chiste de los vídeos.",
            },
            {
                personaje: "Clientes y camareras del Barefoot Café",
                descripcion:
                    "Al principio es solo una relación laboral forzada. Con el tiempo se vuelve más cercana y personal.",
            },
        ],
        notas: [
            "Empieza la Parte 2 mentalmente agotada, al borde del colapso emocional.",
            "Acepta el trato con Pedalina por desesperación, no por deseo.",
            "A lo largo de su trabajo en el Barefoot Café empieza a experimentar, casi sin querer, lo que se siente al ser el centro de atención de forma positiva (que la miren, que la deseen, que le cuiden los pies…).",
            "El contraste entre ser humillada en la universidad y ser adorada en el café es uno de los motores principales de su cambio.",
            "Su mayor conflicto interno: todavía le cuesta admitir que una parte de ella ya no odia del todo lo que le está pasando.",
        ],
    },
    {
        id: "el-que-elige",
        nombre: "El que elige",
        epiteto: "El poder absoluto",
        resumen:
            "Un titán anciano, calmado y sabio, capaz de hacerlo CASI TODO, que prefiere delegar: escoge a mortales y los convierte en Dioses. Nadie ha visto nunca su rostro.",
        foto: "/personajes/El que elige.jpg",
        historias: ["pedalina"],
        destacado: true,
        datosBasicos: [
            { etiqueta: "Edad estimada", valor: "Desconocida" },
            { etiqueta: "Altura", valor: "Es un titán gigantesco" },
            { etiqueta: "Complexión", valor: "Anciano venerable" },
            {
                etiqueta: "Color de piel",
                valor: "Debido a su luminosidad, se le considera tan blanco como el sol",
            },
            { etiqueta: "Color de cabello", valor: "Está calvo" },
            { etiqueta: "Color de ojos", valor: "Amarillo divino" },
            {
                etiqueta: "Rasgos destacados",
                valor: "Es capaz de hacer TODO, pero prefiere delegar las tareas en mortales a los que convierte en Dioses. Nadie ha visto nunca su rostro, siempre que aparece, se ve su cuerpo sentado en un trono inmenso, pero nunca se llega a apreciar su cara.",
            },
        ],
        personalidad: ["Anciano calmado y sabio."],
        rol: [
            "Era el poder absoluto en toda la existencia, sin embargo, la excesiva cantidad de cosas (en aumento) a las que prestarle atención llegó a fatigarle. Por tanto, escogió a los humanos como sus sirvientes. Escogiendo al que considerara el más adecuado para ocupar el cargo de cualquier cosa que fuera adorada por ellos, llámese tiempo, llámese naturaleza, belleza, etc...",
            "Cuando el fetiche de pies comenzó a crecer entre los humanos, escogió a Pedalina como la encargada divina de gestionarlo.",
            "Él le da una serie de pautas sobre cómo debería hacerlo, pero teniendo en cuenta que es una Diosa, puede ejercer su voluntad, pero respetando una regla: puede dejar que su naturaleza hipnótica influya entre los humanos, pero sus actos NO deben afectar a las grandes masas o provocar catástrofes.",
        ],
        relaciones: [],
        notas: [
            "No evoluciona mucho, en el sentido de que su rol ya estaba definido. Mucho antes del nacimiento de Pedalina decidió delegar en mortales las tareas divinas, por lo que no hay mucho que desarrollarle.",
        ],
    },
];

export const personajesDestacados = personajes.filter((personaje) => personaje.destacado).slice(0, 4);

export function buscarPersonaje(id: string) {
    return personajes.find((personaje) => personaje.id === id);
}

// Para enlazar las relaciones de una ficha con la ficha del otro personaje, si existe.
export function buscarPersonajePorNombre(nombre: string) {
    return personajes.find((personaje) => personaje.nombre === nombre);
}
