# Pendientes

## Imágenes
- [ ] Fondo de Inicio: `public/fondos/inicio.jpg`
- [ ] Portadas de historias en `public/portadas/` (`<id>.jpg`, ver `src/data/historias.ts`)
- [ ] Fotos de personajes en `public/personajes/` (`Pedalina.png`, `Cristina.png`, `Marina.jpg`, `El que elige.jpg`, …)

## Historias
- [ ] Completar descripción y etiquetas de «Castigo de pies», «Castigo de pies parte 2», «Solo una foto más», «Los deseos de mis pies», «Los pies de mi compañera» y «Pedalina»
- [ ] Añadir los enlaces de Inkitt de cada historia (campo `enlace`)
- [x] Página con todas las historias (`/historias`)
- [ ] Imagen de las líneas temporales (Obsidian Canvas): exportarla a `public/lineas-temporales.png`

## Personajes
- [ ] Fichas del resto de personajes (Artenón, Carolina, Lucía, Silvana, …)
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
