/* ============================================================
   Mobile screens 12–48 — player, captions, downloads,
   library, subscriptions, account, support
   ============================================================ */

/* Portrait player chrome */
function mPlayer(os, opts) {
  opts = opts || {};
  return '<div class="ds-player" style="flex:1;position:relative">' +
    '<div class="ds-player__stage">' + dsArt('player-main') + '</div>' +
    (opts.hideCue ? '' :
      '<div class="ds-cuetrack" style="position:absolute;left:0;right:0;bottom:22%;z-index:2">' +
        '<span class="ds-cuebox" style="max-width:30ch"><span class="ds-cue" style="font-size:15px">' +
        '<span class="ds-cue__speaker">АННА:</span>Я скоро вернусь, обещаю.' +
        '<span class="ds-cue__sound">[дверь резко захлопывается]</span></span></span></div>') +
    (opts.gestures ?
      '<div style="position:absolute;inset:0;display:flex;z-index:5">' +
        '<div style="flex:1;display:grid;place-items:center;background:radial-gradient(circle at 30% 50%, rgba(255,255,255,.14), transparent 62%)">' +
          '<div style="text-align:center;color:#fff"><span style="display:flex;justify-content:center">' + ic('back10', 34) + '</span>' +
          '<div class="ds-num" style="font-size:13px;font-weight:700;margin-top:6px">−10 сек</div></div></div>' +
        '<div style="flex:1"></div></div>' : '') +
    '<div class="ds-player__ui">' +
      '<div class="ds-player__top" style="padding:52px 16px 12px">' +
        '<button class="ds-pbtn ds-pbtn--sm" aria-label="Свернуть">' + ic('chevD', 21) + '</button>' +
        '<div class="ds-grow" style="min-width:0"><div style="font-size:14px;font-weight:600">Год тишины</div>' +
        '<div class="ds-cap ds-num">AUTO · 1080p · CC+ Русский</div></div>' +
        '<button class="ds-pbtn ds-pbtn--sm" aria-label="Заблокировать управление">' + ic('lock', 19) + '</button>' +
        '<button class="ds-pbtn ds-pbtn--sm" aria-label="Сообщить о проблеме">' + ic('help', 19) + '</button>' +
      '</div>' +
      '<div class="ds-player__center" style="gap:26px">' +
        '<button class="ds-pbtn" style="width:52px;height:52px" aria-label="Назад 10 секунд">' + ic('back10', 22) + '</button>' +
        '<button class="ds-pbtn ds-pbtn--main" style="width:66px;height:66px" aria-label="Пауза">' + ic('pause', 26, 2.4) + '</button>' +
        '<button class="ds-pbtn" style="width:52px;height:52px" aria-label="Вперёд 10 секунд">' + ic('fwd10', 22) + '</button>' +
      '</div>' +
      '<div class="ds-player__bottom" style="padding:0 16px 14px">' +
        '<div class="ds-scrub"><div class="ds-scrub__track"></div><div class="ds-scrub__buf" style="width:74%"></div>' +
          '<div class="ds-scrub__fill" style="width:62%"></div><div class="ds-scrub__knob" style="left:62%"></div></div>' +
        '<div class="ds-between" style="margin-top:-2px">' +
          '<span class="ds-num" style="font-size:11px">01:22:18</span>' +
          '<span class="ds-num ds-mut2" style="font-size:11px">−00:49:42</span></div>' +
        '<div class="ds-between" style="margin-top:6px">' +
          '<button class="ds-pbtn ds-pbtn--cc is-on" style="height:36px;font-size:11px" aria-label="Субтитры: Русский CC+">' + ic('cc', 15) + ' CC+</button>' +
          '<div class="ds-row-f ds-g1">' +
            '<button class="ds-pbtn ds-pbtn--sm" style="width:36px;height:36px" aria-label="Качество">' + ic('quality', 18) + '</button>' +
            '<button class="ds-pbtn ds-pbtn--sm" style="width:36px;height:36px" aria-label="Скорость">' + ic('speed', 18) + '</button>' +
            '<button class="ds-pbtn ds-pbtn--sm" style="width:36px;height:36px" aria-label="Картинка в картинке">' + ic('pip', 18) + '</button>' +
            '<button class="ds-pbtn ds-pbtn--sm" style="width:36px;height:36px" aria-label="Полный экран">' + ic('fullscreen', 18) + '</button></div></div></div></div>' +
    (opts.sheet || '') + '</div>';
}

/* 12 — Player portrait */
Mo.player = function (os) { return phone(os, mPlayer(os)); };

/* 13 — Player landscape */
Mo.playerLand = function (os) {
  return phone(os,
    '<div class="ds-player" style="flex:1;position:relative">' +
      '<div class="ds-player__stage">' + dsArt('player-main') + '</div>' +
      '<div class="ds-cuetrack" style="position:absolute;left:0;right:0;bottom:18%;z-index:2">' +
        '<span class="ds-cuebox" style="max-width:42ch"><span class="ds-cue" style="font-size:17px">' +
        '<span class="ds-cue__speaker">АННА:</span>Я скоро вернусь, обещаю.' +
        '<span class="ds-cue__sound">[дверь резко захлопывается]</span></span></span></div>' +
      '<div class="ds-player__ui">' +
        '<div class="ds-player__top" style="padding:16px 46px 12px">' +
          '<button class="ds-pbtn ds-pbtn--sm" aria-label="Выйти из полного экрана">' + ic('chevL', 21) + '</button>' +
          '<div class="ds-grow" style="min-width:0"><div style="font-size:15px;font-weight:600">Год тишины</div>' +
          '<div class="ds-cap ds-num">AUTO · 1080p · CC+ Русский · Глава 3 «Лёд»</div></div>' +
          '<button class="ds-pbtn ds-pbtn--sm" aria-label="Заблокировать управление">' + ic('lock', 19) + '</button>' +
          '<button class="ds-pbtn ds-pbtn--sm" style="width:auto;padding:0 12px;height:36px;font-size:12px;font-weight:600;gap:6px" aria-label="Сообщить о проблеме">' + ic('help', 15) + ' Проблема?</button></div>' +
        '<div class="ds-player__center" style="gap:44px">' +
          '<button class="ds-pbtn ds-pbtn--skip" aria-label="Назад 10 секунд">' + ic('back10', 24) + '</button>' +
          '<button class="ds-pbtn ds-pbtn--main" style="width:70px;height:70px" aria-label="Пауза">' + ic('pause', 28, 2.4) + '</button>' +
          '<button class="ds-pbtn ds-pbtn--skip" aria-label="Вперёд 10 секунд">' + ic('fwd10', 24) + '</button></div>' +
        '<div class="ds-player__bottom" style="padding:0 46px 16px">' +
          '<div class="ds-scrub"><div class="ds-scrub__track"></div><div class="ds-scrub__buf" style="width:74%"></div>' +
            '<div class="ds-scrub__fill" style="width:62%"></div>' +
            '<div class="ds-scrub__chap" style="left:28%"></div><div class="ds-scrub__chap" style="left:55%"></div><div class="ds-scrub__chap" style="left:81%"></div>' +
            '<div class="ds-scrub__knob" style="left:62%"></div></div>' +
          '<div class="ds-between">' +
            '<div class="ds-row-f ds-g2"><span class="ds-num" style="font-size:12px">01:22:18</span>' +
              '<span class="ds-cap">/</span><span class="ds-num ds-mut2" style="font-size:12px">02:12:00</span>' +
              '<button class="ds-pbtn ds-pbtn--sm" style="margin-left:6px" aria-label="Громкость">' + ic('volume', 19) + '</button></div>' +
            '<div class="ds-row-f ds-g2">' +
              '<button class="ds-pbtn ds-pbtn--cc is-on" aria-label="Субтитры: Русский CC+">' + ic('cc', 16) + ' CC+ · Русский</button>' +
              '<button class="ds-pbtn ds-pbtn--sm" aria-label="Качество">' + ic('quality', 19) + '</button>' +
              '<button class="ds-pbtn ds-pbtn--sm" aria-label="Скорость">' + ic('speed', 19) + '</button>' +
              '<button class="ds-pbtn ds-pbtn--sm" aria-label="Следующая серия">' + ic('next', 18) + '</button>' +
              '<button class="ds-pbtn ds-pbtn--sm" aria-label="Выйти из полного экрана">' + ic('exitfull', 19) + '</button></div></div></div></div></div>',
    { land: 1 });
};

/* 14 — Problem sheet */
Mo.problem = function (os) {
  return phone(os, mPlayer(os, { hideCue: 1, sheet:
    mSheet('Что случилось?',
      '<p class="ds-cap" style="margin-bottom:12px">Момент фильма и технические данные приложим сами.</p>' +
      '<div class="ds-stack ds-g1">' +
        [['Проблема с видео', 'film'], ['Видео зависает', 'refresh'], ['Неверное качество', 'quality'],
         ['Проблема со звуком', 'volume'], ['Проблема с субтитрами', 'cc'], ['Проблема с CC+', 'cc'], ['Другое', 'more']].map(function (r, i) {
          return '<button class="ds-row" style="border-radius:var(--ds-r-md);border-bottom:0;padding:13px 14px' +
            (i >= 4 && i <= 5 ? ';border:1px solid var(--ds-amber-edge)' : '') + '">' +
            '<span class="ds-row__ico"' + (i >= 4 && i <= 5 ? ' style="color:var(--ds-amber)"' : '') + '>' + ic(r[1], 19) + '</span>' +
            '<span class="ds-row__main"><span class="ds-row__title">' + r[0] + '</span></span>' +
            '<span class="ds-row__chev">' + ic('chevR', 16) + '</span></button>';
        }).join('') + '</div>' +
      '<div class="ds-card" style="margin-top:14px;padding:13px;background:var(--ds-void)">' +
        '<p class="ds-eyebrow" style="margin-bottom:9px">Приложим</p>' +
        [['Фильм', 'Год тишины'], ['Момент', '01:22:18'], ['Качество', '1080p'],
         ['Субтитры', 'Русский CC+'], ['Устройство', os === 'android' ? 'Galaxy S25 · Android 16' : 'iPhone 17 Pro · iOS 26']].map(function (r) {
          return '<div class="ds-between" style="padding:2px 0"><span class="ds-cap">' + r[0] + '</span>' +
            '<span class="ds-num" style="font-size:11px;color:var(--ds-ink-2)">' + r[1] + '</span></div>';
        }).join('') + '</div>',
      '<button class="ds-btn ds-btn--primary ds-btn--block">Продолжить</button>', { h: '80%' }) }));
};

