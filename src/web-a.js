/* ============================================================
   Web screens 01–10 — entry, discovery, movie
   ============================================================ */
var S = {};

/* 01 — Landing / Splash */
S.landing = function () {
  return '<div style="position:relative;min-height:940px;overflow:hidden">' +
    '<div class="ds-art" style="position:absolute;inset:0">' + dsArt('landing-hero') + '</div>' +
    '<div style="position:absolute;inset:0;background:radial-gradient(120% 80% at 18% 30%, rgba(6,11,24,.55), rgba(6,11,24,.95) 62%)"></div>' +
    '<div style="position:absolute;right:-2%;top:0;bottom:0;width:52%;display:grid;grid-template-columns:repeat(4,1fr);gap:14px;transform:rotate(-8deg) scale(1.18);opacity:.5">' +
      CAT.slice(0, 16).map(function (m, i) {
        return '<div style="border-radius:12px;overflow:hidden;aspect-ratio:2/3;margin-top:' + ((i % 4) * 22) + 'px">' + art(m.t, '', 'height:100%') + '</div>';
      }).join('') + '</div>' +
    '<div style="position:absolute;inset:0;background:linear-gradient(90deg,var(--ds-void) 22%,rgba(6,11,24,.55) 58%,rgba(6,11,24,.9))"></div>' +

    '<div style="position:relative;z-index:3">' +
      '<div class="ds-container ds-between" style="height:88px">' + dsLogo(30, 19) +
        '<div class="ds-row-f ds-g2"><button class="ds-btn ds-btn--ghost" data-go="login">Войти</button>' +
        '<button class="ds-btn ds-btn--primary" data-go="register">Начать</button></div></div>' +
      '<div class="ds-container" style="padding-top:76px;max-width:1180px">' +
        '<div style="max-width:640px">' +
          '<span class="ds-badge ds-badge--lg ds-badge--cc" style="margin-bottom:22px">Субтитры — не опция, а продукт</span>' +
          '<h1 class="ds-hero-title">Кино, которое читается</h1>' +
          '<p class="ds-body" style="margin-top:22px;font-size:1.125rem;max-width:50ch">' +
            'Фильмы с обычными субтитрами, с CC и с расширенными CC+ — где написано не только что говорят, ' +
            'но и что звучит. Онлайн и офлайн, на всех ваших устройствах.</p>' +
          '<div class="ds-row-f ds-g3" style="margin-top:34px">' +
            '<button class="ds-btn ds-btn--primary ds-btn--hero" data-go="register">Начать</button>' +
            '<button class="ds-btn ds-btn--lg ds-btn--outline" data-go="login">Войти</button></div>' +
          '<div class="ds-wrap ds-g6" style="margin-top:44px">' +
            [['film', '1 200+ фильмов'], ['cc', 'CC+ на 340 фильмах'], ['download', 'Офлайн-просмотр'], ['quality', 'До 4K UHD']].map(function (f) {
              return '<div class="ds-row-f ds-g2"><span style="color:var(--ds-amber);display:flex">' + ic(f[0], 18) + '</span>' +
                '<span class="ds-sm" style="color:var(--ds-ink)">' + f[1] + '</span></div>';
            }).join('') + '</div>' +
        '</div>' +
        '<div class="ds-strip" style="margin-top:64px;max-width:560px;background:rgba(18,28,48,.72);backdrop-filter:blur(20px);border-left-color:var(--ds-amber)">' +
          '<span class="ds-strip__label">CC+</span>' +
          '<div><p class="ds-cue" style="text-align:left;font-size:15px;text-shadow:none"><span class="ds-cue__speaker">АННА:</span>Я скоро вернусь, обещаю.' +
          '<span class="ds-cue__sound">[дверь резко захлопывается]</span></p></div></div>' +
      '</div>' +
      '<div class="ds-container" style="padding-top:88px;padding-bottom:76px">' +
        '<div class="ds-center" style="margin-bottom:26px"><h2 class="ds-d1">Одна подписка</h2>' +
          '<p class="ds-body" style="margin:12px auto 0">Без уровней и доплат — всё открыто одинаково для всех.</p></div>' +
        planCard(VIP) + '</div>' +
    '</div></div>';
};

