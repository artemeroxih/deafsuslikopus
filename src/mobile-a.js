/* ============================================================
   DeafSuslik — Mobile app: frames, chrome, screens 01–24
   iOS and Android share the design system; the chrome,
   headers, sheets and affordances follow each platform.
   ============================================================ */
var Mo = {};

/* ---------- Device frame ---------- */
function phone(os, body, opts) {
  opts = opts || {};
  var and = os === 'android';
  var land = opts.land;
  return '<div class="ds-phone' + (land ? ' ds-phone--land' : '') + '">' +
    '<div class="ds-phone__body"' + (land ? ' style="border-radius:38px"' : '') + '>' +
      (land ? '' : and ? '<span class="ds-android__punch"></span>' : '<span class="ds-island"></span>') +
      '<div class="ds-phone__screen"' + (land ? ' style="border-radius:28px"' : '') + '>' +
        (land ? '' : statusbar(os)) +
        body +
        (land ? '' : and ? navbarAnd() : '<div class="ds-homebar"></div>') +
      '</div></div>' +
    '<p class="ds-cap ds-center" style="margin-top:12px">' + (and ? 'Android · Samsung Galaxy S25' : 'iOS · iPhone 17 Pro') + '</p>' +
  '</div>';
}

function statusbar(os) {
  var and = os === 'android';
  return '<div class="ds-statusbar' + (and ? ' ds-statusbar--android' : '') + '">' +
    '<span class="ds-num">9:41</span>' +
    '<div class="ds-row-f ds-g1" style="color:var(--ds-ink)">' +
      (and ? '<span class="ds-cap" style="color:var(--ds-ink)">LTE</span>' : '') +
      '<svg width="15" height="11" viewBox="0 0 16 12" fill="currentColor" aria-hidden="true"><rect x="0" y="8" width="3" height="4" rx="1"/><rect x="4.3" y="5.5" width="3" height="6.5" rx="1"/><rect x="8.6" y="3" width="3" height="9" rx="1"/><rect x="12.9" y="0" width="3" height="12" rx="1"/></svg>' +
      '<svg width="14" height="11" viewBox="0 0 16 12" fill="currentColor" aria-hidden="true"><path d="M8 10.4 6.1 8.5a2.7 2.7 0 0 1 3.8 0L8 10.4Zm3.8-3.8a5.4 5.4 0 0 0-7.6 0L2.7 5.1a7.5 7.5 0 0 1 10.6 0l-1.5 1.5ZM8 0a11 11 0 0 1 7.8 3.2l-1.5 1.5a8.9 8.9 0 0 0-12.6 0L.2 3.2A11 11 0 0 1 8 0Z"/></svg>' +
      '<svg width="24" height="12" viewBox="0 0 26 13" fill="none" aria-hidden="true"><rect x=".6" y=".6" width="21" height="11.8" rx="3.4" stroke="currentColor" stroke-opacity=".45"/><rect x="2.2" y="2.2" width="15" height="8.6" rx="2" fill="currentColor"/><path d="M23.5 4.4v4.2c1-.3 1.6-1 1.6-2.1s-.6-1.8-1.6-2.1Z" fill="currentColor" fill-opacity=".45"/></svg>' +
    '</div></div>';
}

function navbarAnd() {
  return '<div class="ds-navbar-and">' +
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M15 5 8 12l7 7"/></svg>' +
    '<span style="width:15px;height:15px;border:2px solid currentColor;border-radius:99px"></span>' +
    '<span style="width:13px;height:13px;border:2px solid currentColor;border-radius:3px"></span></div>';
}

/* ---------- Chrome ---------- */
/* iOS: large title + chevron-with-label. Android: compact app bar + arrow. */
function mHeader(os, title, opts) {
  opts = opts || {};
  var and = os === 'android';
  if (and) {
    return '<div style="display:flex;align-items:center;gap:12px;padding:8px 8px 8px 4px;flex:none;' +
      (opts.border ? 'border-bottom:1px solid var(--ds-line);' : '') + '">' +
      (opts.back ? '<button class="ds-iconbtn ds-iconbtn--bare" aria-label="Назад">' + ic('arrowL', 21) + '</button>' : '<span style="width:8px"></span>') +
      '<span class="ds-h2" style="flex:1;min-width:0;font-size:1.0625rem">' + title + '</span>' +
      (opts.actions || '') + '</div>';
  }
  return '<div style="flex:none' + (opts.border ? ';border-bottom:1px solid var(--ds-line)' : '') + '">' +
    (opts.back ? '<div style="display:flex;align-items:center;justify-content:space-between;padding:2px 10px 0">' +
      '<button class="ds-btn ds-btn--sm ds-btn--ghost" style="padding:0 6px;color:var(--ds-accent)">' + ic('chevL', 17) + ' Назад</button>' +
      '<div class="ds-row-f ds-g1">' + (opts.actions || '') + '</div></div>' : '') +
    '<div style="padding:' + (opts.back ? '4px' : '10px') + ' 20px 12px;display:flex;align-items:flex-end;justify-content:space-between;gap:12px">' +
      '<h1 class="ds-d2" style="font-size:1.75rem">' + title + '</h1>' +
      (opts.back ? '' : '<div class="ds-row-f ds-g1">' + (opts.actions || '') + '</div>') + '</div></div>';
}

/* Scrollable body region */
function mBody(inner, pad) {
  return '<div class="ds-scroll ds-noscroll" style="flex:1;overflow-y:auto;' +
    (pad === false ? '' : 'padding:0 20px 20px;') + '">' + inner + '</div>';
}

