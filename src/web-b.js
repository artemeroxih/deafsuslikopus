/* ============================================================
   Web screens 11–22 — player, captions, downloads, library
   ============================================================ */

/* Reusable full-bleed player chrome. `panel` renders an overlay sheet. */
function playerChrome(panel, opts) {
  opts = opts || {};
  return '<div class="ds-player" style="height:900px">' +
    '<div class="ds-player__stage">' + dsArt('player-main') + '</div>' +
    (opts.hideCue ? '' :
      '<div class="ds-cuetrack" style="position:absolute;left:0;right:0;bottom:17%;z-index:2">' +
        '<span class="ds-cuebox" style="max-width:44ch"><span class="ds-cue" style="font-size:26px">' +
        '<span class="ds-cue__speaker">АННА:</span>Я скоро вернусь, обещаю.' +
        '<span class="ds-cue__sound">[дверь резко захлопывается]</span></span></span></div>') +
    '<div class="ds-player__ui">' +
      '<div class="ds-player__top">' +
        '<button class="ds-pbtn ds-pbtn--sm" data-go="movie" aria-label="Назад">' + ic('arrowL', 22) + '</button>' +
        '<div class="ds-grow" style="min-width:0"><div class="ds-h2">Год тишины</div>' +
        '<div class="ds-cap ds-num">2025 · 2 ч 12 мин · AUTO · 1080p · CC+ Русский</div></div>' +
        '<button class="ds-btn ds-btn--sm ds-btn--secondary" data-go="problem">' + ic('help', 15) + ' Проблема?</button>' +
      '</div>' +
      '<div class="ds-player__center">' +
        '<button class="ds-pbtn ds-pbtn--skip" aria-label="Назад 10 секунд">' + ic('back10', 26) + '</button>' +
        '<button class="ds-pbtn ds-pbtn--main" aria-label="Пауза">' + ic('pause', 30, 2.4) + '</button>' +
        '<button class="ds-pbtn ds-pbtn--skip" aria-label="Вперёд 10 секунд">' + ic('fwd10', 26) + '</button>' +
      '</div>' +
      '<div class="ds-player__bottom">' +
        '<div class="ds-scrub"><div class="ds-scrub__track"></div><div class="ds-scrub__buf" style="width:74%"></div>' +
          '<div class="ds-scrub__fill" style="width:62%"></div>' +
          '<div class="ds-scrub__chap" style="left:28%"></div><div class="ds-scrub__chap" style="left:55%"></div><div class="ds-scrub__chap" style="left:81%"></div>' +
          '<div class="ds-scrub__knob" style="left:62%"></div></div>' +
        '<div class="ds-between">' +
          '<div class="ds-row-f ds-g2">' +
            '<span class="ds-num" style="font-size:13px">01:22:18</span><span class="ds-cap">/</span>' +
            '<span class="ds-num ds-mut2" style="font-size:13px">02:12:00</span>' +
            '<button class="ds-pbtn ds-pbtn--sm" aria-label="Громкость" style="margin-left:10px">' + ic('volume', 20) + '</button>' +
            '<div style="width:80px;height:4px;border-radius:99px;background:rgba(255,255,255,.24);position:relative">' +
              '<div style="position:absolute;inset:0 30% 0 0;background:#fff;border-radius:99px"></div></div>' +
          '</div>' +
          '<div class="ds-row-f ds-g2">' +
            '<button class="ds-pbtn ds-pbtn--sm" aria-label="Предыдущая серия">' + ic('prev', 18) + '</button>' +
            '<button class="ds-pbtn ds-pbtn--sm" aria-label="Следующая серия">' + ic('next', 18) + '</button>' +
            '<button class="ds-pbtn ds-pbtn--cc is-on" data-go="cc-select" aria-label="Субтитры: Русский CC+, включены">' + ic('cc', 17) + ' CC+ · Русский</button>' +
            '<button class="ds-pbtn ds-pbtn--sm" aria-label="Качество">' + ic('quality', 20) + '</button>' +
            '<button class="ds-pbtn ds-pbtn--sm" aria-label="Скорость воспроизведения">' + ic('speed', 20) + '</button>' +
            '<button class="ds-pbtn ds-pbtn--sm" aria-label="Картинка в картинке">' + ic('pip', 20) + '</button>' +
            '<button class="ds-pbtn ds-pbtn--sm" aria-label="Полный экран">' + ic('fullscreen', 20) + '</button>' +
          '</div></div></div></div>' +
    (panel || '') +
  '</div>';
}

/* Right-hand overlay panel used by the player menus */
function playerPanel(title, body, foot) {
  return '<div style="position:absolute;inset:0;background:rgba(3,7,19,.55);backdrop-filter:blur(3px);z-index:20"></div>' +
    '<div class="ds-glass" style="position:absolute;top:0;right:0;bottom:0;width:400px;z-index:21;display:flex;flex-direction:column;border-radius:0;border-right:0;border-top:0;border-bottom:0">' +
      '<div class="ds-between" style="padding:22px 24px 16px;flex:none">' +
        '<h3 class="ds-h1">' + title + '</h3>' +
        '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" data-go="player" aria-label="Закрыть">' + ic('x', 17) + '</button></div>' +
      '<div class="ds-scroll" style="padding:0 24px 24px;overflow-y:auto;flex:1">' + body + '</div>' +
      (foot ? '<div style="padding:16px 24px;border-top:1px solid var(--ds-line);flex:none">' + foot + '</div>' : '') +
    '</div>';
}

