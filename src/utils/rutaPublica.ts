// Las imágenes de public/ se escriben en los datos como "/personajes/Lucía.webp".
// En GitHub Pages la web vive en "/feet5145-web/", así que hay que anteponer esa base.
export function rutaPublica(ruta: string) {
    return import.meta.env.BASE_URL + ruta.replace(/^\//, "");
}