/* 02 — Login */
S.login = function () {
  return authFrame(
    dsLogo(38, 24) +
    '<h1 class="ds-d2" style="margin-top:34px">С возвращением</h1>' +
    '<p class="ds-sm" style="margin-top:8px">Войдите, чтобы продолжить с того места, где остановились.</p>' +
    '<div class="ds-stack ds-g4" style="margin-top:30px">' +
      '<div class="ds-field"><label class="ds-label" for="le">Email</label>' +
        '<input class="ds-input" id="le" type="email" value="anna.k@example.ru" autocomplete="email"></div>' +
      '<div class="ds-field"><label class="ds-label" for="lp">Пароль</label>' +
        '<div style="position:relative;display:flex;align-items:center">' +
          '<input class="ds-input" id="lp" type="password" value="secretpass" style="padding-right:52px" autocomplete="current-password">' +
          '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" style="position:absolute;right:8px" data-pw="lp" aria-label="Показать пароль">' + ic('eye', 17) + '</button>' +
        '</div></div>' +
      '<div class="ds-between"><label class="ds-opt" style="padding:0"><span class="ds-opt__box ds-opt__box--check is-on" style="border-color:var(--ds-amber);background:var(--ds-amber)"></span>' +
        '<span class="ds-sm">Запомнить меня</span></label>' +
        '<button class="ds-btn ds-btn--sm ds-btn--ghost">Забыли пароль?</button></div>' +
      '<button class="ds-btn ds-btn--primary ds-btn--hero ds-btn--block" data-go="home">Войти</button>' +
      '<div class="ds-row-f ds-g3"><div class="ds-divider ds-grow"></div><span class="ds-cap">или</span><div class="ds-divider ds-grow"></div></div>' +
      '<button class="ds-btn ds-btn--secondary ds-btn--block">' + ic('apple', 17) + ' Продолжить с Apple</button>' +
      '<button class="ds-btn ds-btn--secondary ds-btn--block">' + ic('google', 17) + ' Продолжить с Google</button>' +
    '</div>' +
    '<p class="ds-sm ds-center" style="margin-top:26px">Нет аккаунта? <button class="ds-btn ds-btn--sm ds-btn--ghost" data-go="register" style="color:var(--ds-accent)">Создать аккаунт</button></p>' +

    '<div style="margin-top:38px;padding-top:24px;border-top:1px solid var(--ds-line)">' +
      '<p class="ds-eyebrow" style="margin-bottom:12px">Состояния экрана</p>' +
      '<div class="ds-stack ds-g2">' +
        '<div class="ds-toast" style="max-width:none"><span class="ds-toast__ico" style="color:var(--ds-err)">' + ic('alert', 18) + '</span>' +
          '<div><strong>Неверный пароль</strong><div class="ds-cap">Осталось 4 попытки. Можно восстановить доступ по email.</div></div></div>' +
        '<div class="ds-toast" style="max-width:none"><span class="ds-toast__ico" style="color:var(--ds-err)">' + ic('alert', 18) + '</span>' +
          '<div><strong>Проверьте адрес</strong><div class="ds-cap">«anna.k@examplе» — похоже, в домене кириллическая «е».</div></div></div>' +
        '<div class="ds-toast" style="max-width:none"><span class="ds-toast__ico" style="color:var(--ds-warn)">' + ic('wifioff', 18) + '</span>' +
          '<div><strong>Нет соединения</strong><div class="ds-cap">Скачанные фильмы доступны без интернета.</div></div></div>' +
        '<div class="ds-toast" style="max-width:none"><span class="ds-toast__ico" style="color:var(--ds-ink-3)">' + ic('refresh', 18) + '</span>' +
          '<div><strong>Входим…</strong><div class="ds-cap">Кнопка заблокирована, спиннер вместо подписи.</div></div></div>' +
      '</div></div>',
    'Продолжайте с той же секунды',
    'Прогресс, избранное, списки и настройки субтитров синхронизируются между вебом, iPhone и Android.'
  );
};

/* 03 — Registration */
S.register = function () {
  return authFrame(
    dsLogo(38, 24) +
    '<h1 class="ds-d2" style="margin-top:34px">Создать аккаунт</h1>' +
    '<p class="ds-sm" style="margin-top:8px">Одна учётная запись — все устройства.</p>' +
    '<div class="ds-stack ds-g4" style="margin-top:30px">' +
      '<div class="ds-field"><label class="ds-label" for="rn">Имя</label><input class="ds-input" id="rn" value="Анна"></div>' +
      '<div class="ds-field"><label class="ds-label" for="re">Email</label><input class="ds-input" id="re" type="email" placeholder="you@example.ru"></div>' +
      '<div class="ds-field"><label class="ds-label" for="rp">Пароль</label>' +
        '<div style="position:relative;display:flex;align-items:center">' +
          '<input class="ds-input" id="rp" type="password" value="mypassword" style="padding-right:52px">' +
          '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" style="position:absolute;right:8px" data-pw="rp" aria-label="Показать пароль">' + ic('eye', 17) + '</button></div>' +
        '<div class="ds-row-f ds-g1" style="margin-top:8px">' +
          [1, 1, 1, 0].map(function (on) {
            return '<div style="height:3px;flex:1;border-radius:2px;background:' + (on ? 'var(--ds-ok)' : 'var(--ds-raised-3)') + '"></div>';
          }).join('') + '</div>' +
        '<span class="ds-help">Надёжный пароль. Минимум 8 символов, есть цифра и заглавная буква.</span></div>' +
      '<div class="ds-field"><label class="ds-label" for="rp2">Повторите пароль</label>' +
        '<input class="ds-input" id="rp2" type="password" value="mypassword"></div>' +
      '<label class="ds-opt" style="align-items:flex-start"><span class="ds-opt__box ds-opt__box--check is-on" style="border-color:var(--ds-amber);background:var(--ds-amber);margin-top:2px"></span>' +
        '<span class="ds-sm">Принимаю <span style="color:var(--ds-accent)">пользовательское соглашение</span> и <span style="color:var(--ds-accent)">политику конфиденциальности</span></span></label>' +
      '<button class="ds-btn ds-btn--primary ds-btn--hero ds-btn--block" data-go="plans">Создать аккаунт</button>' +
      '<div class="ds-row-f ds-g3"><div class="ds-divider ds-grow"></div><span class="ds-cap">или</span><div class="ds-divider ds-grow"></div></div>' +
      '<div class="ds-row-f ds-g3">' +
        '<button class="ds-btn ds-btn--secondary ds-grow">' + ic('apple', 17) + ' Apple</button>' +
        '<button class="ds-btn ds-btn--secondary ds-grow">' + ic('google', 17) + ' Google</button></div>' +
    '</div>' +
    '<p class="ds-sm ds-center" style="margin-top:26px">Уже есть аккаунт? <button class="ds-btn ds-btn--sm ds-btn--ghost" data-go="login" style="color:var(--ds-accent)">Войти</button></p>',
    'Субтитры под себя',
    'Размер, шрифт, цвет, фон и положение — настраиваются один раз и применяются ко всем фильмам.'
  );
};

