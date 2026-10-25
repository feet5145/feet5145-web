// Guiños: detalles escondidos por la web. Cada visitante va descubriéndolos y la sección
// «Guiños descubiertos» de la portada lleva la cuenta (se guarda solo en su navegador).
// El «id» lo usa el código para desbloquear cada uno: no lo cambies.
//   titulo: nombre del guiño, visible al descubrirlo.
//   pista: lo único que se ve mientras está sin descubrir.
//   descripcion: lo que se cuenta cuando ya está descubierto.
export type Guino = {
    id: GuinoId;
    titulo: string;
    pista: string;
    descripcion: string;
};

export type GuinoId =
    | "desvio"
    | "ausencia"
    | "mirada"
    | "consola"
    | "santuario"
    | "descalzo"
    | "hipnosis"
    | "chasquido"
    | "puchero"
    | "quietud";

export const guinos: Guino[] = [
    {
        id: "mirada",
        titulo: "Has mirado la espiral fijamente",
        pista: "Hay una espiral que habla… si la miras sin prisa.",
        descripcion: "Dejaste el ratón sobre la huella de la portada hasta que te susurró algo.",
    },
    {
        id: "ausencia",
        titulo: "Pedalina te ha echado de menos",
        pista: "A veces, irse un momento también cuenta.",
        descripcion: "Te fuiste a otra pestaña y, al volver, ella ya te estaba llamando.",
    },
    {
        id: "desvio",
        titulo: "Te has desviado de tu camino",
        pista: "No todos los caminos llevan a alguna parte… o eso crees.",
        descripcion: "Llegaste a una página que no existe, y Pedalina te consoló.",
    },
    {
        id: "consola",
        titulo: "Has hablado con Pedalina en su idioma",
        pista: "Los más curiosos miran donde nadie mira… y se atreven a responder.",
        descripcion: "Abriste la consola del navegador y la llamaste por su nombre.",
    },
    {
        id: "santuario",
        titulo: "Has encontrado el santuario",
        pista: "Algunas puertas solo se abren si no las sueltas.",
        descripcion: "Mantuviste pulsada la huella hasta que la espiral te llevó dentro.",
    },
    {
        id: "descalzo",
        titulo: "Te has descalzado",
        pista: "Hay sitios donde no se entra de cualquier manera.",
        descripcion: "Dejaste los zapatos en la entrada del santuario.",
    },
    {
        id: "hipnosis",
        titulo: "Pedalina te ha hipnotizado",
        pista: "Cuenta despacio… hasta cinco.",
        descripcion: "Contaste sus deditos uno a uno hasta que las espirales despertaron.",
    },
    {
        id: "chasquido",
        titulo: "Has despertado con un chasquido",
        pista: "Todo trance tiene su final… si te dejas llevar hasta él.",
        descripcion: "Te quedaste hasta el final y ella te despertó con dulzura.",
    },
    {
        id: "puchero",
        titulo: "Pedalina ha hecho un puchero",
        pista: "No todas las salidas sientan igual de bien.",
        descripcion: "Te escapaste del santuario con la tecla Esc, y Pedalina hizo un puchero.",
    },
    {
        id: "quietud",
        titulo: "Qué bien te portas",
        pista: "A veces, el premio es no hacer nada.",
        descripcion: "Te quedaste en el santuario sin moverte, y ella te lo agradeció.",
    },
];
