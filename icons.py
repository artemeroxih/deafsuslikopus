#!/usr/bin/env python3
"""Иконки приложения из того же знака, что и фавиконка.

Знак нарисован в системе координат 48×48, как в SVG внутри build.py:
скруглённый токен, в нём вертикальный силуэт суслика, в груди — вырез Play.
Рисуем с четырёхкратным запасом и уменьшаем — так края остаются гладкими
без сглаживания, которого у PIL для фигур нет.

    python3 icons.py
"""
import os

from PIL import Image, ImageDraw

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(ROOT, 'icons')

TEAL = (0x35, 0xE0, 0xCB, 255)   # --ds-suslik
DARK = (0x06, 0x0B, 0x18, 255)
SS = 4                            # супер-сэмплинг

# Всё в долях от 48 — знак масштабируется без пересчёта руками.
BODY = (14.6, 13.0, 33.4, 41.6)
PLAY = [(21.4, 20.7), (30.4, 25.95), (21.4, 31.2)]


def mark(size, scale=1.0, bleed=False):
    """Один знак. scale — доля холста под знак, bleed — заливка всего квадрата."""
    px = size * SS
    img = Image.new('RGBA', (px, px), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)

    if bleed:
        d.rectangle([0, 0, px, px], fill=TEAL)
    else:
        d.rounded_rectangle([0, 0, px - 1, px - 1], radius=px * 12 / 48, fill=TEAL)

    # Знак внутри своего квадрата, по центру.
    side = px * scale
    off = (px - side) / 2
    u = side / 48.0

    def p(x, y):
        return (off + x * u, off + y * u)

    x0, y0 = p(BODY[0], BODY[1])
    x1, y1 = p(BODY[2], BODY[3])
    d.rounded_rectangle([x0, y0, x1, y1], radius=(x1 - x0) / 2, fill=DARK)
    d.polygon([p(x, y) for x, y in PLAY], fill=TEAL)

    return img.resize((size, size), Image.LANCZOS)


def flatten(img, bg):
    out = Image.new('RGB', img.size, bg)
    out.paste(img, (0, 0), img)
    return out


if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)
    made = []

    for s in (192, 512):
        f = os.path.join(OUT, 'icon-%d.png' % s)
        mark(s).save(f)
        made.append(f)

    # Маскируемая иконка обрезается системой по своей форме: знак живёт
    # в центральных 80%, остальное — поле, которое не жалко потерять.
    f = os.path.join(OUT, 'icon-maskable-512.png')
    mark(512, scale=0.62, bleed=True).save(f)
    made.append(f)

    # iOS сам скругляет и не умеет прозрачность — отдаём плотный квадрат.
    # Лежит в корне: туда Safari смотрит по умолчанию.
    f = os.path.join(ROOT, 'apple-touch-icon.png')
    flatten(mark(180, scale=0.78, bleed=True), (0x35, 0xE0, 0xCB)).save(f)
    made.append(f)

    for f in made:
        print('%-34s %6.1f KB' % (os.path.relpath(f, ROOT), os.path.getsize(f) / 1024))