/* 15/16 — CC selector */
Mo.ccSelect = function (os) {
  return phone(os, mPlayer(os, { hideCue: 1, sheet:
    mSheet('Субтитры',
      mRow('Выкл.', '', 0) +
      '<p class="ds-eyebrow" style="margin:14px 0 6px">Расширенные — CC+</p>' +
      mRow('Русский', 'Реплики, говорящий, звук', 1, '<span class="ds-badge ds-badge--ccplus">CC+</span>') +
      mRow('English', 'Dialogue, speaker, sound', 0, '<span class="ds-badge ds-badge--ccplus">CC+</span>') +
      '<p class="ds-eyebrow" style="margin:14px 0 6px">Обычные</p>' +
      mRow('Русский', 'Только реплики', 0, '<span class="ds-badge ds-badge--cc">CC</span>') +
      mRow('English', 'Dialogue only', 0, '<span class="ds-badge ds-badge--cc">CC</span>') +
      mRow('Deutsch', '', 0, '<span class="ds-badge">SUB</span>') +
      '<div class="ds-divider" style="margin:14px 0"></div>' +
      mRow('Внешний вид субтитров', 'Размер, цвет, фон, положение', 0, '', 'settings') +
      mRow('Сообщить об ошибке', 'Текст, тайминг, говорящий', 0, '', 'alert'),
      null, { h: '78%' }) }));
};

/* 17 — Subtitle customisation */
Mo.ccSettings = function (os) {
  return phone(os,
    mHeader(os, 'Внешний вид', { back: 1, border: 1 }) +
    '<div class="ds-art" style="height:180px;position:relative;flex:none;display:flex;align-items:flex-end;justify-content:center;padding-bottom:18px">' +
      dsArt('cc-mob-stage') + '<div class="ds-art__vig"></div>' +
      '<div class="ds-cuetrack" style="position:relative;z-index:3">' +
        '<span class="ds-cuebox"><span class="ds-cue" style="font-size:15px">' +
        '<span class="ds-cue__speaker">АННА:</span>Я скоро вернусь.' +
        '<span class="ds-cue__sound">[дверь резко захлопывается]</span></span></span></div></div>' +
    mBody(
      '<div style="padding-top:16px">' +
        '<p class="ds-label" style="margin-bottom:8px">Размер</p>' +
        '<div class="ds-wrap ds-g2">' + [['S', 0], ['M', 1], ['L', 0], ['XL', 0]].map(function (o) {
          return '<button class="ds-chip ds-grow" style="justify-content:center"' + (o[1] ? ' aria-pressed="true"' : '') + '>' + o[0] + '</button>';
        }).join('') + '</div>' +
        '<p class="ds-label" style="margin:18px 0 8px">Шрифт</p>' +
        '<div class="ds-wrap ds-g2">' + ['Onest', 'Моно', 'С засечками'].map(function (t, i) {
          return '<button class="ds-chip"' + (i === 0 ? ' aria-pressed="true"' : '') + '>' + t + '</button>'; }).join('') + '</div>' +
        '<p class="ds-label" style="margin:18px 0 8px">Цвет текста</p>' +
        '<div class="ds-wrap ds-g2">' + [
          ['#FFE81F', 'Ярко-жёлтый'],
          ['linear-gradient(135deg,#B8860B,#FFD700 35%,#FFF6B0 50%,#FFD700 65%,#C9971B)', 'Золото'],
          ['linear-gradient(135deg,#FFFFFF,#CFE8FF 30%,#FFFFFF 50%,#EADBFF 70%,#FFFFFF)', 'Бриллиант'],
          ['#FFFFFF', 'Белый'], ['#7BE8A0', 'Мятный'], ['#FF8FB8', 'Розовый']
        ].map(function (c, i) {
          return '<button class="ds-chip" title="' + c[1] + '" aria-label="' + c[1] + '" style="width:44px;padding:0;justify-content:center' + (i === 0 ? ';border-color:var(--ds-amber);border-width:2px' : '') + '">' +
            '<span style="width:19px;height:19px;border-radius:99px;background:' + c[0] + '"></span></button>';
        }).join('') + '</div>' +
        '<div class="ds-between" style="margin:20px 0 8px"><span class="ds-label">Фон плашки</span><span class="ds-num ds-sm">62%</span></div>' +
        '<input class="ds-slider" type="range" min="0" max="100" value="62" aria-label="Прозрачность фона">' +
        '<div class="ds-between" style="margin:20px 0 8px"><span class="ds-label">Прозрачность текста</span><span class="ds-num ds-sm">100%</span></div>' +
        '<input class="ds-slider" type="range" min="40" max="100" value="100" aria-label="Прозрачность текста">' +
        '<div class="ds-between" style="margin-top:20px;padding:11px 0"><span class="ds-label">Обводка</span>' +
          '<label class="ds-switch"><input type="checkbox" checked><span class="ds-switch__track"></span><span class="ds-switch__thumb"></span></label></div>' +
        '<div class="ds-between" style="padding:11px 0"><span class="ds-label">Тень</span>' +
          '<label class="ds-switch"><input type="checkbox"><span class="ds-switch__track"></span><span class="ds-switch__thumb"></span></label></div>' +
        '<p class="ds-label" style="margin:18px 0 8px">Положение</p>' +
        '<div class="ds-wrap ds-g2">' + ['Снизу', 'По центру', 'Сверху'].map(function (t, i) {
          return '<button class="ds-chip ds-grow" style="justify-content:center"' + (i === 0 ? ' aria-pressed="true"' : '') + '>' + t + '</button>'; }).join('') + '</div>' +
        '<div class="ds-row-f ds-g2" style="margin-top:24px">' +
          '<button class="ds-btn ds-btn--ghost ds-grow">Сбросить</button>' +
          '<button class="ds-btn ds-btn--amber ds-grow">Сохранить</button></div></div>'));
};

/* 18 — Report subtitle error */
Mo.reportCc = function (os) {
  return phone(os, mPlayer(os, { hideCue: 1, sheet:
    mSheet('Ошибка в субтитрах',
      '<div class="ds-card" style="padding:13px;background:var(--ds-void);margin-bottom:14px">' +
        '<p class="ds-eyebrow" style="margin-bottom:8px">Реплика на 01:22:18</p>' +
        '<span class="ds-cue" style="font-size:13.5px;text-align:left;text-shadow:none;display:block">' +
        '<span class="ds-cue__speaker">АННА:</span>Я скоро вернусь, обещаю.' +
        '<span class="ds-cue__sound">[дверь резко захлопывается]</span></span></div>' +
      '<p class="ds-label" style="margin-bottom:8px">Что не так?</p>' +
      '<div class="ds-stack ds-g1">' +
        ['Ошибка текста', 'Ошибка перевода', 'Субтитры слишком рано', 'Субтитры слишком поздно',
         'Пропущена реплика', 'Неверный говорящий', 'Неверное описание звука', 'Другое'].map(function (t, i) {
          return '<label class="ds-opt' + (i === 6 ? ' is-on' : '') + '" style="padding:11px 13px;border-radius:var(--ds-r-md);border:1px solid ' +
            (i === 6 ? 'var(--ds-amber-edge);background:var(--ds-amber-dim)' : 'var(--ds-line)') + '">' +
            '<span class="ds-opt__box ds-opt__box--radio"></span><span style="font-size:14px">' + t + '</span></label>';
        }).join('') + '</div>' +
      '<div class="ds-field" style="margin-top:14px"><label class="ds-label">Комментарий</label>' +
        '<textarea class="ds-textarea" style="min-height:76px" placeholder="Дверь закрывают тихо"></textarea></div>',
      '<button class="ds-btn ds-btn--amber ds-btn--block">Отправить</button>', { h: '86%' }) }));
};

/* 19 — Video quality */
Mo.quality = function (os) {
  return phone(os, mPlayer(os, { hideCue: 1, sheet:
    mSheet('Качество видео',
      mRow('Авто', 'Сейчас 1080p · подстраивается под сеть', 1, '<span class="ds-badge ds-badge--accent">AUTO</span>') +
      '<div class="ds-divider" style="margin:12px 0"></div>' +
      mRow('4K UHD', '2160p · нужно 25 Мбит/с', 0, '<span class="ds-badge ds-badge--4k">4K</span>') +
      mRow('2K', '1440p · 16 Мбит/с', 0) +
      mRow('Full HD', '1080p · 8 Мбит/с', 0) +
      mRow('HD', '720p · 5 Мбит/с', 0) +
      mRow('480p', 'Экономия трафика', 0) +
      mRow('360p', 'Минимальный трафик', 0) +
      '<div class="ds-strip" style="margin-top:14px">' +
        '<span class="ds-strip__label">Сеть</span>' +
        '<p class="ds-cap" style="margin:0">Сейчас Wi-Fi, 84 Мбит/с. Доступны все качества, включая 4K.</p></div>',
      null, { h: '76%' }) }));
};

/* 20 — Playback speed */
Mo.speed = function (os) {
  return phone(os, mPlayer(os, { hideCue: 1, sheet:
    mSheet('Скорость воспроизведения',
      ['0.5×', '0.75×', 'Обычная', '1.25×', '1.5×', '1.75×', '2×'].map(function (t, i) {
        return mRow(t, i === 2 ? 'Как задумано режиссёром' : '', i === 2);
      }).join('') +
      '<div class="ds-strip" style="margin-top:14px">' +
        '<span class="ds-strip__label">CC+</span>' +
        '<p class="ds-cap" style="margin:0">На скорости выше 1.5× субтитры показываются дольше минимального времени чтения — ' +
        'текст не мелькает.</p></div>',
      null, { h: '72%' }) }));
};

