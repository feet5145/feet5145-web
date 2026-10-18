# Pendientes

## Imágenes
- [ ] Fondo de Inicio: `public/fondos/inicio.jpg`
- [x] Portadas de historias en `public/portadas/` (`<id>.jpg`, ver `src/data/historias.ts`)
- [ ] Fotos de personajes en `public/personajes/` (`Pedalina.png`, `Cristina.png`, `Marina.jpg`, `El que elige.jpg`, `Clara.jpg`, `Tomás.jpg`, `Lucía.jpg`, `Maya.jpg`, `Carmen.jpg`, `Artenón.jpg`, `Chronos.webp`, …)

## Historias
- [x] Completar descripción y etiquetas de todas las historias
- [x] Añadir los enlaces de Inkitt de cada historia (campo `enlace`)
- [x] Página con todas las historias (`/historias`)

## Personajes
- [ ] Fichas del resto de personajes (Carolina, la Lucía de «Los deseos de mis pies», Silvana, …)
- [x] Página con todos los personajes (`/personajes`) y fichas completas (`/personajes/<id>`)

## Novedades
- [ ] Sustituir las novedades de ejemplo por reales (`src/data/novedades.ts`)
- [x] Página con todas las novedades (`/novedades`)

## Enlaces
- [ ] Rellenar las URL de Inkitt, las dos cuentas de Wattpad y Discord, y el ID de Session (`src/data/enlaces.ts`)

## Pie de página
- [x] Añadir la URL del repositorio de GitHub (`URL_REPOSITORIO` en `src/components/layout/Footer.tsx`)

## Retoques finales
- [ ] Revisión general en móvil, metadatos de la página y favicon
- [ ] Al publicar: configurar el hosting para que todas las rutas sirvan `index.html` (si no, `/personajes` da 404 al recargar)
