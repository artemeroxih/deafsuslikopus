#!/usr/bin/env python3
"""Assemble the deafsuslik prototypes from shared design-system sources.

Two outputs from the same sources, so the site and the Claude Artifacts can
never drift apart:

  ./<name>.html          standalone page — what GitHub + Vercel serve
  ./artifacts/<name>.html body only — what the Artifact host wraps itself

Usage:  python3 build.py            build everything
        python3 build.py web        build one page
"""
import os
import re
import subprocess
import sys
import glob

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(ROOT, 'src')
ARTIFACTS = os.path.join(ROOT, 'artifacts')

FONTS = (
    '<link rel="preconnect" href="https://fonts.googleapis.com">\n'
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?'
    'family=Onest:wght@400;500;600;700;800&'
    'family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;0,900;1,600;1,700&'
    'family=JetBrains+Mono:wght@400;500;700&display=swap">'
)

# Extra scripts each page needs, in load order.
EXTRA = {
    'web': ['web-shell.js', 'web-a.js', 'web-b.js', 'web-c.js', 'web-d.js'],
    'mobile': ['web-shell.js', 'mobile-a.js', 'mobile-b.js'],
    'admin': ['admin-a.js', 'admin-b.js', 'admin-c.js'],
    # Сводная сборка держит все прототипы сразу, поэтому берёт все скрипты.
    'all': ['web-shell.js', 'web-a.js', 'web-b.js', 'web-c.js', 'web-d.js',
            'mobile-a.js', 'mobile-b.js',
            'admin-a.js', 'admin-b.js', 'admin-c.js'],
}

# Порядок вкладок в сводной сборке.
COMBINED = ['index', 'flow', 'system', 'web', 'mobile', 'admin']

# The standalone build supplies what the Artifact host would otherwise inject.
HEAD = (
    '<!doctype html>\n<html lang="ru">\n<head>\n'
    '<meta charset="utf-8">\n'
    '<meta name="viewport" content="width=device-width,initial-scale=1">\n'
    '<meta name="robots" content="noindex">\n'
    '<meta name="description" content="{desc}">\n'
    '<link rel="icon" href="data:image/svg+xml,'
    '%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 48 48%27%3E'
    '%3Crect width=%2748%27 height=%2748%27 rx=%2712%27 fill=%27%2335E0CB%27/%3E'
    '%3Cpath d=%27M24 13c-5.4 0-9.4 3.9-9.4 9.4v9.9c0 5.4 4 9.3 9.4 9.3s9.4-3.9 '
    '9.4-9.3v-9.9c0-5.5-4-9.4-9.4-9.4Zm-2.6 8.6c0-.9.9-1.4 1.7-1l7 4.4c.7.4.7 1.4 0 '
    '1.9l-7 4.3c-.8.5-1.7 0-1.7-.9v-8.7Z%27 fill=%27%23060B18%27/%3E%3C/svg%3E">\n'
    '<style>html{{color-scheme:dark}}body{{margin:0}}img{{max-width:100%}}'
    '[hidden]{{display:none!important}}</style>\n'
    '</head>\n<body>\n'
)

DESCRIPTIONS = {
    'all': 'DeafSuslik целиком: обзор, путь зрителя, дизайн-система и три кликабельных прототипа в одном файле.',
    'flow': 'Путь зрителя DeafSuslik от первого запуска до переписки с поддержкой — каждый шаг со ссылкой в прототип.',
    'index': 'DeafSuslik — премиальный стриминг с субтитрами CC и CC+. Дизайн-система, веб, мобильные приложения и админ-панель.',
    'system': 'Дизайн-система DeafSuslik: аудит референсов, токены, компоненты, правила CC+ и передача в разработку.',
    'web': 'Кликабельный прототип веб-приложения DeafSuslik.',
    'mobile': 'Мобильные приложения DeafSuslik для iPhone и Android.',
    'admin': 'Приватная админ-панель DeafSuslik.',
}