/* 21/22 — Download sheet */
Mo.download = function (os) {
  var Q = [['360p', '450 MB', 0], ['480p', '780 MB', 0], ['720p HD', '1.4 GB', 0],
    ['1080p Full HD', '2.8 GB', 1], ['2K', '5.1 GB', 0], ['4K UHD', '8.7 GB', 0]];
  return phone(os,
    '<div style="flex:1;position:relative;overflow:hidden">' +
      '<div style="position:absolute;inset:0;filter:blur(2px);opacity:.32;pointer-events:none">' +
        '<div class="ds-art" style="height:280px;position:relative">' + dsArt('Год тишиныhero') + '</div></div>' +
      mSheet('Скачать фильм',
        '<div class="ds-row-f ds-g3" style="margin-bottom:16px">' +
          '<div style="width:50px;aspect-ratio:2/3;border-radius:8px;overflow:hidden;position:relative;flex:none">' + art('Год тишины', '', 'position:absolute;inset:0') + '</div>' +
          '<div><div class="ds-h3">Год тишины</div><div class="ds-cap">2025 · 2 ч 12 мин</div></div></div>' +
        '<p class="ds-label" style="margin-bottom:8px">Качество</p>' +
        '<div class="ds-stack ds-g1">' + Q.map(function (q) {
          return '<label class="ds-opt' + (q[2] ? ' is-on' : '') + '" style="padding:12px 13px;border-radius:var(--ds-r-md);border:1px solid ' +
            (q[2] ? 'var(--ds-amber-edge);background:var(--ds-amber-dim)' : 'var(--ds-line)') + '">' +
            '<span class="ds-opt__box ds-opt__box--radio"></span><span class="ds-grow" style="font-size:14px">' + q[0] + '</span>' +
            '<span class="ds-num ds-sm ds-mut2">' + q[1] + '</span></label>';
        }).join('') + '</div>' +
        '<p class="ds-label" style="margin:18px 0 8px">Субтитры в загрузке</p>' +
        '<div class="ds-stack ds-g1">' +
          [['Русский CC+', 1], ['Русский', 0], ['English CC', 0], ['Без субтитров', 0]].map(function (s) {
            return '<label class="ds-opt' + (s[1] ? ' is-on' : '') + '" style="padding:12px 13px;border-radius:var(--ds-r-md);border:1px solid ' +
              (s[1] ? 'var(--ds-amber-edge);background:var(--ds-amber-dim)' : 'var(--ds-line)') + '">' +
              '<span class="ds-opt__box ds-opt__box--check"></span><span style="font-size:14px">' + s[0] + '</span></label>';
          }).join('') + '</div>' +
        '<div class="ds-between" style="margin-top:16px;padding:13px;border-radius:var(--ds-r-md);background:var(--ds-raised)">' +
          '<div><div class="ds-sm ds-mut">Займёт на устройстве</div>' +
          '<div class="ds-cap" style="margin-top:2px">Свободно 48.2 GB</div></div>' +
          '<span class="ds-num" style="font-weight:700;font-size:1.05rem">2.81 GB</span></div>' +
        '<div class="ds-between" style="margin-top:10px;padding:11px 13px;border-radius:var(--ds-r-md);background:var(--ds-raised)">' +
          '<span class="ds-sm">Только по Wi-Fi</span>' +
          '<label class="ds-switch"><input type="checkbox" checked><span class="ds-switch__track"></span><span class="ds-switch__thumb"></span></label></div>' +
        '<p class="ds-cap" style="margin-top:10px">Загрузка доступна для просмотра 30 дней.</p>',
        '<button class="ds-btn ds-btn--ghost" style="flex:none">Отмена</button>' +
        '<button class="ds-btn ds-btn--primary ds-grow">Скачать</button>', { h: '88%' }) +
    '</div>');
};

/* 23/24 — Downloads */
Mo.downloads = function (os) {
  var R = [
    { i: 0,  st: 'done',    q: '1080p', sub: 'Русский CC+', sz: '2.8 GB', p: 100, note: 'Доступно офлайн 24 дня' },
    { i: 10, st: 'run',     q: '720p',  sub: 'Русский CC+', sz: '1.4 GB', p: 78,  note: 'Осталось 2 мин · 8.4 МБ/с' },
    { i: 6,  st: 'paused',  q: '1080p', sub: 'Русский',     sz: '2.4 GB', p: 41,  note: 'Пауза · 984 MB' },
    { i: 14, st: 'queued',  q: '4K',    sub: 'Русский CC+', sz: '8.7 GB', p: 0,   note: 'В очереди' },
    { i: 3,  st: 'failed',  q: '1080p', sub: 'English CC',  sz: '2.6 GB', p: 63,  note: 'Обрыв соединения' },
    { i: 17, st: 'expired', q: '720p',  sub: 'Русский CC+', sz: '1.2 GB', p: 100, note: 'Срок истёк 28 августа' }
  ];
  var ST = { done: ['ds-badge--ok', 'Готово', 'check'], run: ['ds-badge--info', '78%', 'download'],
    paused: ['ds-badge--warn', 'Пауза', 'pause'], queued: ['', 'В очереди', 'clock'],
    failed: ['ds-badge--err', 'Ошибка', 'alert'], expired: ['ds-badge--err', 'Истёк', 'clock'] };
  return phone(os,
    mHeader(os, 'Загрузки', { actions: '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" aria-label="Настройки загрузок">' + ic('settings', 19) + '</button>' }) +
    mBody(
      '<div class="ds-card" style="padding:14px;margin-bottom:14px">' +
        '<div class="ds-between" style="margin-bottom:10px"><span class="ds-sm" style="font-weight:600">Место на устройстве</span>' +
          '<span class="ds-num ds-cap">16.7 / 64 GB</span></div>' +
        '<div style="height:8px;border-radius:99px;background:var(--ds-raised-3);overflow:hidden;display:flex">' +
          '<div style="width:18%;background:var(--ds-accent)"></div><div style="width:8%;background:var(--ds-amber)"></div></div>' +
        '<div class="ds-wrap ds-g3" style="margin-top:9px">' +
          [['Фильмы 11.4 GB', 'var(--ds-accent)'], ['CC+ 0.3 GB', 'var(--ds-amber)'], ['Свободно 47.3 GB', 'var(--ds-raised-3)']].map(function (s) {
            return '<div class="ds-row-f ds-g1"><span style="width:7px;height:7px;border-radius:2px;background:' + s[1] + '"></span>' +
              '<span class="ds-cap">' + s[0] + '</span></div>';
          }).join('') + '</div></div>' +
      '<div class="ds-rail ds-noscroll" style="gap:7px;margin:0 -20px 14px;padding:0 20px">' +
        ['Все', 'Загружено', 'Загружается', 'Ошибки'].map(function (t, i) {
          return '<button class="ds-chip" style="min-height:32px;font-size:12.5px"' + (i === 0 ? ' aria-pressed="true"' : '') + '>' + t + '</button>';
        }).join('') + '</div>' +
      '<div class="ds-stack ds-g2">' + R.map(function (d) {
        var m = M(d.i), s = ST[d.st];
        return '<div class="ds-dl" style="padding:11px">' +
          '<div class="ds-dl__art" style="width:56px;position:relative">' + art(m.t, '', 'position:absolute;inset:0') + '</div>' +
          '<div class="ds-dl__main" style="gap:6px">' +
            '<div class="ds-between" style="align-items:flex-start"><div style="min-width:0">' +
              '<div style="font-size:13.5px;font-weight:600">' + m.t + '</div>' +
              '<div class="ds-cap ds-num" style="margin-top:2px">' + d.q + ' · ' + d.sz + '</div></div>' +
              '<span class="ds-badge ' + s[0] + '">' + ic(s[2], 9, 2.6) + ' ' + s[1] + '</span></div>' +
            '<div class="ds-wrap ds-g1">' +
              (d.sub.indexOf('CC+') > -1 ? '<span class="ds-badge ds-badge--ccplus" style="height:17px;font-size:9px">CC+</span>'
                                         : '<span class="ds-badge ds-badge--cc" style="height:17px;font-size:9px">CC</span>') +
              '<span class="ds-badge" style="height:17px;font-size:9px">' + d.sub + '</span></div>' +
            (d.st === 'run' || d.st === 'paused' || d.st === 'failed'
              ? '<div class="ds-prog' + (d.st === 'run' ? ' ds-prog--amber' : '') + '"><div class="ds-prog__bar" style="width:' + d.p + '%' +
                (d.st === 'failed' ? ';background:var(--ds-err)' : d.st === 'paused' ? ';background:var(--ds-warn)' : '') + '"></div></div>' : '') +
            '<div class="ds-between"><span class="ds-cap">' + d.note + '</span>' +
              '<div class="ds-row-f ds-g1">' +
                (d.st === 'done'    ? '<button class="ds-btn ds-btn--sm ds-btn--primary">' + ic('play', 11) + ' Смотреть</button>' : '') +
                (d.st === 'run'     ? '<button class="ds-iconbtn ds-iconbtn--sm" aria-label="Пауза">' + ic('pause', 14) + '</button>' : '') +
                (d.st === 'paused'  ? '<button class="ds-iconbtn ds-iconbtn--sm" aria-label="Продолжить">' + ic('play', 14) + '</button>' : '') +
                (d.st === 'failed'  ? '<button class="ds-iconbtn ds-iconbtn--sm" aria-label="Повторить">' + ic('refresh', 14) + '</button>' : '') +
                (d.st === 'expired' ? '<button class="ds-iconbtn ds-iconbtn--sm" aria-label="Скачать снова">' + ic('download', 14) + '</button>' : '') +
                '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" aria-label="Удалить">' + ic('trash', 14) + '</button></div></div>' +
          '</div></div>';
      }).join('') + '</div>') +
    mTabbar('download'));
};

/* 25 — Offline mode */
Mo.offline = function (os) {
  return phone(os,
    '<div style="background:var(--ds-warn-dim);border-bottom:1px solid rgba(255,159,69,.3);padding:9px 20px;display:flex;align-items:center;gap:9px;flex:none">' +
      '<span style="color:var(--ds-warn);display:flex">' + ic('wifioff', 16) + '</span>' +
      '<span class="ds-cap" style="color:var(--ds-warn);font-weight:600">Нет соединения</span></div>' +
    mHeader(os, 'Вы офлайн') +
    mBody(
      '<div class="ds-card" style="border-color:rgba(255,159,69,.3);background:var(--ds-warn-dim);padding:18px">' +
        '<span style="color:var(--ds-warn);display:flex">' + ic('wifioff', 26) + '</span>' +
        '<h3 class="ds-h2" style="margin-top:12px">Каталог недоступен</h3>' +
        '<p class="ds-sm" style="margin-top:6px">Поиск, новинки и подписки появятся, как только вернётся интернет. ' +
        'Скачанные фильмы вместе с субтитрами работают прямо сейчас.</p>' +
        '<button class="ds-btn ds-btn--primary ds-btn--block" style="margin-top:14px">Открыть загрузки</button></div>' +
      '<p class="ds-eyebrow" style="margin:24px 0 12px">Доступно офлайн · 3 фильма</p>' +
      '<div class="ds-stack ds-g2">' + [0, 10, 17].map(function (i) {
        var m = M(i);
        return '<div class="ds-dl" style="padding:11px">' +
          '<div class="ds-dl__art" style="width:56px;position:relative">' + art(m.t, '', 'position:absolute;inset:0') + '</div>' +
          '<div class="ds-dl__main" style="gap:6px">' +
            '<div style="font-size:13.5px;font-weight:600">' + m.t + '</div>' +
            '<div class="ds-cap ds-num">1080p · 2.8 GB · ' + m.d + '</div>' +
            '<div class="ds-wrap ds-g1"><span class="ds-badge ds-badge--ccplus" style="height:17px;font-size:9px">CC+</span>' +
            '<span class="ds-badge ds-badge--offline" style="height:17px;font-size:9px">' + ic('download', 8, 2.6) + ' Офлайн</span></div>' +
            '<button class="ds-btn ds-btn--sm ds-btn--primary" style="align-self:flex-start;margin-top:2px">' + ic('play', 11) + ' Смотреть</button>' +
          '</div></div>';
      }).join('') + '</div>' +
      '<div style="margin-top:24px;opacity:.45;pointer-events:none">' +
        '<p class="ds-eyebrow" style="margin-bottom:12px">Недоступно офлайн</p>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">' +
          [3, 5].map(function (i) { return mPoster(M(i), 0); }).join('') + '</div></div>') +
    mTabbar('download'));
};

