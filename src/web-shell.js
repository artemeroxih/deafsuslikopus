/* ============================================================
   DeafSuslik — Web prototype: shell + shared blocks
   ============================================================ */

var NAV = [
  ['home', 'Главная'], ['movies', 'Фильмы'], ['real', 'Реальные события'],
  ['collections', 'Подборки'], ['library', 'Моя библиотека']
];

/* Persistent top navigation */
function topbar(active) {
  return '<header class="ds-topbar">' +
    dsLogo(28, 17) +
    '<nav class="ds-topnav" style="margin-left:16px">' +
      NAV.map(function (n) {
        return '<a href="#" class="' + (n[0] === active ? 'is-on' : '') + '" data-go="' + n[0] + '">' + n[1] + '</a>';
      }).join('') +
    '</nav>' +
    '<div class="ds-grow"></div>' +
    '<button class="ds-iconbtn ds-iconbtn--bare" data-go="search" aria-label="Поиск">' + ic('search') + '</button>' +
    '<button class="ds-iconbtn ds-iconbtn--bare" data-go="notifications" aria-label="Уведомления" style="position:relative">' +
      ic('bell') + '<span style="position:absolute;top:8px;right:9px;width:7px;height:7px;border-radius:99px;background:var(--ds-accent);border:2px solid var(--ds-void)"></span></button>' +
    '<button data-go="profile" aria-label="Профиль" style="width:34px;height:34px;border-radius:99px;border:1px solid var(--ds-line-mid);background:linear-gradient(140deg,#3E5C8C,#1B2A4A);color:#fff;font-weight:700;font-size:12px;cursor:pointer">А</button>' +
  '</header>';
}

/* Page footer */
function webFoot() {
  return '<footer style="border-top:1px solid var(--ds-line);margin-top:72px;padding:36px 0 56px">' +
    '<div class="ds-container ds-between" style="align-items:flex-start;flex-wrap:wrap;gap:32px">' +
      '<div style="max-width:280px">' + dsLogo(26, 16) +
        '<p class="ds-cap" style="margin-top:12px;line-height:1.6">Кино с субтитрами, которые сделаны как следует. Онлайн и офлайн.</p></div>' +
      ['Смотреть|Главная,Фильмы,Реальные события,Подборки,Категории',
       'Аккаунт|Мои подписки,Загрузки,Устройства,Настройки',
       'Помощь|Частые вопросы,Поддержка,Мои обращения,О сервисе'].map(function (col) {
        var p = col.split('|');
        return '<div><p class="ds-eyebrow" style="margin-bottom:12px">' + p[0] + '</p>' +
          p[1].split(',').map(function (l) { return '<p class="ds-sm ds-mut2" style="padding:4px 0">' + l + '</p>'; }).join('') + '</div>';
      }).join('') +
    '</div>' +
    '<div class="ds-container" style="margin-top:32px;padding-top:20px;border-top:1px solid var(--ds-line)">' +
      '<p class="ds-cap">© 2026 DeafSuslik · Пользовательское соглашение · Политика конфиденциальности · Правообладателям</p></div>' +
  '</footer>';
}

/* Section header used above every rail */
function railHead(title, extra) {
  return '<div class="ds-railhead"><h2 class="ds-d2" style="font-size:1.35rem">' + title + '</h2>' +
    (extra !== false ? '<button class="ds-btn ds-btn--sm ds-btn--ghost">Все ' + ic('chevR', 14) + '</button>' : '') + '</div>';
}

/* Poster card */
function wPoster(m, opts) {
  opts = opts || {};
  return '<button class="ds-poster" data-go="' + (opts.go || 'movie') + '" style="text-align:left;padding:0;background:none;border:0;min-width:' + (opts.w || 172) + 'px">' +
    '<div class="ds-poster__art" style="border-radius:var(--ds-r-md);overflow:hidden;border:1px solid var(--ds-line);position:relative">' +
      art(m.t, '', 'position:absolute;inset:0', m.t, opts.ts || 13) +
      '<div class="ds-poster__badges">' + badges(m, { offline: opts.offline }) + '</div>' +
      '<div class="ds-poster__hover"><span class="ds-btn ds-btn--sm ds-btn--primary">' + ic('play', 12) + ' Смотреть</span></div>' +
      (opts.progress ? '<div style="position:absolute;left:0;right:0;bottom:0"><div class="ds-prog"><div class="ds-prog__bar" style="width:' + opts.progress + '%"></div></div></div>' : '') +
    '</div>' +
    '<div class="ds-poster__meta"><div class="ds-poster__name">' + m.t + '</div>' +
    '<div class="ds-poster__sub"><span class="ds-num">' + m.y + '</span><span>·</span><span>' + m.g.split(' · ')[0] + '</span>' + stars(m.r) + '</div></div>' +
  '</button>';
}