# Карта пути ссылается на конкретные экраны прототипов. Список собирается из
# самих прототипов, а не переписывается руками, — разойтись они не могут.
DEFAULT_GROUP = {'admin': 'Админ-панель'}


def screens_index():
    import json
    out = {}
    for page in ('web', 'mobile', 'admin'):
        src = read(page + '.body.html')
        body = re.search(r'var SCREENS\s*=\s*\[(.*?)\n\s*\];', src, re.S).group(1)
        groups, cur = [], None
        for line in body.splitlines():
            t = line.strip()
            g = re.match(r"\['([^']*)',\s*\[\s*$", t)
            if g:
                cur = [g.group(1), []]
                groups.append(cur)
                continue
            r = re.match(r"\[\s*'([a-zA-Z0-9_-]+)',\s*'([^']*)',", t)
            if r:
                if cur is None:
                    cur = [DEFAULT_GROUP.get(page, 'Экраны'), []]
                    groups.append(cur)
                cur[1].append([r.group(1), r.group(2)])
        out[page] = groups
    return 'var ALLSCREENS = ' + json.dumps(out, ensure_ascii=False) + ';\n'


GENERATED = {'flow': screens_index, 'all': screens_index}


def check_syntax():
    """Fail loudly instead of shipping a script the browser silently skips."""
    bad = []
    for f in sorted(glob.glob(os.path.join(SRC, '*.js'))):
        r = subprocess.run(['node', '--check', f], capture_output=True, text=True)
        if r.returncode:
            bad.append(os.path.basename(f) + ': ' + r.stderr.strip().splitlines()[-1])
    if bad:
        raise SystemExit('SYNTAX ERRORS:\n  ' + '\n  '.join(bad))


def read(p):
    with open(os.path.join(SRC, p), encoding='utf-8') as f:
        return f.read()


def strip_title(body):
    m = re.match(r'<!--TITLE:\s*(.*?)\s*-->\s*', body)
    return (m.group(1) if m else 'DeafSuslik'), (body[m.end():] if m else body)


def combined_pages():
    """Шесть страниц в одном файле: одна ссылка вместо шести."""
    out = []
    for page in COMBINED:
        _, body = strip_title(read(page + '.body.html'))
        out.append('<section class="al__page" data-page="%s" hidden>\n%s\n</section>\n'
                   % (page, body))
    return ''.join(out)


def build(name):
    title, body = strip_title(read(name + '.body.html'))
    if name == 'all':
        body = body.replace('<!--PAGES-->', combined_pages())

    inner = (
        '<title>' + title + '</title>\n'
        + FONTS + '\n'
        + '<style>\n' + read('tokens.css') + '\n' + read('components.css') + '\n</style>\n'
        + '<script>\n' + read('core.js') + '\n</script>\n'
        + (('<script>\n' + GENERATED[name]() + '</script>\n') if name in GENERATED else '')
        + ''.join('<script>\n' + read(x) + '\n</script>\n' for x in EXTRA.get(name, []))
        + body
    )

    os.makedirs(ARTIFACTS, exist_ok=True)
    with open(os.path.join(ARTIFACTS, name + '.html'), 'w', encoding='utf-8') as f:
        f.write(inner)

    desc = DESCRIPTIONS.get(name, DESCRIPTIONS['index'])
    with open(os.path.join(ROOT, name + '.html'), 'w', encoding='utf-8') as f:
        f.write(HEAD.format(desc=desc) + inner + '\n</body>\n</html>\n')

    kb = os.path.getsize(os.path.join(ROOT, name + '.html')) / 1024
    print('%-14s %7.1f KB' % (name + '.html', kb))


if __name__ == '__main__':
    targets = sys.argv[1:] or [
        f[:-10] for f in sorted(os.listdir(SRC)) if f.endswith('.body.html')
    ]
    check_syntax()
    for t in targets:
        build(t)