/* Bottom tab bar */
// Третий элемент — экран, на который ведёт пункт. Без него меню нарисовано,
// но не нажимается, и человек, которому показывают прототип, первым делом
// тыкает именно в него.
var MTABS = [
  ['home', 'Главная', 'home'], ['search', 'Поиск', 'search'],
  ['library', 'Библиотека', 'library'], ['download', 'Загрузки', 'downloads'],
  ['user', 'Профиль', 'profile']
];
function mTabbar(active, badge) {
  return '<div class="ds-tabbar" style="padding-bottom:0">' + MTABS.map(function (t, i) {
    return '<button class="ds-tabbar__item' + (t[0] === active ? ' is-on' : '') +
      '" data-go="' + t[2] + '">' +
      '<span class="ds-tabbar__ico">' + ic(t[0], 22) +
      (i === 3 && badge ? '<span class="ds-tabbar__dot"></span>' : '') + '</span>' + t[1] + '</button>';
  }).join('') + '</div>';
}

/* Bottom sheet over a dimmed screen */
function mSheet(title, body, foot, opts) {
  opts = opts || {};
  return '<div class="ds-scrim-l" style="z-index:40"></div>' +
    '<div class="ds-sheet" style="z-index:41;max-height:' + (opts.h || '82%') + '">' +
      '<div class="ds-sheet__grab"></div>' +
      '<div class="ds-sheet__head"><h3 class="ds-h1" style="font-size:1.25rem">' + title + '</h3>' +
        '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" aria-label="Закрыть">' + ic('x', 17) + '</button></div>' +
      '<div class="ds-sheet__body ds-noscroll">' + body + '</div>' +
      (foot ? '<div class="ds-sheet__foot">' + foot + '</div>' : '') + '</div>';
}

function mRow(label, sub, on, badge, ico) {
  return '<button class="ds-row" style="border-radius:var(--ds-r-md);border-bottom:0;padding:13px 14px;min-height:52px' +
    (on ? ';background:var(--ds-amber-dim)' : '') + '">' +
    (ico ? '<span class="ds-row__ico">' + ic(ico, 19) + '</span>' : '') +
    '<span class="ds-row__main"><span class="ds-row__title">' + label + '</span>' +
    (sub ? '<span class="ds-row__sub">' + sub + '</span>' : '') + '</span>' +
    (badge || '') +
    (on ? '<span style="color:var(--ds-amber);display:flex;margin-left:8px">' + ic('check', 19, 2.4) + '</span>' : '') + '</button>';
}

/* Poster tuned for phone widths */
function mPoster(m, w) {
  return '<div style="min-width:' + (w || 124) + 'px;width:' + (w || 124) + 'px">' +
    '<div style="position:relative;aspect-ratio:2/3;border-radius:var(--ds-r-md);overflow:hidden;border:1px solid var(--ds-line)">' +
      art(m.t, '', 'position:absolute;inset:0', m.t, 11) +
      '<div class="ds-poster__badges" style="top:6px;left:6px">' +
      (m.cc === 'ccplus' ? '<span class="ds-badge ds-badge--ccplus" style="height:17px;font-size:9px;padding:0 5px">CC+</span>'
                         : '<span class="ds-badge ds-badge--cc" style="height:17px;font-size:9px;padding:0 5px">CC</span>') +
      (m.q.length ? '<span class="ds-badge ds-badge--4k" style="height:17px;font-size:9px;padding:0 5px">4K</span>' : '') +
      '</div></div>' +
    '<div style="margin-top:7px"><div style="font-size:12.5px;font-weight:600;line-height:1.3">' + m.t + '</div>' +
    '<div class="ds-cap ds-num" style="margin-top:1px">' + m.y + '</div></div></div>';
}

function mRail(title, idx, w) {
  return '<section style="margin-top:24px">' +
    '<div class="ds-between" style="margin-bottom:12px"><h2 class="ds-h2" style="font-size:1.0625rem">' + title + '</h2>' +
    '<span style="color:var(--ds-ink-3);display:flex">' + ic('chevR', 16) + '</span></div>' +
    '<div class="ds-rail ds-noscroll" style="gap:11px;margin:0 -20px;padding:0 20px">' +
      idx.map(function (i) { return mPoster(M(i), w); }).join('') + '</div></section>';
}

/* ============================================================
   01 — Splash
   ============================================================ */
Mo.splash = function (os) {
  return phone(os,
    '<div style="flex:1;position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end">' +
      '<div style="position:absolute;inset:-4% -20% 30% -20%;display:grid;grid-template-columns:repeat(4,1fr);gap:9px;transform:rotate(-9deg);opacity:.62">' +
        CAT.slice(0, 12).map(function (m, i) {
          return '<div style="border-radius:10px;overflow:hidden;aspect-ratio:2/3;margin-top:' + ((i % 4) * 16) + 'px">' + art(m.t, '', 'height:100%') + '</div>';
        }).join('') + '</div>' +
      '<div style="position:absolute;inset:0;background:linear-gradient(to top,var(--ds-void) 42%,rgba(6,11,24,.35) 72%,rgba(6,11,24,.7))"></div>' +
      '<div style="position:relative;padding:0 24px 24px">' +
        '<div style="margin-bottom:20px">' + dsLogo(48, 30) + '</div>' +
        '<h1 class="ds-d2" style="font-size:1.9rem;line-height:1.1">Кино,<br>которое читается</h1>' +
        '<p class="ds-sm" style="margin-top:12px;max-width:30ch">Фильмы с субтитрами, CC и расширенными CC+. ' +
          'Онлайн и офлайн, на всех устройствах.</p>' +
        '<div class="ds-wrap ds-g3" style="margin-top:18px">' +
          [['film', '1 200+ фильмов'], ['cc', 'CC+ на 340'], ['download', 'Офлайн']].map(function (f) {
            return '<div class="ds-row-f ds-g1"><span style="color:var(--ds-amber);display:flex">' + ic(f[0], 15) + '</span>' +
              '<span class="ds-cap" style="color:var(--ds-ink-2)">' + f[1] + '</span></div>';
          }).join('') + '</div>' +
        '<button class="ds-btn ds-btn--primary ds-btn--hero ds-btn--block" style="margin-top:22px">Начать</button>' +
        '<button class="ds-btn ds-btn--lg ds-btn--ghost ds-btn--block" style="margin-top:8px">Войти</button>' +
      '</div></div>');
};