/* 26–31 — Library group */
function mLibrary(os, tab, body, fab) {
  var T = [['Продолжить', 'library'], ['Избранное', 'favorites'], ['Списки', 'lists'], ['Загружено', 'downloads'], ['История', 'history']];
  return phone(os,
    mHeader(os, 'Библиотека', {
      actions: '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" aria-label="Фильтр">' + ic('filter', 19) + '</button>' +
               (os === 'ios' ? '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" aria-label="Новый список">' + ic('plus', 19) + '</button>' : '')
    }) +
    '<div class="ds-tabs ds-noscroll" style="padding:0 20px;flex:none">' + T.map(function (t) {
      return '<button class="ds-tab" style="font-size:13.5px;margin-right:16px" aria-selected="' + (t[1] === tab) + '">' + t[0] + '</button>';
    }).join('') + '</div>' +
    '<div style="position:relative;flex:1;display:flex;flex-direction:column;min-height:0">' +
      mBody('<div style="padding-top:14px">' + body + '</div>') +
      (fab && os === 'android'
        ? '<button class="ds-btn ds-btn--primary" style="position:absolute;right:18px;bottom:18px;width:56px;height:56px;padding:0;border-radius:18px;box-shadow:var(--ds-e3)" aria-label="Новый список">' + ic('plus', 24) + '</button>'
        : '') + '</div>' +
    mTabbar('library'));
}

Mo.library = function (os) {
  return mLibrary(os, 'library',
    '<div class="ds-stack ds-g3">' + [[0, 78, '1:37:04', '2:08:00'], [12, 47, '47:12', '1:36:00'], [6, 22, '27:40', '2:04:00'], [10, 61, '1:29:15', '2:26:00']].map(function (it) {
      var m = M(it[0]);
      return '<div class="ds-cw"><div class="ds-cw__art">' + art(m.t + 'cw', '', 'position:absolute;inset:0') +
        '<div class="ds-cw__play"><span class="ds-cw__playbtn" style="width:44px;height:44px">' + ic('play', 18) + '</span></div>' +
        '<div class="ds-cw__bar"><div class="ds-prog"><div class="ds-prog__bar" style="width:' + it[1] + '%"></div></div></div></div>' +
        '<div class="ds-cw__foot"><div style="min-width:0"><div style="font-size:13.5px;font-weight:600">' + m.t + '</div>' +
        '<div class="ds-num" style="font-size:11px;color:var(--ds-ink-3);margin-top:2px">' + it[2] + ' / ' + it[3] + '</div></div>' +
        '<span class="ds-badge ds-badge--ccplus">CC+</span></div></div>';
    }).join('') + '</div>');
};

Mo.favorites = function (os) {
  return mLibrary(os, 'favorites',
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">' +
      [9, 6, 0, 13, 17, 2, 11, 4].map(function (i) { return mPoster(M(i), 0); }).join('') + '</div>');
};

Mo.history = function (os) {
  function grp(label, idx) {
    return '<p class="ds-eyebrow" style="margin:18px 0 10px">' + label + '</p>' +
      '<div class="ds-stack ds-g1">' + idx.map(function (it) {
        var m = M(it[0]);
        return '<div class="ds-hit" style="padding:8px 0">' +
          '<div class="ds-hit__art" style="width:74px;position:relative">' + art(m.t + 'h', '', 'position:absolute;inset:0') +
          '<div style="position:absolute;left:0;right:0;bottom:0"><div class="ds-prog"><div class="ds-prog__bar" style="width:' + it[1] + '%"></div></div></div></div>' +
          '<div class="ds-hit__main"><div style="font-size:13.5px;font-weight:600">' + m.t + '</div>' +
          '<div class="ds-cap ds-num" style="margin-top:2px">' + it[1] + '% · ' + it[2] + '</div></div>' +
          '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" aria-label="Удалить из истории">' + ic('x', 15) + '</button></div>';
      }).join('') + '</div>';
  }
  return mLibrary(os, 'history',
    '<div class="ds-between"><span class="ds-cap">Хранится 12 месяцев</span>' +
      '<button class="ds-btn ds-btn--sm ds-btn--ghost" style="padding:0;color:var(--ds-err)">Очистить</button></div>' +
    grp('Сегодня', [[0, 78, 'Web'], [12, 47, 'iPhone']]) +
    grp('Вчера', [[6, 22, 'Android'], [10, 100, 'Web']]) +
    grp('На этой неделе', [[15, 94, 'Web'], [18, 35, 'iPhone']]) +
    grp('Ранее', [[7, 100, 'Android'], [4, 100, 'Web']]));
};

Mo.lists = function (os) {
  var L = [['Посмотреть с друзьями', 12, 1], ['Северное кино', 8, 0], ['На один вечер', 6, 0], ['Для дороги — скачано', 4, 1]];
  return mLibrary(os, 'lists',
    (os === 'ios' ? '<button class="ds-btn ds-btn--secondary ds-btn--block" style="margin-bottom:14px">' + ic('plus', 16) + ' Новый список</button>' : '') +
    '<div class="ds-stack ds-g3">' + L.map(function (l) {
      return '<button class="ds-card ds-card--flush" style="text-align:left;cursor:pointer">' +
        '<div style="display:grid;grid-template-columns:repeat(3,1fr);height:96px;gap:1px">' +
          [0, 1, 2].map(function (k) { return '<div style="position:relative;overflow:hidden">' + art(l[0] + k, '', 'position:absolute;inset:0') + '</div>'; }).join('') + '</div>' +
        '<div style="padding:12px 14px"><div class="ds-between"><span class="ds-h3" style="font-size:14px">' + l[0] + '</span>' +
          (l[2] ? '<span class="ds-badge">' + ic('lock', 8, 2.6) + '</span>' : '') + '</div>' +
          '<div class="ds-cap ds-num" style="margin-top:3px">' + l[1] + ' фильмов</div></div></button>';
    }).join('') + '</div>', 1);
};

/* 30 — Create list */
Mo.createList = function (os) {
  return phone(os,
    '<div style="flex:1;position:relative;overflow:hidden">' +
      '<div style="position:absolute;inset:0;filter:blur(2px);opacity:.3;padding:20px">' +
        '<div class="ds-stack ds-g3">' + [0, 1].map(function (k) {
          return '<div class="ds-card" style="height:120px"></div>'; }).join('') + '</div></div>' +
      mSheet('Новый список',
        '<div class="ds-stack ds-g3">' +
          '<div class="ds-field"><label class="ds-label">Название списка</label>' +
            '<input class="ds-input" value="Посмотреть с друзьями"><span class="ds-help">22 / 60</span></div>' +
          '<div class="ds-field"><label class="ds-label">Описание — необязательно</label>' +
            '<textarea class="ds-textarea" style="min-height:70px" placeholder="Что объединяет эти фильмы"></textarea></div>' +
          '<div class="ds-between" style="padding:12px 13px;border-radius:var(--ds-r-md);background:var(--ds-raised)">' +
            '<div><span class="ds-sm" style="color:var(--ds-ink)">Приватный список</span>' +
            '<p class="ds-cap" style="margin-top:2px">Виден только вам</p></div>' +
            '<label class="ds-switch"><input type="checkbox" checked><span class="ds-switch__track"></span><span class="ds-switch__thumb"></span></label></div></div>',
        '<button class="ds-btn ds-btn--ghost" style="flex:none">Отмена</button>' +
        '<button class="ds-btn ds-btn--primary ds-grow">Создать</button>', { h: '58%' }) + '</div>');
};

/* 31 — List detail */
Mo.listDetail = function (os) {
  return phone(os,
    '<div class="ds-scroll ds-noscroll" style="flex:1;overflow-y:auto">' +
      '<div style="position:relative;height:190px;margin-top:-46px">' +
        '<div style="position:absolute;inset:0;display:grid;grid-template-columns:repeat(3,1fr)">' +
          [0, 1, 2].map(function (k) { return '<div style="position:relative;overflow:hidden">' + art('Посмотреть с друзьями' + k, '', 'position:absolute;inset:0') + '</div>'; }).join('') + '</div>' +
        '<div style="position:absolute;inset:0;background:linear-gradient(to top,var(--ds-void) 8%,rgba(6,11,24,.65))"></div>' +
        '<div class="ds-between" style="position:absolute;top:52px;left:14px;right:14px">' +
          '<button class="ds-iconbtn ds-iconbtn--sm" aria-label="Назад">' + ic('arrowL', 19) + '</button>' +
          '<button class="ds-iconbtn ds-iconbtn--sm" aria-label="Ещё">' + ic('moreH', 18) + '</button></div>' +
        '<div style="position:absolute;left:20px;right:20px;bottom:8px">' +
          '<span class="ds-badge">' + ic('lock', 8, 2.6) + ' Приватный</span>' +
          '<h1 class="ds-d2" style="font-size:1.5rem;margin-top:7px">Посмотреть с друзьями</h1>' +
          '<p class="ds-cap ds-num" style="margin-top:3px">12 фильмов · 21 ч 40 мин · 9 с CC+</p></div></div>' +
      '<div style="padding:14px 20px 20px">' +
        '<div class="ds-row-f ds-g2">' +
          '<button class="ds-btn ds-btn--primary ds-grow">' + ic('play', 15) + ' Смотреть подряд</button>' +
          '<button class="ds-iconbtn" aria-label="Добавить фильм">' + ic('plus', 20) + '</button>' +
          '<button class="ds-iconbtn" aria-label="Поделиться">' + ic('share', 19) + '</button></div>' +
        '<div class="ds-stack ds-g1" style="margin-top:16px">' +
          [9, 6, 0, 13, 17, 2].map(function (i, k) {
            var m = M(i);
            return '<div class="ds-hit" style="padding:8px 0">' +
              '<span class="ds-num ds-mut2" style="width:16px;font-size:12px">' + (k + 1) + '</span>' +
              '<div class="ds-hit__art" style="width:74px;position:relative">' + art(m.o, '', 'position:absolute;inset:0') + '</div>' +
              '<div class="ds-hit__main"><div style="font-size:13.5px;font-weight:600">' + m.t + '</div>' +
              '<div class="ds-cap" style="margin-top:2px">' + m.y + ' · ' + m.d + '</div>' +
              '<div class="ds-wrap ds-g1" style="margin-top:5px">' +
                (m.cc === 'ccplus' ? '<span class="ds-badge ds-badge--ccplus" style="height:16px;font-size:9px">CC+</span>'
                                   : '<span class="ds-badge ds-badge--cc" style="height:16px;font-size:9px">CC</span>') + '</div></div>' +
              '<span class="ds-row__ico" style="cursor:grab">' + ic('drag', 16) + '</span></div>';
          }).join('') + '</div></div></div>');
};

