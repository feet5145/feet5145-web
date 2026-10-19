"""Optimiza las imágenes de public/ para la web: `pnpm imagenes`.

- Convierte a WebP y reduce al ancho máximo de cada carpeta las imágenes nuevas
  (o las WebP demasiado grandes).
- Mueve el original a imagenes-originales/ (ignorada por git), por si hace falta.
- Cambia la ruta en src/ (por ejemplo "/personajes/Lucía.jpg" → "/personajes/Lucía.webp").
- A partir de perfil, genera también public/vista-previa.jpg (la imagen al compartir el enlace).

Necesita Python 3 con Pillow.
"""
import pathlib
import shutil
import sys

from PIL import Image, ImageOps

RAIZ = pathlib.Path(__file__).resolve().parent.parent
PUBLIC = RAIZ / "public"
ORIGINALES = RAIZ / "imagenes-originales"
EXTENSIONES = {".jpg", ".jpeg", ".png", ".webp"}
CALIDAD = 82

# Ancho máximo en píxeles: el doble de lo que ocupan en pantalla (para pantallas de alta densidad).
ANCHOS = {
    "portadas": 640,
    "personajes": 640,
    "fondos": 1920,
}
PERFIL_ANCHO = 240
VISTA_PREVIA_ANCHO = 600


def reducir(img: Image.Image, ancho: int) -> Image.Image:
    img = ImageOps.exif_transpose(img)
    if img.mode not in ("RGB", "RGBA"):
        img = img.convert("RGBA" if "A" in img.getbands() else "RGB")
    if img.width > ancho:
        img = img.resize((ancho, round(img.height * ancho / img.width)), Image.LANCZOS)
    return img


def actualizar_rutas(vieja: str, nueva: str) -> list[str]:
    cambiados = []
    for archivo in list((RAIZ / "src").rglob("*.ts")) + list((RAIZ / "src").rglob("*.tsx")):
        texto = archivo.read_text(encoding="utf-8")
        if f'"{vieja}"' in texto:
            archivo.write_text(texto.replace(f'"{vieja}"', f'"{nueva}"'), encoding="utf-8")
            cambiados.append(str(archivo.relative_to(RAIZ)))
    return cambiados


def kb(ruta: pathlib.Path) -> str:
    return f"{ruta.stat().st_size / 1024:.0f} KB"


def optimizar(origen: pathlib.Path, ancho: int) -> bool:
    if origen.suffix.lower() not in EXTENSIONES:
        return False
    with Image.open(origen) as img:
        if origen.suffix.lower() == ".webp" and img.width <= ancho:
            return False
        nueva = reducir(img, ancho)

    destino = origen.with_suffix(".webp")
    relativa = origen.relative_to(PUBLIC)
    copia = ORIGINALES / relativa
    copia.parent.mkdir(parents=True, exist_ok=True)
    antes = kb(origen)
    shutil.move(origen, copia)
    nueva.save(destino, "WEBP", quality=CALIDAD, method=6)

    vieja_url = "/" + relativa.as_posix()
    nueva_url = "/" + destino.relative_to(PUBLIC).as_posix()
    cambiados = actualizar_rutas(vieja_url, nueva_url) if vieja_url != nueva_url else []
    print(f"✔ {relativa}: {antes} → {kb(destino)}" + (f"  (ruta cambiada en {', '.join(cambiados)})" if cambiados else ""))
    return True


def main() -> int:
    hechas = 0
    for carpeta, ancho in ANCHOS.items():
        for origen in sorted((PUBLIC / carpeta).glob("*")):
            hechas += optimizar(origen, ancho)

    perfiles = [p for p in PUBLIC.glob("perfil.*") if p.suffix.lower() in EXTENSIONES]
    for perfil in perfiles:
        if perfil.suffix.lower() == ".webp" and len(perfiles) == 1:
            with Image.open(perfil) as img:
                if img.width <= PERFIL_ANCHO:
                    continue
        with Image.open(perfil) as img:
            vista = reducir(img, VISTA_PREVIA_ANCHO).convert("RGB")
        vista.save(PUBLIC / "vista-previa.jpg", "JPEG", quality=85, optimize=True, progressive=True)
        print(f"✔ vista-previa.jpg generada desde {perfil.name}: {kb(PUBLIC / 'vista-previa.jpg')}")
        hechas += optimizar(perfil, PERFIL_ANCHO)

    print(f"\n{hechas} imagen(es) optimizada(s)." if hechas else "No había imágenes nuevas que optimizar.")
    if hechas:
        print(f"Los originales están en {ORIGINALES.relative_to(RAIZ)}/ (no se suben a git).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
