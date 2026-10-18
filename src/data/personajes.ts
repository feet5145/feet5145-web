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
    // Los textos admiten el formato de Obsidian: **negrita**, _cursiva_ y [[Nombre]] o [[id|Nombre]]
    // para enlazar a otra ficha (ver components/ui/TextoFicha.tsx).
    datosBasicos: { etiqueta: string; valor: string }[];
    // Cada elemento es un párrafo. Vacío si aún no está escrita.
    personalidad: string[];
    // Rol y notas solo en personajes de una sola historia: en varias historias su papel cambia.
    // Cada elemento del rol es un párrafo.
    rol?: string[];
    // Cada elemento es un punto de la lista.
    relaciones: string[];
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
        relaciones: [
            "Mejor amiga de [[Artenón]]",
            "Elegida por [[El que elige]]",
        ],
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
        relaciones: [
            "**Carolina:** Su “propiedad” consentida y después su amante. La ayuda a superar su trauma con los pies descalzos.",
            "**Lucía:** Termina formando parte del trío. Cristina la acepta y la integra con naturalidad.",
            "**Silvana:** Su antigua maestra. Le tiene mucho respeto y cariño.",
        ],
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
        relaciones: [
            "**[[Pedalina]]:** Relación compleja. Le tiene respeto, algo de miedo y una creciente fascinación. La ve como una figura de autoridad absoluta a la que no puede mentir.",
            "**Resto de amigas / compañeros de universidad:** Relación deteriorada. La mayoría la sigue viendo como el chiste de los vídeos.",
            "**Clientes y camareras del Barefoot Café:** Al principio es solo una relación laboral forzada. Con el tiempo se vuelve más cercana y personal.",
        ],
    },
    {
        id: "clara",
        nombre: "Clara",
        epiteto: "La mejor amiga de Marina",
        resumen:
            "Inteligente, observadora y con un humor afilado. Cuando descubrió el hechizo no dudó en aprovecharlo, pero no es cruel de corazón: ahora carga con la culpa y trata de reparar el daño.",
        foto: "/personajes/Clara.jpg",
        historias: ["castigo-de-pies", "castigo-de-pies-parte-2"],
        datosBasicos: [
            { etiqueta: "Edad estimada", valor: "20 años" },
            { etiqueta: "Altura", valor: "1.67 metros" },
            {
                etiqueta: "Complexión",
                valor: "Esbelta y proporcionada, con una figura más definida y segura que la de Marina.",
            },
            { etiqueta: "Color de piel", valor: "Clara con un tono cálido y saludable." },
            {
                etiqueta: "Color de cabello",
                valor: "Castaño claro con suaves reflejos dorados, normalmente semi-recogido en una coleta alta o suelto con ondas naturales.",
            },
            {
                etiqueta: "Color de ojos",
                valor: "Verde avellana, vivos y expresivos, con una mirada que fácilmente pasa de amable a pícara.",
            },
            {
                etiqueta: "Rasgos destacados",
                valor: "Rostro ovalado, pómulos suaves, labios carnosos y una sonrisa fácil que puede volverse bastante maliciosa. Tiene una presencia más segura y desenvuelta que Marina.",
            },
            {
                etiqueta: "Pies",
                valor: "Talla 38. Bien formados, arco medio-alto, dedos largos y elegantes. Plantas suaves pero que sudan con facilidad cuando hace deporte (algo que ella sabe usar a su favor). Se cuida las uñas y normalmente las lleva pintadas.",
            },
        ],
        personalidad: [
            "Clara es inteligente, observadora y con un sentido del humor afilado. Al principio de la primera historia tolera las burlas de Marina con paciencia, pero no es ninguna santa: cuando descubre el hechizo, no duda en aprovecharse de la situación y disfrutar del poder que le da. Tiene un lado juguetón y algo sádico que sale a la superficie cuando se siente en control.",
            "Sin embargo, no es cruel de corazón. Cuando ve hasta qué punto ha destruido a su amiga, siente una culpa genuina y trata de reparar el daño. Es leal con las personas que realmente le importan, aunque a veces su forma de demostrar las cosas sea complicada.",
        ],
        relaciones: [
            "**[[Marina]]:** Su mejor amiga. La quiere de verdad, pero durante un tiempo priorizó su propia diversión y deseo de “darle una lección”. Ahora carga con la culpa y trata de estar a su lado.",
            "**[[Pedalina]]:** No la conoce personalmente (al menos al inicio de la Parte 2), pero es consciente de que existe por lo que Marina le contó. Le genera una mezcla de curiosidad, respeto y algo de miedo.",
            "**Resto del grupo de amigas:** Es una de las líderes naturales del grupo. Las otras suelen seguirle la corriente.",
        ],
    },
    {
        id: "tomas",
        nombre: "Tomás",
        epiteto: "El cliente nuevo",
        resumen:
            "Un universitario tímido y reprimido que descubre el Barefoot Café y empieza a explorar deseos que tenía guardados.",
        foto: "/personajes/Tomás.jpg",
        historias: ["barefoot-cafe"],
        datosBasicos: [
            { etiqueta: "Edad estimada", valor: "21" },
            { etiqueta: "Altura", valor: "Alto" },
            { etiqueta: "Complexión", valor: "Delgado / normal" },
            { etiqueta: "Color de piel", valor: "Claro" },
            { etiqueta: "Color de cabello", valor: "Castaño oscuro, corto" },
            { etiqueta: "Color de ojos", valor: "Marrones" },
            { etiqueta: "Rasgos destacados", valor: "Se sonroja con facilidad, expresión habitualmente seria o tensa" },
            { etiqueta: "Pies", valor: "Normales (no es el foco)" },
        ],
        personalidad: [
            "Muy tímido, inseguro y reprimido. Curioso. Tiene un fuerte conflicto interno entre el deseo y la vergüenza. Es sincero y un poco torpe emocionalmente, pero capaz de ser valiente cuando se decide.",
        ],
        rol: [
            "Protagonista. Universitario que descubre el Barefoot Café y empieza a explorar deseos que tenía reprimidos.",
        ],
        relaciones: [
            "Se siente más seguro con [[Lucía]]",
            "Se siente más nervioso e inseguro ante [[Maya]]",
            "Cliente en proceso de transformación",
        ],
        notas: ["Ha besado el pie de Lucía (Capítulo 2). En el Capítulo 3 empieza a interactuar más con [[Maya]]"],
    },
    {
        id: "lucia",
        nombre: "Lucía",
        epiteto: "La bienvenida",
        resumen:
            "Tierna, paciente y empática. La camarera principal: la primera en atender a Tomás y quien le abrió la puerta al mundo del café.",
        foto: "/personajes/Lucía.jpg",
        historias: ["barefoot-cafe"],
        datosBasicos: [
            { etiqueta: "Edad estimada", valor: "22 años" },
            { etiqueta: "Altura", valor: "Media" },
            { etiqueta: "Complexión", valor: "Delgada / juvenil" },
            { etiqueta: "Color de piel", valor: "Clara" },
            {
                etiqueta: "Color de cabello",
                valor: "Rubio, normalmente recogido en coleta desordenada con mechones sueltos",
            },
            { etiqueta: "Color de ojos", valor: "Verdes" },
            { etiqueta: "Rasgos destacados", valor: "Sonrisa fácil, expresión amable con un toque de picardía" },
            { etiqueta: "Pies", valor: "Cuidados, elegantes. Uñas a menudo pintadas de negro oscuro." },
        ],
        personalidad: [
            "Tierna, paciente, empática y juguetona de forma suave. No presiona a los clientes. Prefiere crear un ambiente de seguridad y dejar que las cosas fluyan. Tiene un lado coqueto pero siempre desde el cuidado.",
        ],
        rol: ["Camarera principal. Fue la primera en atender a [[Tomás]] y quien le abrió la puerta al mundo del café."],
        relaciones: ["Empleada de [[Pedalina]]", "Guía paciente de [[Tomás]]", "Amiga y compañera de [[Maya]]"],
        notas: ["Suele ser la más protectora con los clientes nuevos y tímidos."],
    },
    {
        id: "maya",
        nombre: "Maya",
        epiteto: "La tentación",
        resumen:
            "Directa, traviesa y seductora. No oculta sus intenciones, le gusta tomar la iniciativa y quiere atender a Tomás personalmente.",
        foto: "/personajes/Maya.jpg",
        historias: ["barefoot-cafe"],
        datosBasicos: [
            { etiqueta: "Edad estimada", valor: "23" },
            { etiqueta: "Altura", valor: "Media-baja" },
            { etiqueta: "Complexión", valor: "Delgada y juvenil" },
            { etiqueta: "Color de piel", valor: "Muy morena, prácticamente negra" },
            { etiqueta: "Color de cabello", valor: "Castaño medio/oscuro, largo" },
            { etiqueta: "Color de ojos", valor: "Marrón claro / avellana" },
            { etiqueta: "Rasgos destacados", valor: "Rasgos suaves y juveniles, expresión traviesa" },
            {
                etiqueta: "Pies",
                valor: "Muy morenos (el mismo tono oscuro de su piel se extiende hasta las plantas). Arcos elegantes y bien definidos, plantas suaves y con buena forma. Dedos proporcionados y bien cuidados. Lleva las uñas pintadas de blanco. Tienen un aspecto limpio, suave y atractivo, con una textura que invita al tacto.",
            },
        ],
        personalidad: [
            "Más directa, traviesa y seductora que [[Lucía]]. No oculta sus intenciones. Le gusta provocar y tomar la iniciativa. Coqueta y un poco pícara. Tiene un lado competitivo amistoso con [[Lucía]].",
        ],
        rol: ["Camarera. Fue la que recogía mesas el primer día de [[Tomás]]. Quiere “atenderlo” personalmente."],
        relaciones: [
            "Amiga y compañera de [[Lucía]] (complicidad + competencia amistosa)",
            "Interés activo y provocador hacia [[Tomás]]",
            "Empleada de [[Pedalina]] en el Barefoot Café",
        ],
        notas: ["En el Capítulo 3 empieza a tomar protagonismo con [[Tomás]]."],
    },
    {
        id: "carmen",
        nombre: "Carmen",
        epiteto: "La guardiana del umbral",
        resumen:
            "Observadora hasta la incomodidad y paciente hasta lo inhumano. Es quien decide quién está listo para ver lo que realmente ocurre en el Barefoot Café.",
        foto: "/personajes/Carmen.jpg",
        historias: ["barefoot-cafe"],
        datosBasicos: [
            { etiqueta: "Edad estimada", valor: "23" },
            { etiqueta: "Altura", valor: "Media" },
            { etiqueta: "Complexión", valor: "Delgada / juvenil, pero con una postura que sugiere disciplina" },
            {
                etiqueta: "Color de piel",
                valor: "Ni tan clara como [[Lucía]] ni tan morena como [[Maya]], una especie de caramelo dorado.",
            },
            { etiqueta: "Color de cabello", valor: "Azul oscuro (se tiñe)" },
            { etiqueta: "Color de ojos", valor: "Gris plata, fríos y penetrantes" },
            {
                etiqueta: "Rasgos destacados",
                valor: "No pestañea cuando está en conversación con alguien. Se mueve sin hacer ruido.",
            },
            {
                etiqueta: "Pies",
                valor: "Largos y elegantes, arcos pronunciados que crean sombras profundas en las plantas. Los dedos son finos, casi articulados como los de una bailarina. Las uñas las mantiene sin pintar, naturales, pero limadas a la perfección con una curva que sugiere garra contenida.",
            },
        ],
        personalidad: [
            "Es observadora hasta el punto de incomodidad —no mira _a_ las personas, mira _dentro_ de ellas.",
            "Posee una paciencia sobrenatural y una capacidad de esperar que parece inhumana.",
            "Cuando interactúa, lo hace con intención quirúrgica. Nada es casual en Carmen. Su silencio no es timidez —es poder contenido.",
        ],
        rol: [
            "Carmen es la **guardiana del umbral**. Mientras Lucía representa la bienvenida y Maya la tentación, Carmen es la que decide quién está _listo_ para ver lo que realmente ocurre en Barefoot Café.",
            "Es la única que ha visto a la Diosa [[Pedalina]] y sigue con conciencia “libre” (se entrega a [[Pedalina]] por voluntad propia).",
            "Carmen ha estado observando atentamente a [[Tomás]], y a pesar de su impasividad, se ha quedado con las ganas de recibir su adoración. Su método es ligeramente diferente, ella se acercará a nuestro protagonista, plantará sus pies en su cara y le dirá “haz lo que quieras con ellos”, entonces evaluará si [[Tomás]] merece conocer a [[Pedalina]], quien ya ha mostrado interés por él fuera de cámara.",
        ],
        relaciones: ["Compañera de [[Lucía]] y [[Maya]]", "Discípula consciente de [[Pedalina]]"],
        notas: ["Será desarrollada en el Capítulo 4"],
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
            "Cuando el fetiche de pies comenzó a crecer entre los humanos, escogió a [[Pedalina]] como la encargada divina de gestionarlo.",
            "Él le da una serie de pautas sobre cómo debería hacerlo, pero teniendo en cuenta que es una Diosa, puede ejercer su voluntad, pero respetando una regla: puede dejar que su naturaleza hipnótica influya entre los humanos, pero sus actos NO deben afectar a las grandes masas o provocar catástrofes.",
        ],
        relaciones: [],
        notas: [
            "No evoluciona mucho, en el sentido de que su rol ya estaba definido. Mucho antes del nacimiento de [[Pedalina]] decidió delegar en mortales las tareas divinas, por lo que no hay mucho que desarrollarle.",
        ],
    },
    {
        id: "artenon",
        nombre: "Artenón",
        epiteto: "El mejor amigo de Pedalina",
        resumen:
            "Criado en la alta sociedad, quiere ver lo que hay más allá de su burbuja y tomar sus propias decisiones. Leal y paciente, es el apoyo constante de Pedalina.",
        foto: "/personajes/Artenón.jpg",
        historias: ["pedalina"],
        datosBasicos: [
            { etiqueta: "Edad estimada", valor: "25 años al final de la historia" },
            { etiqueta: "Altura", valor: "1.81 metros" },
            {
                etiqueta: "Complexión",
                valor: "Atlética y elegante, de hombros anchos y porte natural propio de alguien criado en la alta sociedad, pero sin exageraciones",
            },
            { etiqueta: "Color de piel", valor: "Blanco como la nieve" },
            { etiqueta: "Color de cabello", valor: "Castaño, ligeramente ondulado y siempre bien cuidado" },
            { etiqueta: "Color de ojos", valor: "Marrones, cálidos y expresivos" },
            {
                etiqueta: "Rasgos destacados",
                valor: "Mirada intensa y curiosa, expresión habitualmente amable pero con un fondo de inquietud e insatisfacción. Posee un porte aristocrático que no llega a ser arrogante. Manos cuidadas y gestos refinados.",
            },
            {
                etiqueta: "Pies",
                valor: "Bien formados y de aspecto cuidado (propios de su clase social). No destacan especialmente… hasta que [[Pedalina]] entra en su vida.",
            },
        ],
        personalidad: [
            "La sociedad superior está obsesionada con mantener ese estatus y encerrarse en su propia burbuja. Sin embargo, Artenón quiere ver lo que hay más allá, quiere tomar sus propias decisiones y conocer gente que no parezca pre-programada para ser pedante. Es leal, paciente y profundamente atento con quienes se ganan su confianza.",
        ],
        rol: ["Fuente de apoyo constante para [[Pedalina]]"],
        relaciones: ["Es el mejor amigo de [[Pedalina]]"],
    },
    {
        id: "chronos",
        nombre: "Chronos",
        epiteto: "El Dios del tiempo",
        resumen: "Tan viejo como el tiempo mismo. Es el Dios del tiempo: ¿qué más hace falta saber?",
        foto: "/personajes/Chronos.webp",
        historias: ["pedalina"],
        datosBasicos: [
            { etiqueta: "Edad estimada", valor: "Tan viejo como el tiempo mismo" },
            { etiqueta: "Altura", valor: "1.95 metros" },
            { etiqueta: "Rasgos destacados", valor: "Es el Dios del tiempo. ¿Qué más rasgos destacados quieres? XD" },
        ],
        personalidad: [],
        rol: ["Dios del tiempo"],
        relaciones: [],
    },
];

export const personajesDestacados = personajes.filter((personaje) => personaje.destacado).slice(0, 4);

export function buscarPersonaje(id: string) {
    return personajes.find((personaje) => personaje.id === id);
}

// Para los enlaces [[Nombre]] de las fichas. Si dos personajes comparten nombre, devuelve el primero.
export function buscarPersonajePorNombre(nombre: string) {
    return personajes.find((personaje) => personaje.nombre === nombre);
}