/* ============================================================
   02 — Onboarding
   ============================================================ */
/* Онбординг — четыре шага между сплэшем и регистрацией.
   Каждый шаг отвечает на один вопрос «зачем мне это», и последний
   ведёт к созданию аккаунта. Пропустить можно на любом шаге. */
var ONB = [
  {
    badge: '', badgeCls: '',
    title: 'Всё кино —<br>с субтитрами',
    body: '1 200 фильмов, и у каждого есть субтитры. Не у части каталога, не «когда-нибудь» — сразу и у всех.',
    visual: 'grid'
  },
  {
    badge: 'CC+', badgeCls: 'ds-badge--ccplus',
    title: 'Субтитры, которые<br>рассказывают больше',
    body: 'CC+ показывают не только реплики: кто говорит, какая звучит музыка, что происходит вокруг. Каждый текст вычитан редактором.',
    visual: 'cue'
  },
  {
    badge: 'Офлайн', badgeCls: '',
    title: 'Скачайте и смотрите<br>без интернета',
    body: 'Фильм сохраняется на телефон вместе с субтитрами. В метро, в самолёте, в деревне — всё работает.',
    visual: 'download'
  },
  {
    badge: '', badgeCls: '',
    title: 'Продолжайте<br>с той же секунды',
    body: 'Остановились на компьютере — телефон продолжит с этого места. Избранное, списки и настройки субтитров тоже переезжают.',
    visual: 'sync'
  }
];

function onbVisual(kind) {
  if (kind === 'grid') {
    // сетка заполняет весь квадрат, а не прижимается к низу как остальные врезки
    return '<div style="position:absolute;inset:0;z-index:3;display:grid;grid-template-columns:repeat(3,1fr);gap:10px;padding:20px;align-content:center">' +
      [0, 6, 9, 12, 3, 17].map(function (i) {
        var m = M(i);
        return '<div style="position:relative;aspect-ratio:2/3;border-radius:12px;overflow:hidden;border:1px solid var(--ds-line)">' +
          art(m.t, '', 'position:absolute;inset:0') +
          '<span class="ds-badge ds-badge--ccplus" style="position:absolute;top:5px;left:5px;height:15px;font-size:8px;padding:0 4px">CC+</span>' +
          '</div>';
      }).join('') + '</div>';
  }
  if (kind === 'cue') {
    return '<div class="ds-cuetrack" style="position:relative;z-index:3;padding-bottom:34px">' +
      '<span class="ds-cuebox"><span class="ds-cue" style="font-size:15px">' +
      '<span class="ds-cue__speaker">АННА:</span>Я скоро вернусь.' +
      '<span class="ds-cue__sound">[дверь тихо закрывается]</span></span></span></div>';
  }
  if (kind === 'download') {
    return '<div style="position:relative;z-index:3;padding:0 22px 26px;width:100%">' +
      '<div class="ds-dl" style="padding:12px;background:rgba(12,22,56,.86);backdrop-filter:blur(12px)">' +
        '<div class="ds-dl__art" style="width:52px;position:relative">' + art('Год тишины', '', 'position:absolute;inset:0') + '</div>' +
        '<div class="ds-dl__main" style="gap:6px">' +
          '<div style="font-size:13px;font-weight:600">Год тишины</div>' +
          '<div class="ds-cap ds-num">1080p · 2.8 GB · Русский CC+</div>' +
          '<div class="ds-prog ds-prog--accent"><div class="ds-prog__bar" style="width:64%"></div></div>' +
          '<div class="ds-between"><span class="ds-cap ds-num">64% · осталось 3 мин</span>' +
          '<span class="ds-badge ds-badge--offline" style="height:16px;font-size:8px">' + ic('download', 8, 2.6) + ' Офлайн</span></div>' +
        '</div></div></div>';
  }
  /* sync */
  return '<div style="position:relative;z-index:3;width:100%;padding:0 20px 26px">' +
    '<div class="ds-row-f ds-g2" style="justify-content:center">' +
      [['globe', 'Компьютер', '47:12', 0], ['devices', 'iPhone', '47:12', 1]].map(function (d) {
        return '<div style="flex:1;padding:13px 11px;border-radius:var(--ds-r-md);text-align:center;' +
          'background:rgba(12,22,56,.86);backdrop-filter:blur(12px);border:1px solid ' +
          (d[3] ? 'var(--ds-accent-edge)' : 'var(--ds-line)') + '">' +
          '<span style="color:var(--ds-' + (d[3] ? 'accent' : 'ink-3') + ');display:flex;justify-content:center">' + ic(d[0], 20) + '</span>' +
          '<div class="ds-cap" style="margin-top:7px">' + d[1] + '</div>' +
          '<div class="ds-num" style="font-size:15px;font-weight:700;margin-top:3px;color:var(--ds-accent)">' + d[2] + '</div></div>';
      }).join('') + '</div>' +
    '<p class="ds-cap ds-center" style="margin-top:10px">Один и тот же момент на обоих устройствах</p></div>';
}