/* 04 — Home */
S.home = function () {
  var h = M(9);
  return topbar('home') +
    '<section style="position:relative;height:700px;margin-top:-68px">' +
      heroStage(h.t + 'hero', '', 22) +
      '<div style="position:absolute;inset:0;background:linear-gradient(90deg,rgba(6,11,24,.94) 4%,rgba(6,11,24,.5) 50%,transparent 78%),linear-gradient(to top,var(--ds-void) 2%,transparent 44%)"></div>' +
      '<div class="ds-container" style="position:relative;height:100%;display:flex;flex-direction:column;justify-content:flex-end;padding-bottom:52px">' +
        '<div style="max-width:600px">' +
          '<p class="ds-eyebrow" style="color:var(--ds-accent)">Фильм недели</p>' +
          '<h1 class="ds-hero-title" style="margin-top:12px;font-size:clamp(2.4rem,4.6vw,4rem)">' + h.t + '</h1>' +
          '<div class="ds-wrap ds-g2" style="margin-top:16px;align-items:center">' +
            '<span class="ds-badge ds-badge--age ds-badge--lg">' + h.age + '</span>' +
            '<span class="ds-sm">' + h.y + '</span><span class="ds-mut2">·</span>' +
            '<span class="ds-sm">' + h.d + '</span><span class="ds-mut2">·</span>' +
            '<span class="ds-sm">' + h.g + '</span><span class="ds-mut2">·</span>' + stars(h.r) +
            '<span style="width:10px"></span>' + badges(h, { offline: 1, ad: 1 }) + '</div>' +
          '<p class="ds-body" style="margin-top:16px">Оператор северной станции теряет связь с материком и остаётся один на один с тишиной, ' +
            'которую он сам когда-то выбрал. Расширенные субтитры CC+ передают то, что герой перестал слышать.</p>' +
          '<div class="ds-row-f ds-g3" style="margin-top:26px">' +
            '<button class="ds-btn ds-btn--primary ds-btn--hero" data-go="player">' + ic('play', 17) + ' Смотреть</button>' +
            '<button class="ds-btn ds-btn--lg ds-btn--secondary">Трейлер</button>' +
            '<button class="ds-btn ds-btn--lg ds-btn--outline">' + ic('plus', 17) + ' В библиотеку</button>' +
            '<button class="ds-iconbtn" style="width:54px;height:54px" aria-label="В избранное">' + ic('heart', 21) + '</button></div>' +
        '</div></div></section>' +

    '<main class="ds-container" style="padding-bottom:24px">' +
      wContinue() +
      wRail('Для вас', [3, 7, 11, 15, 19, 1, 5], { offline: 1 }) +
      wRail('Популярное', [6, 2, 18, 10, 14, 0, 8], { offline: 1 }) +
      wRail('Новинки', [0, 3, 6, 12, 15, 19, 9], { offline: 1 }) +
      '<section style="margin-top:52px">' +
        '<button data-go="plans" class="ds-card" style="display:block;width:100%;text-align:left;cursor:pointer;padding:30px;border-color:var(--ds-vip-edge);background:linear-gradient(120deg,rgba(255,194,75,.13),transparent 58%),var(--ds-panel)">' +
          '<div class="ds-between" style="gap:32px;flex-wrap:wrap">' +
            '<div><div class="ds-row-f ds-g2">' +
              '<span style="width:30px;height:3px;border-radius:2px;background:var(--ds-vip)"></span>' +
              '<span class="ds-eyebrow" style="color:var(--ds-vip)">Подписка ВИП</span></div>' +
              '<h2 class="ds-d2" style="margin-top:12px">Весь каталог за 500 ₽ в месяц</h2>' +
              '<p class="ds-body" style="margin-top:8px">1 204 фильма, до 4K, скачивание, CC и CC+ — одинаково для всех.</p></div>' +
            '<div class="ds-row-f ds-g4" style="flex:none">' +
              '<div style="text-align:right"><div class="ds-num" style="font-size:2.2rem;font-weight:700;letter-spacing:-.03em">500 ₽</div>' +
              '<div class="ds-cap">в месяц</div></div>' +
              '<span class="ds-btn ds-btn--primary ds-btn--hero">Подписаться</span></div>' +
          '</div></button></section>' +
      wRail('С субтитрами', [1, 4, 8, 13, 16, 2, 11]) +
      '<section style="margin-top:52px">' + railHead('Лучшее с CC+') +
        '<div class="ds-rail ds-noscroll">' +
          [6, 0, 10, 14, 18, 7].map(function (i) {
            var m = M(i);
            return '<button class="ds-land" data-go="movie" style="min-width:340px;padding:0;background:none;cursor:pointer;text-align:left">' +
              '<div class="ds-land__art" style="position:relative">' + art(m.o, '', 'position:absolute;inset:0') +
              '<div style="position:absolute;inset:auto 0 0 0;padding:16px 18px">' +
                '<div class="ds-wrap ds-g1" style="margin-bottom:8px"><span class="ds-badge ds-badge--ccplus">CC+</span>' + (m.q.length ? '<span class="ds-badge ds-badge--4k">4K</span>' : '') + '</div>' +
                '<div style="font-family:var(--ds-display);font-weight:700;font-size:18px;letter-spacing:-.03em">' + m.t + '</div>' +
                '<div class="ds-cap" style="margin-top:3px">' + m.y + ' · ' + m.d + '</div></div></div></button>';
          }).join('') + '</div></section>' +
      wRail('Доступно в 4K', [0, 1, 2, 4, 6, 7, 10]) +
      wRail('Можно скачать', [3, 5, 9, 11, 13, 16, 17], { offline: 1 }) +
      wRail('Недавно добавлено', [19, 18, 17, 16, 15, 14, 13]) +
    '</main>' + webFoot();
};

