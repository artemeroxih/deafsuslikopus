/* ============================================================
   Web screens 30–40 — account, settings, support
   ============================================================ */

function navFor(id) {
  return ACCOUNT_NAV.map(function (n) { return [n[0], n[1], n[0] === id ? 1 : 0, n[3]]; });
}

/* 30 — Profile */
S.profile = function () {
  return topbar('') +
    '<section style="position:relative;height:250px;margin-top:-68px">' +
      '<div class="ds-art" style="position:absolute;inset:0">' + dsArt('profile-cover') + '</div>' +
      '<div style="position:absolute;inset:0;background:linear-gradient(to top,var(--ds-void) 6%,rgba(6,11,24,.62))"></div></section>' +
    '<main class="ds-container" style="margin-top:-96px;position:relative;padding-bottom:64px">' +
      '<div class="ds-row-f ds-g5" style="align-items:flex-end">' +
        '<div style="width:132px;height:132px;border-radius:36px;overflow:hidden;position:relative;flex:none;border:3px solid var(--ds-void);box-shadow:var(--ds-e3)">' +
          art('Анна Ковалёва', '', 'position:absolute;inset:0') + '</div>' +
        '<div class="ds-grow" style="padding-bottom:8px">' +
          '<h1 class="ds-d2">Анна Ковалёва</h1>' +
          '<p class="ds-sm ds-mut" style="margin-top:4px">anna.k@example.ru</p>' +
          '<div class="ds-wrap ds-g2" style="margin-top:10px">' +
            '<span class="ds-badge ds-badge--accent ds-badge--lg">ВИП · 500 ₽ / месяц</span>' +
            '<span class="ds-badge ds-badge--ok ds-badge--lg">Активна до 12 октября</span></div></div>' +
        '<button class="ds-btn ds-btn--secondary" data-go="edit-profile" style="margin-bottom:8px">' + ic('edit', 16) + ' Изменить профиль</button></div>' +

      '<div class="ds-grid ds-grid--4" style=";margin-top:32px">' +
        [['Просмотрено фильмов', '284'], ['Часов просмотра', '512'], ['Скачано', '6'], ['С CC+', '78%']].map(function (s) {
          return '<div class="ds-stat"><div class="ds-stat__k">' + s[0] + '</div><div class="ds-stat__v">' + s[1] + '</div></div>';
        }).join('') + '</div>' +

      '<div class="ds-grid ds-grid--3" style="gap:20px;;margin-top:32px;align-items:start">' +
        [['Смотреть', [['history', 'История просмотра', 'clock', '284 фильма'], ['favorites', 'Избранное', 'heart', '32 фильма'],
                       ['library', 'Моя библиотека', 'library', '5 списков'], ['downloads', 'Загрузки', 'download', '6 · 16.7 GB']]],
         ['Настройки', [['a11y', 'Субтитры и CC+', 'cc', 'Русский CC+, крупный'], ['settings', 'Качество видео', 'quality', 'Авто · до 4K'],
                        ['settings', 'Язык интерфейса', 'globe', 'Русский'], ['devices', 'Устройства', 'devices', '3 активных'],
                        ['notifications', 'Уведомления', 'bell', 'Вкл.'], ['settings', 'Безопасность', 'shield', '2FA выключена']]],
         ['Деньги и помощь', [['subs', 'Моя подписка', 'card', 'ВИП · активна'], ['help', 'Помощь', 'help', ''],
                              ['tickets', 'Мои обращения', 'ticket', '1 в работе'], ['', 'О сервисе', 'info', 'Версия 4.8.2']]]
        ].map(function (col) {
          return '<div class="ds-card ds-card--flush">' +
            '<p class="ds-eyebrow" style="padding:16px 18px 10px">' + col[0] + '</p>' +
            '<div class="ds-rows">' + col[1].map(function (r) {
              return '<button class="ds-row" data-go="' + r[0] + '">' +
                '<span class="ds-row__ico"' + (r[2] === 'cc' ? ' style="color:var(--ds-amber)"' : '') + '>' + ic(r[2], 19) + '</span>' +
                '<span class="ds-row__main"><span class="ds-row__title">' + r[1] + '</span></span>' +
                (r[3] ? '<span class="ds-row__meta">' + r[3] + '</span>' : '') +
                '<span class="ds-row__chev">' + ic('chevR', 16) + '</span></button>';
            }).join('') + '</div></div>';
        }).join('') + '</div>' +
      '<button class="ds-btn ds-btn--danger" style="margin-top:24px">' + ic('logout', 16) + ' Выйти</button>' +
    '</main>' + webFoot();
};