function onboarding(os, step) {
  var o = ONB[step], last = step === ONB.length - 1;
  return phone(os,
    '<div style="flex:1;display:flex;flex-direction:column">' +
      '<div class="ds-between" style="padding:6px 16px">' +
        '<span style="opacity:0">' + dsLogo(22, 14) + '</span>' +
        '<button class="ds-btn ds-btn--sm ds-btn--ghost">Пропустить</button></div>' +

      '<div style="flex:1;display:flex;flex-direction:column;justify-content:center;padding:0 24px">' +
        '<div class="ds-art" style="aspect-ratio:1/1;border-radius:var(--ds-r-2xl);position:relative;overflow:hidden;' +
          'display:flex;align-items:flex-end;justify-content:center">' +
          dsArt('onb-' + step) + '<div class="ds-art__vig"></div>' +
          onbVisual(o.visual) + '</div>' +

        '<div style="margin-top:30px">' +
          (o.badge ? '<span class="ds-badge ds-badge--lg ' + o.badgeCls + '">' + o.badge + '</span>' : '') +
          '<h2 class="ds-d2" style="font-size:1.55rem;margin-top:' + (o.badge ? '14' : '0') + 'px">' + o.title + '</h2>' +
          '<p class="ds-body" style="margin-top:10px;font-size:0.9375rem">' + o.body + '</p></div>' +
      '</div>' +

      '<div style="padding:0 24px 20px">' +
        '<div class="ds-row-f ds-g2" style="justify-content:center;margin-bottom:20px">' +
          ONB.map(function (_, i) {
            return '<span style="height:6px;border-radius:99px;transition:all .3s;background:' +
              (i === step ? 'var(--ds-accent);width:22px' : 'var(--ds-raised-3);width:6px') + '"></span>';
          }).join('') + '</div>' +
        '<button class="ds-btn ds-btn--primary ds-btn--hero ds-btn--block">' +
          (last ? 'Создать аккаунт' : 'Далее') + '</button>' +
        (last ? '<p class="ds-sm ds-center" style="margin-top:12px">Уже есть аккаунт? ' +
          '<span style="color:var(--ds-accent);font-weight:600">Войти</span></p>' : '') +
      '</div>' +
    '</div>');
}

Mo.onb1 = function (os) { return onboarding(os, 0); };
Mo.onb2 = function (os) { return onboarding(os, 1); };
Mo.onb3 = function (os) { return onboarding(os, 2); };
Mo.onb4 = function (os) { return onboarding(os, 3); };

/* ============================================================
   03 / 04 — Login and Registration
   ============================================================ */
Mo.login = function (os) {
  return phone(os,
    '<div style="flex:1;display:flex;flex-direction:column;padding:0 24px">' +
      '<div style="padding-top:30px">' + dsLogo(40, 25) + '</div>' +
      '<h1 class="ds-d2" style="font-size:1.7rem;margin-top:26px">С возвращением</h1>' +
      '<p class="ds-sm" style="margin-top:6px">Продолжите с того места, где остановились.</p>' +
      '<div class="ds-stack ds-g3" style="margin-top:24px">' +
        '<div class="ds-field"><label class="ds-label">Email</label>' +
          '<input class="ds-input" type="email" value="anna.k@example.ru" inputmode="email"></div>' +
        '<div class="ds-field"><label class="ds-label">Пароль</label>' +
          '<div style="position:relative;display:flex;align-items:center">' +
            '<input class="ds-input" type="password" value="secretpass" style="padding-right:50px">' +
            '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" style="position:absolute;right:7px" aria-label="Показать пароль">' + ic('eye', 17) + '</button></div></div>' +
        '<div style="display:flex;justify-content:flex-end"><button class="ds-btn ds-btn--sm ds-btn--ghost" style="padding:0">Забыли пароль?</button></div>' +
        '<button class="ds-btn ds-btn--primary ds-btn--hero ds-btn--block">Войти</button>' +
        '<div class="ds-row-f ds-g3" style="margin:2px 0"><div class="ds-divider ds-grow"></div><span class="ds-cap">или</span><div class="ds-divider ds-grow"></div></div>' +
        (os === 'android'
          ? '<button class="ds-btn ds-btn--secondary ds-btn--block">' + ic('google', 17) + ' Продолжить с Google</button>'
          : '<button class="ds-btn ds-btn--secondary ds-btn--block">' + ic('apple', 17) + ' Продолжить с Apple</button>') +
        '<button class="ds-btn ds-btn--secondary ds-btn--block">' +
          (os === 'android' ? ic('apple', 17) + ' Продолжить с Apple' : ic('google', 17) + ' Продолжить с Google') + '</button>' +
      '</div>' +
      '<div class="ds-toast" style="margin-top:16px;max-width:none">' +
        '<span class="ds-toast__ico" style="color:var(--ds-err)">' + ic('alert', 17) + '</span>' +
        '<div><strong style="font-size:13px">Неверный пароль</strong>' +
        '<div class="ds-cap">Осталось 4 попытки</div></div></div>' +
      '<div class="ds-grow"></div>' +
      '<p class="ds-sm ds-center" style="padding-bottom:16px">Нет аккаунта? <span style="color:var(--ds-accent);font-weight:600">Создать</span></p>' +
    '</div>');
};

Mo.register = function (os) {
  return phone(os,
    mHeader(os, 'Создать аккаунт', { back: 1 }) +
    mBody(
      '<div class="ds-stack ds-g3">' +
        '<div class="ds-field"><label class="ds-label">Имя</label><input class="ds-input" value="Анна"></div>' +
        '<div class="ds-field"><label class="ds-label">Email</label><input class="ds-input" type="email" placeholder="you@example.ru"></div>' +
        '<div class="ds-field"><label class="ds-label">Пароль</label>' +
          '<div style="position:relative;display:flex;align-items:center">' +
            '<input class="ds-input" type="password" value="mypassword" style="padding-right:50px">' +
            '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" style="position:absolute;right:7px" aria-label="Показать пароль">' + ic('eye', 17) + '</button></div>' +
          '<div class="ds-row-f ds-g1" style="margin-top:7px">' +
            [1, 1, 1, 0].map(function (on) {
              return '<div style="height:3px;flex:1;border-radius:2px;background:' + (on ? 'var(--ds-ok)' : 'var(--ds-raised-3)') + '"></div>';
            }).join('') + '</div>' +
          '<span class="ds-help">Надёжный пароль</span></div>' +
        '<div class="ds-field"><label class="ds-label">Повторите пароль</label><input class="ds-input" type="password" value="mypassword"></div>' +
        '<label class="ds-opt" style="align-items:flex-start"><span class="ds-opt__box ds-opt__box--check is-on" style="border-color:var(--ds-amber);background:var(--ds-amber);margin-top:2px"></span>' +
          '<span class="ds-sm">Принимаю <span style="color:var(--ds-accent)">соглашение</span> и <span style="color:var(--ds-accent)">политику конфиденциальности</span></span></label>' +
        '<button class="ds-btn ds-btn--primary ds-btn--hero ds-btn--block" style="margin-top:4px">Создать аккаунт</button>' +
        '<p class="ds-sm ds-center" style="margin-top:6px">Уже есть аккаунт? <span style="color:var(--ds-accent);font-weight:600">Войти</span></p>' +
      '</div>'));
};