function optRow(label, sub, on, badge) {
  return '<button class="ds-row" style="border-radius:var(--ds-r-sm);border-bottom:0;padding:11px 12px' + (on ? ';background:var(--ds-amber-dim)' : '') + '">' +
    '<span class="ds-row__main"><span class="ds-row__title">' + label + '</span>' +
    (sub ? '<span class="ds-row__sub">' + sub + '</span>' : '') + '</span>' +
    (badge || '') +
    (on ? '<span style="color:var(--ds-amber);display:flex;margin-left:8px">' + ic('check', 19, 2.4) + '</span>' : '') + '</button>';
}

/* 11 — Video Player */
S.player = function () { return playerChrome(); };

/* 12 — Player problem menu */
S.problem = function () {
  return playerChrome(playerPanel('Что случилось?',
    '<p class="ds-sm" style="margin-bottom:16px">Выберите проблему — мы приложим к обращению момент фильма и технические данные, ' +
    'чтобы не пришлось ничего описывать вручную.</p>' +
    '<div class="ds-stack ds-g1">' +
      [['Проблема с видео', 'Не запускается, чёрный экран', 'film'],
       ['Видео зависает', 'Буферизация, рывки', 'refresh'],
       ['Неверное качество', 'Не переключается или ниже заявленного', 'quality'],
       ['Проблема со звуком', 'Нет звука, рассинхрон', 'volume'],
       ['Проблема с субтитрами', 'Ошибки, тайминг, пропуски', 'cc'],
       ['Проблема с CC+', 'Нет описаний звука или они неверные', 'cc'],
       ['Другое', 'Опишу своими словами', 'more']].map(function (r, i) {
        return '<button class="ds-row" data-go="' + (i >= 4 && i <= 5 ? 'report-cc' : 'problem') + '" style="border-radius:var(--ds-r-sm);border-bottom:0;padding:12px' + (i >= 4 && i <= 5 ? ';border:1px solid var(--ds-amber-edge)' : '') + '">' +
          '<span class="ds-row__ico"' + (i >= 4 && i <= 5 ? ' style="color:var(--ds-amber)"' : '') + '>' + ic(r[2], 19) + '</span>' +
          '<span class="ds-row__main"><span class="ds-row__title">' + r[0] + '</span><span class="ds-row__sub">' + r[1] + '</span></span>' +
          '<span class="ds-row__chev">' + ic('chevR', 16) + '</span></button>';
      }).join('') + '</div>' +
    '<div class="ds-card" style="margin-top:20px;padding:16px;background:var(--ds-void)">' +
      '<p class="ds-eyebrow" style="margin-bottom:12px">Приложим автоматически</p>' +
      '<div class="ds-stack ds-g2">' +
        [['Фильм', 'Год тишины'], ['ID фильма', 'DS-M-04187'], ['Момент', '01:22:18'],
         ['Качество', '1080p (AUTO)'], ['Субтитры', 'Русский CC+'], ['Озвучка', 'Русский'],
         ['Платформа', 'Web · Chrome 141'], ['Устройство', 'macOS 15.2'], ['Версия', '4.8.2']].map(function (r) {
          return '<div class="ds-between"><span class="ds-cap">' + r[0] + '</span>' +
            '<span class="ds-num" style="font-size:11.5px;color:var(--ds-ink-2)">' + r[1] + '</span></div>';
        }).join('') + '</div>' +
      '<div class="ds-between" style="margin-top:14px;padding-top:12px;border-top:1px solid var(--ds-line)">' +
        '<span class="ds-sm">Отправить диагностику плеера</span>' +
        '<label class="ds-switch"><input type="checkbox" checked><span class="ds-switch__track"></span><span class="ds-switch__thumb"></span></label></div></div>',
    '<button class="ds-btn ds-btn--primary ds-btn--block" data-go="tickets">Отправить обращение</button>'));
};