/* 32–34 — Subscription and collection */
Mo.plans = function (os) {
  var p = VIP;
  return phone(os,
    mHeader(os, 'Подписка', { back: 1 }) +
    mBody(
      '<p class="ds-sm" style="margin-bottom:16px">Одна подписка на весь сервис. Списание раз в месяц, отмена в любой момент.</p>' +
      '<div class="ds-card" style="border-color:var(--ds-vip-edge);background:linear-gradient(160deg,rgba(255,194,75,.14),transparent 46%),var(--ds-panel);padding:20px">' +
        '<div style="width:30px;height:3px;border-radius:2px;background:var(--ds-vip)"></div>' +
        '<h3 class="ds-h1" style="margin-top:12px;font-size:1.4rem">' + p.name + '</h3>' +
        '<p class="ds-cap" style="margin-top:6px">' + p.desc + '</p>' +
        '<div style="margin-top:14px;display:flex;align-items:baseline;gap:6px">' +
          '<span class="ds-num" style="font-size:2.4rem;font-weight:700;letter-spacing:-.03em">' + p.price + ' ₽</span>' +
          '<span class="ds-cap">/ месяц</span></div>' +
        '<ul style="list-style:none;padding:0;margin:16px 0 0;display:grid;gap:9px">' +
          p.feats.map(function (f) {
            return '<li class="ds-row-f ds-g2" style="font-size:12.5px"><span style="color:var(--ds-vip);display:flex;flex:none">' + ic('check', 14, 2.4) + '</span>' + f + '</li>';
          }).join('') + '</ul></div>' +
      '<div class="ds-strip" style="margin-top:14px">' +
        '<span class="ds-strip__label">Тариф</span>' +
        '<p class="ds-cap" style="margin:0">Уровней подписки нет. Коллекции, 4K, скачивание, CC и CC+ входят в эти 500 ₽ без доплат.</p></div>') +
    '<div style="padding:12px 20px calc(12px + env(safe-area-inset-bottom));border-top:1px solid var(--ds-line);flex:none">' +
      '<button class="ds-btn ds-btn--primary ds-btn--hero ds-btn--block" style="min-height:56px;flex-direction:column;gap:0">' +
        '<span>Подписаться</span><span style="font-size:11.5px;font-weight:600;opacity:.72">' + p.price + ' ₽ / месяц</span></button>' +
      '<p class="ds-cap ds-center" style="margin-top:7px">Регулярное ежемесячное списание. Отмена в любой момент.</p></div>');
};

function mLanding(os, coll, idx) {
  return phone(os,
    '<div class="ds-scroll ds-noscroll" style="flex:1;overflow-y:auto">' +
      '<div style="position:relative;height:400px;margin-top:-46px">' +
        '<div class="ds-art" style="position:absolute;inset:0">' + dsArt(coll.name + 'land') + '</div>' +
        '<div style="position:absolute;inset:0;background:linear-gradient(to top,var(--ds-void) 4%,rgba(6,11,24,.35) 52%,rgba(6,11,24,.6))"></div>' +
        '<div style="position:absolute;inset:0;background:radial-gradient(70% 46% at 62% 34%, ' + coll.hex + '2E, transparent 66%)"></div>' +
        '<div style="position:absolute;top:52px;left:14px"><button class="ds-iconbtn ds-iconbtn--sm" aria-label="Назад">' + ic('arrowL', 19) + '</button></div>' +
        '<div style="position:absolute;left:20px;right:20px;bottom:8px">' +
          '<div class="ds-row-f ds-g2" style="margin-bottom:10px">' +
            '<span style="width:26px;height:3px;border-radius:2px;background:' + coll.hex + '"></span>' +
            '<span class="ds-eyebrow" style="color:' + coll.hex + '">Коллекция</span></div>' +
          '<h1 class="ds-hero-title" style="font-size:2.1rem">' + coll.name + '</h1>' +
          '<p class="ds-sm" style="margin-top:10px">' + coll.desc + '</p></div></div>' +
      '<div style="padding:16px 20px 20px">' +
        '<div class="ds-wrap ds-g4" style="padding-bottom:16px;border-bottom:1px solid var(--ds-line)">' +
          [[coll.count, 'фильмов'], ['CC+', 'на большинстве'], ['4K', 'где есть'], ['Офлайн', 'скачивание']].map(function (s) {
            return '<div><div class="ds-num" style="font-size:1.1rem;font-weight:700;color:' + coll.hex + '">' + s[0] + '</div>' +
              '<div class="ds-cap">' + s[1] + '</div></div>';
          }).join('') + '</div>' +
        mRail('Новинки коллекции', idx.slice(0, 6)) +
        mRail('Популярное', idx.slice(2, 8)) +
        '<div class="ds-card" style="margin-top:24px;border-color:var(--ds-vip-edge);background:linear-gradient(160deg,rgba(255,194,75,.13),transparent 46%),var(--ds-panel)">' +
          '<h3 class="ds-h2">Входит в подписку ВИП</h3>' +
          '<p class="ds-cap" style="margin-top:6px">Коллекция открыта без доплат — как и весь остальной каталог.</p>' +
          '<ul style="list-style:none;padding:0;margin:12px 0 0;display:grid;gap:9px">' +
            VIP.feats.slice(0, 5).map(function (f) {
              return '<li class="ds-row-f ds-g2" style="font-size:13px"><span style="color:var(--ds-vip);display:flex;flex:none">' + ic('check', 15, 2.4) + '</span>' + f + '</li>';
            }).join('') + '</ul></div>' +
      '</div></div>' +
    '<div style="padding:12px 20px calc(12px + env(safe-area-inset-bottom));border-top:1px solid var(--ds-line);background:rgba(12,20,36,.94);backdrop-filter:blur(20px);flex:none">' +
      '<button class="ds-btn ds-btn--block" style="background:var(--ds-vip);color:var(--ds-ink-inv);border-color:transparent;font-weight:700;min-height:54px;flex-direction:column;gap:0">' +
        '<span>Подписаться и смотреть</span><span style="font-size:11.5px;font-weight:600;opacity:.72">500 ₽ / месяц</span></button>' +
      '<p class="ds-cap ds-center" style="margin-top:7px">Регулярное ежемесячное списание</p></div>');
}
var M_COLL_REAL = { name: 'Реальные события', hex: '#C89BFF', count: 214,
  desc: 'Документальное кино и фильмы, основанные на реальных событиях. Пополняется каждую неделю.' };
Mo.landingReal = function (os) { return mLanding(os, M_COLL_REAL, [5, 10, 14, 18, 1, 6, 9, 11]); };

/* 36–38 — Checkout and results */
Mo.checkout = function (os) {
  var p = VIP;
  return phone(os,
    mHeader(os, 'Оплата', { back: 1, border: 1 }) +
    mBody(
      '<div style="padding-top:14px">' +
        '<div class="ds-card" style="border-color:' + p.hex + '33;padding:16px">' +
          '<div class="ds-row-f ds-g3"><span style="width:4px;height:38px;border-radius:2px;background:' + p.color + '"></span>' +
            '<div><div class="ds-h3">' + p.name + '</div><div class="ds-cap">Ежемесячная подписка</div></div></div>' +
          '<div class="ds-divider" style="margin:14px 0"></div>' +
          '<div class="ds-between"><span class="ds-sm ds-mut">Итого сегодня</span>' +
            '<span class="ds-num" style="font-size:1.5rem;font-weight:700">' + p.price + ' ₽</span></div>' +
          '<p class="ds-cap" style="text-align:right;margin-top:2px">затем ' + p.price + ' ₽ / месяц</p></div>' +
        '<p class="ds-label" style="margin:18px 0 8px">Способ оплаты</p>' +
        '<div class="ds-stack ds-g1">' +
          [['Банковская карта', '•••• 4417 · Mir', 1], ['Новая карта', 'Добавить', 0], ['СБП', 'Через приложение банка', 0],
           (os === 'ios' ? ['Apple Pay', 'Оплата через Apple', 0] : ['Google Pay', 'Оплата через Google', 0])].map(function (r) {
            return '<label class="ds-opt' + (r[2] ? ' is-on' : '') + '" style="padding:13px;border-radius:var(--ds-r-md);border:1px solid ' +
              (r[2] ? 'var(--ds-accent-edge);background:var(--ds-accent-dim)' : 'var(--ds-line)') + '">' +
              '<span class="ds-opt__box ds-opt__box--radio"></span>' +
              '<span class="ds-row__ico">' + ic('card', 18) + '</span>' +
              '<span class="ds-grow"><span style="font-size:14px;font-weight:600">' + r[0] + '</span>' +
              '<span class="ds-row__sub" style="display:block">' + r[1] + '</span></span></label>';
          }).join('') + '</div>' +
        '<div class="ds-card" style="margin-top:16px;padding:14px">' +
          '<p class="ds-eyebrow" style="margin-bottom:10px">Регулярное списание</p>' +
          [['Сегодня', p.price + ' ₽'], ['Каждый месяц', p.price + ' ₽'], ['Следующее', '2 октября 2026']].map(function (r) {
            return '<div class="ds-between" style="padding:3px 0"><span class="ds-sm ds-mut">' + r[0] + '</span>' +
              '<span class="ds-sm" style="font-weight:600">' + r[1] + '</span></div>';
          }).join('') +
          '<p class="ds-cap" style="margin-top:10px">Продлевается автоматически, пока вы не отмените. ' +
          'Отмена в профиле в любой момент.</p></div>' +
        '<div class="ds-row-f ds-g2" style="margin-top:14px;justify-content:center;color:var(--ds-ok)">' + ic('shield', 14) +
          '<span class="ds-cap">Защищённый платёж · 3-D Secure</span></div></div>') +
    '<div style="padding:12px 20px calc(12px + env(safe-area-inset-bottom));border-top:1px solid var(--ds-line);flex:none">' +
      '<button class="ds-btn ds-btn--primary ds-btn--hero ds-btn--block">Оплатить ' + p.price + ' ₽</button></div>');
};