/* ============================================================
   05 — Home
   ============================================================ */
Mo.home = function (os) {
  var h = M(9);
  return phone(os,
    '<div class="ds-scroll ds-noscroll" style="flex:1;overflow-y:auto">' +
      '<div style="position:relative;height:470px;margin-top:-46px">' +
        heroStage(h.t + 'hero', '', 14) +
        '<div style="position:absolute;inset:0;background:linear-gradient(to top,var(--ds-void) 4%,rgba(6,11,24,.32) 46%,rgba(6,11,24,.68))"></div>' +
        '<div style="position:absolute;top:52px;left:0;right:0;padding:0 18px;display:flex;align-items:center;justify-content:space-between">' +
          dsLogo(26, 16) +
          '<div class="ds-row-f ds-g1">' +
            '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" aria-label="Загрузки">' + ic('download', 20) + '</button>' +
            '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" aria-label="Уведомления" style="position:relative">' + ic('bell', 20) +
              '<span style="position:absolute;top:4px;right:5px;width:6px;height:6px;border-radius:99px;background:var(--ds-accent)"></span></button></div></div>' +
        '<div style="position:absolute;left:0;right:0;bottom:0;padding:0 20px 4px">' +
          '<p class="ds-eyebrow" style="color:var(--ds-accent)">Фильм недели</p>' +
          '<h1 class="ds-hero-title" style="font-size:2.3rem;margin-top:8px">' + h.t + '</h1>' +
          '<div class="ds-wrap ds-g1" style="margin-top:10px;align-items:center">' +
            '<span class="ds-badge ds-badge--age">' + h.age + '</span>' +
            '<span class="ds-cap">' + h.y + ' · ' + h.d + '</span>' +
            '<span style="width:4px"></span>' + badges(h, { offline: 1 }) + '</div>' +
          '<p class="ds-sm" style="margin-top:10px;max-width:34ch">Год без единого слова — и один звук, который меняет всё.</p>' +
          '<div class="ds-row-f ds-g2" style="margin-top:16px">' +
            '<button class="ds-btn ds-btn--primary ds-grow">' + ic('play', 16) + ' Смотреть</button>' +
            '<button class="ds-iconbtn" aria-label="В библиотеку">' + ic('plus', 20) + '</button>' +
            '<button class="ds-iconbtn" aria-label="В избранное">' + ic('heart', 20) + '</button></div></div></div>' +

      '<div style="padding:0 20px 24px">' +
        '<section style="margin-top:22px">' +
          '<div class="ds-between" style="margin-bottom:12px"><h2 class="ds-h2" style="font-size:1.0625rem">Продолжить просмотр</h2></div>' +
          '<div class="ds-rail ds-noscroll" style="gap:11px;margin:0 -20px;padding:0 20px">' +
            [[0, 78, '1:37:04'], [12, 47, '47:12'], [6, 22, '27:40']].map(function (it) {
              var m = M(it[0]);
              return '<div class="ds-cw" style="min-width:232px">' +
                '<div class="ds-cw__art">' + art(m.t + 'cw', '', 'position:absolute;inset:0') +
                '<div class="ds-cw__play"><span class="ds-cw__playbtn" style="width:40px;height:40px">' + ic('play', 17) + '</span></div>' +
                '<div class="ds-cw__bar"><div class="ds-prog"><div class="ds-prog__bar" style="width:' + it[1] + '%"></div></div></div></div>' +
                '<div class="ds-cw__foot" style="padding:9px 11px"><div style="min-width:0">' +
                '<div style="font-size:12.5px;font-weight:600">' + m.t + '</div>' +
                '<div class="ds-num" style="font-size:10.5px;color:var(--ds-ink-3)">Осталось ' + it[2] + '</div></div>' +
                '<span class="ds-badge ds-badge--ccplus" style="height:17px;font-size:9px;padding:0 5px">CC+</span></div></div>';
            }).join('') + '</div></section>' +
        mRail('Для вас', [3, 7, 11, 15, 19, 1]) +
        mRail('Популярное', [6, 2, 18, 10, 14, 0]) +
        '<section style="margin-top:26px">' +
          '<button class="ds-card" style="text-align:left;width:100%;padding:18px;border-color:var(--ds-vip-edge);background:linear-gradient(130deg,rgba(255,194,75,.16),transparent 62%),var(--ds-panel)">' +
            '<div class="ds-row-f ds-g2"><span style="width:24px;height:3px;border-radius:2px;background:var(--ds-vip)"></span>' +
              '<span class="ds-eyebrow" style="color:var(--ds-vip)">Подписка ВИП</span></div>' +
            '<h3 class="ds-h2" style="margin-top:10px">Весь каталог за 500 ₽ в месяц</h3>' +
            '<p class="ds-cap" style="margin-top:6px">1 204 фильма, до 4K, скачивание, CC и CC+ — одинаково для всех.</p>' +
            '<div class="ds-between" style="margin-top:14px">' +
              '<div class="ds-row-f ds-g1"><span class="ds-num" style="font-weight:700;font-size:1.25rem">500 ₽</span>' +
              '<span class="ds-cap">/ месяц</span></div>' +
              '<span class="ds-btn ds-btn--sm ds-btn--primary">Подписаться</span></div></button></section>' +
        mRail('Лучшее с CC+', [6, 0, 10, 14, 18, 7]) +
        mRail('Можно скачать', [3, 5, 9, 11, 13, 16]) +
        mRail('Доступно в 4K', [0, 1, 2, 4, 6, 7]) +
      '</div></div>' +
    mTabbar('home', 1));
};