/* 13 — CC selector */
S.ccSelect = function () {
  return playerChrome(playerPanel('Субтитры',
    '<div class="ds-seg" style="width:100%;margin-bottom:18px">' +
      '<button aria-selected="true" style="flex:1;justify-content:center">Субтитры</button>' +
      '<button aria-selected="false" style="flex:1;justify-content:center">Озвучка</button></div>' +
    optRow('Выкл.', '', 0) +
    '<p class="ds-eyebrow" style="margin:18px 0 8px">Расширенные — CC+</p>' +
    optRow('Русский', 'Реплики, говорящий, звук, окружение', 1, '<span class="ds-badge ds-badge--ccplus">CC+</span>') +
    optRow('English', 'Dialogue, speaker, sound, ambience', 0, '<span class="ds-badge ds-badge--ccplus">CC+</span>') +
    '<p class="ds-eyebrow" style="margin:18px 0 8px">Обычные субтитры</p>' +
    optRow('Русский', 'Только реплики', 0, '<span class="ds-badge ds-badge--cc">CC</span>') +
    optRow('English', 'Dialogue only', 0, '<span class="ds-badge ds-badge--cc">CC</span>') +
    optRow('Deutsch', 'Перевод реплик', 0, '<span class="ds-badge">SUB</span>') +
    optRow('Français', 'Перевод реплик', 0, '<span class="ds-badge">SUB</span>') +
    '<div class="ds-divider" style="margin:20px 0"></div>' +
    '<button class="ds-row" data-go="cc-settings" style="border-radius:var(--ds-r-sm);border-bottom:0;padding:12px">' +
      '<span class="ds-row__ico" style="color:var(--ds-amber)">' + ic('settings', 19) + '</span>' +
      '<span class="ds-row__main"><span class="ds-row__title">Внешний вид субтитров</span>' +
      '<span class="ds-row__sub">Размер, шрифт, цвет, фон, положение</span></span>' +
      '<span class="ds-row__chev">' + ic('chevR', 16) + '</span></button>' +
    '<button class="ds-row" data-go="report-cc" style="border-radius:var(--ds-r-sm);border-bottom:0;padding:12px">' +
      '<span class="ds-row__ico" style="color:var(--ds-warn)">' + ic('alert', 19) + '</span>' +
      '<span class="ds-row__main"><span class="ds-row__title">Сообщить об ошибке</span>' +
      '<span class="ds-row__sub">Текст, перевод, тайминг, говорящий</span></span>' +
      '<span class="ds-row__chev">' + ic('chevR', 16) + '</span></button>' +
    '<div class="ds-strip" style="margin-top:20px">' +
      '<span class="ds-strip__label">CC+</span>' +
      '<p class="ds-cap" style="margin:0">Кроме реплик показывает имена говорящих, музыку, важные звуки и окружение. ' +
      'Все тексты вычитаны редактором вручную.</p></div>'));
};