/* 31 — Edit profile */
S.editProfile = function () {
  return settingsPage('Изменить профиль', 'Имя и аватар видны только вам — DeafSuslik не публичный сервис.',
    '<div class="ds-card" style="max-width:620px">' +
      '<div class="ds-row-f ds-g4" style="margin-bottom:24px">' +
        '<div style="width:96px;height:96px;border-radius:28px;overflow:hidden;position:relative;flex:none;border:1px solid var(--ds-line-mid)">' +
          art('Анна Ковалёва', '', 'position:absolute;inset:0') + '</div>' +
        '<div><div class="ds-row-f ds-g2"><button class="ds-btn ds-btn--sm ds-btn--secondary">' + ic('upload', 14) + ' Загрузить</button>' +
          '<button class="ds-btn ds-btn--sm ds-btn--ghost">Удалить</button></div>' +
          '<p class="ds-cap" style="margin-top:8px">JPG или PNG, до 5 МБ. Квадратное изображение.</p></div></div>' +
      '<div class="ds-stack ds-g4">' +
        '<div class="ds-field"><label class="ds-label" for="pn">Имя</label><input class="ds-input" id="pn" value="Анна Ковалёва"></div>' +
        '<div class="ds-field"><label class="ds-label" for="pe">Email</label>' +
          '<div style="position:relative;display:flex;align-items:center">' +
            '<input class="ds-input" id="pe" value="anna.k@example.ru" style="padding-right:104px">' +
            '<span class="ds-badge ds-badge--ok" style="position:absolute;right:10px">' + ic('check', 9, 3) + ' Подтверждён</span></div></div>' +
        '<div class="ds-field"><label class="ds-label" for="pp">Телефон — необязательно</label>' +
          '<input class="ds-input" id="pp" value="+7 900 000-00-00"><span class="ds-help">Нужен только для восстановления доступа.</span></div>' +
        '<div class="ds-field"><label class="ds-label" for="pl">Язык интерфейса</label>' +
          '<select class="ds-select" id="pl"><option>Русский</option><option>English</option><option>Deutsch</option></select></div>' +
        '<div class="ds-field"><label class="ds-label" for="pt">Часовой пояс</label>' +
          '<select class="ds-select" id="pt"><option>Москва, UTC+3</option><option>Екатеринбург, UTC+5</option><option>Владивосток, UTC+10</option></select></div>' +
      '</div>' +
      '<div class="ds-row-f ds-g3" style="margin-top:26px"><button class="ds-btn ds-btn--primary">Сохранить</button>' +
      '<button class="ds-btn ds-btn--ghost" data-go="profile">Отмена</button></div></div>' +
    '<div class="ds-card" style="max-width:620px;margin-top:20px;border-color:rgba(255,92,92,.28)">' +
      '<h3 class="ds-h2">Опасная зона</h3>' +
      '<div class="ds-between" style="margin-top:14px"><div><span class="ds-sm" style="color:var(--ds-ink)">Удалить аккаунт</span>' +
        '<p class="ds-cap" style="margin-top:2px">Подписки будут отменены, история и списки удалены безвозвратно.</p></div>' +
        '<button class="ds-btn ds-btn--sm ds-btn--danger" style="flex:none">Удалить</button></div></div>',
    navFor('profile'));
};

/* 32 — My subscription */
S.subs = function () {
  return settingsPage('Моя подписка', 'Одна подписка ВИП открывает весь сервис. Списание раз в месяц.',
    '<div class="ds-card" style="border-color:var(--ds-vip-edge);background:linear-gradient(150deg,rgba(255,194,75,.10),transparent 46%),var(--ds-panel)">' +
      '<div class="ds-between" style="align-items:flex-start">' +
        '<div class="ds-row-f ds-g3"><span style="width:4px;height:46px;border-radius:2px;background:var(--ds-vip)"></span>' +
          '<div><div class="ds-h1">ВИП</div>' +
          '<div class="ds-num ds-sm ds-mut" style="margin-top:3px">500 ₽ / месяц · регулярное списание</div></div></div>' +
        '<span class="ds-badge ds-badge--ok ds-badge--lg">Активна</span></div>' +
      '<div class="ds-grid ds-grid--4" style=";margin-top:20px;padding-top:18px;border-top:1px solid var(--ds-line)">' +
        [['Следующее списание', '12 октября 2026'], ['Осталось дней', '40'],
         ['Подключена', '12 марта 2026'], ['Способ оплаты', 'Mir •••• 4417']].map(function (r) {
          return '<div><div class="ds-cap">' + r[0] + '</div><div class="ds-sm" style="font-weight:600;margin-top:3px">' + r[1] + '</div></div>';
        }).join('') + '</div>' +
      '<div class="ds-row-f ds-g2" style="margin-top:18px">' +
        '<button class="ds-btn ds-btn--sm ds-btn--secondary" data-go="sub-detail">Управление</button>' +
        '<button class="ds-btn ds-btn--sm ds-btn--ghost">Сменить карту</button>' +
        '<button class="ds-btn ds-btn--sm ds-btn--ghost">История платежей</button>' +
        '<div class="ds-grow"></div>' +
        '<button class="ds-btn ds-btn--sm ds-btn--danger">Отменить подписку</button></div></div>' +

    '<div class="ds-strip" style="margin-top:16px">' +
      '<span class="ds-strip__label">Тариф</span>' +
      '<p class="ds-sm" style="margin:0">На DeafSuslik один тариф для всех — 500 ₽ в месяц. ' +
      'Коллекции, качество до 4K, скачивание, CC и CC+ входят в него без доплат.</p></div>' +

    '<div class="ds-card" style="margin-top:24px">' +
      '<h3 class="ds-h2" style="margin-bottom:14px">История платежей</h3>' +
      '<div class="ds-tablewrap"><table class="ds-table">' +
        '<thead><tr><th>Дата</th><th>Подписка</th><th>Сумма</th><th>Способ</th><th>Статус</th><th>Чек</th></tr></thead><tbody>' +
        [['12 сентября 2026', 'ВИП', '500 ₽', 'Mir •••• 4417', 'ok', 'Оплачено'],
         ['12 августа 2026', 'ВИП', '500 ₽', 'Mir •••• 4417', 'ok', 'Оплачено'],
         ['12 июля 2026', 'ВИП', '500 ₽', 'Mir •••• 4417', 'ok', 'Оплачено'],
         ['12 июня 2026', 'ВИП', '500 ₽', 'Mir •••• 4417', 'err', 'Отклонён'],
         ['12 мая 2026', 'ВИП', '500 ₽', 'Mir •••• 4417', 'ok', 'Оплачено']].map(function (r) {
          return '<tr><td class="ds-num">' + r[0] + '</td><td>' + r[1] + '</td><td class="ds-num">' + r[2] + '</td>' +
            '<td class="ds-num ds-mut2">' + r[3] + '</td>' +
            '<td><span class="ds-badge ds-badge--' + r[4] + '">' + r[5] + '</span></td>' +
            '<td><button class="ds-btn ds-btn--sm ds-btn--ghost">Скачать</button></td></tr>';
        }).join('') + '</tbody></table></div></div>',
    navFor('subs'));
};