/* 05 — Search (empty / discovery state) */
S.search = function () {
  return topbar('') + '<main class="ds-container" style="padding-top:52px;padding-bottom:64px;max-width:1080px">' +
    '<h1 class="ds-d1">Поиск</h1>' +
    '<div class="ds-search" style="margin-top:22px;min-height:64px;font-size:1.05rem">' +
      '<span style="color:var(--ds-ink-3);display:flex">' + ic('search', 22) + '</span>' +
      '<input placeholder="Название, оригинальное название, актёр, режиссёр, жанр, страна, год" style="font-size:1rem">' +
      '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" aria-label="Голосовой поиск">' + ic('mic', 18) + '</button>' +
      '<button class="ds-btn ds-btn--sm ds-btn--secondary" data-go="filters">' + ic('filter', 14) + ' Фильтры</button></div>' +

    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:44px;margin-top:40px">' +
      '<div><div class="ds-between" style="margin-bottom:14px"><p class="ds-eyebrow">Недавние запросы</p>' +
        '<button class="ds-btn ds-btn--sm ds-btn--ghost">Очистить</button></div>' +
        '<div class="ds-stack">' + ['год тишины', 'документальные 2025', 'исландия драма', 'фильмы с CC+', 'полярная станция'].map(function (q) {
          return '<button class="ds-row" style="min-height:46px;padding:9px 0"><span class="ds-row__ico">' + ic('clock', 17) + '</span>' +
            '<span class="ds-row__main"><span class="ds-row__title" style="font-size:14px">' + q + '</span></span>' +
            '<span class="ds-row__chev">' + ic('x', 15) + '</span></button>';
        }).join('') + '</div></div>' +
      '<div><p class="ds-eyebrow" style="margin-bottom:14px">Сейчас ищут</p>' +
        '<div class="ds-stack">' + [['Год тишины', '+240%'], ['Реальные события 2025', '+118%'], ['Пепел и снег', '+96%'], ['CC+ подборка', '+74%'], ['Территория льда', '+51%']].map(function (q, i) {
          return '<button class="ds-row" style="min-height:46px;padding:9px 0"><span class="ds-row__ico ds-num" style="color:var(--ds-accent);font-weight:700">' + (i + 1) + '</span>' +
            '<span class="ds-row__main"><span class="ds-row__title" style="font-size:14px">' + q[0] + '</span></span>' +
            '<span class="ds-row__meta ds-num" style="color:var(--ds-ok)">' + q[1] + '</span></button>';
        }).join('') + '</div></div>' +
    '</div>' +

    '<div style="margin-top:44px"><p class="ds-eyebrow" style="margin-bottom:14px">Подсказки при вводе «пол»</p>' +
      '<div class="ds-card" style="padding:8px;max-width:620px">' +
        [['film', '<strong>Пол</strong>ярная станция', 'Фильм · 2023 · Канада'],
         ['film', '<strong>Пол</strong>ночь в Осло', 'Фильм · 2021 · Норвегия'],
         ['user', 'Анна <strong>Пол</strong>якова', 'Режиссёр · 4 фильма'],
         ['folder', 'Северное кино', 'Подборка · 18 фильмов']].map(function (r) {
          return '<button class="ds-row" style="border-bottom:0;border-radius:var(--ds-r-sm)"><span class="ds-row__ico">' + ic(r[0], 17) + '</span>' +
            '<span class="ds-row__main"><span class="ds-row__title">' + r[1] + '</span>' +
            '<span class="ds-row__sub">' + r[2] + '</span></span></button>';
        }).join('') + '</div></div>' +
    '</main>' + webFoot();
};

/* 06 — Search Results */
S.results = function () {
  return topbar('') + '<main class="ds-container" style="padding-top:44px;padding-bottom:64px">' +
    '<div class="ds-search" style="min-height:60px">' +
      '<span style="color:var(--ds-ink-3);display:flex">' + ic('search', 21) + '</span>' +
      '<input value="реальные события" style="font-size:1rem">' +
      '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" aria-label="Очистить">' + ic('x', 17) + '</button></div>' +

    '<div class="ds-between" style="margin-top:24px;flex-wrap:wrap;gap:12px">' +
      '<div class="ds-wrap ds-g2">' +
        '<button class="ds-btn ds-btn--sm ds-btn--secondary" data-go="filters">' + ic('filter', 14) + ' Фильтры · 3</button>' +
        '<button class="ds-chip" aria-pressed="true">Документальные ' + ic('x', 12) + '</button>' +
        '<button class="ds-chip ds-chip--amber" aria-pressed="true">CC+ ' + ic('x', 12) + '</button>' +
        '<button class="ds-chip" aria-pressed="true">Можно скачать ' + ic('x', 12) + '</button>' +
        '<button class="ds-btn ds-btn--sm ds-btn--ghost">Сбросить</button></div>' +
      '<div class="ds-row-f ds-g3">' +
        '<span class="ds-sm ds-mut2"><span class="ds-num">24</span> фильма</span>' +
        '<select class="ds-select" style="min-height:38px;padding:7px 38px 7px 14px;width:auto;font-size:13px">' +
          '<option>По популярности</option><option>По рейтингу</option><option>Сначала новые</option><option>Сначала старые</option><option>A–Z</option></select>' +
        '<div class="ds-seg"><button aria-selected="true">' + ic('grid', 14) + '</button><button aria-selected="false">' + ic('list', 14) + '</button></div></div></div>' +

    '<div style="display:grid;grid-template-columns:repeat(6,1fr);gap:18px;margin-top:28px">' +
      [5, 10, 14, 18, 1, 6, 0, 9, 11, 3, 16, 19].map(function (i) { return wPoster(M(i), { offline: 1, w: 0 }); }).join('') + '</div>' +

    '<div style="margin-top:52px"><p class="ds-eyebrow" style="margin-bottom:14px">Тот же запрос в виде списка</p>' +
      '<div class="ds-card" style="padding:8px;max-width:820px">' +
        [5, 10, 14].map(function (i) {
          var m = M(i);
          return '<div class="ds-hit"><div class="ds-hit__art" style="position:relative">' + art(m.o, '', 'position:absolute;inset:0') + '</div>' +
            '<div class="ds-hit__main"><div class="ds-h3">' + m.t + '</div>' +
            '<div class="ds-cap" style="margin-top:3px">' + m.o + ' · ' + m.y + ' · ' + m.c + ' · ' + m.d + '</div>' +
            '<div class="ds-wrap ds-g1" style="margin-top:8px;align-items:center">' + badges(m, { offline: 1 }) + stars(m.r) + '</div></div>' +
            '<button class="ds-btn ds-btn--sm ds-btn--primary">' + ic('play', 12) + ' Смотреть</button>' +
            '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" aria-label="Ещё">' + ic('moreH', 16) + '</button></div>';
        }).join('') + '</div></div>' +

    '<div style="margin-top:52px;max-width:520px"><p class="ds-eyebrow" style="margin-bottom:14px">Если ничего не найдено</p>' +
      '<div class="ds-card"><div class="ds-empty" style="padding:30px 16px">' +
        '<span class="ds-empty__ico">' + ic('search', 26) + '</span>' +
        '<div><h4 class="ds-h2">Ничего не нашлось</h4>' +
        '<p class="ds-sm" style="margin-top:6px;max-width:38ch">По запросу «реальные события» с фильтрами CC+ и 4K нет фильмов. ' +
        'Попробуйте убрать фильтр 4K — тогда найдётся 24 фильма.</p></div>' +
        '<div class="ds-row-f ds-g2"><button class="ds-btn ds-btn--sm ds-btn--primary">Убрать фильтр 4K</button>' +
        '<button class="ds-btn ds-btn--sm ds-btn--ghost">Сбросить всё</button></div></div></div></div>' +
    '</main>' + webFoot();
};