/* 14/15 — Subtitle appearance (CC+ settings) */
S.ccSettings = function () {
  // Заливки текста: сплошные цвета плюс две градиентные — золото и бриллиант
  var textFills = [
    ['#FFFFFF', 'Белый',        '#FFFFFF'],
    ['#FFE81F', 'Ярко-жёлтый',  '#FFE81F'],
    ['gold',    'Золото',       'linear-gradient(135deg,#B8860B,#FFD700 35%,#FFF6B0 50%,#FFD700 65%,#C9971B)'],
    ['diamond', 'Бриллиант',    'linear-gradient(135deg,#FFFFFF,#CFE8FF 30%,#FFFFFF 50%,#EADBFF 70%,#FFFFFF)'],
    ['#7BE8A0', 'Мятный',       '#7BE8A0'],
    ['#FF8FB8', 'Розовый',      '#FF8FB8'],
    ['#000000', 'Чёрный',       '#000000']
  ];
  var plateFills = [
    ['#000000', 'Чёрный',  '#000000'],
    ['#0C1424', 'Ночной',  '#0C1424'],
    ['#FFFFFF', 'Белый',   '#FFFFFF'],
    ['#FFE81F', 'Жёлтый',  '#FFE81F'],
    ['#4C8DFF', 'Синий',   '#4C8DFF']
  ];
  function swRow(name, sel, group, list) {
    return '<div><p class="ds-label" style="margin-bottom:8px">' + name + '</p>' +
      '<div class="ds-wrap ds-g2" data-cc="' + group + '">' +
      list.map(function (f, i) {
        return '<button class="ds-chip" data-v="' + f[0] + '" aria-pressed="' + (i === sel) + '"' +
          ' aria-label="' + f[1] + '" title="' + f[1] + '" style="width:40px;padding:0;justify-content:center">' +
          '<span style="width:19px;height:19px;border-radius:99px;background:' + f[2] +
          ';border:1px solid rgba(255,255,255,.3)"></span></button>';
      }).join('') + '</div></div>';
  }
  return topbar('') + '<main class="ds-container" style="padding-top:44px;padding-bottom:64px">' +
    '<div class="ds-row-f ds-g3"><button class="ds-iconbtn ds-iconbtn--bare" data-go="profile" aria-label="Назад">' + ic('arrowL', 20) + '</button>' +
      '<div><h1 class="ds-d2">Внешний вид субтитров</h1>' +
      '<p class="ds-sm" style="margin-top:6px">Настройки применяются ко всем фильмам на всех ваших устройствах.</p></div></div>' +

    '<div style="display:grid;grid-template-columns:minmax(0,1fr) 380px;gap:36px;margin-top:30px;align-items:start">' +
      '<div style="position:sticky;top:92px">' +
        '<div class="ds-art" id="ccStage" style="aspect-ratio:16/9;border-radius:var(--ds-r-lg);border:1px solid var(--ds-line);position:relative;display:flex;align-items:flex-end;justify-content:center">' +
          '<div id="ccPreview" class="ds-cuetrack" style="position:relative;z-index:3;padding-bottom:7%"></div></div>' +
        '<div class="ds-row-f ds-g3" style="margin-top:16px">' +
          '<button class="ds-btn ds-btn--ghost" id="ccResetBtn">Сбросить по умолчанию</button>' +
          '<div class="ds-grow"></div>' +
          '<button class="ds-btn ds-btn--amber">Сохранить</button></div>' +
        '<div class="ds-strip" style="margin-top:20px">' +
          '<span class="ds-strip__label">Живой просмотр</span>' +
          '<p class="ds-cap" style="margin:0">Пример содержит имя говорящего и описание звука — так вы сразу видите, ' +
          'как настройки повлияют на CC+, а не только на обычные реплики.</p></div></div>' +

      '<div class="ds-card ds-stack ds-g5">' +
        '<div><p class="ds-label" style="margin-bottom:8px">Размер</p>' +
          '<div class="ds-wrap ds-g2" data-cc="size">' +
            [['Маленький', 18], ['Средний', 26], ['Крупный', 34], ['Очень крупный', 44]].map(function (o, i) {
              return '<button class="ds-chip" data-v="' + o[1] + '"' + (i === 1 ? ' aria-pressed="true"' : '') + '>' + o[0] + '</button>';
            }).join('') + '</div></div>' +
        '<div><p class="ds-label" style="margin-bottom:8px">Шрифт</p>' +
          '<div class="ds-wrap ds-g2" data-cc="font">' +
            [['Onest', 'ui'], ['Моноширинный', 'mono'], ['С засечками', 'serif']].map(function (o, i) {
              return '<button class="ds-chip" data-v="' + o[1] + '"' + (i === 0 ? ' aria-pressed="true"' : '') + '>' + o[0] + '</button>';
            }).join('') + '</div></div>' +
        '<div><p class="ds-label" style="margin-bottom:8px">Насыщенность</p>' +
          '<div class="ds-wrap ds-g2" data-cc="weight">' +
            [['Обычная', 500], ['Полужирная', 600], ['Жирная', 800]].map(function (o, i) {
              return '<button class="ds-chip" data-v="' + o[1] + '"' + (i === 1 ? ' aria-pressed="true"' : '') + '>' + o[0] + '</button>';
            }).join('') + '</div></div>' +
        swRow('Цвет текста', 1, 'color', textFills) +
        '<div><div class="ds-between" style="margin-bottom:8px"><span class="ds-label">Непрозрачность текста</span>' +
          '<span class="ds-num ds-sm" id="ccTxtOpVal">100%</span></div>' +
          '<input class="ds-slider" type="range" min="40" max="100" value="100" id="ccTxtOp" aria-label="Непрозрачность текста"></div>' +
        swRow('Цвет плашки', 0, 'bg', plateFills) +
        '<div><div class="ds-between" style="margin-bottom:8px"><span class="ds-label">Непрозрачность плашки</span>' +
          '<span class="ds-num ds-sm" id="ccBgVal">62%</span></div>' +
          '<input class="ds-slider" type="range" min="0" max="100" value="62" id="ccBg" aria-label="Непрозрачность плашки"></div>' +
        '<div class="ds-between"><span class="ds-label">Обводка текста</span>' +
          '<label class="ds-switch"><input type="checkbox" checked id="ccOutline"><span class="ds-switch__track"></span><span class="ds-switch__thumb"></span></label></div>' +
        '<div class="ds-between"><span class="ds-label">Тень</span>' +
          '<label class="ds-switch"><input type="checkbox" id="ccShadow"><span class="ds-switch__track"></span><span class="ds-switch__thumb"></span></label></div>' +
        '<div><div class="ds-between" style="margin-bottom:8px"><span class="ds-label">Межстрочный интервал</span>' +
          '<span class="ds-num ds-sm" id="ccLhVal">1.34</span></div>' +
          '<input class="ds-slider" type="range" min="100" max="200" value="134" id="ccLh" aria-label="Межстрочный интервал"></div>' +
        '<div><p class="ds-label" style="margin-bottom:8px">Положение</p>' +
          '<div class="ds-wrap ds-g2" data-cc="pos">' +
            [['Снизу', 'bottom'], ['По центру', 'middle'], ['Сверху', 'top']].map(function (o, i) {
              return '<button class="ds-chip" data-v="' + o[1] + '"' + (i === 0 ? ' aria-pressed="true"' : '') + '>' + o[0] + '</button>';
            }).join('') + '</div></div>' +
        '<div class="ds-divider"></div>' +
        '<div class="ds-between"><div><span class="ds-label">Всегда включать CC+</span>' +
          '<p class="ds-cap" style="margin-top:2px">Если у фильма есть CC+, включатся они</p></div>' +
          '<label class="ds-switch"><input type="checkbox" checked><span class="ds-switch__track"></span><span class="ds-switch__thumb"></span></label></div>' +
      '</div></div></main>' + webFoot();
};

