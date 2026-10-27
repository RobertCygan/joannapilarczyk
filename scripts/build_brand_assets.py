"""Generuje pliki identyfikacji wizualnej (logo, monogram, favicony).

Tekst w logotypach jest zamieniany na ścieżki SVG, dzięki czemu pliki
wyglądają identycznie niezależnie od fontów zainstalowanych u odbiorcy.

Wymagania (jednorazowo):  pip install fonttools brotli pillow
Uruchomienie z katalogu projektu (po `npm install`):  npm run assets
"""

from __future__ import annotations

import io
import math
from pathlib import Path

from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "brand"
FONTS = ROOT / "node_modules"

FOREST = "#29483E"
SAGE = "#789C8A"
MINT = "#A8D5C2"
IVORY = "#FAF9F6"
GRAPHITE = "#303B37"

TAGLINES = {
    "pl": "PSYCHOLOG • PSYCHOTERAPEUTA",
    "no": "PSYKOLOG • PSYKOTERAPEUT",
    "en": "PSYCHOLOGIST • PSYCHOTHERAPIST",
}


def load_font(rel: str, wght: int | None = None) -> TTFont:
    font = TTFont(FONTS / rel)
    if wght is not None and "fvar" in font:
        font = instantiateVariableFont(font, {"wght": wght})
    return font


SERIF = load_font("@fontsource/cormorant-garamond/files/cormorant-garamond-latin-600-normal.woff2")
SERIF_MED = load_font("@fontsource/cormorant-garamond/files/cormorant-garamond-latin-500-normal.woff2")
SANS = load_font("@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2", wght=600)


def text_path(font: TTFont, text: str, size: float, x: float, baseline: float, tracking_em: float = 0.0) -> tuple[str, float]:
    """Zwraca (dane ścieżki SVG, szerokość) dla tekstu w danym foncie."""
    glyphs = font.getGlyphSet()
    cmap = font.getBestCmap()
    upm = font["head"].unitsPerEm
    scale = size / upm
    hmtx = font["hmtx"]
    pen = SVGPathPen(glyphs, ntos=lambda v: f"{v:.2f}".rstrip("0").rstrip("."))
    cursor = x
    chars = list(text)
    for i, ch in enumerate(chars):
        name = cmap.get(ord(ch))
        if name is None:
            raise ValueError(f"Brak znaku {ch!r} w foncie")
        tpen = TransformPen(pen, (scale, 0, 0, -scale, cursor, baseline))
        glyphs[name].draw(tpen)
        cursor += hmtx[name][0] * scale
        if i < len(chars) - 1:
            cursor += tracking_em * size
    return pen.getCommands(), cursor - x


def text_width(font: TTFont, text: str, size: float, tracking_em: float = 0.0) -> float:
    return text_path(font, text, size, 0, 0, tracking_em)[1]


def arc_points(cx: float, cy: float, r: float, deg: float) -> tuple[float, float]:
    rad = math.radians(deg)
    return cx + r * math.cos(rad), cy + r * math.sin(rad)


def symbol_paths(ox: float = 0, oy: float = 0, s: float = 1.0) -> tuple[str, str]:
    """Dwa splecione, otwarte pierścienie — relacja, dialog, wzajemny wpływ.

    Bazowa siatka 48×48. Każdy pierścień ma przerwę w miejscu, w którym
    przechodzi przez niego drugi, co daje efekt splotu.
    """
    r, cut = 12 * s, 15
    lc = (ox + 18 * s, oy + 24 * s)
    rc = (ox + 30 * s, oy + 24 * s)
    l1, l2 = arc_points(*lc, r, -60 + cut), arc_points(*lc, r, -60 - cut)
    r1, r2 = arc_points(*rc, r, 120 + cut), arc_points(*rc, r, 120 - cut)
    f = lambda p: f"{p[0]:.3f} {p[1]:.3f}"  # noqa: E731
    left = f"M{f(l1)}A{r:.3f} {r:.3f} 0 1 1 {f(l2)}"
    right = f"M{f(r1)}A{r:.3f} {r:.3f} 0 1 1 {f(r2)}"
    return left, right