Mo.payOk = function (os) {
  var p = VIP;
  return phone(os,
    '<div style="flex:1;display:flex;flex-direction:column;justify-content:center;padding:0 24px;text-align:center">' +
      '<div style="width:78px;height:78px;border-radius:99px;margin:0 auto;display:grid;place-items:center;background:var(--ds-ok-dim);border:1px solid rgba(61,220,151,.35);color:var(--ds-ok)">' + ic('check', 36, 2.6) + '</div>' +
      '<h1 class="ds-d2" style="font-size:1.6rem;margin-top:22px">Подписка активирована</h1>' +
      '<p class="ds-sm" style="margin-top:8px">Коллекция уже открыта.</p>' +
      '<div class="ds-card" style="margin-top:24px;border-color:' + p.hex + '33;text-align:left;padding:16px">' +
        '<div class="ds-between"><div class="ds-row-f ds-g3">' +
          '<span style="width:4px;height:36px;border-radius:2px;background:' + p.color + '"></span>' +
          '<div><div class="ds-h3">' + p.name + '</div><div class="ds-num ds-cap">' + p.price + ' ₽ / месяц</div></div></div>' +
          '<span class="ds-badge ds-badge--ok">Активна</span></div>' +
        '<div class="ds-divider" style="margin:14px 0"></div>' +
        [['Списано', p.price + ' ₽'], ['Карта', 'Mir •••• 4417'], ['Следующее списание', '2 октября'], ['Операция', 'DS-PAY-88214']].map(function (r) {
          return '<div class="ds-between" style="padding:3px 0"><span class="ds-cap">' + r[0] + '</span>' +
            '<span class="ds-num" style="font-size:12px">' + r[1] + '</span></div>';
        }).join('') + '</div>' +
      '<button class="ds-btn ds-btn--primary ds-btn--hero ds-btn--block" style="margin-top:22px">Начать смотреть</button>' +
      '<button class="ds-btn ds-btn--ghost ds-btn--block" style="margin-top:8px">Мои подписки</button>' +
      '<p class="ds-cap" style="margin-top:14px">Чек отправлен на anna.k@example.ru</p></div>');
};

Mo.payErr = function (os) {
  return phone(os,
    '<div style="flex:1;display:flex;flex-direction:column;justify-content:center;padding:0 24px">' +
      '<div class="ds-center">' +
        '<div style="width:78px;height:78px;border-radius:99px;margin:0 auto;display:grid;place-items:center;background:var(--ds-err-dim);border:1px solid rgba(255,92,92,.35);color:var(--ds-err)">' + ic('alert', 34, 2.4) + '</div>' +
        '<h1 class="ds-d2" style="font-size:1.6rem;margin-top:22px">Платёж не прошёл</h1>' +
        '<p class="ds-sm" style="margin-top:8px">Банк отклонил операцию с картой Mir •••• 4417. Деньги не списаны.</p></div>' +
      '<div class="ds-card" style="margin-top:22px;padding:14px">' +
        '<p class="ds-eyebrow" style="margin-bottom:10px">Что можно сделать</p>' +
        [['Проверить баланс', 'Код отказа 51 — недостаточно средств'], ['Разрешить интернет-платежи', 'В приложении банка'],
         ['Оплатить другой картой', 'Или через СБП']].map(function (r) {
          return '<div class="ds-row" style="cursor:default;padding:9px 0;min-height:auto"><span class="ds-row__ico">' + ic('info', 16) + '</span>' +
            '<span class="ds-row__main"><span class="ds-row__title" style="font-size:13.5px">' + r[0] + '</span>' +
            '<span class="ds-row__sub">' + r[1] + '</span></span></div>';
        }).join('') + '</div>' +
      '<button class="ds-btn ds-btn--primary ds-btn--hero ds-btn--block" style="margin-top:18px">Повторить оплату</button>' +
      '<button class="ds-btn ds-btn--secondary ds-btn--block" style="margin-top:8px">Другой способ</button>' +
      '<button class="ds-btn ds-btn--ghost ds-btn--block" style="margin-top:8px">Написать в поддержку</button></div>');
};

/* 39–44 — Account */
function mSettingsList(title, groups, back) {
  return function (os) {
    return phone(os,
      mHeader(os, title, { back: back !== false }) +
      mBody(groups.map(function (g) {
        return '<p class="ds-eyebrow" style="margin:16px 0 8px">' + g[0] + '</p>' +
          '<div class="ds-card ds-card--flush">' + g[1].map(function (r) {
            return '<div class="ds-row" style="min-height:50px;padding:11px 14px">' +
              (r[3] ? '<span class="ds-row__ico"' + (r[3] === 'cc' ? ' style="color:var(--ds-amber)"' : '') + '>' + ic(r[3], 18) + '</span>' : '') +
              '<span class="ds-row__main"><span class="ds-row__title" style="font-size:14px">' + r[0] + '</span>' +
              (r[4] ? '<span class="ds-row__sub">' + r[4] + '</span>' : '') + '</span>' +
              (r[2] === 'sw' ? '<label class="ds-switch"><input type="checkbox"' + (r[1] ? ' checked' : '') + '><span class="ds-switch__track"></span><span class="ds-switch__thumb"></span></label>'
                : '<span class="ds-row__meta">' + (r[1] || '') + '</span><span class="ds-row__chev">' + ic('chevR', 15) + '</span>') + '</div>';
          }).join('') + '</div>';
      }).join('')) +
      mTabbar('user'));
  };
}

Mo.profile = function (os) {
  return phone(os,
    '<div class="ds-scroll ds-noscroll" style="flex:1;overflow-y:auto">' +
      '<div style="position:relative;height:150px;margin-top:-46px">' +
        '<div class="ds-art" style="position:absolute;inset:0">' + dsArt('profile-cover') + '</div>' +
        '<div style="position:absolute;inset:0;background:linear-gradient(to top,var(--ds-void),rgba(6,11,24,.5))"></div></div>' +
      '<div style="padding:0 20px 20px;margin-top:-42px;position:relative">' +
        '<div class="ds-row-f ds-g3" style="align-items:flex-end">' +
          '<div style="width:76px;height:76px;border-radius:24px;overflow:hidden;position:relative;flex:none;border:3px solid var(--ds-void)">' +
            art('Анна Ковалёва', '', 'position:absolute;inset:0') + '</div>' +
          '<div class="ds-grow" style="padding-bottom:4px"><div class="ds-h1" style="font-size:1.25rem">Анна Ковалёва</div>' +
            '<div class="ds-cap">anna.k@example.ru</div></div>' +
          '<button class="ds-iconbtn ds-iconbtn--sm" style="margin-bottom:4px" aria-label="Изменить профиль">' + ic('edit', 17) + '</button></div>' +
        '<div class="ds-wrap ds-g1" style="margin-top:12px">' +
          '<span class="ds-badge ds-badge--accent ds-badge--lg">ВИП · 500 ₽ / месяц</span>' +
          '<span class="ds-badge ds-badge--ok ds-badge--lg">Активна до 12 октября</span></div>' +
        '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin-top:16px">' +
          [['284', 'фильма'], ['512', 'часов'], ['78%', 'с CC+']].map(function (s) {
            return '<div class="ds-card" style="padding:11px;text-align:center">' +
              '<div class="ds-num" style="font-size:1.2rem;font-weight:700">' + s[0] + '</div>' +
              '<div class="ds-cap">' + s[1] + '</div></div>';
          }).join('') + '</div>' +
        [['Смотреть', [['История просмотра', '284', 'clock'], ['Избранное', '32', 'heart'], ['Мои списки', '5', 'library'], ['Загрузки', '6 · 16.7 GB', 'download']]],
         ['Настройки', [['Субтитры и CC+', 'Русский CC+', 'cc'], ['Качество видео', 'Авто · 4K', 'quality'], ['Язык', 'Русский', 'globe'], ['Уведомления', 'Вкл.', 'bell'], ['Устройства', '3', 'devices'], ['Безопасность', '', 'shield']]],
         ['Деньги и помощь', [['Моя подписка', 'ВИП · активна', 'card'], ['Помощь', '', 'help'], ['Мои обращения', '1 в работе', 'ticket'], ['О сервисе', '4.8.2', 'info']]]
        ].map(function (g) {
          return '<p class="ds-eyebrow" style="margin:22px 0 8px">' + g[0] + '</p>' +
            '<div class="ds-card ds-card--flush">' + g[1].map(function (r) {
              return '<button class="ds-row" style="min-height:50px;padding:11px 14px">' +
                '<span class="ds-row__ico"' + (r[2] === 'cc' ? ' style="color:var(--ds-amber)"' : '') + '>' + ic(r[2], 18) + '</span>' +
                '<span class="ds-row__main"><span class="ds-row__title" style="font-size:14px">' + r[0] + '</span></span>' +
                (r[1] ? '<span class="ds-row__meta">' + r[1] + '</span>' : '') +
                '<span class="ds-row__chev">' + ic('chevR', 15) + '</span></button>';
            }).join('') + '</div>';
        }).join('') +
        '<button class="ds-btn ds-btn--danger ds-btn--block" style="margin-top:20px">' + ic('logout', 16) + ' Выйти</button>' +
      '</div></div>' +
    mTabbar('user'));
};

Mo.editProfile = function (os) {
  return phone(os,
    mHeader(os, 'Профиль', { back: 1, border: 1,
      actions: '<button class="ds-btn ds-btn--sm ds-btn--ghost" style="color:var(--ds-accent);font-weight:700">Готово</button>' }) +
    mBody(
      '<div style="padding-top:18px;text-align:center">' +
        '<div style="width:96px;height:96px;border-radius:30px;overflow:hidden;position:relative;margin:0 auto;border:1px solid var(--ds-line-mid)">' +
          art('Анна Ковалёва', '', 'position:absolute;inset:0') + '</div>' +
        '<button class="ds-btn ds-btn--sm ds-btn--ghost" style="margin-top:10px;color:var(--ds-accent)">Изменить фото</button></div>' +
      '<div class="ds-stack ds-g3" style="margin-top:18px">' +
        '<div class="ds-field"><label class="ds-label">Имя</label><input class="ds-input" value="Анна Ковалёва"></div>' +
        '<div class="ds-field"><label class="ds-label">Email</label>' +
          '<div style="position:relative;display:flex;align-items:center">' +
            '<input class="ds-input" value="anna.k@example.ru" style="padding-right:98px">' +
            '<span class="ds-badge ds-badge--ok" style="position:absolute;right:9px">Подтверждён</span></div></div>' +
        '<div class="ds-field"><label class="ds-label">Телефон</label><input class="ds-input" value="+7 900 000-00-00"></div>' +
        '<div class="ds-field"><label class="ds-label">Язык интерфейса</label>' +
          '<select class="ds-select"><option>Русский</option><option>English</option></select></div>' +
        '<button class="ds-btn ds-btn--danger ds-btn--block" style="margin-top:10px">Удалить аккаунт</button></div>'));
};