/* 16 — Report subtitle error */
S.reportCc = function () {
  return playerChrome(playerPanel('Ошибка в субтитрах',
    '<div class="ds-card" style="padding:16px;background:var(--ds-void);margin-bottom:18px">' +
      '<p class="ds-eyebrow" style="margin-bottom:10px">Реплика на момент 01:22:18</p>' +
      '<span class="ds-cuebox" style="max-width:none;display:block;text-align:left">' +
        '<span class="ds-cue" style="font-size:15px;text-align:left;text-shadow:none">' +
        '<span class="ds-cue__speaker">АННА:</span>Я скоро вернусь, обещаю.' +
        '<span class="ds-cue__sound">[дверь резко захлопывается]</span></span></span>' +
      '<div class="ds-num ds-cap" style="margin-top:10px">Русский CC+ · реплика #418 · 01:22:16,340 → 01:22:19,120</div></div>' +
    '<p class="ds-label" style="margin-bottom:10px">Что не так?</p>' +
    '<div class="ds-stack ds-g1">' +
      [['Ошибка текста', 'Опечатка, пропущенное слово'],
       ['Ошибка перевода', 'Смысл искажён'],
       ['Субтитры слишком рано', 'Появляются раньше реплики'],
       ['Субтитры слишком поздно', 'Отстают от реплики'],
       ['Пропущена реплика', 'Персонаж говорит, текста нет'],
       ['Неверный говорящий', 'Указано не то имя'],
       ['Неверное описание звука', 'Описание не соответствует происходящему'],
       ['Другое', '']].map(function (r, i) {
        return '<label class="ds-opt' + (i === 6 ? ' is-on' : '') + '" style="padding:10px 12px;border-radius:var(--ds-r-sm)' + (i === 6 ? ';background:var(--ds-amber-dim)' : '') + '">' +
          '<span class="ds-opt__box ds-opt__box--radio"></span>' +
          '<span><span style="font-size:14px">' + r[0] + '</span>' +
          (r[1] ? '<span class="ds-row__sub" style="display:block">' + r[1] + '</span>' : '') + '</span></label>';
      }).join('') + '</div>' +
    '<div class="ds-field" style="margin-top:18px"><label class="ds-label" for="rcc">Комментарий — необязательно</label>' +
      '<textarea class="ds-textarea" id="rcc" placeholder="Дверь не захлопывается, её закрывают тихо. Описание меняет смысл сцены."></textarea></div>' +
    '<div class="ds-card" style="margin-top:16px;padding:14px;background:var(--ds-void)">' +
      '<p class="ds-eyebrow" style="margin-bottom:10px">Приложим автоматически</p>' +
      '<div class="ds-stack ds-g2">' +
        [['Фильм', 'Год тишины'], ['Момент', '01:22:18'], ['Язык', 'Русский'], ['Тип', 'CC+'], ['Реплика', '#418']].map(function (r) {
          return '<div class="ds-between"><span class="ds-cap">' + r[0] + '</span>' +
            '<span class="ds-num" style="font-size:11.5px;color:var(--ds-ink-2)">' + r[1] + '</span></div>';
        }).join('') + '</div></div>',
    '<button class="ds-btn ds-btn--amber ds-btn--block" data-go="tickets">Отправить</button>'));
};

/* Download sheet on web */
S.downloadWeb = function () {
  var QUAL = [['360p', '450 MB', 0], ['480p', '780 MB', 0], ['720p HD', '1.4 GB', 0], ['1080p Full HD', '2.8 GB', 1], ['2K', '5.1 GB', 0], ['4K UHD', '8.7 GB', 0]];
  return '<div style="position:relative;min-height:900px">' +
    '<div style="filter:blur(3px);opacity:.4;pointer-events:none">' + S.movie() + '</div>' +
    '<div style="position:absolute;inset:0;background:rgba(3,7,19,.7);display:grid;place-items:center;padding:40px">' +
      '<div class="ds-modal" style="width:min(520px,100%)">' +
        '<div class="ds-between" style="padding:24px 26px 0"><h3 class="ds-h1">Скачать фильм</h3>' +
          '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" data-go="movie" aria-label="Закрыть">' + ic('x', 17) + '</button></div>' +
        '<div class="ds-scroll" style="padding:18px 26px;overflow-y:auto">' +
          '<div class="ds-row-f ds-g3" style="margin-bottom:20px">' +
            '<div style="width:56px;aspect-ratio:2/3;border-radius:8px;overflow:hidden;position:relative;flex:none">' + art('Год тишины', '', 'position:absolute;inset:0') + '</div>' +
            '<div><div class="ds-h3">Год тишины</div><div class="ds-cap">2025 · 2 ч 12 мин</div></div></div>' +
          '<p class="ds-label" style="margin-bottom:10px">Качество</p>' +
          '<div class="ds-stack ds-g1">' + QUAL.map(function (q) {
            return '<label class="ds-opt' + (q[2] ? ' is-on' : '') + '" style="padding:12px;border-radius:var(--ds-r-sm);border:1px solid ' + (q[2] ? 'var(--ds-amber-edge)' : 'var(--ds-line)') + (q[2] ? ';background:var(--ds-amber-dim)' : '') + '">' +
              '<span class="ds-opt__box ds-opt__box--radio"></span>' +
              '<span class="ds-grow">' + q[0] + '</span>' +
              '<span class="ds-num ds-sm ds-mut2">' + q[1] + '</span></label>';
          }).join('') + '</div>' +
          '<p class="ds-label" style="margin:20px 0 10px">Субтитры в загрузке</p>' +
          '<div class="ds-stack ds-g1">' +
            [['Русский CC+', 'Реплики, говорящий, звук', 1], ['Русский', 'Только реплики', 0], ['English CC', 'Dialogue and sound', 0], ['Без субтитров', '', 0]].map(function (s) {
              return '<label class="ds-opt' + (s[2] ? ' is-on' : '') + '" style="padding:12px;border-radius:var(--ds-r-sm);border:1px solid ' + (s[2] ? 'var(--ds-amber-edge)' : 'var(--ds-line)') + (s[2] ? ';background:var(--ds-amber-dim)' : '') + '">' +
                '<span class="ds-opt__box ds-opt__box--check"></span>' +
                '<span class="ds-grow"><span style="font-size:14px">' + s[0] + '</span>' +
                (s[1] ? '<span class="ds-row__sub" style="display:block">' + s[1] + '</span>' : '') + '</span></label>';
            }).join('') + '</div>' +
          '<div class="ds-between" style="margin-top:18px;padding:14px;border-radius:var(--ds-r-sm);background:var(--ds-raised)">' +
            '<span class="ds-sm ds-mut">Займёт на устройстве</span>' +
            '<span class="ds-num" style="font-weight:700">2.81 GB</span></div>' +
          '<p class="ds-cap" style="margin-top:10px">Свободно 48.2 GB. Загрузка доступна для просмотра 30 дней.</p>' +
        '</div>' +
        '<div style="padding:0 26px 26px;display:flex;gap:10px">' +
          '<button class="ds-btn ds-btn--ghost ds-grow" data-go="movie">Отмена</button>' +
          '<button class="ds-btn ds-btn--primary ds-grow" data-go="downloads">Скачать</button></div>' +
      '</div></div></div>';
};