/* ============================================================
   06 / 07 — Search and results
   ============================================================ */
Mo.search = function (os) {
  return phone(os,
    '<div style="padding:8px 20px 12px;flex:none">' +
      '<div class="ds-search" style="min-height:46px;padding:0 14px">' +
        '<span style="color:var(--ds-ink-3);display:flex">' + ic('search', 19) + '</span>' +
        '<input placeholder="Фильм, актёр, режиссёр" style="font-size:14px">' +
        '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" aria-label="Голосовой поиск">' + ic('mic', 17) + '</button></div></div>' +
    mBody(
      '<div class="ds-between" style="margin-bottom:10px"><p class="ds-eyebrow">Недавние</p>' +
        '<button class="ds-btn ds-btn--sm ds-btn--ghost" style="padding:0">Очистить</button></div>' +
      '<div class="ds-wrap ds-g2">' + ['год тишины', 'документальные', 'фильмы с CC+', 'исландия'].map(function (q) {
        return '<button class="ds-chip">' + ic('clock', 13) + ' ' + q + '</button>'; }).join('') + '</div>' +
      '<p class="ds-eyebrow" style="margin:24px 0 10px">Сейчас ищут</p>' +
      '<div class="ds-stack">' + [['Год тишины', '+240%'], ['Реальные события 2025', '+118%'], ['Пепел и снег', '+96%'], ['CC+ подборка', '+74%'], ['Территория льда', '+51%']].map(function (q, i) {
        return '<button class="ds-row" style="min-height:48px;padding:10px 0">' +
          '<span class="ds-row__ico ds-num" style="color:var(--ds-accent);font-weight:700;width:18px">' + (i + 1) + '</span>' +
          '<span class="ds-row__main"><span class="ds-row__title" style="font-size:14px">' + q[0] + '</span></span>' +
          '<span class="ds-row__meta ds-num" style="color:var(--ds-ok);font-size:12px">' + q[1] + '</span></button>';
      }).join('') + '</div>' +
      '<p class="ds-eyebrow" style="margin:24px 0 10px">Категории</p>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">' +
        [['С субтитрами', 'cc'], ['CC+', 'cc'], ['4K', 'quality'], ['Офлайн', 'download']].map(function (c, i) {
          return '<button style="position:relative;aspect-ratio:16/9;border-radius:var(--ds-r-md);overflow:hidden;border:1px solid ' + (i < 2 ? 'var(--ds-amber-edge)' : 'var(--ds-line)') + ';padding:0;background:none">' +
            art(c[0] + 'sc', '', 'position:absolute;inset:0') +
            '<div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(3,7,19,.86),transparent)"></div>' +
            '<div style="position:absolute;left:11px;bottom:9px;display:flex;align-items:center;gap:6px">' +
            '<span style="color:' + (i < 2 ? 'var(--ds-amber)' : 'var(--ds-accent)') + ';display:flex">' + ic(c[1], 15) + '</span>' +
            '<span style="font-size:13px;font-weight:600">' + c[0] + '</span></div></button>';
        }).join('') + '</div>') +
    mTabbar('search'));
};

Mo.results = function (os) {
  return phone(os,
    '<div style="padding:8px 20px 10px;flex:none">' +
      '<div class="ds-search" style="min-height:44px;padding:0 14px">' +
        '<span style="color:var(--ds-ink-3);display:flex">' + ic('search', 18) + '</span>' +
        '<input value="реальные события" style="font-size:14px">' +
        '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" aria-label="Очистить">' + ic('x', 16) + '</button></div>' +
      '<div class="ds-between" style="margin-top:10px">' +
        '<span class="ds-cap"><span class="ds-num">24</span> фильма</span>' +
        '<div class="ds-row-f ds-g2">' +
          '<button class="ds-btn ds-btn--sm ds-btn--secondary">' + ic('filter', 13) + ' Фильтры · 3</button>' +
          '<div class="ds-seg"><button aria-selected="true">' + ic('grid', 13) + '</button><button aria-selected="false">' + ic('list', 13) + '</button></div></div></div>' +
      '<div class="ds-rail ds-noscroll" style="gap:7px;margin:10px -20px 0;padding:0 20px">' +
        ['Документальные ✕', 'CC+ ✕', 'Можно скачать ✕'].map(function (t) {
          return '<button class="ds-chip" aria-pressed="true" style="min-height:30px;font-size:12px">' + t + '</button>'; }).join('') + '</div></div>' +
    mBody('<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;padding-top:4px">' +
      [5, 10, 14, 18, 1, 6, 0, 9, 11, 3].map(function (i) { return mPoster(M(i), 0); }).join('') + '</div>') +
    mTabbar('search'));
};

/* ============================================================
   08 — Filters (full-height sheet)
   ============================================================ */