/* 07 — Filters */
S.filters = function () {
  function group(label, body) {
    return '<div style="padding:22px 0;border-bottom:1px solid var(--ds-line)">' +
      '<p class="ds-h3" style="margin-bottom:14px">' + label + '</p>' + body + '</div>';
  }
  function chips(list, on, amber) {
    return '<div class="ds-wrap ds-g2">' + list.map(function (t, i) {
      return '<button class="ds-chip' + (amber ? ' ds-chip--amber' : '') + '"' + (on.indexOf(i) > -1 ? ' aria-pressed="true"' : '') + '>' + t + '</button>';
    }).join('') + '</div>';
  }
  return topbar('') + '<main class="ds-container" style="padding-top:44px;padding-bottom:64px;max-width:900px">' +
    '<div class="ds-between"><h1 class="ds-d1">Фильтры</h1>' +
      '<button class="ds-iconbtn ds-iconbtn--bare" data-go="results" aria-label="Закрыть">' + ic('x', 20) + '</button></div>' +

    group('Тип', chips(['Фильм', 'Сериал', 'Документальный'], [0])) +
    group('Жанр', chips(['Драма', 'Комедия', 'Триллер', 'Ужасы', 'Фантастика', 'Документальные', 'Биография', 'Семейные', 'Криминал', 'История', 'Приключения', 'Мелодрама'], [0, 5])) +
    group('Год', '<div class="ds-row-f ds-g4"><span class="ds-num ds-sm" style="width:52px">1998</span>' +
      '<input class="ds-slider" type="range" min="1998" max="2026" value="2018" aria-label="Год от"><span class="ds-num ds-sm" style="width:52px;text-align:right">2026</span></div>' +
      '<div class="ds-wrap ds-g2" style="margin-top:14px">' + ['2026', '2025', '2024', '2023', '2020-е', '2010-е'].map(function (t, i) {
        return '<button class="ds-chip"' + (i === 1 ? ' aria-pressed="true"' : '') + '>' + t + '</button>'; }).join('') + '</div>') +
    group('Страна', chips(['Россия', 'США', 'Франция', 'Германия', 'Япония', 'Корея', 'Испания', 'Дания', 'Исландия', 'Норвегия'], [0])) +
    group('Рейтинг', '<div class="ds-wrap ds-g2">' + ['От 6', 'От 7', 'От 8', 'От 9'].map(function (t, i) {
      return '<button class="ds-chip"' + (i === 2 ? ' aria-pressed="true"' : '') + '>' + ic('star', 13) + ' ' + t + '</button>'; }).join('') + '</div>') +
    group('Продолжительность', chips(['До 90 мин', '90–120 мин', '120–150 мин', 'Больше 150 мин'], [1])) +
    group('Качество', chips(['360p', '480p', '720p', '1080p', '2K', '4K'], [3, 5])) +

    '<div style="padding:22px 0;border-bottom:1px solid var(--ds-line);background:var(--ds-amber-dim);margin:0 -20px;padding-left:20px;padding-right:20px;border-radius:var(--ds-r-md)">' +
      '<div class="ds-row-f ds-g2" style="margin-bottom:6px"><span style="color:var(--ds-amber);display:flex">' + ic('cc', 18) + '</span>' +
        '<p class="ds-h3">Субтитры</p></div>' +
      '<p class="ds-cap" style="margin-bottom:14px">Главный фильтр сервиса — вынесен и подсвечен.</p>' +
      chips(['Любые', 'CC', 'CC+', 'SDH'], [2], true) + '</div>' +

    group('Дополнительно',
      '<div class="ds-stack">' +
        [['Можно скачать', 1], ['Есть тифлокомментарий (AD)', 0], ['Реальные события', 1], ['Уже в моей библиотеке', 0]].map(function (r) {
          return '<div class="ds-between" style="padding:10px 0"><span class="ds-sm" style="color:var(--ds-ink)">' + r[0] + '</span>' +
            '<label class="ds-switch"><input type="checkbox"' + (r[1] ? ' checked' : '') + '><span class="ds-switch__track"></span><span class="ds-switch__thumb"></span></label></div>';
        }).join('') + '</div>') +
    group('Сортировка', chips(['По популярности', 'По рейтингу', 'Сначала новые', 'Сначала старые', 'A–Z'], [0])) +

    '<div class="ds-between" style="position:sticky;bottom:0;background:var(--ds-void);padding:22px 0;margin-top:8px;border-top:1px solid var(--ds-line)">' +
      '<button class="ds-btn ds-btn--ghost">Сбросить всё</button>' +
      '<button class="ds-btn ds-btn--primary ds-btn--hero" data-go="results">Показать 24 фильма</button></div>' +
    '</main>';
};

