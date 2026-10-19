export type Icono = "libro" | "chat" | "candado" | "descarga" | "camara";

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
    // Identificador que se copia al portapapeles (por ejemplo, el ID de Session o un usuario de Discord).
    // `textoBoton` cambia el texto del botón (por defecto, «Copiar ID»).
    | (EnlaceBase & {
          tipo: "id";
          valor: string;
          textoBoton?: string;
          ayuda?: { texto: string; url: string };
      });

// TODO: rellenar el ID de Session.
export const enlaces: Enlace[] = [
    {
        tipo: "url",
        nombre: "Inkitt",
        descripcion:
            "Donde publico ahora mismo. Es la plataforma que menos problemas da a la hora de publicar este tipo de historias.",
        icono: "libro",
        url: "https://www.inkitt.com/feet5145",
        destacado: true,
    },
    {
        tipo: "url",
        nombre: "Descargar historias",
        descripcion:
            "Todas las historias terminadas, listas para descargar. Mi copia de seguridad por si las plataformas fallan.",
        icono: "descarga",
        url: "https://drive.proton.me/urls/1YVCA6QWPR#aVLzc82ctvZl",
    },
    {
        tipo: "url",
        nombre: "Wattpad",
        descripcion: "Mi cuenta principal de Wattpad, donde escribo.",
        icono: "libro",
        url: "https://www.wattpad.com/user/feet5145_backup",
    },
    {
        tipo: "url",
        nombre: "Wattpad (lectura)",
        descripcion: "Cuenta de respaldo, solo de lectura, por si acaso.",
        icono: "libro",
        url: "https://www.wattpad.com/user/feet5145_readonly",
    },
    {
        tipo: "url",
        nombre: "Instagram",
        descripcion: "No le doy mucho uso, pero la tengo por si acaso.",
        icono: "camara",
        url: "https://www.instagram.com/feet_5145/",
    },
    {
        tipo: "id",
        nombre: "Discord",
        descripcion: "Mi cuenta para charlar. Puedo tardar en responder.",
        icono: "chat",
        valor: "feet5145",
        textoBoton: "Copiar usuario",
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