Mo.filters = function (os) {
  function grp(label, chips, on, amber) {
    return '<div style="padding:16px 0;border-bottom:1px solid var(--ds-line)">' +
      '<p class="ds-h3" style="margin-bottom:10px;font-size:14px">' + label + '</p>' +
      '<div class="ds-wrap ds-g2">' + chips.map(function (t, i) {
        return '<button class="ds-chip' + (amber ? ' ds-chip--amber' : '') + '" style="min-height:34px;font-size:12.5px"' +
          (on.indexOf(i) > -1 ? ' aria-pressed="true"' : '') + '>' + t + '</button>';
      }).join('') + '</div></div>';
  }
  return phone(os,
    '<div style="flex:1;position:relative;overflow:hidden">' +
      '<div style="position:absolute;inset:0;filter:blur(2px);opacity:.3;pointer-events:none">' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:20px">' +
        [5, 10, 14, 18].map(function (i) { return mPoster(M(i), 0); }).join('') + '</div></div>' +
      mSheet('Фильтры',
        '<div style="margin:0 -20px;padding:0 20px">' +
          grp('Тип', ['Фильм', 'Сериал', 'Документальный'], [0]) +
          grp('Жанр', ['Драма', 'Комедия', 'Триллер', 'Фантастика', 'Документальные', 'Биография'], [0, 4]) +
          grp('Год', ['2026', '2025', '2024', '2023', '2020-е', '2010-е'], [1]) +
          grp('Страна', ['Россия', 'США', 'Франция', 'Япония', 'Испания'], [0]) +
          grp('Рейтинг', ['От 6', 'От 7', 'От 8', 'От 9'], [2]) +
          grp('Продолжительность', ['До 90 мин', '90–120', '120–150', '150+'], [1]) +
          grp('Качество', ['360p', '480p', '720p', '1080p', '2K', '4K'], [3, 5]) +
          '<div style="padding:16px;margin:12px 0;border-radius:var(--ds-r-md);background:var(--ds-amber-dim);border-left:3px solid var(--ds-amber)">' +
            '<div class="ds-row-f ds-g2" style="margin-bottom:8px"><span style="color:var(--ds-amber);display:flex">' + ic('cc', 17) + '</span>' +
            '<p class="ds-h3" style="font-size:14px">Субтитры</p></div>' +
            '<div class="ds-wrap ds-g2">' + ['Любые', 'CC', 'CC+', 'SDH'].map(function (t, i) {
              return '<button class="ds-chip ds-chip--amber" style="min-height:34px;font-size:12.5px"' + (i === 2 ? ' aria-pressed="true"' : '') + '>' + t + '</button>';
            }).join('') + '</div></div>' +
          '<div style="padding:6px 0 16px;border-bottom:1px solid var(--ds-line)">' +
            [['Можно скачать', 1], ['Реальные события', 1], ['Есть AD', 0]].map(function (r) {
              return '<div class="ds-between" style="padding:9px 0"><span class="ds-sm" style="color:var(--ds-ink)">' + r[0] + '</span>' +
                '<label class="ds-switch"><input type="checkbox"' + (r[1] ? ' checked' : '') + '><span class="ds-switch__track"></span><span class="ds-switch__thumb"></span></label></div>';
            }).join('') + '</div>' +
          grp('Сортировка', ['По популярности', 'По рейтингу', 'Сначала новые', 'A–Z'], [0]) +
        '</div>',
        '<button class="ds-btn ds-btn--ghost" style="flex:none">Сбросить</button>' +
        '<button class="ds-btn ds-btn--primary ds-grow">Показать 24 фильма</button>',
        { h: '92%' }) +
    '</div>');
};

/* ============================================================
   09 / 10 — Categories
   ============================================================ */
Mo.categories = function (os) {
  var C = [['Все фильмы', 1204], ['Новинки', 86], ['Популярное', 120], ['Реальные события', 214],
    ['Мелодрама', 96], ['Драма', 318], ['Комедия', 142], ['Триллер', 187], ['Документальные', 203],
    ['С субтитрами', 1204], ['CC+', 340], ['4K', 268], ['Офлайн', 902]];
  return phone(os,
    mHeader(os, 'Категории') +
    mBody('<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">' +
      C.map(function (c, i) {
        var sp = i >= 9;
        return '<button style="position:relative;aspect-ratio:4/3;border-radius:var(--ds-r-md);overflow:hidden;border:1px solid ' + (sp ? 'var(--ds-amber-edge)' : 'var(--ds-line)') + ';padding:0;background:none;text-align:left">' +
          art(c[0] + 'cat', '', 'position:absolute;inset:0') +
          '<div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(3,7,19,.9),rgba(3,7,19,.1))"></div>' +
          '<div style="position:absolute;left:12px;right:12px;bottom:11px">' +
            '<div style="font-size:13.5px;font-weight:600">' + c[0] + '</div>' +
            '<div class="ds-cap ds-num">' + c[1] + '</div></div></button>';
      }).join('') + '</div>') +
    mTabbar('search'));
};

Mo.category = function (os) {
  return phone(os,
    '<div class="ds-scroll ds-noscroll" style="flex:1;overflow-y:auto">' +
      '<div style="position:relative;height:200px;margin-top:-46px">' +
        '<div class="ds-art" style="position:absolute;inset:0">' + dsArt('cat-ccplus') + '</div>' +
        '<div style="position:absolute;inset:0;background:linear-gradient(to top,var(--ds-void) 6%,rgba(6,11,24,.5))"></div>' +
        '<div style="position:absolute;top:52px;left:14px"><button class="ds-iconbtn ds-iconbtn--sm" aria-label="Назад">' + ic('arrowL', 19) + '</button></div>' +
        '<div style="position:absolute;left:20px;right:20px;bottom:8px">' +
          '<span class="ds-badge ds-badge--ccplus ds-badge--lg">CC+</span>' +
          '<h1 class="ds-d2" style="font-size:1.6rem;margin-top:8px">Лучшее с CC+</h1>' +
          '<p class="ds-cap ds-num" style="margin-top:2px">340 фильмов</p></div></div>' +
      '<div style="padding:14px 20px 20px">' +
        '<div class="ds-rail ds-noscroll" style="gap:7px;margin:0 -20px 14px;padding:0 20px">' +
          ['Все', 'Драма', 'Документальные', 'Триллер', 'Мелодрама'].map(function (t, i) {
            return '<button class="ds-chip" style="min-height:32px;font-size:12.5px"' + (i === 0 ? ' aria-pressed="true"' : '') + '>' + t + '</button>';
          }).join('') + '</div>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">' +
          [0, 1, 3, 5, 6, 7, 10, 12, 14, 16].map(function (i) { return mPoster(M(i), 0); }).join('') + '</div></div></div>' +
    mTabbar('search'));
};

/* ============================================================
   11 — Movie detail
   ============================================================ */