Mo.subs = function (os) {
  return phone(os,
    mHeader(os, 'Моя подписка', { back: 1 }) +
    mBody(
      '<p class="ds-sm" style="margin-bottom:14px">Одна подписка ВИП открывает весь сервис.</p>' +
      '<div class="ds-card" style="border-color:var(--ds-vip-edge);background:linear-gradient(160deg,rgba(255,194,75,.12),transparent 46%),var(--ds-panel);padding:16px">' +
        '<div class="ds-between"><div class="ds-row-f ds-g3">' +
          '<span style="width:4px;height:38px;border-radius:2px;background:var(--ds-vip)"></span>' +
          '<div><div class="ds-h3">ВИП</div>' +
          '<div class="ds-num ds-cap">500 ₽ / месяц</div></div></div>' +
          '<span class="ds-badge ds-badge--ok">Активна</span></div>' +
        '<div style="margin-top:14px;padding-top:12px;border-top:1px solid var(--ds-line)">' +
          [['Следующее списание', '12 октября'], ['Подключена', '12 марта 2026'], ['Карта', 'Mir •••• 4417']].map(function (r) {
            return '<div class="ds-between" style="padding:4px 0"><span class="ds-cap">' + r[0] + '</span>' +
              '<span class="ds-sm" style="font-weight:600">' + r[1] + '</span></div>';
          }).join('') + '</div>' +
        '<div class="ds-row-f ds-g2" style="margin-top:12px">' +
          '<button class="ds-btn ds-btn--sm ds-btn--secondary ds-grow">Управление</button>' +
          '<button class="ds-btn ds-btn--sm ds-btn--ghost" style="color:var(--ds-err)">Отменить</button></div></div>' +
      '<div class="ds-strip" style="margin-top:14px">' +
        '<span class="ds-strip__label">Тариф</span>' +
        '<p class="ds-cap" style="margin:0">Уровней подписки нет — у всех одинаковый доступ за 500 ₽ в месяц.</p></div>' +
      '<p class="ds-eyebrow" style="margin:20px 0 8px">История платежей</p>' +
      '<div class="ds-card ds-card--flush">' +
        [['12 сентября', 'ВИП', '500 ₽', 'ok'], ['12 августа', 'ВИП', '500 ₽', 'ok'],
         ['12 июля', 'ВИП', '500 ₽', 'ok'], ['12 июня', 'ВИП', '500 ₽', 'err']].map(function (r) {
          return '<div class="ds-row" style="cursor:default;min-height:48px;padding:10px 14px">' +
            '<span class="ds-row__main"><span class="ds-row__title" style="font-size:13.5px">' + r[1] + '</span>' +
            '<span class="ds-row__sub ds-num">' + r[0] + '</span></span>' +
            '<span class="ds-num ds-sm">' + r[2] + '</span>' +
            '<span class="ds-badge ds-badge--' + r[3] + '" style="margin-left:8px">' + (r[3] === 'ok' ? 'Оплачено' : 'Отклонён') + '</span></div>';
        }).join('') + '</div>') +
    mTabbar('user'));
};

Mo.devices = function (os) {
  var D = [['iPhone 17 Pro', 'iOS 26.1 · 4.8.2', 'Сейчас', 1, 'devices'],
    ['Samsung Galaxy S25', 'Android 16 · 4.8.1', 'Вчера, 21:14', 0, 'devices'],
    ['Chrome — macOS', 'Web', '2 часа назад', 0, 'globe']];
  return phone(os,
    mHeader(os, 'Устройства', { back: 1 }) +
    mBody(
      '<p class="ds-sm" style="margin-bottom:14px">Одновременно можно смотреть на 5 устройствах.</p>' +
      '<div class="ds-card ds-card--flush">' + D.map(function (d) {
        return '<div class="ds-row" style="cursor:default;padding:14px;align-items:flex-start">' +
          '<span class="ds-row__ico" style="color:' + (d[3] ? 'var(--ds-amber)' : 'var(--ds-ink-3)') + ';margin-top:2px">' + ic(d[4], 19) + '</span>' +
          '<span class="ds-row__main"><span class="ds-row__title" style="font-size:14px">' + d[0] + '</span>' +
          '<span class="ds-row__sub">' + d[1] + '</span>' +
          '<span class="ds-row__sub ds-num">' + d[2] + '</span>' +
          (d[3] ? '<span class="ds-badge ds-badge--cc" style="margin-top:6px">Это устройство</span>' : '') + '</span>' +
          (d[3] ? '' : '<button class="ds-btn ds-btn--sm ds-btn--ghost" style="color:var(--ds-err)">Выйти</button>') + '</div>';
      }).join('') + '</div>' +
      '<button class="ds-btn ds-btn--danger ds-btn--block" style="margin-top:16px">Выйти на всех других устройствах</button>' +
      '<div class="ds-strip" style="margin-top:16px">' +
        '<span class="ds-strip__label">Синхро</span>' +
        '<p class="ds-cap" style="margin:0">Прогресс, избранное, списки и настройки субтитров синхронизируются автоматически.</p></div>') +
    mTabbar('user'));
};

Mo.settings = mSettingsList('Настройки', [
  ['Качество видео', [['Качество просмотра', 'Авто · 4K', '', 'quality'], ['По мобильной сети', '720p', '', ''],
    ['Максимум для скачивания', '1080p', '', ''], ['Скачивать только по Wi-Fi', 1, 'sw', '']]],
  ['Воспроизведение', [['Автовоспроизведение', 1, 'sw', ''], ['Трейлеры при наведении', 0, 'sw', ''],
    ['Пропускать заставки', 1, 'sw', ''], ['Скорость по умолчанию', 'Обычная', '', '']]],
  ['Язык', [['Интерфейс', 'Русский', '', 'globe'], ['Озвучка', 'Русский', '', ''], ['Субтитры', 'Русский CC+', '', 'cc']]],
  ['Безопасность', [['Двухфакторная аутентификация', 0, 'sw', 'shield'], ['Сохранять историю', 1, 'sw', ''],
    ['Персональные рекомендации', 1, 'sw', ''], ['Сменить пароль', '', '', 'key']]]
]);

Mo.a11y = mSettingsList('Субтитры и CC+', [
  ['Внешний вид', [['Настроить внешний вид', 'Крупный · белый', '', 'cc']]],
  ['Поведение', [['Всегда включать субтитры', 1, 'sw', ''], ['Предпочитать CC+', 1, 'sw', ''],
    ['Имена говорящих', 1, 'sw', ''], ['Описания звука', 1, 'sw', ''], ['Автовключение AD', 0, 'sw', '']]],
  ['Интерфейс', [['Повышенный контраст', 0, 'sw', ''], ['Уменьшить анимацию', 0, 'sw', ''],
    ['Крупный шрифт', 0, 'sw', ''], ['Визуальные уведомления', 1, 'sw', '']]]
]);

Mo.notifications = function (os) {
  var N = [['sparkle', 'Новый фильм в «Реальных событиях»', '«Свидетели» — документальная драма с CC+.', 'Сегодня, 14:20', 1, 'var(--ds-coll)'],
    ['checkc', 'Загрузка завершена', 'Год тишины · 1080p · Русский CC+', 'Сегодня, 12:04', 1, 'var(--ds-ok)'],
    ['ticket', 'Поддержка ответила · #DS-10482', 'Ошибка в субтитрах исправлена.', 'Сегодня, 09:51', 1, 'var(--ds-amber)'],
    ['card', 'Подписка ВИП продлится 12 октября', '500 ₽ спишутся с карты Mir •••• 4417.', 'Вчера, 18:00', 0, 'var(--ds-accent)'],
    ['alert', 'Срок загрузки истекает', '«Ночная смена» — через 3 дня.', '11 сентября', 0, 'var(--ds-warn)'],
    ['cc', 'Добавлены CC+', '«Глубина» теперь с расширенными субтитрами.', '10 сентября', 0, 'var(--ds-amber)']];
  return phone(os,
    mHeader(os, 'Уведомления', { back: 1,
      actions: '<button class="ds-btn ds-btn--sm ds-btn--ghost" style="color:var(--ds-accent)">Прочитать всё</button>' }) +
    mBody('<div class="ds-card ds-card--flush">' + N.map(function (n) {
      return '<button class="ds-row" style="padding:14px;align-items:flex-start' + (n[4] ? ';background:rgba(255,255,255,.03)' : '') + '">' +
        '<span class="ds-row__ico" style="color:' + n[5] + ';margin-top:2px">' + ic(n[0], 18) + '</span>' +
        '<span class="ds-row__main"><span class="ds-row__title" style="font-size:13.5px;font-weight:' + (n[4] ? 600 : 500) + '">' + n[1] + '</span>' +
        '<span class="ds-row__sub" style="margin-top:2px;line-height:1.45">' + n[2] + '</span>' +
        '<span class="ds-cap ds-num" style="display:block;margin-top:5px">' + n[3] + '</span></span>' +
        (n[4] ? '<span style="width:7px;height:7px;border-radius:99px;background:var(--ds-accent);flex:none;margin-top:5px"></span>' : '') + '</button>';
    }).join('') + '</div>') +
    mTabbar('user', 1));
};

/* 45–48 — Support */
Mo.help = function (os) {
  var T = [['film', 'Видео'], ['cc', 'Субтитры и CC+'], ['card', 'Оплата'], ['ticket', 'Подписка'],
    ['user', 'Аккаунт'], ['download', 'Загрузки'], ['wifioff', 'Офлайн'], ['plus', 'Предложить фильм']];
  return phone(os,
    mHeader(os, 'Помощь', { back: 1 }) +
    mBody(
      '<div class="ds-search" style="min-height:46px;margin-bottom:16px">' +
        '<span style="color:var(--ds-ink-3);display:flex">' + ic('search', 18) + '</span>' +
        '<input placeholder="Например «нет субтитров»" style="font-size:14px"></div>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">' +
        T.map(function (t, i) {
          return '<button class="ds-card" style="text-align:left;padding:14px' + (i === 1 ? ';border-color:var(--ds-amber-edge)' : '') + '">' +
            '<span style="color:' + (i === 1 ? 'var(--ds-amber)' : 'var(--ds-accent)') + ';display:flex">' + ic(t[0], 19) + '</span>' +
            '<div class="ds-h3" style="margin-top:9px;font-size:13.5px">' + t[1] + '</div></button>';
        }).join('') + '</div>' +
      '<p class="ds-eyebrow" style="margin:22px 0 8px">Частые вопросы</p>' +
      '<div class="ds-card ds-card--flush">' +
        ['Почему у фильма нет CC+?', 'Субтитры отстают — что делать?', 'Скачанный фильм не открывается',
         'Как отменить подписку?', 'Что такое AD?'].map(function (q) {
          return '<button class="ds-row" style="min-height:48px;padding:12px 14px">' +
            '<span class="ds-row__main"><span class="ds-row__title" style="font-size:13.5px">' + q + '</span></span>' +
            '<span class="ds-row__chev">' + ic('chevR', 15) + '</span></button>';
        }).join('') + '</div>' +
      '<div class="ds-card" style="margin-top:16px;border-color:var(--ds-accent-edge);background:var(--ds-accent-dim);padding:16px">' +
        '<h3 class="ds-h3">Не нашли ответ?</h3>' +
        '<p class="ds-cap" style="margin-top:5px">Ответим за сутки, срочное — за час.</p>' +
        '<button class="ds-btn ds-btn--primary ds-btn--block" style="margin-top:12px">Обратиться в поддержку</button></div>') +
    mTabbar('user'));
};