def svg_symbol(primary: str, secondary: str, stroke: float = 2.2) -> str:
    left, right = symbol_paths()
    return (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img" aria-label="Joanna Pilarczyk">'
        f'<g fill="none" stroke-linecap="round" stroke-width="{stroke}">'
        f'<path d="{left}" stroke="{primary}"/><path d="{right}" stroke="{secondary}"/></g></svg>\n'
    )


def svg_full(lang: str, name_color: str, tag_color: str, a1: str, a2: str) -> str:
    """Logotyp poziomy: symbol + imię i nazwisko + linia z zawodem."""
    sym_size = 64
    name_size, tag_size = 30, 10.5
    name_track, tag_track = 0.12, 0.24
    gap = 18
    tx = sym_size + gap
    name_d, name_w = text_path(SERIF, "JOANNA PILARCZYK", name_size, tx, 31, name_track)
    tag_d, tag_w = text_path(SANS, TAGLINES[lang], tag_size, tx + 1, 52, tag_track)
    width = math.ceil(tx + max(name_w, tag_w) + 4)
    left, right = symbol_paths(0, 0, sym_size / 48)
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} 64" role="img" '
        f'aria-label="Joanna Pilarczyk — {TAGLINES[lang].title()}">'
        f'<g fill="none" stroke-linecap="round" stroke-width="2.6">'
        f'<path d="{left}" stroke="{a1}"/><path d="{right}" stroke="{a2}"/></g>'
        f'<path d="{name_d}" fill="{name_color}"/><path d="{tag_d}" fill="{tag_color}"/></svg>\n'
    )


def svg_stacked(lang: str, name_color: str, tag_color: str, a1: str, a2: str) -> str:
    """Logotyp pionowy (np. na dokumenty, social media)."""
    name_size, tag_size = 34, 11
    name_w = text_width(SERIF, "JOANNA PILARCZYK", name_size, 0.12)
    tag_w = text_width(SANS, TAGLINES[lang], tag_size, 0.26)
    width = math.ceil(max(name_w, tag_w) + 40)
    sym = 88
    sx = (width - sym) / 2
    left, right = symbol_paths(sx, 0, sym / 48)
    name_d, _ = text_path(SERIF, "JOANNA PILARCZYK", name_size, (width - name_w) / 2, sym + 44, 0.12)
    tag_d, _ = text_path(SANS, TAGLINES[lang], tag_size, (width - tag_w) / 2, sym + 70, 0.26)
    rule_y = sym + 56
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {sym + 80}" role="img" '
        f'aria-label="Joanna Pilarczyk — {TAGLINES[lang].title()}">'
        f'<g fill="none" stroke-linecap="round" stroke-width="3.2">'
        f'<path d="{left}" stroke="{a1}"/><path d="{right}" stroke="{a2}"/></g>'
        f'<path d="{name_d}" fill="{name_color}"/>'
        f'<line x1="{width / 2 - 18}" y1="{rule_y}" x2="{width / 2 + 18}" y2="{rule_y}" stroke="{tag_color}" stroke-width="0.8"/>'
        f'<path d="{tag_d}" fill="{tag_color}"/></svg>\n'
    )


def svg_monogram(fg: str, ring: str, bg: str | None = None) -> str:
    size = 120
    j_d, j_w = text_path(SERIF_MED, "J", 64, 0, 0)
    p_w = text_width(SERIF_MED, "P", 64)
    overlap = 6
    total = j_w + p_w - overlap
    x0 = (size - total) / 2 + 2
    j_d, _ = text_path(SERIF_MED, "J", 64, x0, 80)
    p_d, _ = text_path(SERIF_MED, "P", 64, x0 + j_w - overlap, 80)
    back = f'<rect width="{size}" height="{size}" rx="28" fill="{bg}"/>' if bg else ""
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" role="img" aria-label="JP">'
        f"{back}"
        f'<circle cx="60" cy="60" r="50" fill="none" stroke="{ring}" stroke-width="1.4"/>'
        f'<path d="{j_d}" fill="{fg}"/><path d="{p_d}" fill="{fg}"/></svg>\n'
    )