/* 33 — Subscription detail */
S.subDetail = function () {
  var p = VIP;
  return settingsPage('ВИП', '',
    '<div class="ds-card" style="border-color:var(--ds-vip-edge);background:linear-gradient(160deg,rgba(255,194,75,.10),transparent 46%),var(--ds-panel)">' +
      '<div class="ds-between"><div class="ds-row-f ds-g3">' +
        '<span style="width:4px;height:46px;border-radius:2px;background:var(--ds-vip)"></span>' +
        '<div><div class="ds-h1">' + p.name + '</div><div class="ds-num ds-sm ds-mut" style="margin-top:3px">500 ₽ / месяц · регулярное списание</div></div></div>' +
        '<span class="ds-badge ds-badge--ok ds-badge--lg">Активна</span></div>' +
      '<div class="ds-grid ds-grid--4" style=";margin-top:22px">' +
        [['Следующее списание', '12 октября 2026'], ['Осталось дней', '40'],
         ['Подключена', '12 марта 2026'], ['Всего списаний', '7']].map(function (r) {
          return '<div class="ds-stat" style="background:var(--ds-void)"><div class="ds-stat__k">' + r[0] + '</div>' +
            '<div class="ds-stat__v" style="font-size:1.15rem">' + r[1] + '</div></div>';
        }).join('') + '</div></div>' +

    '<div class="ds-card" style="margin-top:16px"><h3 class="ds-h2" style="margin-bottom:14px">Способ оплаты</h3>' +
      '<div class="ds-between" style="padding:14px;border-radius:var(--ds-r-md);background:var(--ds-raised)">' +
        '<div class="ds-row-f ds-g3"><span style="color:var(--ds-ink-2);display:flex">' + ic('card', 22) + '</span>' +
          '<div><div class="ds-sm" style="font-weight:600">Mir •••• 4417</div>' +
          '<div class="ds-cap">Действует до 09/28</div></div></div>' +
        '<button class="ds-btn ds-btn--sm ds-btn--secondary">Изменить</button></div></div>' +

    '<div class="ds-card" style="margin-top:16px"><h3 class="ds-h2" style="margin-bottom:14px">Что открывает подписка</h3>' +
      '<div style="gap:12px" class="ds-grid ds-grid--2">' +
        p.feats.map(function (f) {
          return '<div class="ds-row-f ds-g2"><span style="color:var(--ds-vip);display:flex;flex:none">' + ic('check', 16, 2.4) + '</span>' +
            '<span class="ds-sm">' + f + '</span></div>';
        }).join('') + '</div></div>' +

    '<div class="ds-card" style="margin-top:16px;border-color:rgba(255,92,92,.28)">' +
      '<h3 class="ds-h2">Отменить подписку</h3>' +
      '<p class="ds-sm" style="margin-top:8px">Доступ сохранится до 12 октября. После этого каталог закроется, ' +
      'а скачанные фильмы перестанут открываться. История, избранное и списки останутся.</p>' +
      '<button class="ds-btn ds-btn--danger" style="margin-top:14px">Отменить подписку</button></div>',
    navFor('subs'));
};

/* 34 — Devices */
S.devices = function () {
  var D = [
    ['iPhone 17 Pro', 'iOS 26.1 · приложение 4.8.2', 'Сейчас · Москва', 1, 'devices'],
    ['Samsung Galaxy S25', 'Android 16 · приложение 4.8.1', 'Вчера, 21:14 · Москва', 0, 'devices'],
    ['Chrome — macOS', 'Chrome 141 · Web', '2 часа назад · Москва', 0, 'globe'],
    ['Safari — iPad', 'iPadOS 26 · Web', '12 сентября · Санкт-Петербург', 0, 'globe']
  ];
  return settingsPage('Мои устройства', 'Одновременно можно смотреть на 5 устройствах. Сейчас активны 4.',
    '<div class="ds-card ds-card--flush">' + D.map(function (d) {
      return '<div class="ds-row" style="cursor:default;padding:18px">' +
        '<span class="ds-row__ico" style="color:' + (d[3] ? 'var(--ds-amber)' : 'var(--ds-ink-3)') + '">' + ic(d[4], 21) + '</span>' +
        '<span class="ds-row__main"><span class="ds-row__title" style="font-size:15px">' + d[0] +
          (d[3] ? ' <span class="ds-badge ds-badge--cc" style="margin-left:6px">Это устройство</span>' : '') + '</span>' +
        '<span class="ds-row__sub">' + d[1] + '</span>' +
        '<span class="ds-row__sub ds-num" style="margin-top:3px">' + d[2] + '</span></span>' +
        (d[3] ? '' : '<button class="ds-btn ds-btn--sm ds-btn--ghost">Выйти на устройстве</button>') + '</div>';
    }).join('') + '</div>' +
    '<div class="ds-card" style="margin-top:16px;border-color:rgba(255,92,92,.28)">' +
      '<div class="ds-between"><div><h3 class="ds-h2">Выйти на всех других устройствах</h3>' +
        '<p class="ds-sm" style="margin-top:6px">Текущее устройство останется в системе. На остальных потребуется вход заново.</p></div>' +
        '<button class="ds-btn ds-btn--danger" style="flex:none">Выйти везде</button></div></div>' +
    '<div class="ds-strip" style="margin-top:16px">' +
      '<span class="ds-strip__label">Синхро</span>' +
      '<p class="ds-cap" style="margin:0">Прогресс просмотра, избранное, списки, история и настройки субтитров синхронизируются ' +
      'между всеми устройствами автоматически.</p></div>',
    navFor('devices'));
};