/* Horizontal rail of posters */
function wRail(title, idx, opts) {
  opts = opts || {};
  return '<section style="margin-top:' + (opts.mt || 44) + 'px">' + railHead(title) +
    '<div class="ds-rail ds-noscroll">' + idx.map(function (i) { return wPoster(M(i), opts); }).join('') + '</div></section>';
}

/* Continue-watching rail — landscape cards with progress */
function wContinue() {
  var items = [[0, 78, '1:37:04', '2:08:00'], [12, 47, '47:12', '1:36:00'], [6, 22, '27:40', '2:04:00'], [10, 61, '1:29:15', '2:26:00']];
  return '<section style="margin-top:8px">' + railHead('Продолжить просмотр') +
    '<div class="ds-rail ds-noscroll">' + items.map(function (it) {
      var m = M(it[0]);
      return '<button class="ds-cw" data-go="player" style="min-width:308px;text-align:left;padding:0;cursor:pointer">' +
        '<div class="ds-cw__art">' + art(m.t + 'cw', '', 'position:absolute;inset:0') +
        '<div class="ds-cw__play"><span class="ds-cw__playbtn">' + ic('play', 20) + '</span></div>' +
        '<div class="ds-cw__bar"><div class="ds-prog"><div class="ds-prog__bar" style="width:' + it[1] + '%"></div></div></div></div>' +
        '<div class="ds-cw__foot"><div style="min-width:0"><div class="ds-poster__name">' + m.t + '</div>' +
        '<div class="ds-num" style="font-size:11px;color:var(--ds-ink-3);margin-top:2px">' + it[2] + ' / ' + it[3] + '</div></div>' +
        (m.cc === 'ccplus' ? '<span class="ds-badge ds-badge--ccplus">CC+</span>' : '<span class="ds-badge ds-badge--cc">CC</span>') +
        '</div></button>';
    }).join('') + '</div></section>';
}

/* Auth page frame — split hero + form */
function authFrame(inner, sideTitle, sideBody) {
  return '<div style="min-height:900px;display:grid;grid-template-columns:1.05fr .95fr">' +
    '<div style="position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;padding:56px">' +
      '<div class="ds-art" style="position:absolute;inset:0">' + dsArt('auth-side') + '</div>' +
      '<div style="position:absolute;inset:0;background:linear-gradient(115deg,rgba(6,11,24,.4),rgba(6,11,24,.9))"></div>' +
      '<div style="position:relative;z-index:2;max-width:440px">' +
        '<div class="ds-strip" style="margin-bottom:26px;background:rgba(95,227,208,.1)">' +
          '<span class="ds-strip__label">CC+</span>' +
          '<p class="ds-sm" style="margin:0">АННА: Я скоро вернусь.<br><em style="color:var(--ds-amber-hi)">[дверь резко захлопывается]</em></p></div>' +
        '<h2 class="ds-d1">' + sideTitle + '</h2>' +
        '<p class="ds-body" style="margin-top:14px">' + sideBody + '</p>' +
      '</div>' +
    '</div>' +
    '<div style="display:flex;align-items:center;justify-content:center;padding:56px;background:var(--ds-sunken)">' +
      '<div style="width:100%;max-width:400px">' + inner + '</div>' +
    '</div></div>';
}

