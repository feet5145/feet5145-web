export type Icono = "libro" | "chat" | "candado";

type EnlaceBase = {
    nombre: string;
    descripcion: string;
    icono: Icono;
    // Solo uno debería ir destacado: se muestra grande, encima del resto.
    destacado?: boolean;
};

export type Enlace =
    // Enlace normal a una web. Si la url está vacía, se muestra como «Próximamente».
    | (EnlaceBase & { tipo: "url"; url: string })
    // Identificador que se copia al portapapeles (por ejemplo, el ID de Session).
    | (EnlaceBase & { tipo: "id"; valor: string; ayuda?: { texto: string; url: string } });

// TODO: rellenar las url y el ID de Session.
export const enlaces: Enlace[] = [
    {
        tipo: "url",
        nombre: "Inkitt",
        descripcion:
            "Donde publico ahora mismo. Es la plataforma que menos problemas da a la hora de publicar este tipo de historias.",
        icono: "libro",
        url: "",
        destacado: true,
    },
    {
        tipo: "url",
        nombre: "Wattpad",
        descripcion: "Mi cuenta principal de Wattpad, donde escribo.",
        icono: "libro",
        url: "",
    },
    {
        tipo: "url",
        nombre: "Wattpad (lectura)",
        descripcion: "Cuenta de respaldo, solo de lectura, por si acaso.",
        icono: "libro",
        url: "",
    },
    {
        tipo: "url",
        nombre: "Discord",
        descripcion: "Mi cuenta para charlar. Puedo tardar en responder.",
        icono: "chat",
        url: "",
    },
    {
        tipo: "id",
        nombre: "Session",
        descripcion: "Mensajería privada que funciona con un ID. Por si Discord deja de estar disponible.",
        icono: "candado",
        valor: "",
        ayuda: { texto: "¿No conoces Session?", url: "https://getsession.org" },
    },
];