/* 35 — Settings */
S.settings = function () {
  function block(title, rows) {
    return '<div class="ds-card ds-card--flush" style="margin-bottom:16px">' +
      '<p class="ds-eyebrow" style="padding:16px 18px 10px">' + title + '</p>' +
      '<div class="ds-rows">' + rows.map(function (r) {
        return '<div class="ds-row" style="cursor:default">' +
          '<span class="ds-row__main"><span class="ds-row__title">' + r[0] + '</span>' +
          (r[1] ? '<span class="ds-row__sub">' + r[1] + '</span>' : '') + '</span>' +
          (r[2] === 'sw' ? '<label class="ds-switch"><input type="checkbox"' + (r[3] ? ' checked' : '') + '><span class="ds-switch__track"></span><span class="ds-switch__thumb"></span></label>'
            : r[2] === 'sel' ? '<select class="ds-select" style="width:auto;min-height:36px;padding:6px 34px 6px 12px;font-size:13px">' +
              r[3].map(function (o, i) { return '<option' + (i === 0 ? ' selected' : '') + '>' + o + '</option>'; }).join('') + '</select>'
            : '<span class="ds-row__meta">' + r[3] + '</span>') + '</div>';
      }).join('') + '</div></div>';
  }
  return settingsPage('Настройки', '',
    block('Качество видео', [
      ['Качество при просмотре', 'Подстраивается под скорость соединения', 'sel', ['Авто (до 4K)', 'Авто (до 1080p)', '1080p', '720p', '480p']],
      ['Качество по мобильной сети', 'Экономит трафик вне Wi-Fi', 'sel', ['720p HD', '480p', '360p', 'Как по Wi-Fi']],
      ['Максимум для скачивания', '', 'sel', ['1080p Full HD', '4K UHD', '720p HD', '480p']],
      ['Скачивать только по Wi-Fi', '', 'sw', 1]
    ]) +
    block('Воспроизведение', [
      ['Автовоспроизведение следующей серии', '', 'sw', 1],
      ['Автовоспроизведение трейлеров', 'При наведении на карточку', 'sw', 0],
      ['Пропускать заставки', '', 'sw', 1],
      ['Скорость по умолчанию', '', 'sel', ['Обычная', '1.25×', '1.5×', '0.75×']]
    ]) +
    block('Язык', [
      ['Язык интерфейса', '', 'sel', ['Русский', 'English', 'Deutsch']],
      ['Язык озвучки по умолчанию', '', 'sel', ['Русский', 'Оригинал', 'English']],
      ['Язык субтитров по умолчанию', '', 'sel', ['Русский', 'English', 'Выкл.']]
    ]) +
    block('Приватность и безопасность', [
      ['Двухфакторная аутентификация', 'Код из приложения при входе', 'sw', 0],
      ['Сохранять историю просмотра', '', 'sw', 1],
      ['Персональные рекомендации', 'На основе истории просмотра', 'sw', 1],
      ['Сменить пароль', '', 'txt', 'Изменён 2 месяца назад']
    ]),
    navFor('settings'));
};

/* 36 — Accessibility settings */
S.a11y = function () {
  return settingsPage('Субтитры и CC+', 'Главные настройки сервиса — на верхнем уровне, а не в глубине меню.',
    '<div class="ds-card" style="border-color:var(--ds-amber-edge);background:linear-gradient(160deg,rgba(95,227,208,.09),transparent 46%),var(--ds-panel)">' +
      '<div class="ds-between"><div class="ds-row-f ds-g3">' +
        '<span style="color:var(--ds-amber);display:flex">' + ic('cc', 26) + '</span>' +
        '<div><h3 class="ds-h1">Текущие настройки</h3>' +
        '<p class="ds-sm ds-mut" style="margin-top:3px">Русский CC+ · крупный · белый на чёрной плашке 62%</p></div></div>' +
        '<button class="ds-btn ds-btn--amber" data-go="cc-settings">Настроить внешний вид</button></div>' +
      '<div style="margin-top:20px;border-radius:var(--ds-r-md);overflow:hidden;position:relative;aspect-ratio:21/6;display:flex;align-items:flex-end;justify-content:center;padding-bottom:18px" class="ds-art" id="a11yPrev">' +
        '<div class="ds-cuetrack" style="position:relative;z-index:3">' +
        '<span class="ds-cuebox"><span class="ds-cue" style="font-size:19px"><span class="ds-cue__speaker">АННА:</span>Я скоро вернусь, обещаю.' +
        '<span class="ds-cue__sound">[дверь резко захлопывается]</span></span></span></div></div></div>' +

    '<div class="ds-card ds-card--flush" style="margin-top:16px">' +
      '<p class="ds-eyebrow" style="padding:16px 18px 10px">Поведение субтитров</p>' +
      '<div class="ds-rows">' +
        [['Всегда включать субтитры', 'При запуске любого фильма', 1],
         ['Предпочитать CC+, если доступны', 'Иначе включатся обычные CC', 1],
         ['Показывать имена говорящих', 'В CC+ всегда, в CC — если есть в файле', 1],
         ['Показывать описания звука', 'Только для CC+', 1],
         ['Автоматически включать AD', 'Тифлокомментарий, где доступен', 0],
         ['Подсказка о CC+ на карточках', 'Бейдж CC+ в каталоге', 1]].map(function (r) {
          return '<div class="ds-row" style="cursor:default">' +
            '<span class="ds-row__main"><span class="ds-row__title">' + r[0] + '</span>' +
            '<span class="ds-row__sub">' + r[1] + '</span></span>' +
            '<label class="ds-switch"><input type="checkbox"' + (r[2] ? ' checked' : '') + '><span class="ds-switch__track"></span><span class="ds-switch__thumb"></span></label></div>';
        }).join('') + '</div></div>' +

    '<div class="ds-card ds-card--flush" style="margin-top:16px">' +
      '<p class="ds-eyebrow" style="padding:16px 18px 10px">Интерфейс</p>' +
      '<div class="ds-rows">' +
        [['Повышенный контраст', 'Усиливает границы и текст', 0],
         ['Уменьшить анимацию', 'Отключает параллакс и переходы', 0],
         ['Крупный шрифт интерфейса', 'Увеличивает весь текст на 15%', 0],
         ['Всегда показывать фокус', 'Обводка при навигации с клавиатуры', 1],
         ['Визуальные уведомления вместо звуковых', '', 1]].map(function (r) {
          return '<div class="ds-row" style="cursor:default">' +
            '<span class="ds-row__main"><span class="ds-row__title">' + r[0] + '</span>' +
            (r[1] ? '<span class="ds-row__sub">' + r[1] + '</span>' : '') + '</span>' +
            '<label class="ds-switch"><input type="checkbox"' + (r[2] ? ' checked' : '') + '><span class="ds-switch__track"></span><span class="ds-switch__thumb"></span></label></div>';
        }).join('') + '</div></div>' +

    '<div class="ds-strip" style="margin-top:16px">' +
      '<span class="ds-strip__label">Что такое CC+</span>' +
      '<p class="ds-sm" style="margin:0">Расширенные субтитры показывают не только реплики, но и кто говорит, ' +
      'какая звучит музыка, какие важные звуки происходят вокруг. Каждый текст вычитывает редактор вручную — ' +
      'автоматических CC+ на DeafSuslik не бывает.</p></div>',
    navFor('a11y'));
};

