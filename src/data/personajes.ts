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
        foto: "/personajes/Pedalina.webp",
        historias: ["pedalina", "la-diosa-de-los-pies", "castigo-de-pies", "solo-una-foto-mas", "barefoot-cafe", "castigo-de-pies-parte-2"],
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
            "Nació como una mortal plebeya en la época de la antigua Grecia y Roma: una chica dulce, amable y calmada que lograba que todo el mundo se sintiera feliz con su presencia. Ya entonces le picaba la curiosidad de qué se sentiría al ser adorada.",
        ],
        relaciones: [
            "Mejor amiga de [[Artenón]] desde la infancia. Él fue el único que se atrevió a adorar sus pies, aunque pertenecía a una sociedad superior.",
            "Elegida por [[El que elige]], que se fijó en su presencia serena e hipnótica al verla con Artenón.",
        ],
    },
    {
        id: "cristina",
        nombre: "Cristina",
        epiteto: "La Hechicera",
        resumen:
            "Dulce, paciente y cariñosa, con un lado juguetón y dominante. Una Hechicera misteriosa que guía y cuida a través de la hipnosis, y el nexo entre el mundo mágico y las protagonistas.",
        foto: "/personajes/Cristina.png",
        historias: ["los-deseos-de-mis-pies", "los-pies-de-mi-companera", "los-zapatos-en-la-entrada"],
        destacado: true,
        datosBasicos: [
            { etiqueta: "Edad estimada", valor: "20 años" },
            { etiqueta: "Otra edad", valor: "En «Los zapatos en la entrada» (línea alternativa) aparenta la misma edad que las chicas, de entre 20 y 25 años, y la historia abarca varios años" },
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
            "**[[Carolina]]:** Su “propiedad” consentida y después su amante. La ayuda a superar su trauma con los pies descalzos.",
            "**[[lucia-deseos|Lucía]]:** Termina formando parte del trío. Cristina la acepta y la integra con naturalidad.",
            "**[[Silvana]]:** Su antigua maestra. Le tiene mucho respeto y cariño.",
        ],
    },
    {
        id: "marina",
        nombre: "Marina",
        epiteto: "Una chica común muy subidita",
        resumen:
            "Arrogante y burlona hasta que un hechizo le dio la vuelta a su vida. Entre la vergüenza y una curiosidad que le cuesta admitir, empieza a descubrir lo que se siente al ser adorada.",
        foto: "/personajes/Marina.webp",
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
        foto: "/personajes/Clara.webp",
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
        foto: "/personajes/Tomás.webp",
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
            "Se siente más seguro con [[lucia|Lucía]]",
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
        foto: "/personajes/Lucía.webp",
        historias: ["barefoot-cafe", "castigo-de-pies-parte-2"],
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
        relaciones: ["Empleada de [[Pedalina]]", "Guía paciente de [[Tomás]]", "Amiga y compañera de [[Maya]]"],
    },
    {
        id: "maya",
        nombre: "Maya",
        epiteto: "La tentación",
        resumen:
            "Directa, traviesa y seductora. No oculta sus intenciones, le gusta tomar la iniciativa y quiere atender a Tomás personalmente.",
        foto: "/personajes/Maya.webp",
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
            "Más directa, traviesa y seductora que [[lucia|Lucía]]. No oculta sus intenciones. Le gusta provocar y tomar la iniciativa. Coqueta y un poco pícara. Tiene un lado competitivo amistoso con [[lucia|Lucía]].",
        ],
        rol: ["Camarera. Fue la que recogía mesas el primer día de [[Tomás]]. Quiere “atenderlo” personalmente."],
        relaciones: [
            "Amiga y compañera de [[lucia|Lucía]] (complicidad + competencia amistosa)",
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
        foto: "/personajes/Carmen.webp",
        historias: ["barefoot-cafe"],
        datosBasicos: [
            { etiqueta: "Edad estimada", valor: "23" },
            { etiqueta: "Altura", valor: "Media" },
            { etiqueta: "Complexión", valor: "Delgada / juvenil, pero con una postura que sugiere disciplina" },
            {
                etiqueta: "Color de piel",
                valor: "Ni tan clara como [[lucia|Lucía]] ni tan morena como [[Maya]], una especie de caramelo dorado.",
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
        relaciones: ["Compañera de [[lucia|Lucía]] y [[Maya]]", "Discípula consciente de [[Pedalina]]"],
        notas: ["Será desarrollada en el Capítulo 4"],
    },
    {
        id: "el-que-elige",
        nombre: "El que elige",
        epiteto: "El poder absoluto",
        resumen:
            "Un titán anciano, calmado y sabio, capaz de hacerlo CASI TODO, que prefiere delegar: escoge a mortales y los convierte en Dioses. Nadie ha visto nunca su rostro.",
        foto: "/personajes/El que elige.webp",
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
        foto: "/personajes/Artenón.webp",
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
            { etiqueta: "Complexión", valor: "Alto, delgado y fibroso, de porte imponente" },
            { etiqueta: "Color de piel", valor: "Negra grisácea, recorrida por grietas doradas que brillan como si el tiempo se le escapara por ellas" },
            { etiqueta: "Color de cabello", valor: "Gris plateado, corto y peinado hacia atrás" },
            { etiqueta: "Color de ojos", valor: "Blancos y brillantes, sin pupilas" },
            {
                etiqueta: "Rasgos destacados",
                valor: "Es el Dios del tiempo. ¿Qué más rasgos destacados quieres? XD Bueno, por si acaso: un halo dorado tras la cabeza, un collar con números romanos como la esfera de un reloj, unas enormes alas oscuras y una guadaña dorada.",
            },
        ],
        personalidad: [],
        rol: ["Dios del tiempo"],
        relaciones: [
            "**[[El que elige]]:** Ni siquiera Chronos es capaz de explicar qué había antes del tiempo, cuando El que elige ya existía.",
        ],
        notas: [
            "Es el único Dios que opera de manera independiente: controla el tiempo, y NADA ni NADIE se atreve a manipularlo.",
            "Alterar el tiempo puede tener consecuencias catastróficas a nivel existencial.",
        ],
    },
    {
        id: "carolina",
        nombre: "Carolina",
        epiteto: "La que odiaba ir descalza",
        resumen:
            "Odiaba ir descalza hasta que una Hechicera le propuso un trato: sus pies a cambio de deseos. Hoy es una de las sucesoras de Cristina y la mitad de un amor a tres.",
        foto: "/personajes/Carolina.jpg",
        historias: ["los-deseos-de-mis-pies", "los-pies-de-mi-companera"],
        datosBasicos: [
            { etiqueta: "Edad estimada", valor: "19 años" },
            { etiqueta: "Complexión", valor: "«Un cuerpazo envidiable»" },
            { etiqueta: "Color de piel", valor: "Blanca como la nieve" },
            { etiqueta: "Color de cabello", valor: "Moreno, «un pelazo increíble»" },
            { etiqueta: "Color de ojos", valor: "«Una mirada de ensueño», ojos que muestran pasión (no se indica el color)" },
            { etiqueta: "Rasgos destacados", valor: "Muy amable con la gente. Tras convertirse en sucesora de Cristina, lleva en el pecho el símbolo de una silueta de pie con una espiral de hipnosis." },
            { etiqueta: "Pies", valor: "«Unos pies de ensueño», divinos. Tenía una cicatriz en la planta del pie derecho (se cortó con un cristal), que Cristina hizo desaparecer." },
        ],
        personalidad: [
            "Amable y nada mala persona, pero la más cabezota del mundo cuando se trata de descalzarse: desde el corte en el pie, estar descalza le produce una inseguridad que no soporta (hasta duerme calzada).",
            "No tiene un pelo de tonta. Cuando pierde el miedo se vuelve juguetona, pícara y con un punto de «ama» dulce, pero nunca abusa de los poderes que le prestan. Es leal y agradecida con quienes la cuidan.",
        ],
        relaciones: [
            "**[[lucia-deseos|Lucía]]:** Su mejor amiga, a la que le gritó en clase de voleibol. Tras disculparse con sus pies, acaba siendo su pareja.",
            "**[[Cristina]]:** La Hechicera a la que entrega la propiedad de sus pies. Termina formando parte de su relación.",
            "**[[Silvana]]:** La maestra de Cristina, a la que conoce al final.",
            "**[[Ana]]:** Se le aparece en sueños para proponerle un trato: el aprobado a cambio de usar sus pies como tratamiento.",
        ],
    },
    {
        id: "lucia-deseos",
        nombre: "Lucía",
        epiteto: "La mejor amiga de Carolina",
        resumen:
            "Tímida, muy inteligente y fetichista de pies desde mucho antes que nadie. Ayudó a Carolina a volver a ir descalza y acabó siendo su pareja.",
        foto: "/personajes/Lucía (Los deseos de mis pies).jpg",
        historias: ["los-deseos-de-mis-pies", "los-pies-de-mi-companera"],
        datosBasicos: [
            { etiqueta: "Edad estimada", valor: "20 años (los cumple durante la historia)" },
            { etiqueta: "Rasgos destacados", valor: "Muy inteligente. Hábil con los pies sin necesidad de magia y con un don para los masajes." },
        ],
        personalidad: [
            "Tímida: si hay algo que odia tanto como Carolina odiaba ir descalza, es llamar la atención. Muy inteligente y paciente; nunca obligó a Carolina a darle sus pies y siempre le ofreció ayuda con su trauma.",
            "Fetichista de pies desde antes de la historia, cosa que en clase la convirtió en «el bicho raro». Juguetona en confianza, aunque confiesa que prefiere ser la «esclava» antes que la «ama».",
        ],
        relaciones: [
            "**[[Carolina]]:** Su mejor amiga y, tras su cumpleaños, su pareja.",
            "**[[Cristina]]:** Pasa a ser su segunda ama y parte de la relación.",
            "**[[Silvana]]:** La maestra de Cristina.",
        ],
    },
    {
        id: "silvana",
        nombre: "Silvana",
        epiteto: "La maestra de Cristina",
        resumen:
            "La Hechicera que, años atrás, le ofreció a Cristina un trato a cambio de sus pies y la convirtió en su sucesora. Todavía sigue buscando el amor.",
        foto: "/personajes/Silvana.jpg",
        historias: ["los-deseos-de-mis-pies"],
        datosBasicos: [
            { etiqueta: "Complexión", valor: "Delgada, igual que Cristina" },
            { etiqueta: "Color de piel", valor: "Morena, igual que Cristina" },
            { etiqueta: "Color de cabello", valor: "Bastante más corto que el de Cristina" },
            { etiqueta: "Rasgos destacados", valor: "Aspecto parecido al de Cristina y un rostro igual de dulce." },
            { etiqueta: "Pies", valor: "«Unos pies de ensueño»" },
        ],
        personalidad: [
            "Dulce y tranquila, con una autoridad natural: le basta con aparecer para que la respeten. Orgullosa de su alumna.",
        ],
        rol: [
            "Fue la hechicera de Cristina: se le apareció la noche en que descubrió la infidelidad de su novio, le ofreció un trato a cambio de sus pies y, semanas después, la convirtió en su sucesora.",
            "Aparece al final de la historia para conocer a Carolina y Lucía: es la primera vez en su «raza» que alguien tiene dos sucesoras a la vez.",
        ],
        relaciones: [
            "**[[Cristina]]:** Su antigua alumna y sucesora.",
            "**[[Carolina]] y [[lucia-deseos|Lucía]]:** Las sucesoras de su alumna.",
        ],
        notas: [
            "Explica que las hechiceras tienen dos objetivos: el que marca el símbolo del pecho y encontrar a la persona con quien pasar la vida.",
            "Ella aún sigue buscando el amor (y aclara que, a diferencia de las chicas, no es bi).",
        ],
    },
    {
        id: "ana",
        nombre: "Ana",
        epiteto: "La psicóloga de los pies",
        resumen:
            "Sociable y desesperada por aprobar, descubre el punto débil del chico más temido de la universidad. Acaba siendo psicóloga… con un tratamiento muy especial.",
        foto: "/personajes/Ana.jpg",
        historias: ["los-pies-de-mi-companera"],
        datosBasicos: [
            { etiqueta: "Edad estimada", valor: "24 años (repitió un curso)" },
            { etiqueta: "Altura", valor: "1,70 m" },
            { etiqueta: "Color de cabello", valor: "Rubio" },
            { etiqueta: "Color de ojos", valor: "Azules" },
            { etiqueta: "Rasgos destacados", valor: "Apariencia muy dulce." },
            { etiqueta: "Pies", valor: "Preciosos, con las plantas completamente lisas y unos lindos deditos. Le sudan con el calor y desprenden un olor suave. Para una de sus tardes con Manuel se pintó las uñas de negro." },
        ],
        personalidad: [
            "Muy sociable, el polo opuesto de Manuel. Los estudios le cuestan, sobre todo la teoría. Decidida y astuta («todo el mundo tiene un precio»), pero cautelosa: mide cada paso para no echar a perder su plan.",
            "Su familia tiene problemas económicos y le han advertido de que, si suspende otra vez, tendrá que pagarse la carrera.",
        ],
        rol: [
            "Compañera de Psicología de Manuel. Descubre su fetiche durante un trabajo en parejas y le «receta» el olor de sus pies para sus problemas de ira, a cambio de que la ayude con el examen.",
            "La noche antes del examen, Carolina se le aparece en sueños y le promete la nota máxima y clientes si usa sus pies como tratamiento cuando sea psicóloga. Ana acepta… siempre que pueda trabajar con Manuel.",
        ],
        relaciones: [
            "**[[Manuel]]:** Su «paciente», después su socio en la consulta y, con los meses, su pareja.",
            "**[[Natalia]]:** Su amiga, que no deja de advertirle sobre Manuel.",
            "**[[Carolina]]:** La chica de sus sueños que le propone el trato. Más tarde va a su consulta con [[Cristina]] y [[lucia-deseos|Lucía]].",
        ],
        notas: [
            "Saca un 10 en el examen.",
            "Al final trabaja como psicóloga con Manuel, que gestiona las citas y la web. Les va muy bien y no hay rastro en internet de su «tratamiento».",
        ],
    },
    {
        id: "manuel",
        nombre: "Manuel",
        epiteto: "El chico más temido de la universidad",
        resumen:
            "El primero de la clase y el más temido de la universidad, con un fetiche que nunca se ha atrevido a contar. Hasta que una compañera lo descubre.",
        foto: "/personajes/Manuel.jpg",
        historias: ["los-pies-de-mi-companera"],
        datosBasicos: [
            { etiqueta: "Edad estimada", valor: "23 años" },
            { etiqueta: "Altura", valor: "Casi 2 metros" },
            { etiqueta: "Complexión", valor: "Musculoso: lleva años yendo al gimnasio" },
            { etiqueta: "Color de cabello", valor: "Castaño" },
            { etiqueta: "Color de ojos", valor: "Marrones" },
            { etiqueta: "Rasgos destacados", valor: "Apariencia intimidante y siempre con cara de pocos amigos. Cuando se enfada se le marcan mucho las venas." },
        ],
        personalidad: [
            "Desconfiado hasta de su sombra, sarcástico y poco gentil («Haber estudiado»). Muy aplicado: el primero de su clase.",
            "Tiene serios problemas de ira desde que pasó dos meses en prisión por una denuncia falsa de su ex. Con Ana se va calmando y vuelve a confiar en alguien.",
        ],
        rol: [
            "Fetichista de pies que nunca lo ha contado por miedo a volver a tener problemas. Ana lo descubre y le aplica su «tratamiento» a cambio de ayuda con el examen.",
        ],
        relaciones: [
            "**[[Ana]]:** Su compañera, su «psicóloga», su socia y, finalmente, su pareja.",
            "**[[Natalia]]:** Amiga suya desde la primaria; conoce toda su historia.",
            "**[[Carolina]]:** No cree en ella hasta que lo hace flotar.",
        ],
        notas: [
            "Le hizo atravesar una taquilla de un puñetazo al hijo del director, y media pared de una patada al director. Desde entonces nadie se atreve con él.",
            "Vive solo y su familia no tiene problemas económicos.",
            "Acaba trabajando con Ana en la consulta y siendo su pareja.",
        ],
    },
    {
        id: "natalia",
        nombre: "Natalia",
        epiteto: "La amiga prudente de Ana",
        resumen:
            "La amiga de Ana que conoce a Manuel desde niños y no deja de pedirle que tenga cuidado con él.",
        foto: "/personajes/Natalia.jpg",
        historias: ["los-pies-de-mi-companera"],
        datosBasicos: [
        ],
        personalidad: [
            "Protectora y algo asustadiza: se preocupa mucho por Ana. También un poco cotilla; llega a espiar su conversación con Manuel.",
        ],
        rol: [
            "Advierte a Ana sobre Manuel y le cuenta su pasado: la denuncia falsa, la prisión y sus problemas de ira.",
        ],
        relaciones: [
            "**[[Ana]]:** Su amiga.",
            "**[[Manuel]]:** Fueron amigos en la primaria y la secundaria.",
        ],
        notas: [
            "Nunca llega a enterarse del «tratamiento» de Ana.",
        ],
    },
    {
        id: "jimena",
        nombre: "Jimena",
        epiteto: "La favorita de Cristina",
        resumen:
            "La más aplicada del grupo, a la que no le gustaba ir descalza. Acepta un trato con Cristina para salvar a su madre, huye… y vuelve por voluntad propia.",
        foto: "/personajes/Jimena.jpg",
        historias: ["los-zapatos-en-la-entrada"],
        datosBasicos: [
            { etiqueta: "Altura", valor: "La más bajita del grupo" },
            { etiqueta: "Complexión", valor: "Atractivamente delgada" },
            { etiqueta: "Color de piel", valor: "Blanco casi nuclear" },
            { etiqueta: "Color de cabello", valor: "Le llega a los hombros" },
            { etiqueta: "Rasgos destacados", valor: "Usa gafas." },
            { etiqueta: "Pies", valor: "Blanquitos y muy suaves, con las plantas rosaditas. Cristina, que suele preferir los pies morenos, no sabe explicar qué tienen." },
        ],
        personalidad: [
            "La más aplicada del grupo: no le gusta perder el tiempo. Prudente y desconfiada. No le gustaba andar descalza ni que le tocaran los pies (tuvo un novio fetichista y solo lo permitía cuando estaba de buenas).",
            "Tiene más carácter del que aparenta: es la única que se atreve a negarse a Cristina e incluso a escapar. Cuando vuelve, se entrega con una devoción total.",
        ],
        rol: [
            "Cristina la atrapa con sus pies la primera noche. Le ofrece curar a su madre enferma y que los estudios no le cuesten a cambio de su cuerpo y su voluntad. Jimena acepta, pero escapa en cuanto Cristina baja la guardia.",
            "Al romper el trato, su madre empeora y sus notas se hunden. Vuelve a la casa, devuelve a Cristina a la vida adorando sus pies y se convierte en su «dulce esclava».",
        ],
        relaciones: [
            "**[[Cristina]]:** Su ama («mi pequeña»). Acaba amándola.",
            "**[[Anita]]:** Queda bajo su control desde que Jimena le besa los pies con el pintalabios negro de Cristina.",
            "**[[María]]:** Su compañera de habitación en el piso.",
            "**[[Laura]]:** Su amiga.",
        ],
        notas: [
            "Su madre se cura, Jimena se gradúa y la invita a comer en el mejor restaurante de la ciudad, tal como Cristina le había mostrado en una visión.",
            "Al final vive con las demás y con Cristina en la casa de campo.",
        ],
    },
    {
        id: "anita",
        nombre: "Anita",
        epiteto: "La que soñaba con ser adorada",
        resumen:
            "Adoraba ir descalza, pero nadie quería probar sus pies. Un beso de Jimena la deja bajo su control… y, al final, por fin la adoran a ella.",
        foto: "/personajes/Anita.jpg",
        historias: ["los-zapatos-en-la-entrada"],
        datosBasicos: [
            { etiqueta: "Altura", valor: "Estatura estándar para su edad" },
            { etiqueta: "Complexión", valor: "Buen físico" },
            { etiqueta: "Color de piel", valor: "Muy morena" },
            { etiqueta: "Color de cabello", valor: "Algo más corto que el de Jimena" },
            { etiqueta: "Rasgos destacados", valor: "No necesita gafas. Se llama Ana, pero sus amigas la llaman «Anita»." },
            { etiqueta: "Pies", valor: "Morenitos y lisos." },
        ],
        personalidad: [
            "Adora andar descalza y lo hace siempre que puede, pero nadie quiere probar sus pies, ni siquiera sus amigas. Valiente («somos 4, nos tenemos las unas a las otras») y preocupada por las demás.",
            "Bajo el hechizo es una sumisa ejemplar, aunque en el fondo siempre deseó estar al otro lado: ser la adorada.",
        ],
        rol: [
            "Cristina hace que Jimena le bese los pies con su pintalabios negro. Desde entonces, cada noche, las marcas de esos besos la llevan en trance hasta Jimena, su ama.",
            "Es la primera en apoyar a Jimena cuando decide volver a la casa: «a fin de cuentas, también estoy hechizada».",
        ],
        relaciones: [
            "**[[Jimena]]:** Su ama.",
            "**[[Cristina]]:** La causante de su hechizo.",
            "**[[Laura]]:** Su compañera de habitación en el piso.",
            "**[[María]]:** Su amiga.",
        ],
        notas: [
            "Como premio por ser tan buena esclava, Jimena por fin le adora los pies, y Anita descubre que quiere más.",
        ],
    },
    {
        id: "maria",
        nombre: "María",
        epiteto: "La que solo quería un buen masaje",
        resumen:
            "La mayor y la más sensata del grupo. Solo pedía un buen masaje de pies; lo que recibió fue a Cristina viviendo en su piso.",
        foto: "/personajes/María.jpg",
        historias: ["los-zapatos-en-la-entrada"],
        datosBasicos: [
            { etiqueta: "Edad estimada", valor: "La mayor del grupo; le faltan pocos años para terminar la carrera" },
            { etiqueta: "Altura", valor: "Algo más baja que Anita y más alta que Jimena" },
            { etiqueta: "Color de piel", valor: "Morena" },
            { etiqueta: "Rasgos destacados", valor: "Tiene carnet de conducir y coche propio." },
            { etiqueta: "Pies", valor: "Ya se los habían adorado antes. Lo que de verdad le gusta es un buen masaje." },
        ],
        personalidad: [
            "Sensata y avispada: la que propone los planes y media entre las demás. Termina harta de los berrinches de Laura.",
            "Confía en Cristina antes que nadie y no le importa estar «medio hipnotizada» si eso le da la paz que no sentía desde hacía tiempo.",
        ],
        rol: [
            "Propone el plan para volver a la casa y deja que Cristina se mude al piso con sus condiciones: pagar su parte y no hacerle nada «si no se lo pide».",
            "Tras el masaje que tanto quería, deja que Cristina conecte con el piso, se entrega a ella y recibe el poder de hipnotizar a Laura con sus pies.",
        ],
        relaciones: [
            "**[[Cristina]]:** Su ama, a la que defiende delante de Laura.",
            "**[[Laura]]:** Su esclava.",
            "**[[Jimena]]:** Su compañera de habitación.",
            "**[[Anita]]:** Su amiga.",
        ],
        notas: [
            "Su miedo a que el grupo se separe al graduarse hace que Cristina les consiga trabajos cerca y les ofrezca su casa de campo.",
        ],
    },
    {
        id: "laura",
        nombre: "Laura",
        epiteto: "La última en rendirse",
        resumen:
            "La que propuso la excursión y la única que se negó a entregarse a Cristina… hasta que un plato de sukiyaki y un poco de cariño la hicieron rendirse.",
        foto: "/personajes/Laura.jpg",
        historias: ["los-zapatos-en-la-entrada"],
        datosBasicos: [
            { etiqueta: "Edad estimada", valor: "La de en medio del grupo" },
            { etiqueta: "Color de piel", valor: "Más morena que Jimena, pero más blanca que Anita y María" },
            { etiqueta: "Rasgos destacados", valor: "Usa gafas. Su plato favorito es el sukiyaki." },
            { etiqueta: "Pies", valor: "Le gusta andar descalza. Se los habían adorado un par de veces y ha mandado muchas fotos." },
        ],
        personalidad: [
            "La más abierta en cuanto a relaciones. Desconfiada y terca: se niega a entregarse a «eso» y le pide a Cristina que la deje en paz.",
            "Su rechazo se convierte en envidia y en la sensación de que la han abandonado. En el fondo, solo quería sentirse querida como las demás.",
        ],
        rol: [
            "Propone la excursión al campo. Es la única que se opone a que Cristina se quede en el piso y la que más la enfrenta.",
            "Hambrienta y sola, acepta el sukiyaki que Cristina le lleva a la cama y se rinde: se convierte en la esclava de María.",
        ],
        relaciones: [
            "**[[María]]:** Su ama.",
            "**[[Cristina]]:** De su mayor rechazo a su consuelo.",
            "**[[Anita]]:** Su compañera de habitación.",
            "**[[Jimena]]:** Su amiga.",
        ],
        notas: [
            "Al final descubre que aquello «no está tan mal como pensaba».",
        ],
    },
    {
        id: "nicolas",
        nombre: "Nicolás",
        epiteto: "El siervo leal de Pedalina",
        resumen:
            "Objetivo de burlas por un fetiche que confió a la persona equivocada. Su lealtad a los pies llamó la atención de una Diosa y de su ángel de la guarda.",
        foto: "/personajes/Nicolás.jpg",
        historias: ["la-diosa-de-los-pies"],
        datosBasicos: [
            { etiqueta: "Edad estimada", valor: "20 años" },
            { etiqueta: "Altura", valor: "Estatura media" },
            { etiqueta: "Complexión", valor: "Bastante delgado" },
            { etiqueta: "Color de cabello", valor: "Pelirrojo" },
            { etiqueta: "Color de ojos", valor: "Verdes" },
            { etiqueta: "Rasgos destacados", valor: "Expresión bastante seria todo el tiempo. Le llaman «Nic»." },
        ],
        personalidad: [
            "Serio, paciente y buena persona; buen estudiante. Aguanta las burlas sin buscar problemas y desconfía de los desconocidos.",
            "Nunca abandona el fetiche, aunque le haya traído problemas: hasta tiene un «altar digital» en su ordenador. Bajo la hipnosis de Pedalina se desata, y después le queda un conflicto interno por ello.",
        ],
        rol: [
            "Una compañera difundió en la universidad la conversación en la que le confió su fetiche. Pedalina, que lo tenía asignado como súbdito, decide recompensar su lealtad.",
            "Con la ayuda de Naiara y Pedalina, convierte una fiesta de pijamas en una fiesta de pies y hace que Mariluz cumpla la promesa que le hizo.",
        ],
        relaciones: [
            "**[[Naiara]]:** Su ángel de la guarda y, después, su novia.",
            "**[[Pedalina]]:** Su Diosa.",
            "**[[Mariluz]]:** Le prometió sus pies y se echó atrás; acaba siendo su «esclava».",
        ],
        notas: [
            "Al final entrega su cuerpo y alma a Pedalina sin abandonar a su familia ni a sus amigos, y puede visitar el paraíso de la Diosa siempre que quiera.",
        ],
    },
    {
        id: "naiara",
        nombre: "Naiara",
        epiteto: "El ángel de la guarda",
        resumen:
            "El ángel de la guarda que Pedalina creó para Nicolás. Lo observó durante años, lo llevó ante su Diosa… y acabó enamorándose de él.",
        foto: "/personajes/Naiara.jpg",
        historias: ["la-diosa-de-los-pies"],
        datosBasicos: [
            { etiqueta: "Complexión", valor: "Muy delgada y atractiva" },
            { etiqueta: "Color de piel", valor: "Muy clara" },
            { etiqueta: "Color de cabello", valor: "Largo y oscuro" },
            { etiqueta: "Color de ojos", valor: "Grandes, llamativos y de un azul precioso" },
            { etiqueta: "Rasgos destacados", valor: "En su forma de ángel viste una túnica blanca, tiene alas y un halo." },
            { etiqueta: "Pies", valor: "Muy suaves, con un olor «ni muy suave ni muy fuerte, simplemente ideal»." },
        ],
        personalidad: [
            "Dulce, traviesa y muy protectora con Nicolás. Lo calma con un abrazo o un beso en la mejilla, y no tiene miedo de lanzarse cuando algo le importa.",
        ],
        rol: [
            "Pedalina la creó para ser el ángel de la guarda de Nicolás. Tras años comprobando su lealtad, se le presenta y lo lleva al país de los Dioses.",
            "Puede abrir portales, fusionarse con Nicolás, copiar la personalidad de otra persona y teletransportarse.",
        ],
        relaciones: [
            "**[[Nicolás]]:** Su protegido y, después, su novio.",
            "**[[Pedalina]]:** Su creadora.",
        ],
        notas: [
            "Pedalina hace que aparezca registrada en todos los sitios necesarios para que pueda quedarse en la Tierra con Nicolás, sin dejar de ser un ángel.",
        ],
    },
    {
        id: "mariluz",
        nombre: "Mariluz",
        epiteto: "La promesa sin cumplir",
        resumen:
            "Le prometió a Nicolás fotos de sus pies y un masaje, y se echó atrás. Ahora la promesa se cumple… a su manera.",
        foto: "/personajes/Mariluz.jpg",
        historias: ["la-diosa-de-los-pies"],
        datosBasicos: [
            { etiqueta: "Pies", valor: "Hermosos. Aunque no huelen mucho, le sudan bastante. Era extremadamente cosquillosa, hasta que Nicolás le quitó las cosquillas." },
        ],
        personalidad: [
            "Al principio, evasiva: pone excusas una y otra vez hasta decir que no se siente cómoda.",
            "Tras la hipnosis de Nicolás se vuelve sumisa, obediente y algo obsesiva, y adora andar descalza.",
        ],
        rol: [
            "Le prometió a Nicolás fotos de sus pies y un masaje y acabó echándose atrás. Nicolás, influido por la hipnosis de Pedalina, la hace cumplir su promesa y la deja hipnotizada.",
        ],
        relaciones: [
            "**[[Nicolás]]:** Su «amo».",
        ],
        notas: [
            "Abre una cuenta de pago con fotos de sus pies y le manda a Nicolás todas las fotos gratis.",
            "Visita de vez en cuando a Nicolás para que adore sus pies.",
        ],
    },
    {
        id: "lilith",
        nombre: "Lilith",
        epiteto: "La modelo gótica",
        resumen:
            "Modelo de pies, gótica y fetichista, cansada de que ningún fotógrafo quiera adorarla. Hasta que su deseo llega a oídos de Pedalina.",
        foto: "/personajes/Lilith.jpg",
        historias: ["solo-una-foto-mas"],
        datosBasicos: [
            { etiqueta: "Edad estimada", valor: "22 años" },
            { etiqueta: "Color de cabello", valor: "Largo, liso y verde oscuro" },
            { etiqueta: "Rasgos destacados", valor: "Maquillaje intenso de color negro, ojos delineados y labios negros. Siempre tiene una expresión tranquila con una leve sonrisa." },
            { etiqueta: "Pies", valor: "Uñas oscuras y plantas perfectamente arqueadas. Suele llevar medias, que acaban empapadas de sudor dentro de sus botas." },
        ],
        personalidad: [
            "Gótica y fetichista de pies, le encanta tener el control. Puede ponerse en modo «niña enrabietada» cuando no se sale con la suya.",
            "Detrás de todo hay mucha soledad: su familia la echó de casa cuando expresó su deseo de ser una gótica fetichista.",
        ],
        rol: [
            "Modelo de la revista «con-soles», que mezcla videojuegos y fetiche de pies. Le han cambiado el fotógrafo tantas veces que su jefe le pide que se controle.",
            "Se enamora a primera vista de John, su nuevo fotógrafo, y desea poder enamorarlo con sus pies. Pedalina escucha el deseo y le da el poder de hipnotizar con ellos.",
        ],
        relaciones: [
            "**[[John]]:** Su fotógrafo, después su sumiso y su compañía.",
            "**[[Pedalina]]:** La Diosa que le concede su deseo.",
        ],
        notas: [
            "Pedalina le promete que conocerá a su ángel de la guarda, [[Ainoa]], «en otra historia».",
        ],
    },
    {
        id: "john",
        nombre: "John",
        epiteto: "El fotógrafo",
        resumen:
            "El fotógrafo más guapo que ha tenido Lilith… y el que menos quería estar allí. Hasta que ella le pidió «solo una foto más».",
        foto: "/personajes/John.jpg",
        historias: ["solo-una-foto-mas"],
        datosBasicos: [
            { etiqueta: "Color de cabello", valor: "Negro, liso y bien cortado, con un flequillo que le enmarca el rostro" },
            { etiqueta: "Color de ojos", valor: "Claros, de mirada intensa y seria" },
            { etiqueta: "Rasgos destacados", valor: "Apariencia juvenil, con rasgos finos y simétricos. Expresión tranquila, casi impasible." },
        ],
        personalidad: [
            "Serio y profesional. No le parece bien la revista, pero necesitaba un trabajo. Bajo los pies de Lilith se vuelve devoto y entregado.",
        ],
        rol: [
            "El nuevo fotógrafo de Lilith. Con el poder que le concede Pedalina, ella lo hipnotiza durante una sesión y lo convierte en su sumiso.",
        ],
        relaciones: [
            "**[[Lilith]]:** Su ama y su pareja.",
        ],
    },
    {
        id: "ainoa",
        nombre: "Ainoa",
        epiteto: "El ángel de la guarda de Lilith",
        resumen:
            "Vela por Lilith desde el reino de Pedalina, aunque ella ni siquiera sabe que existe. Pronto se conocerán.",
        foto: "/personajes/Ainoa.jpg",
        historias: ["solo-una-foto-mas"],
        datosBasicos: [],
        personalidad: [
            "Práctica y directa: cuando Pedalina le pide consejo, se lo piensa unos segundos y propone la solución más sencilla.",
        ],
        rol: [
            "Pedalina la llama para preguntarle cómo aparecerse ante Lilith sin asustarla. Ainoa le sugiere escribirle un mensaje diciendo que su jefe le ha dado su contacto.",
        ],
        relaciones: [
            "**[[Lilith]]:** Su protegida, que aún no sabe que existe.",
            "**[[Pedalina]]:** Le pide consejo y se despide de ella con un beso en la mejilla.",
        ],
        notas: [
            "Pedalina le promete a Lilith que conocerá a su ángel de la guarda «en otra historia».",
        ],
    },
    {
        id: "manuela",
        nombre: "Manuela",
        epiteto: "La bruja",
        resumen:
            "Una bruja que, en un autobús, encontró al conejillo de indias perfecto para sus pociones. Lo que no esperaba era acabar enamorándose de él.",
        foto: "/personajes/Manuela.jpg",
        historias: ["a-los-pies-de-la-bruja"],
        datosBasicos: [
            { etiqueta: "Edad estimada", valor: "Aparenta una edad similar a la de Jorge (26 años)" },
            { etiqueta: "Altura", valor: "Bastante alta" },
            { etiqueta: "Complexión", valor: "Considerablemente delgada" },
            { etiqueta: "Color de cabello", valor: "Rubio" },
            { etiqueta: "Color de ojos", valor: "El iris se vuelve completamente rojo cuando usa su magia" },
            { etiqueta: "Pies", valor: "Suele llevar medias negras empapadas en sudor, con un olor fuerte que puede potenciar con sus pociones." },
        ],
        personalidad: [
            "Sádica y dominante, de las que dejan todo para el último momento. Celebra como una niña cuando algo le sale bien.",
            "Bajo esa dureza hay una parte que acaba asomando: cuando Jorge la salva, se rompe y le pide ser su novia.",
        ],
        rol: [
            "Estudiante de una escuela de brujas. Secuestra a Jorge para usarlo como esclavo y conejillo de indias para sus pociones de resistencia.",
            "Puede leer mentes, controlar el cuerpo de otros, encoger a la gente con pociones, hechizar sus medias y calcetines y plegar su casa en una maleta.",
        ],
        relaciones: [
            "**[[Jorge]]:** Su esclavo y, después, su pareja.",
            "**[[Sofía]]:** Su compañera envidiosa; no se soportan.",
        ],
        notas: [
            "Saca un 10 en su examen gracias a algo que Jorge notó: su poción hacía que el mismo golpe doliera cada vez menos.",
            "Lo enamora con un pintalabios negro y lo vuelve fetichista con una poción. Después le devuelve su vida, se va a vivir con él y entra a trabajar en su empresa (en marketing, con un poco de magia).",
        ],
    },
    {
        id: "jorge",
        nombre: "Jorge",
        epiteto: "El esclavo a domicilio",
        resumen:
            "El chico más amable del barrio dejó que una desconocida se durmiera en su hombro. Así empezó todo.",
        foto: "/personajes/Jorge.jpg",
        historias: ["a-los-pies-de-la-bruja"],
        datosBasicos: [
            { etiqueta: "Edad estimada", valor: "26 años" },
            { etiqueta: "Altura", valor: "Alto" },
            { etiqueta: "Complexión", valor: "Bastante musculoso" },
            { etiqueta: "Color de cabello", valor: "Moreno" },
            { etiqueta: "Rasgos destacados", valor: "Fuerza descomunal cuando se enfada: rompe cadenas y vence a una bruja sin magia." },
        ],
        personalidad: [
            "Muy amable, con fama de filántropo allá donde vive. Sarcástico incluso en los peores momentos, y buen cocinero.",
            "Por las crisis que ha pasado como programador sabe aislar su mente por completo. Acumula mucha ira que, cuando estalla, es temible.",
        ],
        rol: [
            "Programador. Manuela lo hechiza en un autobús y lo convierte en su esclavo y conejillo de indias.",
            "Cuando Sofía ataca a Manuela, Jorge se niega a cambiar una bruja por otra y la derrota él solo.",
        ],
        relaciones: [
            "**[[Manuela]]:** Su ama, su captora y, al final, su pareja.",
            "**[[Sofía]]:** La bruja a la que derrota.",
        ],
        notas: [
            "No le gustaban los pies hasta que Manuela le dio su poción. Al final es él quien le pide que lo domine con ellos.",
            "Manuela le pone una marca invisible en el pecho para que ninguna bruja se atreva a hacerle daño.",
        ],
    },
    {
        id: "sofia",
        nombre: "Sofía",
        epiteto: "La bruja envidiosa",
        resumen:
            "La compañera de clase de Manuela, que no soporta que le vaya bien. Su insistencia la lleva hasta la casa de Manuela… y hasta los puños de Jorge.",
        foto: "/personajes/Sofía.jpg",
        historias: ["a-los-pies-de-la-bruja"],
        datosBasicos: [
            { etiqueta: "Edad estimada", valor: "La misma que Manuela" },
            { etiqueta: "Color de cabello", valor: "Pelirrojo" },
            { etiqueta: "Color de ojos", valor: "Azules" },
            { etiqueta: "Rasgos destacados", valor: "Su cuerpo «no es tan envidiable» como el de Manuela." },
        ],
        personalidad: [
            "Envidiosa, extremadamente cabezona e insistente. Nunca ha soportado que a Manuela le vaya algo bien.",
        ],
        rol: [
            "Sospecha de Manuela tras el examen, encuentra su casa y la ataca al descubrir que experimenta con un humano. Jorge la derrota.",
            "Usa magia de fuego, bolas de energía, telequinesis y una serpiente que le sale del brazo.",
        ],
        relaciones: [
            "**[[Manuela]]:** Su compañera y rival.",
            "**[[Jorge]]:** El humano sin magia que la derrota.",
        ],
        notas: [
            "Manuela le borra los recuerdos de los dos últimos días, la cura y la teletransporta lejos de su casa.",
        ],
    },
    {
        id: "gwen",
        nombre: "Gwen",
        epiteto: "Spider-Woman",
        resumen:
            "Gwen Stacy, distante por fuera y heroína por las noches. Un descuido le descubre su secreto a su compañero de habitación, y con él vuelve a dejarse querer.",
        foto: "/personajes/Gwen.jpg",
        historias: ["a-los-pies-de-spider-gwen"],
        datosBasicos: [
            { etiqueta: "Complexión", valor: "Bastante delgada" },
            { etiqueta: "Color de piel", valor: "Pálida" },
            { etiqueta: "Color de cabello", valor: "Rubio, con flequillo" },
            { etiqueta: "Rasgos destacados", valor: "Mirada seria, parcialmente escondida por el flequillo. De noche patrulla como Spider-Woman, con un traje rosa y blanco." },
            { etiqueta: "Pies", valor: "Le encanta estar descalza. Puede adherirse con ellos y es muy cosquillosa." },
        ],
        personalidad: [
            "Distante y seca al principio: desde que perdió a su mejor amigo decidió no volver a sentir nada por nadie para evitar distracciones.",
            "Cuando se abre, es juguetona, traviesa y muy protectora. En el instituto se desahogaba tocando la batería.",
        ],
        rol: [
            "Estudiante universitaria y Spider-Woman. Su compañero de habitación, Leo, la descubre volviendo de patrullar; para agradecerle que guarde el secreto, le ofrece sus pies.",
            "Cuando el Duende Verde casi mata a Leo, despierta en ella un poder nuevo: hipnotizar con la mirada, con una luz rosa y plateada.",
        ],
        relaciones: [
            "**[[Leo]]:** Su compañero de habitación y, después, su pareja.",
            "**Peter Parker:** Su mejor amigo, que murió tras convertirse en el Lagarto.",
        ],
        notas: [
            "Se enfrenta a Scorpion y al Duende Verde.",
            "Al final encuentra un piso pequeño, lejos del campus, para irse a vivir con Leo.",
        ],
    },
    {
        id: "leo",
        nombre: "Leo",
        epiteto: "El compañero de habitación",
        resumen:
            "Recién llegado a la universidad y apasionado de la programación. Le tocó compartir habitación con la chica más distante del campus… y con su mayor secreto.",
        foto: "/personajes/Leo.jpg",
        historias: ["a-los-pies-de-spider-gwen"],
        datosBasicos: [
            { etiqueta: "Rasgos destacados", valor: "Siempre lleva encima una pluma… para las cosquillas." },
        ],
        personalidad: [
            "Educado, amable y leal: promete guardar el secreto de Gwen sin pedir nada a cambio. Fetichista de pies, aunque al principio no se atreve a decir nada.",
            "Puede ser algo pillo, y es capaz de romper una promesa si cree que Gwen está en peligro.",
        ],
        rol: [
            "Su nombre completo es Leo Paredes. Le encanta la programación y entra en la prestigiosa universidad «Variables perdidas», donde comparte habitación con Gwen.",
            "Descubre que es Spider-Woman. El Duende Verde lo usa contra ella y lo estrella contra un edificio, y sobrevive de milagro.",
        ],
        relaciones: [
            "**[[Gwen]]:** Su compañera de habitación y, después, su pareja.",
        ],
        notas: [
            "Pasa meses en el hospital con conmoción cerebral y costillas rotas.",
            "Al final se va a vivir con Gwen.",
        ],
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