Mo.movie = function (os) {
  var m = M(9);
  return phone(os,
    '<div class="ds-scroll ds-noscroll" style="flex:1;overflow-y:auto">' +
      '<div style="position:relative;height:400px;margin-top:-46px">' +
        '<div class="ds-art" style="position:absolute;inset:0">' + dsArt(m.t + 'hero') + '</div>' +
        '<div style="position:absolute;inset:0;background:linear-gradient(to top,var(--ds-void) 3%,rgba(6,11,24,.3) 50%,rgba(6,11,24,.6))"></div>' +
        '<div class="ds-between" style="position:absolute;top:52px;left:14px;right:14px">' +
          '<button class="ds-iconbtn ds-iconbtn--sm" aria-label="Назад">' + ic('arrowL', 19) + '</button>' +
          '<div class="ds-row-f ds-g1">' +
            '<button class="ds-iconbtn ds-iconbtn--sm" aria-label="Поделиться">' + ic('share', 18) + '</button>' +
            '<button class="ds-iconbtn ds-iconbtn--sm" aria-label="Ещё">' + ic('moreH', 18) + '</button></div></div>' +
        '<div style="position:absolute;left:20px;right:20px;bottom:6px">' +
          '<h1 class="ds-hero-title" style="font-size:2rem">' + m.t + '</h1>' +
          '<p class="ds-cap" style="margin-top:5px">' + m.o + '</p>' +
          '<div class="ds-wrap ds-g1" style="margin-top:10px;align-items:center">' +
            '<span class="ds-badge ds-badge--age">' + m.age + '</span>' +
            '<span class="ds-cap">' + m.y + ' · ' + m.d + ' · ' + m.c + '</span>' + stars(m.r) + '</div>' +
          '<div class="ds-wrap ds-g1" style="margin-top:8px">' + badges(m, { offline: 1, ad: 1 }) + '</div></div></div>' +

      '<div style="padding:14px 20px 20px">' +
        '<button class="ds-btn ds-btn--primary ds-btn--hero ds-btn--block">' + ic('play', 17) + ' Смотреть</button>' +
        '<div class="ds-row-f ds-g2" style="margin-top:10px">' +
          '<button class="ds-btn ds-btn--secondary ds-grow">Трейлер</button>' +
          '<button class="ds-btn ds-btn--secondary ds-grow">' + ic('download', 15) + ' Скачать</button></div>' +
        '<div class="ds-row-f" style="margin-top:14px;justify-content:space-around">' +
          [['plus', 'В библиотеку'], ['heart', 'Избранное'], ['cc', 'Субтитры'], ['share', 'Поделиться']].map(function (a, i) {
            return '<button style="background:none;border:0;display:flex;flex-direction:column;align-items:center;gap:5px;cursor:pointer;min-width:64px;min-height:56px;justify-content:center">' +
              '<span style="color:' + (i === 2 ? 'var(--ds-amber)' : 'var(--ds-ink-2)') + ';display:flex">' + ic(a[0], 21) + '</span>' +
              '<span class="ds-cap">' + a[1] + '</span></button>';
          }).join('') + '</div>' +

        '<p class="ds-sm" style="margin-top:18px">Оператор северной станции теряет связь с материком и остаётся один на один с тишиной, ' +
          'которую он сам когда-то выбрал. <span style="color:var(--ds-accent)">Ещё</span></p>' +

        '<div class="ds-card" style="margin-top:18px;padding:14px;border-color:var(--ds-amber-edge);background:var(--ds-amber-dim)">' +
          '<div class="ds-between"><div class="ds-row-f ds-g2"><span style="color:var(--ds-amber);display:flex">' + ic('cc', 18) + '</span>' +
            '<div><div class="ds-h3" style="font-size:13.5px">Субтитры</div>' +
            '<div class="ds-cap">Русский CC+ · English CC · Deutsch</div></div></div>' +
            '<span style="color:var(--ds-amber);display:flex">' + ic('chevR', 17) + '</span></div></div>' +

        '<div class="ds-card ds-card--flush" style="margin-top:12px">' +
          [['Качество', '1080p · 2K · 4K'], ['Озвучка', 'Русский, English'], ['Тифлокомментарий', 'AD · Русский'],
           ['Режиссёр', 'Юлия Бергер'], ['Подписка', 'Любой фильм']].map(function (r) {
            return '<div class="ds-row" style="cursor:default;min-height:44px;padding:10px 14px">' +
              '<span class="ds-row__main"><span class="ds-row__title" style="font-size:13px;color:var(--ds-ink-2)">' + r[0] + '</span></span>' +
              '<span class="ds-sm" style="text-align:right">' + r[1] + '</span></div>';
          }).join('') + '</div>' +

        '<section style="margin-top:24px"><h2 class="ds-h2" style="font-size:1.0625rem;margin-bottom:12px">Актёры</h2>' +
          '<div class="ds-rail ds-noscroll" style="gap:14px;margin:0 -20px;padding:0 20px">' +
            [['Марк Кольцов', 'Марк'], ['Анна Райт', 'Анна'], ['Пётр Соболев', 'Радист'], ['Ингрид Ларсен', 'Голос'], ['Ева Норд', 'Дочь']].map(function (a) {
              return '<div style="min-width:78px;text-align:center">' +
                '<div style="width:72px;height:72px;border-radius:99px;overflow:hidden;position:relative;margin:0 auto;border:1px solid var(--ds-line)">' +
                art(a[0], '', 'position:absolute;inset:0') + '</div>' +
                '<div style="font-size:11.5px;font-weight:600;margin-top:7px;line-height:1.3">' + a[0] + '</div>' +
                '<div class="ds-cap">' + a[1] + '</div></div>';
            }).join('') + '</div></section>' +
        mRail('Похожие фильмы', [6, 0, 18, 10, 14, 2]) +
        mRail('Вам также понравится', [3, 11, 15, 19, 4, 8]) +
      '</div></div>');
};