/* 37 — Notifications */
S.notifications = function () {
  var N = [
    ['sparkle', 'Новый фильм в коллекции «Реальные события»', '«Свидетели» — документальная драма 2024 с CC+ на русском.', 'Сегодня, 14:20', 1, 'var(--ds-coll)'],
    ['checkc', 'Загрузка завершена', '«Год тишины» · 1080p · Русский CC+ · 2.8 GB. Доступен офлайн 30 дней.', 'Сегодня, 12:04', 1, 'var(--ds-ok)'],
    ['ticket', 'Поддержка ответила на обращение #DS-10482', 'Ошибка в субтитрах «Год тишины» на 01:22:18 исправлена.', 'Сегодня, 09:51', 1, 'var(--ds-amber)'],
    ['card', 'Подписка ВИП продлится 12 октября', '500 ₽ будут списаны с карты Mir •••• 4417.', 'Вчера, 18:00', 0, 'var(--ds-accent)'],
    ['film', 'Вышел новый фильм в вашей подборке', '«Двое на побережье» добавлен в подборку «Фильмы на вечер».', '12 сентября', 0, 'var(--ds-coll)'],
    ['alert', 'Срок загрузки истекает', '«Ночная смена» перестанет открываться через 3 дня.', '11 сентября', 0, 'var(--ds-warn)'],
    ['cc', 'Добавлены CC+ к фильму из избранного', '«Глубина» теперь с расширенными субтитрами на русском.', '10 сентября', 0, 'var(--ds-amber)']
  ];
  return settingsPage('Уведомления', '',
    '<div class="ds-between" style="margin-bottom:16px">' +
      '<div class="ds-wrap ds-g2">' + ['Все', 'Непрочитанные · 3', 'Фильмы', 'Загрузки', 'Оплата', 'Поддержка'].map(function (t, i) {
        return '<button class="ds-chip"' + (i === 0 ? ' aria-pressed="true"' : '') + '>' + t + '</button>'; }).join('') + '</div>' +
      '<button class="ds-btn ds-btn--sm ds-btn--ghost">Отметить всё прочитанным</button></div>' +
    '<div class="ds-card ds-card--flush">' + N.map(function (n) {
      return '<button class="ds-row" style="padding:16px 18px;align-items:flex-start' + (n[4] ? ';background:rgba(255,255,255,.03)' : '') + '">' +
        '<span class="ds-row__ico" style="color:' + n[5] + ';margin-top:2px">' + ic(n[0], 20) + '</span>' +
        '<span class="ds-row__main"><span class="ds-row__title" style="font-weight:' + (n[4] ? 600 : 500) + '">' + n[1] + '</span>' +
        '<span class="ds-row__sub" style="margin-top:3px;line-height:1.5">' + n[2] + '</span>' +
        '<span class="ds-cap ds-num" style="display:block;margin-top:6px">' + n[3] + '</span></span>' +
        (n[4] ? '<span style="width:8px;height:8px;border-radius:99px;background:var(--ds-accent);flex:none;margin-top:6px"></span>' : '') + '</button>';
    }).join('') + '</div>' +
    '<div class="ds-card ds-card--flush" style="margin-top:24px">' +
      '<p class="ds-eyebrow" style="padding:16px 18px 10px">Что присылать</p>' +
      '<div class="ds-rows">' +
        [['Новинки в моих коллекциях', 1], ['Новые фильмы с CC+', 1], ['Завершение загрузок', 1],
         ['Истечение срока загрузок', 1], ['Списания и продления подписки', 1],
         ['Ответы поддержки', 1], ['Рекомендации и подборки', 0], ['Email-рассылка', 0]].map(function (r) {
          return '<div class="ds-row" style="cursor:default"><span class="ds-row__main"><span class="ds-row__title">' + r[0] + '</span></span>' +
            '<label class="ds-switch"><input type="checkbox"' + (r[1] ? ' checked' : '') + '><span class="ds-switch__track"></span><span class="ds-switch__thumb"></span></label></div>';
        }).join('') + '</div></div>',
    navFor('notifications'));
};