Mo.support = function (os) {
  return phone(os,
    mHeader(os, 'Обращение', { back: 1, border: 1 }) +
    mBody(
      '<div class="ds-stack ds-g3" style="padding-top:14px">' +
        '<div class="ds-field"><label class="ds-label">Категория</label>' +
          '<select class="ds-select"><option>Ошибка в субтитрах</option><option>Ошибка CC+</option><option>Видео не работает</option>' +
          '<option>Не скачивается фильм</option><option>Платёж не прошёл</option><option>Другое</option></select></div>' +
        '<div class="ds-field"><label class="ds-label">Тема</label>' +
          '<input class="ds-input" value="Описание звука не соответствует сцене"></div>' +
        '<div class="ds-field"><label class="ds-label">Фильм</label>' +
          '<div class="ds-search" style="min-height:48px"><span style="color:var(--ds-ink-3);display:flex">' + ic('search', 17) + '</span>' +
          '<input value="Год тишины (2025)" style="font-size:14px"></div></div>' +
        '<div class="ds-field"><label class="ds-label">Описание</label>' +
          '<textarea class="ds-textarea" style="min-height:110px">На 01:22:18 написано «[дверь резко захлопывается]», но дверь закрывают тихо.</textarea></div>' +
        '<div class="ds-field"><span class="ds-label">Вложения</span>' +
          '<div style="border:1px dashed var(--ds-line-strong);border-radius:var(--ds-r-md);padding:18px;text-align:center">' +
            '<span style="color:var(--ds-ink-3);display:flex;justify-content:center">' + ic('paperclip', 20) + '</span>' +
            '<p class="ds-sm" style="margin-top:7px">Скриншот из галереи</p></div></div>' +
        '<div class="ds-card" style="padding:13px;background:var(--ds-void)">' +
          '<div class="ds-between" style="margin-bottom:9px"><p class="ds-eyebrow">Технические данные</p>' +
            '<label class="ds-switch"><input type="checkbox" checked><span class="ds-switch__track"></span><span class="ds-switch__thumb"></span></label></div>' +
          [['Фильм', 'Год тишины'], ['Момент', '01:22:18'], ['Субтитры', 'Русский CC+'],
           ['Устройство', os === 'android' ? 'Galaxy S25' : 'iPhone 17 Pro'], ['Версия', '4.8.2']].map(function (r) {
            return '<div class="ds-between" style="padding:2px 0"><span class="ds-cap">' + r[0] + '</span>' +
              '<span class="ds-num" style="font-size:11px;color:var(--ds-ink-2)">' + r[1] + '</span></div>';
          }).join('') + '</div></div>') +
    '<div style="padding:12px 20px calc(12px + env(safe-area-inset-bottom));border-top:1px solid var(--ds-line);flex:none">' +
      '<button class="ds-btn ds-btn--primary ds-btn--hero ds-btn--block">Отправить</button></div>');
};

Mo.tickets = function (os) {
  var T = [['#DS-10482', 'Описание звука не соответствует сцене', 'Ошибка CC+', 'info', 'В работе', 'Сегодня, 14:42'],
    ['#DS-10455', 'Не скачивается в 4K', 'Загрузки', 'warn', 'Ожидает ответа', 'Вчера'],
    ['#DS-10390', 'Платёж не прошёл', 'Оплата', 'ok', 'Решено', '8 сентября'],
    ['#DS-10318', 'Субтитры отстают на 2 секунды', 'Субтитры', 'ok', 'Решено', '2 сентября'],
    ['#DS-10240', 'Предложить фильм', 'Каталог', '', 'Закрыто', '24 августа']];
  return phone(os,
    mHeader(os, 'Мои обращения', { back: 1,
      actions: '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" aria-label="Новое обращение">' + ic('plus', 19) + '</button>' }) +
    mBody(
      '<div class="ds-rail ds-noscroll" style="gap:7px;margin:0 -20px 14px;padding:0 20px">' +
        ['Все · 5', 'Открытые · 2', 'Решённые · 2'].map(function (t, i) {
          return '<button class="ds-chip" style="min-height:32px;font-size:12.5px"' + (i === 0 ? ' aria-pressed="true"' : '') + '>' + t + '</button>';
        }).join('') + '</div>' +
      '<div class="ds-stack ds-g2">' + T.map(function (t) {
        return '<button class="ds-card" style="text-align:left;padding:14px">' +
          '<div class="ds-between" style="align-items:flex-start">' +
            '<span class="ds-num" style="font-size:11.5px;color:var(--ds-accent)">' + t[0] + '</span>' +
            '<span class="ds-badge ' + (t[3] ? 'ds-badge--' + t[3] : '') + '">' + t[4] + '</span></div>' +
          '<div class="ds-h3" style="margin-top:7px;font-size:13.5px">' + t[1] + '</div>' +
          '<div class="ds-between" style="margin-top:6px"><span class="ds-cap">' + t[2] + '</span>' +
            '<span class="ds-cap ds-num">' + t[5] + '</span></div></button>';
      }).join('') + '</div>') +
    mTabbar('user'));
};

Mo.ticket = function (os) {
  function msg(mine, name, time, body, extra) {
    return '<div style="display:flex;gap:9px;flex-direction:' + (mine ? 'row-reverse' : 'row') + ';margin-bottom:14px">' +
      '<div style="width:28px;height:28px;border-radius:99px;flex:none;position:relative;overflow:hidden;' +
        (mine ? '' : 'background:var(--ds-amber-dim);border:1px solid var(--ds-amber-edge);display:grid;place-items:center;color:var(--ds-amber)') + '">' +
        (mine ? art(name, '', 'position:absolute;inset:0') : ic('shield', 14)) + '</div>' +
      '<div style="max-width:80%">' +
        '<div class="ds-row-f ds-g2" style="margin-bottom:4px;' + (mine ? 'justify-content:flex-end' : '') + '">' +
          '<span class="ds-cap" style="font-weight:600;color:var(--ds-ink-2)">' + name + '</span>' +
          '<span class="ds-cap ds-num">' + time + '</span></div>' +
        '<div style="padding:11px 13px;border-radius:var(--ds-r-md);background:' + (mine ? 'var(--ds-raised-2)' : 'var(--ds-amber-dim)') +
          ';border:1px solid ' + (mine ? 'var(--ds-line)' : 'var(--ds-amber-edge)') + '">' +
          '<p style="font-size:13px;color:var(--ds-ink);margin:0">' + body + '</p>' + (extra || '') + '</div></div></div>';
  }
  return phone(os,
    mHeader(os, '#DS-10482', { back: 1, border: 1,
      actions: '<span class="ds-badge ds-badge--info">В работе</span>' }) +
    mBody(
      '<div style="padding-top:14px">' +
        '<div class="ds-card" style="padding:12px;margin-bottom:14px">' +
          '<div class="ds-h3" style="font-size:13.5px">Описание звука не соответствует сцене</div>' +
          '<div class="ds-cap ds-num" style="margin-top:4px">Год тишины · 01:22:18 · Русский CC+ · реплика #418</div></div>' +
        msg(1, 'Анна', '09:12', 'На 01:22:18 в CC+ написано «[дверь резко захлопывается]», но в сцене дверь закрывают очень тихо.',
          '<div class="ds-row-f ds-g1" style="margin-top:8px"><span class="ds-badge">' + ic('paperclip', 9, 2.4) + ' screenshot.png</span></div>') +
        msg(0, 'Поддержка', '10:40', 'Спасибо, вижу проблему. Передала редактору субтитров.') +
        msg(0, 'Мария · редактор', '14:42', 'Вы правы, исправила на «[дверь тихо закрывается]». Новая версия опубликована.',
          '<div style="margin-top:10px;padding:10px;border-radius:var(--ds-r-sm);background:var(--ds-void);border:1px solid var(--ds-line)">' +
            '<div class="ds-cap" style="margin-bottom:4px">Было</div>' +
            '<span class="ds-cue__sound" style="font-size:12px;text-decoration:line-through;opacity:.6">[дверь резко захлопывается]</span>' +
            '<div class="ds-cap" style="margin:8px 0 4px">Стало</div>' +
            '<span class="ds-cue__sound" style="font-size:12px">[дверь тихо закрывается]</span></div>') +
        '<div class="ds-card" style="text-align:center;padding:16px;background:var(--ds-void)">' +
          '<p class="ds-h3" style="font-size:13.5px">Удалось решить проблему?</p>' +
          '<div class="ds-row-f ds-g2" style="justify-content:center;margin-top:10px">' +
            '<button class="ds-btn ds-btn--sm ds-btn--secondary">Да</button>' +
            '<button class="ds-btn ds-btn--sm ds-btn--ghost">Нет</button></div>' +
          '<div class="ds-row-f ds-g1" style="justify-content:center;margin-top:12px;color:var(--ds-ink-4)">' +
            [1, 2, 3, 4, 5].map(function () { return ic('star', 19); }).join('') + '</div></div></div>') +
    '<div style="padding:10px 14px calc(10px + env(safe-area-inset-bottom));border-top:1px solid var(--ds-line);display:flex;gap:8px;align-items:center;flex:none">' +
      '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" aria-label="Прикрепить">' + ic('paperclip', 18) + '</button>' +
      '<input class="ds-input" placeholder="Сообщение" style="min-height:42px;border-radius:99px;padding:10px 16px">' +
      '<button class="ds-iconbtn" style="background:var(--ds-accent);color:var(--ds-ink-inv);border-color:transparent;width:42px;height:42px" aria-label="Отправить">' + ic('send', 18) + '</button></div>');
};