/* 08 — Categories */
S.categories = function () {
  var CATS = [
    ['Все фильмы', 1204, 'film'], ['Новинки', 86, 'sparkle'], ['Популярное', 120, 'bolt'],
    ['Реальные события', 214, 'globe'], ['Мелодрама', 96, 'heart'], ['Драма', 318, 'film'],
    ['Комедия', 142, 'film'], ['Триллер', 187, 'film'], ['Ужасы', 74, 'film'],
    ['Фантастика', 129, 'film'], ['Документальные', 203, 'film'], ['Биография', 68, 'film'],
    ['Семейные', 91, 'film'], ['С субтитрами', 1204, 'cc'], ['CC+', 340, 'cc'],
    ['4K', 268, 'quality'], ['Офлайн', 902, 'download']
  ];
  return topbar('movies') + '<main class="ds-container" style="padding-top:44px;padding-bottom:64px">' +
    '<h1 class="ds-d1">Категории</h1>' +
    '<p class="ds-body" style="margin-top:10px">Жанры, коллекции и то, чего нет у других: подборки по субтитрам, качеству и офлайн-доступу.</p>' +
    '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:32px">' +
      CATS.map(function (c, i) {
        var special = i >= 13;
        return '<button data-go="category" class="ds-land" style="padding:0;background:none;cursor:pointer;text-align:left;border-color:' + (special ? 'var(--ds-amber-edge)' : 'var(--ds-line)') + '">' +
          '<div style="position:relative;aspect-ratio:16/10;overflow:hidden">' + art(c[0] + 'cat', '', 'position:absolute;inset:0') +
          '<div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(3,7,19,.9),rgba(3,7,19,.15))"></div>' +
          '<div style="position:absolute;inset:auto 0 0 0;padding:15px 17px">' +
            '<span style="color:' + (special ? 'var(--ds-amber)' : 'var(--ds-accent)') + ';display:flex;margin-bottom:8px">' + ic(c[2], 19) + '</span>' +
            '<div class="ds-h3">' + c[0] + '</div>' +
            '<div class="ds-cap ds-num" style="margin-top:2px">' + c[1] + ' фильмов</div></div></div></button>';
      }).join('') + '</div></main>' + webFoot();
};

/* 09 — Category Detail */
S.category = function () {
  return topbar('movies') +
    '<section style="position:relative;height:340px;margin-top:-68px">' +
      '<div class="ds-art" style="position:absolute;inset:0">' + dsArt('cat-ccplus') + '</div>' +
      '<div style="position:absolute;inset:0;background:linear-gradient(to top,var(--ds-void) 4%,rgba(6,11,24,.6))"></div>' +
      '<div class="ds-container" style="position:relative;height:100%;display:flex;flex-direction:column;justify-content:flex-end;padding-bottom:32px">' +
        '<div class="ds-row-f ds-g2" style="margin-bottom:12px"><span class="ds-badge ds-badge--ccplus ds-badge--lg">CC+</span>' +
          '<span class="ds-cap ds-num">340 фильмов</span></div>' +
        '<h1 class="ds-d1">Лучшее с CC+</h1>' +
        '<p class="ds-body" style="margin-top:10px">Фильмы с расширенными субтитрами: имена говорящих, музыка, важные звуки и окружение. ' +
        'Каждый текст вычитан редактором вручную.</p></div></section>' +
    '<main class="ds-container" style="padding-bottom:64px">' +
      '<div class="ds-between" style="padding:22px 0;flex-wrap:wrap;gap:12px">' +
        '<div class="ds-wrap ds-g2">' + ['Все', 'Драма', 'Документальные', 'Триллер', 'Фантастика', 'Мелодрама'].map(function (t, i) {
          return '<button class="ds-chip"' + (i === 0 ? ' aria-pressed="true"' : '') + '>' + t + '</button>'; }).join('') + '</div>' +
        '<div class="ds-row-f ds-g3">' +
          '<button class="ds-btn ds-btn--sm ds-btn--secondary" data-go="filters">' + ic('filter', 14) + ' Фильтры</button>' +
          '<select class="ds-select" style="min-height:38px;padding:7px 38px 7px 14px;width:auto;font-size:13px"><option>По популярности</option><option>По рейтингу</option><option>Сначала новые</option></select>' +
          '<div class="ds-seg"><button aria-selected="true">' + ic('grid', 14) + '</button><button aria-selected="false">' + ic('list', 14) + '</button></div></div></div>' +
      '<div style="display:grid;grid-template-columns:repeat(6,1fr);gap:18px">' +
        [0, 1, 3, 5, 6, 7, 10, 12, 14, 16, 17, 18, 2, 4, 8, 9, 11, 13].map(function (i) { return wPoster(M(i), { offline: 1, w: 0 }); }).join('') + '</div>' +
      '<div class="ds-center" style="margin-top:36px"><button class="ds-btn ds-btn--secondary">Показать ещё 18</button></div>' +
    '</main>' + webFoot();
};