/* 38 — Help centre */
S.help = function () {
  var TOPICS = [
    ['film', 'Видео', 'Запуск, качество, зависания'], ['cc', 'Субтитры и CC+', 'Языки, настройка, ошибки'],
    ['card', 'Оплата', 'Списания, чеки, отказы банка'], ['ticket', 'Подписка', 'Подключение, отмена, продление'],
    ['user', 'Аккаунт', 'Вход, пароль, устройства'], ['download', 'Загрузки', 'Скачивание, место, сроки'],
    ['wifioff', 'Офлайн', 'Просмотр без интернета'], ['settings', 'Технические проблемы', 'Ошибки и диагностика'],
    ['plus', 'Предложить фильм', 'Чего не хватает в каталоге']
  ];
  return settingsPage('Помощь', '',
    '<div class="ds-search" style="min-height:56px;margin-bottom:24px">' +
      '<span style="color:var(--ds-ink-3);display:flex">' + ic('search', 20) + '</span>' +
      '<input placeholder="Поиск по помощи — например «нет субтитров»"></div>' +
    '<div class="ds-grid ds-grid--3" style="gap:14px;">' +
      TOPICS.map(function (t, i) {
        return '<button class="ds-card" style="text-align:left;cursor:pointer' + (i === 1 ? ';border-color:var(--ds-amber-edge)' : '') + '">' +
          '<span style="color:' + (i === 1 ? 'var(--ds-amber)' : 'var(--ds-accent)') + ';display:flex">' + ic(t[0], 22) + '</span>' +
          '<div class="ds-h3" style="margin-top:12px">' + t[1] + '</div>' +
          '<p class="ds-cap" style="margin-top:4px">' + t[2] + '</p></button>';
      }).join('') + '</div>' +
    '<div class="ds-card" style="margin-top:24px">' +
      '<h3 class="ds-h1" style="margin-bottom:14px">Частые вопросы</h3>' +
      '<div class="ds-stack">' +
        [['Почему у фильма нет CC+?', 'CC+ пишет и вычитывает редактор вручную, поэтому они появляются не сразу. Сейчас CC+ есть у 340 из 1 204 фильмов. Если нужного фильма нет в списке — напишите нам, мы ставим такие запросы в приоритет.'],
         ['Субтитры отстают от речи — что делать?', 'Откройте в плеере «Проблема?» → «Проблема с субтитрами» → «Субтитры слишком поздно». Момент фильма и номер реплики приложатся сами, описывать ничего не нужно.'],
         ['Скачанный фильм не открывается', 'Проверьте срок: загрузки живут 30 дней. Если срок не истёк, а подписка активна — фильм перестаёт открываться при смене устройства. Скачайте заново.'],
         ['Можно ли смотреть на двух устройствах одновременно?', 'Да, до 5 одновременно на одном аккаунте. Прогресс синхронизируется, поэтому можно начать на компьютере и продолжить в телефоне с той же секунды.'],
         ['Как отменить подписку?', 'Профиль → Мои подписки → Управление → Отменить подписку. Доступ сохранится до конца оплаченного месяца.'],
         ['Что такое AD?', 'Тифлокомментарий — отдельная аудиодорожка с описанием происходящего для незрячих зрителей. Отмечается бейджем AD.']].map(function (q) {
          return '<details style="border-bottom:1px solid var(--ds-line);padding:14px 0">' +
            '<summary style="cursor:pointer;font-weight:600;list-style:none;display:flex;justify-content:space-between;gap:12px">' + q[0] +
            '<span style="color:var(--ds-ink-3);display:flex">' + ic('chevD', 17) + '</span></summary>' +
            '<p class="ds-sm" style="margin-top:10px">' + q[1] + '</p></details>';
        }).join('') + '</div></div>' +
    '<div class="ds-card" style="margin-top:16px;border-color:var(--ds-accent-edge);background:linear-gradient(140deg,rgba(255,194,75,.08),transparent 50%),var(--ds-panel)">' +
      '<div class="ds-between"><div><h3 class="ds-h2">Не нашли ответ?</h3>' +
        '<p class="ds-sm" style="margin-top:6px">Ответим в течение суток, срочные вопросы — за час.</p></div>' +
        '<button class="ds-btn ds-btn--primary" data-go="support" style="flex:none">Обратиться в поддержку</button></div></div>',
    navFor('help'));
};

/* 39 — Contact support */
S.support = function () {
  var CATS = ['Видео не работает', 'Видео тормозит', 'Нет нужного качества', 'Проблема с 4K',
    'Нет субтитров', 'Ошибка в субтитрах', 'Субтитры не синхронизированы', 'Ошибка CC+',
    'Проблема со звуком', 'Не скачивается фильм', 'Офлайн-фильм не открывается',
    'Проблема с подпиской', 'Платёж не прошёл', 'Подписка не активировалась', 'Отмена подписки',
    'Не могу войти', 'Аккаунт', 'Предложить фильм', 'Другое'];
  return settingsPage('Обратиться в поддержку', '',
    '<div class="ds-card" style="max-width:680px">' +
      '<div class="ds-stack ds-g4">' +
        '<div class="ds-field"><label class="ds-label" for="sc">Категория</label>' +
          '<select class="ds-select" id="sc">' + CATS.map(function (c, i) {
            return '<option' + (i === 5 ? ' selected' : '') + '>' + c + '</option>'; }).join('') + '</select></div>' +
        '<div class="ds-field"><label class="ds-label" for="st">Тема</label>' +
          '<input class="ds-input" id="st" value="Описание звука не соответствует сцене"></div>' +
        '<div class="ds-field"><label class="ds-label" for="sm">Фильм — если проблема с конкретным</label>' +
          '<div class="ds-search" style="min-height:50px"><span style="color:var(--ds-ink-3);display:flex">' + ic('search', 18) + '</span>' +
          '<input id="sm" value="Год тишины (2025)"></div></div>' +
        '<div class="ds-field"><label class="ds-label" for="sd">Описание</label>' +
          '<textarea class="ds-textarea" id="sd" style="min-height:130px">На 01:22:18 в CC+ написано «[дверь резко захлопывается]», но в сцене дверь закрывают очень тихо — это важно для смысла эпизода.</textarea>' +
          '<span class="ds-help">Чем конкретнее момент, тем быстрее исправим.</span></div>' +
        '<div class="ds-field"><label class="ds-label" for="se">Email для ответа</label>' +
          '<input class="ds-input" id="se" value="anna.k@example.ru"></div>' +
        '<div class="ds-field"><span class="ds-label">Вложения — необязательно</span>' +
          '<div style="border:1px dashed var(--ds-line-strong);border-radius:var(--ds-r-md);padding:22px;text-align:center">' +
            '<span style="color:var(--ds-ink-3);display:flex;justify-content:center">' + ic('paperclip', 22) + '</span>' +
            '<p class="ds-sm" style="margin-top:8px">Перетащите скриншот или <span style="color:var(--ds-accent)">выберите файл</span></p>' +
            '<p class="ds-cap" style="margin-top:4px">PNG, JPG, до 10 МБ · до 5 файлов</p></div>' +
          '<div class="ds-row-f ds-g2" style="margin-top:10px">' +
            '<span class="ds-badge ds-badge--lg">' + ic('paperclip', 10, 2.4) + ' screenshot-01-22-18.png · 840 KB ' + ic('x', 10, 2.4) + '</span></div></div>' +
        '<div class="ds-card" style="padding:16px;background:var(--ds-void)">' +
          '<div class="ds-between" style="margin-bottom:12px"><p class="ds-eyebrow">Технические данные</p>' +
            '<label class="ds-switch"><input type="checkbox" checked><span class="ds-switch__track"></span><span class="ds-switch__thumb"></span></label></div>' +
          '<div style="gap:8px" class="ds-grid ds-grid--2">' +
            [['Фильм', 'Год тишины'], ['ID', 'DS-M-04187'], ['Момент', '01:22:18'], ['Качество', '1080p'],
             ['Субтитры', 'Русский CC+'], ['Реплика', '#418'], ['Платформа', 'Web · Chrome 141'], ['Версия', '4.8.2']].map(function (r) {
              return '<div class="ds-between"><span class="ds-cap">' + r[0] + '</span>' +
                '<span class="ds-num" style="font-size:11.5px;color:var(--ds-ink-2)">' + r[1] + '</span></div>';
            }).join('') + '</div>' +
          '<p class="ds-cap" style="margin-top:12px">Отправляем только эти поля. Пароли и данные карты не передаются.</p></div>' +
        '<div class="ds-row-f ds-g3"><button class="ds-btn ds-btn--primary" data-go="tickets">Отправить обращение</button>' +
        '<button class="ds-btn ds-btn--ghost" data-go="help">Отмена</button></div></div></div>',
    navFor('help'));
};