/* Library tabbed pages 17–20 */
function libraryPage(tab, body) {
  var TABS = [['library', 'Продолжить просмотр'], ['favorites', 'Избранное'], ['lists', 'Мои списки'], ['downloads', 'Загружено'], ['history', 'История']];
  return topbar('library') + '<main class="ds-container" style="padding-top:44px;padding-bottom:64px">' +
    '<div class="ds-between"><h1 class="ds-d1">Моя библиотека</h1>' +
      '<div class="ds-row-f ds-g3">' +
        '<button class="ds-btn ds-btn--sm ds-btn--secondary">' + ic('filter', 14) + ' Фильтр</button>' +
        '<select class="ds-select" style="min-height:38px;padding:7px 38px 7px 14px;width:auto;font-size:13px"><option>Недавно добавленные</option><option>По названию</option><option>По рейтингу</option></select>' +
        '<div class="ds-seg"><button aria-selected="true">' + ic('grid', 14) + '</button><button aria-selected="false">' + ic('list', 14) + '</button></div>' +
        '<button class="ds-btn ds-btn--sm ds-btn--primary" data-go="create-list">' + ic('plus', 14) + ' Новый список</button></div></div>' +
    '<div class="ds-tabs" style="margin-top:24px">' + TABS.map(function (t) {
      return '<button class="ds-tab" data-go="' + t[0] + '" aria-selected="' + (t[0] === tab) + '">' + t[1] + '</button>';
    }).join('') + '</div>' +
    '<div style="margin-top:28px">' + body + '</div></main>' + webFoot();
}

/* 17 — Library / continue watching */
S.library = function () {
  return libraryPage('library',
    '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:18px">' +
      [[0, 78, '1:37:04', '2:08:00'], [12, 47, '47:12', '1:36:00'], [6, 22, '27:40', '2:04:00'],
       [10, 61, '1:29:15', '2:26:00'], [3, 8, '08:22', '1:47:00'], [15, 94, '1:34:40', '1:42:00'],
       [18, 35, '56:18', '2:41:00'], [7, 12, '14:55', '1:58:00']].map(function (it) {
        var m = M(it[0]);
        return '<button class="ds-cw" data-go="player" style="text-align:left;padding:0;cursor:pointer">' +
          '<div class="ds-cw__art">' + art(m.t + 'cw', '', 'position:absolute;inset:0') +
          '<div class="ds-cw__play"><span class="ds-cw__playbtn">' + ic('play', 20) + '</span></div>' +
          '<div class="ds-cw__bar"><div class="ds-prog"><div class="ds-prog__bar" style="width:' + it[1] + '%"></div></div></div></div>' +
          '<div class="ds-cw__foot"><div style="min-width:0"><div class="ds-poster__name">' + m.t + '</div>' +
          '<div class="ds-num" style="font-size:11px;color:var(--ds-ink-3);margin-top:2px">' + it[2] + ' / ' + it[3] + '</div></div>' +
          (m.cc === 'ccplus' ? '<span class="ds-badge ds-badge--ccplus">CC+</span>' : '<span class="ds-badge ds-badge--cc">CC</span>') +
          '</div></button>';
      }).join('') + '</div>');
};

/* 18 — Favorites */
S.favorites = function () {
  return libraryPage('favorites',
    '<div style="display:grid;grid-template-columns:repeat(6,1fr);gap:18px">' +
      [9, 6, 0, 13, 17, 2, 11, 4, 15, 8, 19, 1].map(function (i) { return wPoster(M(i), { offline: 1, w: 0 }); }).join('') + '</div>' +
    '<div style="margin-top:52px;max-width:460px"><p class="ds-eyebrow" style="margin-bottom:12px">Пустое состояние</p>' +
      '<div class="ds-card"><div class="ds-empty" style="padding:30px 16px">' +
        '<span class="ds-empty__ico">' + ic('heart', 26) + '</span>' +
        '<div><h4 class="ds-h2">В избранном пусто</h4>' +
        '<p class="ds-sm" style="margin-top:6px;max-width:36ch">Нажмите ♡ на любом фильме — он появится здесь и будет доступен со всех устройств.</p></div>' +
        '<button class="ds-btn ds-btn--sm ds-btn--primary" data-go="home">В каталог</button></div></div></div>');
};