/* 10 — Movie Detail */
S.movie = function () {
  var m = M(9);
  return topbar('movies') +
    '<section style="position:relative;min-height:620px;margin-top:-68px">' +
      heroStage(m.t + 'hero', '', 18) +
      '<div style="position:absolute;inset:0;background:linear-gradient(90deg,rgba(6,11,24,.95) 6%,rgba(6,11,24,.55) 54%,rgba(6,11,24,.28)),linear-gradient(to top,var(--ds-void) 2%,transparent 48%)"></div>' +
      '<div class="ds-container" style="position:relative;padding-top:130px;padding-bottom:44px;display:grid;grid-template-columns:264px minmax(0,1fr);gap:44px;align-items:end">' +
        '<div style="border-radius:var(--ds-r-lg);overflow:hidden;border:1px solid var(--ds-line-mid);box-shadow:var(--ds-e4);position:relative;aspect-ratio:2/3">' +
          art(m.t, '', 'position:absolute;inset:0', m.t, 20) + '</div>' +
        '<div>' +
          '<h1 class="ds-hero-title" style="font-size:clamp(2.2rem,4vw,3.4rem)">' + m.t + '</h1>' +
          '<p class="ds-h3" style="color:var(--ds-ink-3);font-weight:500;margin-top:8px">' + m.o + '</p>' +
          '<div class="ds-wrap ds-g2" style="margin-top:16px;align-items:center">' +
            '<span class="ds-badge ds-badge--age ds-badge--lg">' + m.age + '</span>' +
            '<span class="ds-sm">' + m.y + '</span><span class="ds-mut2">·</span><span class="ds-sm">' + m.d + '</span>' +
            '<span class="ds-mut2">·</span><span class="ds-sm">' + m.g + '</span><span class="ds-mut2">·</span><span class="ds-sm">' + m.c + '</span>' +
            '<span style="width:8px"></span>' + badges(m, { offline: 1, ad: 1 }) + '</div>' +
          '<div class="ds-row-f ds-g4" style="margin-top:16px">' +
            '<div class="ds-row-f ds-g2"><span style="color:var(--ds-accent);display:flex">' + ic('star', 20) + '</span>' +
              '<span class="ds-num" style="font-size:1.35rem;font-weight:700">' + m.r.toFixed(1) + '</span>' +
              '<span class="ds-cap">DeafSuslik · 4 218 оценок</span></div></div>' +
          '<p class="ds-body" style="margin-top:18px;font-size:0.98rem">Оператор северной станции теряет связь с материком и остаётся один на один с тишиной, ' +
            'которую он сам когда-то выбрал. Год без единого слова — и один звук, который меняет всё.</p>' +
          '<div class="ds-wrap ds-g3" style="margin-top:28px">' +
            '<button class="ds-btn ds-btn--primary ds-btn--hero" data-go="player">' + ic('play', 17) + ' Смотреть</button>' +
            '<button class="ds-btn ds-btn--lg ds-btn--secondary">Трейлер</button>' +
            '<button class="ds-btn ds-btn--lg ds-btn--outline" data-go="download-web">' + ic('download', 17) + ' Скачать</button>' +
            '<button class="ds-btn ds-btn--lg ds-btn--outline">' + ic('plus', 17) + ' В библиотеку</button>' +
            '<button class="ds-iconbtn" style="width:54px;height:54px" aria-label="В избранное">' + ic('heart', 21) + '</button>' +
            '<button class="ds-iconbtn" style="width:54px;height:54px" aria-label="Поделиться">' + ic('share', 21) + '</button></div>' +
        '</div></div></section>' +

    '<main class="ds-container" style="padding-bottom:64px">' +
      '<div style="display:grid;grid-template-columns:minmax(0,1fr) 328px;gap:56px;align-items:start">' +
        '<div>' +
          '<section><h2 class="ds-h1">Описание</h2>' +
            '<p class="ds-body" style="margin-top:12px">Пятый год Марк работает на метеостанции у кромки льда. Радиосвязь оборвалась в ноябре, ' +
            'вертолёт не придёт до весны. Он ведёт дневник, считает дни и учится различать оттенки тишины — ' +
            'пока однажды не слышит то, чего слышать не должен.</p>' +
            '<p class="ds-body" style="margin-top:12px">Фильм снят почти без диалогов. Расширенные субтитры CC+ описывают всё, ' +
            'что происходит в звуке: ветер, лёд, дыхание, помехи в приёмнике. Для зрителя, который не слышит, ' +
            'это не пересказ — это полноценный второй слой фильма.</p></section>' +

          '<section style="margin-top:44px"><h2 class="ds-h1">Актёры</h2>' +
            '<div class="ds-rail ds-noscroll" style="margin-top:16px">' +
              [['Марк Кольцов', 'Марк'], ['Анна Райт', 'Анна'], ['Пётр Соболев', 'Радист'], ['Ингрид Ларсен', 'Голос из приёмника'], ['Дмитрий Фомин', 'Пилот'], ['Ева Норд', 'Дочь']].map(function (a) {
                return '<div style="min-width:116px;text-align:center">' +
                  '<div style="width:96px;height:96px;border-radius:99px;overflow:hidden;margin:0 auto;position:relative;border:1px solid var(--ds-line)">' +
                  art(a[0], '', 'position:absolute;inset:0') + '</div>' +
                  '<div class="ds-sm" style="margin-top:10px;font-weight:600;color:var(--ds-ink)">' + a[0] + '</div>' +
                  '<div class="ds-cap">' + a[1] + '</div></div>';
              }).join('') + '</div></section>' +

          '<section style="margin-top:44px"><h2 class="ds-h1">Режиссёр</h2>' +
            '<div class="ds-row-f ds-g4" style="margin-top:16px">' +
              '<div style="width:72px;height:72px;border-radius:99px;overflow:hidden;position:relative;flex:none;border:1px solid var(--ds-line)">' + art('Юлия Бергер', '', 'position:absolute;inset:0') + '</div>' +
              '<div><div class="ds-h3">Юлия Бергер</div><div class="ds-cap" style="margin-top:3px">Режиссёр, сценарист · 6 фильмов на DeafSuslik</div>' +
              '<button class="ds-btn ds-btn--sm ds-btn--ghost" style="margin-top:6px;padding:0">Все фильмы режиссёра ' + ic('chevR', 13) + '</button></div></div></section>' +

          '<section style="margin-top:44px"><div class="ds-between"><h2 class="ds-h1">Отзывы</h2>' +
            '<button class="ds-btn ds-btn--sm ds-btn--secondary">' + ic('plus', 14) + ' Написать</button></div>' +
            '<div class="ds-stack ds-g3" style="margin-top:16px">' +
              [['Ирина П.', 9, '2 дня назад', 'Впервые смотрела фильм, где описание звука — часть художественного языка, а не техническая сноска. «[лёд трещит где-то далеко]» работает как кадр.'],
               ['Сергей М.', 8, '5 дней назад', 'Медленно, но затягивает. CC+ вычитаны отлично, ни одной рассинхронизации за два часа.'],
               ['Наталья В.', 10, 'неделю назад', 'Смотрела с дочерью, она слабослышащая. Она впервые не переспрашивала, что происходит. Спасибо.']].map(function (r) {
                return '<div class="ds-card"><div class="ds-between" style="align-items:flex-start">' +
                  '<div class="ds-row-f ds-g3"><div style="width:36px;height:36px;border-radius:99px;position:relative;overflow:hidden;flex:none">' + art(r[0], '', 'position:absolute;inset:0') + '</div>' +
                  '<div><div class="ds-h3" style="font-size:14px">' + r[0] + '</div><div class="ds-cap">' + r[2] + '</div></div></div>' +
                  '<div class="ds-row-f ds-g1" style="color:var(--ds-accent)">' + ic('star', 15) + '<span class="ds-num" style="font-weight:700;color:var(--ds-ink)">' + r[1] + '</span><span class="ds-cap">/10</span></div></div>' +
                  '<p class="ds-sm" style="margin-top:12px">' + r[3] + '</p></div>';
              }).join('') + '</div></section>' +

          wRail('Похожие фильмы', [6, 0, 18, 10, 14, 2, 7], { mt: 44 }) +
          wRail('Вам также понравится', [3, 11, 15, 19, 4, 8, 12], { mt: 44 }) +
        '</div>' +

        '<aside style="position:sticky;top:92px">' +
          '<div class="ds-card ds-card--flush" style="border-color:var(--ds-amber-edge)">' +
            '<div style="padding:18px 20px;background:var(--ds-amber-dim);border-bottom:1px solid var(--ds-amber-edge)">' +
              '<div class="ds-row-f ds-g2"><span style="color:var(--ds-amber);display:flex">' + ic('cc', 19) + '</span>' +
              '<h3 class="ds-h2">Субтитры</h3></div></div>' +
            '<div style="padding:16px 20px" class="ds-stack ds-g3">' +
              [['Русский', 'CC+', 1], ['Русский', 'CC', 0], ['English', 'CC', 0], ['Deutsch', 'SUB', 0], ['Français', 'SUB', 0]].map(function (s) {
                return '<div class="ds-between"><span class="ds-sm" style="color:var(--ds-ink)">' + s[0] + '</span>' +
                  '<span class="ds-badge ' + (s[1] === 'CC+' ? 'ds-badge--ccplus' : s[1] === 'CC' ? 'ds-badge--cc' : '') + '">' + s[1] + '</span></div>';
              }).join('') +
              '<div class="ds-divider"></div>' +
              '<button class="ds-btn ds-btn--sm ds-btn--amber ds-btn--block" data-go="cc-settings">Настроить внешний вид</button></div></div>' +

          '<div class="ds-card" style="margin-top:16px">' +
            '<h3 class="ds-h2" style="margin-bottom:14px">Доступно</h3>' +
            '<div class="ds-stack ds-g3">' +
              '<div class="ds-between"><span class="ds-sm ds-mut">Качество</span>' +
                '<div class="ds-wrap ds-g1"><span class="ds-badge">1080p</span><span class="ds-badge">2K</span><span class="ds-badge ds-badge--4k">4K</span></div></div>' +
              '<div class="ds-between"><span class="ds-sm ds-mut">Озвучка</span><span class="ds-sm">Русский, English</span></div>' +
              '<div class="ds-between"><span class="ds-sm ds-mut">Тифлокомментарий</span><span class="ds-badge ds-badge--ad">AD · Русский</span></div>' +
              '<div class="ds-between"><span class="ds-sm ds-mut">Скачивание</span><span class="ds-badge ds-badge--ok">Разрешено</span></div>' +
              '<div class="ds-between"><span class="ds-sm ds-mut">Подписка</span><span class="ds-badge ds-badge--accent">Любой фильм</span></div>' +
            '</div></div>' +

          '<div class="ds-card" style="margin-top:16px">' +
            '<h3 class="ds-h2" style="margin-bottom:12px">Съёмочная группа</h3>' +
            '<div class="ds-stack ds-g2">' +
              [['Режиссёр', 'Юлия Бергер'], ['Сценарий', 'Юлия Бергер, Марк Дан'], ['Оператор', 'Ли Чон Хо'], ['Композитор', 'Эрик Валь'], ['Продюсер', 'Ольга Ким']].map(function (c) {
                return '<div class="ds-between" style="align-items:flex-start"><span class="ds-cap" style="flex:none;width:100px">' + c[0] + '</span>' +
                  '<span class="ds-sm" style="text-align:right">' + c[1] + '</span></div>';
              }).join('') + '</div></div>' +
        '</aside></div></main>' + webFoot();
};