/* 40 — My tickets */
S.tickets = function () {
  var T = [
    ['#DS-10482', 'Описание звука не соответствует сцене', 'Ошибка CC+', 'Год тишины', 'work', 'В работе', 'Сегодня, 14:42'],
    ['#DS-10455', 'Не скачивается в 4K', 'Загрузки', 'Пепел и снег', 'wait', 'Ожидает вашего ответа', 'Вчера, 11:08'],
    ['#DS-10390', 'Платёж не прошёл', 'Оплата', '—', 'done', 'Решено', '8 сентября'],
    ['#DS-10318', 'Субтитры отстают на 2 секунды', 'Субтитры', 'Глубина', 'done', 'Решено', '2 сентября'],
    ['#DS-10240', 'Предложить фильм', 'Каталог', '—', 'closed', 'Закрыто', '24 августа']
  ];
  var ST = { new: ['ds-badge--info', ''], work: ['ds-badge--info', ''], wait: ['ds-badge--warn', ''], done: ['ds-badge--ok', ''], closed: ['', ''] };
  return settingsPage('Мои обращения', '',
    '<div class="ds-between" style="margin-bottom:16px">' +
      '<div class="ds-wrap ds-g2">' + ['Все · 5', 'Открытые · 2', 'Решённые · 2', 'Закрытые · 1'].map(function (t, i) {
        return '<button class="ds-chip"' + (i === 0 ? ' aria-pressed="true"' : '') + '>' + t + '</button>'; }).join('') + '</div>' +
      '<button class="ds-btn ds-btn--sm ds-btn--primary" data-go="support">' + ic('plus', 14) + ' Новое обращение</button></div>' +
    '<div class="ds-card ds-card--flush"><div class="ds-tablewrap"><table class="ds-table">' +
      '<thead><tr><th>Номер</th><th>Тема</th><th>Категория</th><th>Фильм</th><th>Статус</th><th>Обновлено</th><th></th></tr></thead><tbody>' +
      T.map(function (t) {
        return '<tr style="cursor:pointer" data-go="ticket"><td class="ds-num" style="color:var(--ds-accent)">' + t[0] + '</td>' +
          '<td style="font-weight:600">' + t[1] + '</td><td class="ds-mut2">' + t[2] + '</td><td class="ds-mut2">' + t[3] + '</td>' +
          '<td><span class="ds-badge ' + ST[t[4]][0] + '">' + t[5] + '</span></td>' +
          '<td class="ds-num ds-mut2">' + t[6] + '</td>' +
          '<td><span style="color:var(--ds-ink-4);display:flex">' + ic('chevR', 15) + '</span></td></tr>';
      }).join('') + '</tbody></table></div></div>',
    navFor('tickets'));
};