def svg_favicon() -> str:
    left, right = symbol_paths(4, 4, 40 / 48)
    return (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">'
        f'<rect width="48" height="48" rx="11" fill="{FOREST}"/>'
        '<g fill="none" stroke-linecap="round" stroke-width="3">'
        f'<path d="{left}" stroke="{IVORY}"/><path d="{right}" stroke="{MINT}"/></g></svg>\n'
    )


def raster_favicon(px: int, padding: float = 0.0, rounded: bool = True) -> Image.Image:
    """Rysuje favicon w rastrze (bez zależności od renderera SVG)."""
    k = 8  # supersampling
    big = px * k
    img = Image.new("RGBA", (big, big), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    radius = int(big * 11 / 48) if rounded else 0
    d.rounded_rectangle([0, 0, big - 1, big - 1], radius=radius, fill=FOREST)
    inner = big * (1 - 2 * padding)
    off = big * padding
    s = inner / 48 * (40 / 48)
    o = off + inner / 48 * 4
    w = max(1, round(3 * inner / 48))
    r = 12 * s
    for (cx, cy, start, end, colour) in (
        (o + 18 * s, o + 24 * s, -45, 285, IVORY),
        (o + 30 * s, o + 24 * s, 135, 465, MINT),
    ):
        d.arc([cx - r, cy - r, cx + r, cy + r], start=start, end=end, fill=colour, width=w)
        for ang in (start, end):
            ex, ey = arc_points(cx, cy, r, ang)
            d.ellipse([ex - w / 2, ey - w / 2, ex + w / 2, ey + w / 2], fill=colour)
    return img.resize((px, px), Image.LANCZOS)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    files = {
        "symbol.svg": svg_symbol(FOREST, SAGE),
        "symbol-light.svg": svg_symbol(IVORY, MINT),
        "monogram.svg": svg_monogram(FOREST, SAGE),
        "monogram-light.svg": svg_monogram(IVORY, MINT),
        "monogram-forest.svg": svg_monogram(IVORY, MINT, FOREST),
    }
    for lang in TAGLINES:
        files[f"logo-{lang}.svg"] = svg_full(lang, FOREST, SAGE, FOREST, SAGE)
        files[f"logo-{lang}-light.svg"] = svg_full(lang, IVORY, MINT, IVORY, MINT)
        files[f"logo-stacked-{lang}.svg"] = svg_stacked(lang, FOREST, SAGE, FOREST, SAGE)
        files[f"logo-stacked-{lang}-light.svg"] = svg_stacked(lang, IVORY, MINT, IVORY, MINT)
    for name, content in files.items():
        (OUT / name).write_text(content, encoding="utf-8")

    public = ROOT / "public"
    (public / "favicon.svg").write_text(svg_favicon(), encoding="utf-8")
    raster_favicon(180, padding=0.0, rounded=False).save(public / "apple-touch-icon.png")
    raster_favicon(192).save(public / "icon-192.png")
    raster_favicon(512).save(public / "icon-512.png")
    # Maskable: symbol w bezpiecznej strefie (80%), tło do krawędzi.
    raster_favicon(512, padding=0.1, rounded=False).save(public / "icon-maskable-512.png")
    ico = io.BytesIO()
    raster_favicon(64).save(ico, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
    (public / "favicon.ico").write_bytes(ico.getvalue())
    print("Wygenerowano:", ", ".join(sorted(files)), "+ favicony")


if __name__ == "__main__":
    main()