/* 19 — History */
S.history = function () {
  function group(label, idx) {
    return '<div style="margin-bottom:32px"><div class="ds-between" style="margin-bottom:14px">' +
      '<p class="ds-eyebrow">' + label + '</p>' +
      '<button class="ds-btn ds-btn--sm ds-btn--ghost">Удалить группу</button></div>' +
      '<div class="ds-card" style="padding:8px">' + idx.map(function (it) {
        var m = M(it[0]);
        return '<div class="ds-hit"><div class="ds-hit__art" style="position:relative">' + art(m.t + 'h', '', 'position:absolute;inset:0') +
          '<div style="position:absolute;left:0;right:0;bottom:0"><div class="ds-prog"><div class="ds-prog__bar" style="width:' + it[1] + '%"></div></div></div></div>' +
          '<div class="ds-hit__main"><div class="ds-h3">' + m.t + '</div>' +
          '<div class="ds-cap ds-num" style="margin-top:3px">' + it[2] + ' · просмотрено ' + it[1] + '% · ' + it[3] + '</div>' +
          '<div class="ds-wrap ds-g1" style="margin-top:7px">' + badges(m, { offline: 1 }) + '</div></div>' +
          '<button class="ds-btn ds-btn--sm ds-btn--secondary" data-go="player">' + ic('play', 12) + ' Продолжить</button>' +
          '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" aria-label="Удалить из истории">' + ic('x', 16) + '</button></div>';
      }).join('') + '</div></div>';
  }
  return libraryPage('history',
    '<div class="ds-between" style="margin-bottom:22px">' +
      '<p class="ds-sm ds-mut">История хранится 12 месяцев и синхронизируется между устройствами.</p>' +
      '<button class="ds-btn ds-btn--sm ds-btn--danger">' + ic('trash', 14) + ' Очистить историю</button></div>' +
    group('Сегодня', [[0, 78, '1:37:04', 'Web · Chrome'], [12, 47, '47:12', 'iPhone']]) +
    group('Вчера', [[6, 22, '27:40', 'Android'], [10, 100, '2:26:00', 'Web · Chrome'], [3, 8, '08:22', 'iPhone']]) +
    group('На этой неделе', [[15, 94, '1:34:40', 'Web · Chrome'], [18, 35, '56:18', 'iPhone']]) +
    group('Ранее', [[7, 100, '1:58:00', 'Android'], [4, 100, '1:39:00', 'Web · Chrome']]));
};

/* 20 — Lists */
S.lists = function () {
  var LISTS = [['Посмотреть с друзьями', 12, '21 ч 40 мин', 1], ['Северное кино', 8, '14 ч 12 мин', 0],
    ['На один вечер', 6, '9 ч 05 мин', 0], ['Для дороги — скачано', 4, '6 ч 48 мин', 1],
    ['Пересмотреть', 9, '17 ч 22 мин', 0]];
  return libraryPage('lists',
    '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px">' +
      '<button class="ds-card" data-go="create-list" style="cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;min-height:230px;border-style:dashed;border-color:var(--ds-line-strong);background:none">' +
        '<span class="ds-empty__ico" style="width:52px;height:52px;border-radius:16px">' + ic('plus', 22) + '</span>' +
        '<span class="ds-h3">Новый список</span></button>' +
      LISTS.map(function (l, li) {
        return '<button class="ds-card ds-card--flush" data-go="list-detail" style="cursor:pointer;text-align:left">' +
          '<div style="display:grid;grid-template-columns:repeat(3,1fr);height:150px;gap:1px">' +
            [0, 1, 2].map(function (k) {
              return '<div style="position:relative;overflow:hidden">' + art(l[0] + k, '', 'position:absolute;inset:0') + '</div>';
            }).join('') + '</div>' +
          '<div style="padding:16px 18px"><div class="ds-between"><h3 class="ds-h2">' + l[0] + '</h3>' +
            (l[3] ? '<span class="ds-badge">' + ic('lock', 9, 2.6) + ' Приватный</span>' : '') + '</div>' +
            '<p class="ds-cap ds-num" style="margin-top:5px">' + l[1] + ' фильмов · ' + l[2] + '</p></div></button>';
      }).join('') + '</div>');
};