/* Support conversation */
S.ticket = function () {
  function msg(who, name, time, body, extra) {
    var mine = who === 'me';
    return '<div style="display:flex;gap:12px;flex-direction:' + (mine ? 'row-reverse' : 'row') + ';margin-bottom:18px">' +
      '<div style="width:34px;height:34px;border-radius:99px;flex:none;position:relative;overflow:hidden;' +
        (mine ? '' : 'background:var(--ds-amber-dim);border:1px solid var(--ds-amber-edge);display:grid;place-items:center;color:var(--ds-amber)') + '">' +
        (mine ? art(name, '', 'position:absolute;inset:0') : ic('shield', 17)) + '</div>' +
      '<div style="max-width:76%">' +
        '<div class="ds-row-f ds-g2" style="margin-bottom:5px;' + (mine ? 'justify-content:flex-end' : '') + '">' +
          '<span class="ds-sm" style="font-weight:600">' + name + '</span>' +
          '<span class="ds-cap ds-num">' + time + '</span></div>' +
        '<div style="padding:13px 16px;border-radius:var(--ds-r-md);background:' + (mine ? 'var(--ds-raised-2)' : 'var(--ds-amber-dim)') +
          ';border:1px solid ' + (mine ? 'var(--ds-line)' : 'var(--ds-amber-edge)') + '">' +
          '<p class="ds-sm" style="color:var(--ds-ink)">' + body + '</p>' + (extra || '') + '</div></div></div>';
  }
  return settingsPage('#DS-10482 · Описание звука не соответствует сцене', '',
    '<div class="ds-split ds-split--right" style="gap:24px">' +
      '<div class="ds-card">' +
        '<div class="ds-between" style="padding-bottom:16px;border-bottom:1px solid var(--ds-line);margin-bottom:20px">' +
          '<div class="ds-row-f ds-g2"><span class="ds-badge ds-badge--info ds-badge--lg">В работе</span>' +
            '<span class="ds-badge ds-badge--lg">Ошибка CC+</span></div>' +
          '<span class="ds-cap ds-num">Создано 14 сентября, 09:12</span></div>' +

        msg('me', 'Анна Ковалёва', '14 сент, 09:12',
          'На 01:22:18 в CC+ написано «[дверь резко захлопывается]», но в сцене дверь закрывают очень тихо — это меняет смысл эпизода.',
          '<div class="ds-row-f ds-g2" style="margin-top:10px"><span class="ds-badge">' + ic('paperclip', 10, 2.4) + ' screenshot-01-22-18.png</span></div>') +

        msg('agent', 'Поддержка DeafSuslik', '14 сент, 10:40',
          'Спасибо, вижу проблему. Передала редактору субтитров — он откроет момент прямо в редакторе и сверится с оригинальной дорожкой. Ответим сегодня.') +

        msg('agent', 'Мария · редактор субтитров', '14 сент, 14:42',
          'Вы правы. Пересмотрела сцену: дверь закрывается медленно. Исправила на «[дверь тихо закрывается]». Новая версия субтитров опубликована, обновите страницу плеера.',
          '<div style="margin-top:12px;padding:12px 14px;border-radius:var(--ds-r-sm);background:var(--ds-void);border:1px solid var(--ds-line)">' +
            '<div class="ds-cap" style="margin-bottom:6px">Было · реплика #418</div>' +
            '<span class="ds-cue__sound" style="font-size:13px;text-decoration:line-through;opacity:.6">[дверь резко захлопывается]</span>' +
            '<div class="ds-cap" style="margin:10px 0 6px">Стало</div>' +
            '<span class="ds-cue__sound" style="font-size:13px">[дверь тихо закрывается]</span></div>') +

        '<div class="ds-card" style="background:var(--ds-void);margin-top:6px;text-align:center;padding:22px">' +
          '<p class="ds-h3">Удалось решить проблему?</p>' +
          '<div class="ds-row-f ds-g2" style="justify-content:center;margin-top:14px">' +
            '<button class="ds-btn ds-btn--secondary">Да</button><button class="ds-btn ds-btn--ghost">Нет</button></div>' +
          '<div class="ds-row-f ds-g1" style="justify-content:center;margin-top:16px;color:var(--ds-ink-4)">' +
            [1, 2, 3, 4, 5].map(function () { return ic('star', 22); }).join('') + '</div>' +
          '<p class="ds-cap" style="margin-top:6px">Оцените работу поддержки</p></div>' +

        '<div class="ds-field" style="margin-top:20px"><label class="ds-label" for="tr">Ответить</label>' +
          '<textarea class="ds-textarea" id="tr" placeholder="Напишите сообщение"></textarea>' +
          '<div class="ds-between" style="margin-top:10px">' +
            '<button class="ds-btn ds-btn--sm ds-btn--ghost">' + ic('paperclip', 14) + ' Прикрепить</button>' +
            '<div class="ds-row-f ds-g2"><button class="ds-btn ds-btn--sm ds-btn--ghost">Закрыть обращение</button>' +
            '<button class="ds-btn ds-btn--sm ds-btn--primary">' + ic('send', 14) + ' Отправить</button></div></div></div>' +
      '</div>' +

      '<aside class="ds-card" style="position:sticky;top:92px">' +
        '<p class="ds-eyebrow" style="margin-bottom:14px">Данные обращения</p>' +
        '<div class="ds-stack ds-g3">' +
          [['Номер', '#DS-10482'], ['Категория', 'Ошибка CC+'], ['Приоритет', 'Обычный'],
           ['Фильм', 'Год тишины'], ['ID фильма', 'DS-M-04187'], ['Момент', '01:22:18'],
           ['Реплика', '#418'], ['Язык', 'Русский CC+'], ['Платформа', 'Web · Chrome 141'],
           ['Устройство', 'macOS 15.2'], ['Версия', '4.8.2']].map(function (r) {
            return '<div class="ds-between" style="align-items:flex-start"><span class="ds-cap" style="flex:none">' + r[0] + '</span>' +
              '<span class="ds-num" style="font-size:11.5px;color:var(--ds-ink-2);text-align:right">' + r[1] + '</span></div>';
          }).join('') + '</div>' +
        '<div class="ds-divider" style="margin:18px 0"></div>' +
        '<p class="ds-eyebrow" style="margin-bottom:10px">История статусов</p>' +
        '<div class="ds-stack ds-g3">' +
          [['Новое', '14 сент, 09:12', 'ok'], ['Принято', '14 сент, 09:40', 'ok'],
           ['В работе · Редактор субтитров', '14 сент, 10:40', 'ok'], ['Ожидает подтверждения', '14 сент, 14:42', 'now']].map(function (r) {
            return '<div class="ds-row-f ds-g3"><span style="width:8px;height:8px;border-radius:99px;flex:none;background:' +
              (r[2] === 'now' ? 'var(--ds-accent)' : 'var(--ds-ok)') + '"></span>' +
              '<div class="ds-grow"><div class="ds-sm">' + r[0] + '</div>' +
              '<div class="ds-cap ds-num">' + r[1] + '</div></div></div>';
          }).join('') + '</div></aside></div>',
    navFor('tickets'));
};