/* Settings-style two-column page */
function settingsPage(title, sub, body, nav) {
  return topbar('') + '<main class="ds-container" style="padding-top:44px;padding-bottom:64px">' +
    '<div style="display:grid;grid-template-columns:246px minmax(0,1fr);gap:44px;align-items:start">' +
      '<aside style="position:sticky;top:92px">' +
        '<p class="ds-eyebrow" style="margin-bottom:14px">Аккаунт</p>' +
        '<div class="ds-stack">' + (nav || ACCOUNT_NAV).map(function (n) {
          return '<button class="ds-row" style="min-height:42px;padding:8px 12px;border-radius:var(--ds-r-sm);border-bottom:0' +
            (n[2] ? ';background:rgba(255,255,255,.06)' : '') + '" data-go="' + n[0] + '">' +
            '<span class="ds-row__ico">' + ic(n[3] || 'chevR', 17) + '</span>' +
            '<span class="ds-row__main"><span class="ds-row__title" style="font-size:13.5px">' + n[1] + '</span></span></button>';
        }).join('') + '</div>' +
      '</aside>' +
      '<div><h1 class="ds-d2">' + title + '</h1>' +
      (sub ? '<p class="ds-body" style="margin-top:8px">' + sub + '</p>' : '') +
      '<div style="margin-top:26px">' + body + '</div></div>' +
    '</div></main>' + webFoot();
}

var ACCOUNT_NAV = [
  ['profile', 'Профиль', 0, 'user'],
  ['subs', 'Мои подписки', 0, 'card'],
  ['history', 'История просмотра', 0, 'clock'],
  ['favorites', 'Избранное', 0, 'heart'],
  ['library', 'Моя библиотека', 0, 'library'],
  ['downloads', 'Загрузки', 0, 'download'],
  ['a11y', 'Субтитры и CC+', 0, 'cc'],
  ['settings', 'Настройки', 0, 'settings'],
  ['devices', 'Устройства', 0, 'devices'],
  ['notifications', 'Уведомления', 0, 'bell'],
  ['help', 'Помощь', 0, 'help'],
  ['tickets', 'Мои обращения', 0, 'ticket']
];

/* Plan definitions live in core.js — shared by web, mobile and admin. */

/* The single subscription card. Price always carries «/ месяц». */
function planCard(p, opts) {
  opts = opts || {};
  return '<div class="ds-card" style="border-color:var(--ds-vip-edge);background:linear-gradient(135deg,rgba(255,194,75,.10),transparent 52%),var(--ds-panel);padding:32px">' +
    '<div style="display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:40px;align-items:center">' +
      '<div>' +
        '<div class="ds-row-f ds-g2"><span style="width:34px;height:3px;border-radius:2px;background:var(--ds-vip)"></span>' +
          '<span class="ds-eyebrow" style="color:var(--ds-vip)">' + p.tag + '</span></div>' +
        '<h3 class="ds-d2" style="margin-top:14px">' + p.name + '</h3>' +
        '<p class="ds-body" style="margin-top:10px">' + p.desc + '</p>' +
        '<ul style="list-style:none;padding:0;margin:22px 0 0;display:grid;grid-template-columns:1fr 1fr;gap:11px">' +
          p.feats.map(function (f) {
            return '<li class="ds-row-f ds-g2" style="font-size:13.5px"><span style="color:var(--ds-vip);display:flex;flex:none">' + ic('check', 16, 2.4) + '</span>' + f + '</li>';
          }).join('') + '</ul></div>' +
      '<div style="text-align:center;padding:26px 22px;border-radius:var(--ds-r-lg);background:var(--ds-void);border:1px solid var(--ds-line)">' +
        '<div style="display:flex;align-items:baseline;gap:6px;justify-content:center">' +
          '<span class="ds-num" style="font-size:3rem;font-weight:700;letter-spacing:-.04em">' + p.price + ' ₽</span></div>' +
        '<p class="ds-sm ds-mut2" style="margin-top:2px">в месяц</p>' +
        '<button class="ds-btn ds-btn--lg ds-btn--primary ds-btn--block" data-go="checkout" style="margin-top:20px;min-height:60px;flex-direction:column;gap:1px">' +
          '<span>Подписаться</span><span style="font-size:12px;font-weight:600;opacity:.72">' + p.price + ' ₽ / месяц</span></button>' +
        '<p class="ds-cap" style="margin-top:12px">Регулярное списание раз в месяц.<br>Отмена в любой момент.</p></div>' +
    '</div></div>';
}