/* 21 — Create list */
S.createList = function () {
  return '<div style="position:relative;min-height:900px">' +
    '<div style="filter:blur(3px);opacity:.4;pointer-events:none">' + S.lists() + '</div>' +
    '<div style="position:absolute;inset:0;background:rgba(3,7,19,.7);display:grid;place-items:center;padding:40px">' +
      '<div class="ds-modal" style="width:min(480px,100%)">' +
        '<div class="ds-between" style="padding:24px 26px 0"><h3 class="ds-h1">Новый список</h3>' +
          '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" data-go="lists" aria-label="Закрыть">' + ic('x', 17) + '</button></div>' +
        '<div style="padding:20px 26px" class="ds-stack ds-g4">' +
          '<div class="ds-field"><label class="ds-label" for="ln">Название списка</label>' +
            '<input class="ds-input" id="ln" value="Посмотреть с друзьями" maxlength="60">' +
            '<span class="ds-help">22 / 60</span></div>' +
          '<div class="ds-field"><label class="ds-label" for="ld">Описание — необязательно</label>' +
            '<textarea class="ds-textarea" id="ld" style="min-height:80px" placeholder="Что объединяет эти фильмы"></textarea></div>' +
          '<div class="ds-between" style="padding:12px 14px;border-radius:var(--ds-r-sm);background:var(--ds-raised)">' +
            '<div><span class="ds-label">Приватный список</span>' +
            '<p class="ds-cap" style="margin-top:2px">Виден только вам. Ссылку можно выдать позже.</p></div>' +
            '<label class="ds-switch"><input type="checkbox" checked><span class="ds-switch__track"></span><span class="ds-switch__thumb"></span></label></div></div>' +
        '<div style="padding:0 26px 26px;display:flex;gap:10px">' +
          '<button class="ds-btn ds-btn--ghost ds-grow" data-go="lists">Отмена</button>' +
          '<button class="ds-btn ds-btn--primary ds-grow" data-go="list-detail">Создать</button></div>' +
      '</div></div></div>';
};

/* 22 — List detail */
S.listDetail = function () {
  return topbar('library') +
    '<section style="position:relative;min-height:330px;margin-top:-68px">' +
      '<div style="position:absolute;inset:0;display:grid;grid-template-columns:repeat(6,1fr)">' +
        [0, 1, 2, 3, 4, 5].map(function (k) {
          return '<div style="position:relative;overflow:hidden">' + art('Посмотреть с друзьями' + k, '', 'position:absolute;inset:0') + '</div>';
        }).join('') + '</div>' +
      '<div style="position:absolute;inset:0;background:linear-gradient(to top,var(--ds-void) 8%,rgba(6,11,24,.72))"></div>' +
      '<div class="ds-container" style="position:relative;height:330px;display:flex;flex-direction:column;justify-content:flex-end;padding-bottom:28px">' +
        '<div class="ds-row-f ds-g2" style="margin-bottom:10px">' +
          '<span class="ds-badge">' + ic('lock', 9, 2.6) + ' Приватный список</span>' +
          '<span class="ds-cap ds-num">Создан 14 августа 2026</span></div>' +
        '<h1 class="ds-d1">Посмотреть с друзьями</h1>' +
        '<p class="ds-body" style="margin-top:8px">Медленное кино, под которое не стыдно молчать вдвоём.</p>' +
        '<div class="ds-row-f ds-g4" style="margin-top:16px">' +
          '<span class="ds-sm"><span class="ds-num" style="font-weight:700">12</span> фильмов</span>' +
          '<span class="ds-mut2">·</span><span class="ds-sm ds-num">21 ч 40 мин</span>' +
          '<span class="ds-mut2">·</span><span class="ds-sm"><span class="ds-num" style="font-weight:700">9</span> с CC+</span></div></div></section>' +
    '<main class="ds-container" style="padding-bottom:64px">' +
      '<div class="ds-row-f ds-g3" style="padding:22px 0">' +
        '<button class="ds-btn ds-btn--primary" data-go="player">' + ic('play', 16) + ' Смотреть подряд</button>' +
        '<button class="ds-btn ds-btn--secondary">' + ic('plus', 16) + ' Добавить фильм</button>' +
        '<button class="ds-btn ds-btn--outline">' + ic('edit', 16) + ' Изменить</button>' +
        '<button class="ds-btn ds-btn--outline">' + ic('share', 16) + ' Поделиться</button>' +
        '<div class="ds-grow"></div>' +
        '<button class="ds-btn ds-btn--danger">' + ic('trash', 16) + ' Удалить список</button></div>' +
      '<div class="ds-card" style="padding:8px">' +
        [9, 6, 0, 13, 17, 2, 11, 4, 15, 8, 19, 1].map(function (i, k) {
          var m = M(i);
          return '<div class="ds-hit">' +
            '<span class="ds-row__ico" style="cursor:grab">' + ic('drag', 17) + '</span>' +
            '<span class="ds-num ds-mut2" style="width:22px;text-align:right;font-size:12px">' + (k + 1) + '</span>' +
            '<div class="ds-hit__art" style="position:relative">' + art(m.o, '', 'position:absolute;inset:0') + '</div>' +
            '<div class="ds-hit__main"><div class="ds-h3">' + m.t + '</div>' +
            '<div class="ds-cap" style="margin-top:3px">' + m.y + ' · ' + m.d + ' · ' + m.g + '</div>' +
            '<div class="ds-wrap ds-g1" style="margin-top:7px;align-items:center">' + badges(m, { offline: 1 }) + stars(m.r) + '</div></div>' +
            '<button class="ds-btn ds-btn--sm ds-btn--secondary" data-go="player">' + ic('play', 12) + '</button>' +
            '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" aria-label="Убрать из списка">' + ic('x', 16) + '</button></div>';
        }).join('') + '</div></main>' + webFoot();
};
