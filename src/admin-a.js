/* ============================================================
   DeafSuslik Admin — shell, login, dashboard, content
   ============================================================ */
var A = {};

var ANAV = [
  ['', 'Dashboard', [['dash', 'Дашборд', 'chart']]],
  ['Контент', [], [['movies', 'Фильмы', 'film'], ['series', 'Сериалы', 'layers'],
    ['collections', 'Коллекции', 'folder'], ['homepage', 'Главная страница', 'home'],
    ['rights', 'Права и лицензии', 'shield']]],
  ['Медиа', [], [['processing', 'Обработка видео', 'refresh'], ['subs-list', 'Субтитры и CC+', 'cc'],
    ['editor', 'Редактор субтитров', 'waveform'], ['storage', 'Хранилище', 'storage']]],
  ['Люди и деньги', [], [['users', 'Пользователи', 'users'], ['subs-admin', 'Подписки', 'card'],
    ['payments', 'Платежи', 'db']]],
  ['Поддержка', [], [['tickets', 'Обращения', 'ticket']]],
  ['Аналитика', [], [['analytics', 'Просмотры', 'chart'], ['revenue', 'Выручка', 'bolt'],
    ['searchan', 'Поиск', 'search']]],
  ['Система', [], [['api', 'API и интеграции', 'key'], ['roles', 'Роли и доступы', 'shield'],
    ['audit', 'Журнал действий', 'list'], ['trash', 'Корзина', 'trash'],
    ['asettings', 'Настройки', 'settings']]]
];

/* Admin chrome: fixed sidebar + top bar + content region */
function adminShell(active, title, sub, actions, body) {
  return '<div style="display:grid;grid-template-columns:240px minmax(0,1fr);min-height:900px;background:var(--ds-void)">' +
    '<aside style="border-right:1px solid var(--ds-line);background:var(--ds-sunken);display:flex;flex-direction:column">' +
      '<div style="padding:18px 18px 16px;border-bottom:1px solid var(--ds-line)">' +
        dsLogo(26, 16) +
        '<div class="ds-badge ds-badge--err" style="margin-top:9px">Админ-панель</div></div>' +
      '<div class="ds-scroll" style="flex:1;overflow-y:auto;padding:8px 10px 24px">' +
        ANAV.map(function (g) {
          return (g[0] ? '<p class="ds-eyebrow" style="padding:14px 10px 6px;font-size:9.5px">' + g[0] + '</p>' : '') +
            g[2].map(function (n) {
              var on = n[0] === active;
              return '<button data-ago="' + n[0] + '" style="display:flex;align-items:center;gap:10px;width:100%;padding:8px 10px;border:0;border-radius:var(--ds-r-sm);cursor:pointer;text-align:left;font-size:13px;font-weight:' + (on ? 600 : 500) + ';' +
                'background:' + (on ? 'var(--ds-accent-dim)' : 'none') + ';color:' + (on ? 'var(--ds-accent)' : 'var(--ds-ink-3)') + '">' +
                '<span style="display:flex;flex:none">' + ic(n[2], 17) + '</span>' + n[1] + '</button>';
            }).join('');
        }).join('') + '</div>' +
      '<div style="padding:14px;border-top:1px solid var(--ds-line);display:flex;align-items:center;gap:10px">' +
        '<div style="width:32px;height:32px;border-radius:99px;position:relative;overflow:hidden;flex:none">' + art('Мария Р', '', 'position:absolute;inset:0') + '</div>' +
        '<div style="min-width:0;flex:1"><div style="font-size:12.5px;font-weight:600">Мария Р.</div>' +
        '<div class="ds-cap">Редактор субтитров</div></div>' +
        '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" aria-label="Выйти">' + ic('logout', 16) + '</button></div>' +
    '</aside>' +
    '<div style="min-width:0;display:flex;flex-direction:column">' +
      '<header style="display:flex;align-items:center;gap:16px;padding:16px 26px;border-bottom:1px solid var(--ds-line);background:var(--ds-void);position:sticky;top:0;z-index:20">' +
        '<div style="min-width:0"><h1 class="ds-h1">' + title + '</h1>' +
        (sub ? '<p class="ds-cap" style="margin-top:2px">' + sub + '</p>' : '') + '</div>' +
        '<div class="ds-grow"></div>' +
        '<div class="ds-search" style="width:260px;min-height:38px;padding:0 14px">' +
          '<span style="color:var(--ds-ink-3);display:flex">' + ic('search', 16) + '</span>' +
          '<input placeholder="Поиск" style="font-size:13px"></div>' +
        (actions || '') +
        '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" aria-label="Уведомления" style="position:relative">' + ic('bell', 18) +
          '<span style="position:absolute;top:4px;right:5px;width:6px;height:6px;border-radius:99px;background:var(--ds-err)"></span></button>' +
      '</header>' +
      '<div style="flex:1;padding:24px 26px 40px">' + body + '</div>' +
    '</div></div>';
}

function stat(k, v, d, tone) {
  return '<div class="ds-stat"><div class="ds-stat__k">' + k + '</div>' +
    '<div class="ds-stat__v">' + v + '</div>' +
    (d ? '<div class="ds-stat__d" style="color:var(--ds-' + (tone || 'ok') + ')">' +
      ic(tone === 'err' ? 'chevD' : 'chevU', 12, 2.6) + d + '</div>' : '') + '</div>';
}

/* Compact bar chart — no library, encodes one series honestly */
function bars(data, h, color) {
  var max = Math.max.apply(null, data.map(function (d) { return d[1]; }));
  return '<div style="display:flex;align-items:flex-end;gap:5px;height:' + (h || 92) + 'px">' +
    data.map(function (d, i) {
      var last = i === data.length - 1;
      return '<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;height:100%;justify-content:flex-end">' +
        '<div title="' + d[0] + ': ' + d[1] + '" style="width:100%;border-radius:4px 4px 2px 2px;height:' + Math.max(3, (d[1] / max) * 100) + '%;' +
        'background:' + (last ? (color || 'var(--ds-accent)') : 'rgba(255,194,75,.30)') + '"></div>' +
        '<span class="ds-cap" style="font-size:9px">' + d[0] + '</span></div>';
    }).join('') + '</div>';
}

/* ---------- Admin login ---------- */
A.login = function () {
  return '<div style="min-height:900px;display:grid;place-items:center;background:var(--ds-sunken);position:relative;overflow:hidden">' +
    '<div class="ds-art" style="position:absolute;inset:0;opacity:.32">' + dsArt('admin-login') + '</div>' +
    '<div style="position:relative;width:min(400px,90%)">' +
      '<div class="ds-center" style="margin-bottom:26px">' + dsLogo(44, 27) +
        '<div class="ds-badge ds-badge--err ds-badge--lg" style="margin-top:12px">Админ-панель</div></div>' +
      '<div class="ds-card" style="padding:26px">' +
        '<h2 class="ds-h1">Вход для сотрудников</h2>' +
        '<p class="ds-sm" style="margin-top:6px">Доступ только для аккаунтов с ролью в системе.</p>' +
        '<div class="ds-stack ds-g3" style="margin-top:20px">' +
          '<div class="ds-field"><label class="ds-label">Рабочий email</label><input class="ds-input" value="maria.r@deafsuslik.ru"></div>' +
          '<div class="ds-field"><label class="ds-label">Пароль</label><input class="ds-input" type="password" value="adminpass"></div>' +
          '<div class="ds-field"><label class="ds-label">Код из приложения</label>' +
            '<div class="ds-row-f ds-g2">' + [1, 2, 3, 4, 5, 6].map(function (i) {
              return '<input class="ds-input ds-num" maxlength="1" value="' + (i <= 3 ? [4, 8, 1][i - 1] : '') + '" style="text-align:center;padding:12px 0;font-size:1.15rem;font-weight:700">';
            }).join('') + '</div>' +
            '<span class="ds-help">Двухфакторная аутентификация обязательна для всех ролей.</span></div>' +
          '<button class="ds-btn ds-btn--lg ds-btn--primary ds-btn--block" data-ago="dash">Войти в админ-панель</button></div>' +
        '<div class="ds-stack ds-g2" style="margin-top:18px;padding-top:16px;border-top:1px solid var(--ds-line)">' +
          '<p class="ds-eyebrow">Состояния</p>' +
          '<div class="ds-toast" style="max-width:none"><span class="ds-toast__ico" style="color:var(--ds-err)">' + ic('alert', 17) + '</span>' +
            '<div><strong style="font-size:13px">Неверный код</strong><div class="ds-cap">Осталось 2 попытки, затем блокировка на 15 минут</div></div></div>' +
          '<div class="ds-toast" style="max-width:none"><span class="ds-toast__ico" style="color:var(--ds-warn)">' + ic('clock', 17) + '</span>' +
            '<div><strong style="font-size:13px">Сессия истекла</strong><div class="ds-cap">Админ-сессия живёт 8 часов</div></div></div>' +
          '<div class="ds-toast" style="max-width:none"><span class="ds-toast__ico" style="color:var(--ds-err)">' + ic('lock', 17) + '</span>' +
            '<div><strong style="font-size:13px">Аккаунт заблокирован</strong><div class="ds-cap">Обратитесь к владельцу проекта</div></div></div>' +
        '</div></div>' +
      '<p class="ds-cap ds-center" style="margin-top:16px">Все действия в панели записываются в журнал</p></div></div>';
};

/* ---------- Dashboard ---------- */
A.dash = function () {
  return adminShell('dash', 'Дашборд', 'Сегодня, 2 сентября 2026',
    '<button class="ds-btn ds-btn--sm ds-btn--secondary">' + ic('calendar', 14) + ' 30 дней</button>',
    '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px">' +
      stat('Пользователи', '48 214', '+3.2% за месяц') +
      stat('Активные за 30 дней', '31 907', '+5.8%') +
      stat('Активные подписки', '27 480', '+2.1%') +
      stat('MRR', '13 740 000 ₽', '+4.4%') +
    '</div>' +
    '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:14px">' +
      stat('Новые подписки', '1 284', '+11%') +
      stat('Отмены', '396', '−0.4 п.п. churn') +
      stat('Фильмов опубликовано', '1 204', '+18 за месяц') +
      stat('Фильмов с CC+', '340', '+22 за месяц') +
    '</div>' +

    '<div style="display:grid;grid-template-columns:minmax(0,1.6fr) minmax(0,1fr);gap:16px;margin-top:20px;align-items:start">' +
      '<div class="ds-card">' +
        '<div class="ds-between" style="margin-bottom:16px"><h3 class="ds-h2">Выручка по месяцам</h3>' +
          '<div class="ds-seg"><button aria-selected="true">MRR</button><button aria-selected="false">Подписки</button></div></div>' +
        bars([['мар', 11.1], ['апр', 11.6], ['май', 11.9], ['июн', 12.3], ['июл', 12.6], ['авг', 13.2], ['сен', 13.7]], 140) +
        '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:18px;padding-top:16px;border-top:1px solid var(--ds-line)">' +
          [['Подписка ВИП', '13 740 000 ₽', 'var(--ds-vip)', '27 480 подписок'],
           ['Средний чек', '500 ₽', 'var(--ds-vip)', 'один тариф для всех'],
           ['Отток за месяц', '1.4%', 'var(--ds-warn)', '396 отмен']].map(function (p) {
            return '<div><div class="ds-row-f ds-g2"><span style="width:20px;height:3px;border-radius:2px;background:' + p[2] + '"></span>' +
              '<span class="ds-cap">' + p[0] + '</span></div>' +
              '<div class="ds-num" style="font-size:1.05rem;font-weight:700;margin-top:5px">' + p[1] + '</div>' +
              '<div class="ds-cap">' + p[3] + '</div></div>';
          }).join('') + '</div></div>' +

      '<div class="ds-card">' +
        '<h3 class="ds-h2" style="margin-bottom:14px">Требует внимания</h3>' +
        '<div class="ds-stack ds-g2">' +
          [['err', 'alert', '3 видео не обработались', 'Ошибка кодирования 4K', 'processing'],
           ['warn', 'clock', '5 лицензий истекают', 'В ближайшие 14 дней', 'rights'],
           ['warn', 'ticket', '2 обращения просрочены', 'Срочные, старше 1 часа', 'tickets'],
           ['info', 'cc', '12 CC+ ждут вычитки', 'Черновики автогенерации', 'subs-list'],
           ['warn', 'storage', 'Хранилище 78%', '3.9 TB из 5 TB', 'storage']].map(function (r) {
            return '<button class="ds-row" data-ago="' + r[4] + '" style="border-radius:var(--ds-r-sm);border-bottom:0;padding:11px 12px">' +
              '<span class="ds-row__ico" style="color:var(--ds-' + r[0] + ')">' + ic(r[1], 18) + '</span>' +
              '<span class="ds-row__main"><span class="ds-row__title" style="font-size:13.5px">' + r[2] + '</span>' +
              '<span class="ds-row__sub">' + r[3] + '</span></span>' +
              '<span class="ds-row__chev">' + ic('chevR', 15) + '</span></button>';
          }).join('') + '</div></div></div>' +

    '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:16px;align-items:start">' +
      '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:14px">Самое смотримое</h3>' +
        '<div class="ds-stack ds-g2">' + [9, 6, 0, 10, 14].map(function (i, k) {
          var m = M(i);
          return '<div class="ds-row-f ds-g3"><span class="ds-num ds-mut2" style="width:14px;font-size:12px">' + (k + 1) + '</span>' +
            '<div style="width:34px;aspect-ratio:2/3;border-radius:5px;overflow:hidden;position:relative;flex:none">' + art(m.t, '', 'position:absolute;inset:0') + '</div>' +
            '<div class="ds-grow" style="min-width:0"><div style="font-size:12.5px;font-weight:600">' + m.t + '</div>' +
            '<div class="ds-cap ds-num">' + (48 - k * 6) + ' 200 просмотров</div></div></div>';
        }).join('') + '</div></div>' +

      '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:14px">Использование субтитров</h3>' +
        '<div class="ds-stack ds-g4">' +
          [['CC+ включены', 62, 'var(--ds-amber)'], ['CC включены', 24, 'var(--ds-amber-lo)'],
           ['Обычные субтитры', 9, 'var(--ds-raised-3)'], ['Без субтитров', 5, 'var(--ds-raised-3)']].map(function (r) {
            return '<div><div class="ds-between" style="margin-bottom:5px"><span class="ds-sm">' + r[0] + '</span>' +
              '<span class="ds-num ds-sm" style="font-weight:700">' + r[1] + '%</span></div>' +
              '<div style="height:6px;border-radius:99px;background:var(--ds-raised);overflow:hidden">' +
              '<div style="height:100%;width:' + r[1] + '%;background:' + r[2] + ';border-radius:99px"></div></div></div>';
          }).join('') + '</div>' +
        '<p class="ds-cap" style="margin-top:14px">86% просмотров идут с субтитрами. Это не дополнительная функция — это основной сценарий.</p></div>' +

      '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:14px">Последние действия</h3>' +
        '<div class="ds-stack ds-g3">' +
          [['Мария Р.', 'исправила Русский CC+', 'Год тишины · 01:22:18', '14:42'],
           ['Игорь С.', 'опубликовал фильм', 'Свидетели', '13:10'],
           ['Система', 'завершила обработку', 'Пепел и снег · 4K', '12:04'],
           ['Ольга К.', 'продлила лицензию', 'Территория льда', '11:20'],
           ['Мария Р.', 'загрузила CC+', 'Глубина · Русский', '10:05']].map(function (r) {
            return '<div><div class="ds-sm"><strong>' + r[0] + '</strong> ' + r[1] + '</div>' +
              '<div class="ds-cap ds-num" style="margin-top:1px">' + r[2] + ' · ' + r[3] + '</div></div>';
          }).join('') + '</div>' +
        '<button class="ds-btn ds-btn--sm ds-btn--ghost ds-btn--block" data-ago="audit" style="margin-top:12px">Весь журнал</button></div>' +
    '</div>');
};

/* ---------- Movies list ---------- */
A.movies = function () {
  var ST = { pub: ['ds-badge--ok', 'Опубликован'], draft: ['', 'Черновик'], proc: ['ds-badge--info', 'Обработка'],
    sched: ['ds-badge--warn', 'Запланирован'], fail: ['ds-badge--err', 'Ошибка'], hid: ['', 'Скрыт'] };
  var ROWS = [
    [9,  'pub',   '4K', 'RU CC+ · EN CC', 'Реальные события', '48 200', '2 сен'],
    [6,  'pub',   '4K', 'RU CC+',         'Реальные события', '42 100', '28 авг'],
    [0,  'pub',   '4K', 'RU CC+ · EN CC', '—',                '36 400', '24 авг'],
    [10, 'proc',  '—',  'RU CC+',         'Реальные события', '—',      '—'],
    [3,  'draft', '1080p', 'нет',         '—',                '—',      '—'],
    [14, 'sched', '4K', 'RU CC+',         'Реальные события', '—',      '5 сен'],
    [17, 'fail',  '—',  'RU CC',          '—',                '—',      '—'],
    [12, 'pub',   '4K', 'RU CC+ · EN CC', 'Фильмы на вечер',  '18 900', '18 авг'],
    [5,  'hid',   '1080p', 'RU CC',       '—',                '9 400',  '—']
  ];
  return adminShell('movies', 'Фильмы', '1 204 всего · 18 добавлено за месяц',
    '<button class="ds-btn ds-btn--sm ds-btn--primary" data-ago="add-movie">' + ic('plus', 14) + ' Добавить фильм</button>',
    '<div class="ds-between" style="margin-bottom:16px;flex-wrap:wrap;gap:10px">' +
      '<div class="ds-wrap ds-g2">' + ['Все · 1204', 'Опубликованы · 1180', 'Черновики · 12', 'Обработка · 4', 'Ошибки · 3', 'Запланированы · 5'].map(function (t, i) {
        return '<button class="ds-chip"' + (i === 0 ? ' aria-pressed="true"' : '') + '>' + t + '</button>'; }).join('') + '</div>' +
      '<div class="ds-row-f ds-g2">' +
        '<select class="ds-select" style="width:auto;min-height:34px;padding:5px 32px 5px 12px;font-size:12.5px"><option>Все коллекции</option><option>Реальные события</option><option>Фильмы на вечер</option><option>Лучшее с CC+</option></select>' +
        '<select class="ds-select" style="width:auto;min-height:34px;padding:5px 32px 5px 12px;font-size:12.5px"><option>Все субтитры</option><option>С CC+</option><option>Только CC</option><option>Без субтитров</option></select>' +
        '<button class="ds-btn ds-btn--sm ds-btn--secondary">' + ic('filter', 13) + ' Ещё фильтры</button></div></div>' +

    '<div class="ds-card ds-card--flush"><div class="ds-tablewrap"><table class="ds-table">' +
      '<thead><tr><th style="width:34px"><span class="ds-opt__box ds-opt__box--check" style="width:16px;height:16px"></span></th>' +
      '<th>Фильм</th><th>Год</th><th>Статус</th><th>Качество</th><th>Субтитры</th><th>Коллекция</th><th>Просмотры</th><th>Публикация</th><th></th></tr></thead><tbody>' +
      ROWS.map(function (r) {
        var m = M(r[0]), s = ST[r[1]];
        return '<tr>' +
          '<td><span class="ds-opt__box ds-opt__box--check" style="width:16px;height:16px"></span></td>' +
          '<td><div class="ds-row-f ds-g3">' +
            '<div style="width:32px;aspect-ratio:2/3;border-radius:5px;overflow:hidden;position:relative;flex:none">' + art(m.t, '', 'position:absolute;inset:0') + '</div>' +
            '<div><div style="font-weight:600">' + m.t + '</div>' +
            '<div class="ds-cap">' + m.o + '</div></div></div></td>' +
          '<td class="ds-num">' + m.y + '</td>' +
          '<td><span class="ds-badge ' + s[0] + '">' + s[1] + '</span></td>' +
          '<td>' + (r[2] === '4K' ? '<span class="ds-badge ds-badge--4k">4K</span>' : '<span class="ds-mut2 ds-num">' + r[2] + '</span>') + '</td>' +
          '<td>' + (r[3] === 'нет' ? '<span class="ds-badge ds-badge--warn">Нет</span>'
            : '<span class="ds-num" style="font-size:11.5px;color:var(--ds-amber)">' + r[3] + '</span>') + '</td>' +
          '<td>' + (r[4] === '—' ? '<span class="ds-mut2">—</span>'
            : '<span class="ds-badge" style="border-color:#C89BFF44;color:#C89BFF">' + r[4] + '</span>') + '</td>' +
          '<td class="ds-num">' + r[5] + '</td>' +
          '<td class="ds-num ds-mut2">' + r[6] + '</td>' +
          '<td><button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" aria-label="Действия">' + ic('moreH', 15) + '</button></td></tr>';
      }).join('') + '</tbody></table></div>' +
      '<div class="ds-between" style="padding:14px 18px;border-top:1px solid var(--ds-line)">' +
        '<span class="ds-cap">Показано 9 из 1 204</span>' +
        '<div class="ds-row-f ds-g2"><button class="ds-btn ds-btn--sm ds-btn--ghost">Назад</button>' +
        '<button class="ds-btn ds-btn--sm ds-btn--secondary">Вперёд</button></div></div></div>' +

    '<div class="ds-card" style="margin-top:16px;border-color:var(--ds-line-mid)">' +
      '<div class="ds-between"><div class="ds-row-f ds-g3">' +
        '<span class="ds-badge ds-badge--accent ds-badge--lg">Выбрано 3</span>' +
        '<span class="ds-sm ds-mut">Массовые действия</span></div>' +
        '<div class="ds-row-f ds-g2">' +
          '<button class="ds-btn ds-btn--sm ds-btn--secondary">Опубликовать</button>' +
          '<button class="ds-btn ds-btn--sm ds-btn--secondary">В коллекцию</button>' +
          '<button class="ds-btn ds-btn--sm ds-btn--secondary">В архив</button>' +
          '<button class="ds-btn ds-btn--sm ds-btn--danger">В корзину</button></div></div></div>');
};

/* ---------- Add movie: choose path ---------- */
A.addMovie = function () {
  return adminShell('movies', 'Добавить фильм', 'Выберите способ', '',
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;max-width:820px">' +
      [['upload', 'Ручная загрузка', 'Загрузите один мастер-файл — система сама подготовит все качества от 360p до 4K. Метаданные, обложки и субтитры заполняются вручную.', 'manual-upload', 1],
       ['cloud', 'Импорт через API', 'Подтянуть метаданные из авторизованной интеграции. Импорт всегда создаёт черновик — публикация только после проверки.', 'api-import', 0]].map(function (c) {
        return '<button class="ds-card" data-ago="' + c[3] + '" style="text-align:left;cursor:pointer;padding:26px' + (c[4] ? ';border-color:var(--ds-accent-edge)' : '') + '">' +
          '<span style="color:' + (c[4] ? 'var(--ds-accent)' : 'var(--ds-ink-2)') + ';display:flex">' + ic(c[0], 28) + '</span>' +
          '<h3 class="ds-h1" style="margin-top:16px">' + c[1] + '</h3>' +
          '<p class="ds-sm" style="margin-top:8px">' + c[2] + '</p>' +
          '<span class="ds-btn ds-btn--sm ds-btn--secondary" style="margin-top:18px">Начать ' + ic('chevR', 13) + '</span></button>';
      }).join('') + '</div>' +
    '<div class="ds-strip" style="margin-top:22px;max-width:820px;border-left-color:var(--ds-warn);background:var(--ds-warn-dim)">' +
      '<span class="ds-strip__label" style="color:var(--ds-warn)">Права</span>' +
      '<p class="ds-sm" style="margin:0">Импорт через API даёт метаданные, а не права на показ. Публикация без заполненной лицензии ' +
      '(правообладатель, срок, территория) блокируется системой.</p></div>');
};

/* ---------- Manual upload wizard ---------- */
A.manualUpload = function () {
  var STEPS = [['Информация', 1], ['Обложки', 1], ['Видео', 1], ['Обработка', 0], ['Субтитры', 0], ['Коллекции', 0], ['Публикация', 0]];
  return adminShell('movies', 'Ручная загрузка', 'Шаг 4 из 7 · Обработка видео',
    '<button class="ds-btn ds-btn--sm ds-btn--ghost">Сохранить черновик</button>',
    '<div class="ds-row-f" style="margin-bottom:24px;gap:0">' + STEPS.map(function (s, i) {
      var cur = i === 3;
      return '<div style="flex:1;display:flex;align-items:center;gap:8px">' +
        '<span style="width:26px;height:26px;border-radius:99px;display:grid;place-items:center;flex:none;font-size:11px;font-weight:700;' +
          'background:' + (s[1] ? 'var(--ds-ok)' : cur ? 'var(--ds-accent)' : 'var(--ds-raised-2)') + ';' +
          'color:' + (s[1] || cur ? 'var(--ds-ink-inv)' : 'var(--ds-ink-3)') + '">' +
          (s[1] ? ic('check', 14, 3) : (i + 1)) + '</span>' +
        '<span class="ds-cap" style="color:' + (cur ? 'var(--ds-accent)' : s[1] ? 'var(--ds-ink-2)' : 'var(--ds-ink-4)') + ';font-weight:600">' + s[0] + '</span>' +
        (i < STEPS.length - 1 ? '<div style="flex:1;height:1px;background:' + (s[1] ? 'var(--ds-ok)' : 'var(--ds-line)') + '"></div>' : '') + '</div>';
    }).join('') + '</div>' +

    '<div style="display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:20px;align-items:start">' +
      '<div class="ds-stack ds-g4">' +
        '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:14px">Мастер-файл</h3>' +
          '<div class="ds-row-f ds-g3" style="padding:14px;border-radius:var(--ds-r-md);background:var(--ds-raised)">' +
            '<span style="color:var(--ds-ok);display:flex">' + ic('checkc', 24) + '</span>' +
            '<div class="ds-grow"><div class="ds-h3">god-tishiny-master.mov</div>' +
            '<div class="ds-cap ds-num" style="margin-top:3px">ProRes 422 HQ · 3840×2160 · 24 fps · 02:12:04 · 184 GB</div></div>' +
            '<span class="ds-badge ds-badge--ok">Загружен</span></div>' +
          '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:14px">' +
            [['Видеодорожка', 'ProRes 422 HQ'], ['Аудио 1', 'Русский · 5.1'], ['Аудио 2', 'English · stereo'], ['Аудио 3', 'AD Русский · stereo']].map(function (r) {
              return '<div style="padding:10px 12px;border-radius:var(--ds-r-sm);background:var(--ds-void);border:1px solid var(--ds-line)">' +
                '<div class="ds-cap">' + r[0] + '</div><div class="ds-sm" style="font-weight:600;margin-top:2px">' + r[1] + '</div></div>';
            }).join('') + '</div></div>' +

        '<div class="ds-card">' +
          '<div class="ds-between" style="margin-bottom:14px"><h3 class="ds-h2">Подготовка качеств</h3>' +
            '<button class="ds-btn ds-btn--sm ds-btn--secondary">' + ic('sparkle', 13) + ' Сгенерировать всё</button></div>' +
          '<div class="ds-stack ds-g2">' +
            [['360p', 'Готово', 100, 'ok', '450 MB'], ['480p', 'Готово', 100, 'ok', '780 MB'],
             ['720p HD', 'Готово', 100, 'ok', '1.4 GB'], ['1080p Full HD', 'Обработка', 82, 'info', '~2.8 GB'],
             ['1440p / 2K', 'В очереди', 0, '', '~5.1 GB'], ['2160p / 4K UHD', 'В очереди', 0, '', '~8.7 GB']].map(function (q) {
              return '<div style="padding:12px 14px;border-radius:var(--ds-r-md);background:var(--ds-void);border:1px solid var(--ds-line)">' +
                '<div class="ds-between"><div class="ds-row-f ds-g3">' +
                  '<span class="ds-opt__box ds-opt__box--check is-on" style="width:17px;height:17px;border-color:var(--ds-amber);background:var(--ds-amber)"></span>' +
                  '<span class="ds-sm" style="font-weight:600;color:var(--ds-ink)">' + q[0] + '</span></div>' +
                  '<div class="ds-row-f ds-g3"><span class="ds-num ds-cap">' + q[4] + '</span>' +
                  '<span class="ds-badge ' + (q[3] ? 'ds-badge--' + q[3] : '') + '">' + q[1] + (q[2] > 0 && q[2] < 100 ? ' ' + q[2] + '%' : '') + '</span></div></div>' +
                (q[2] > 0 && q[2] < 100 ? '<div class="ds-prog ds-prog--amber" style="margin-top:9px"><div class="ds-prog__bar" style="width:' + q[2] + '%"></div></div>' : '') +
                '</div>';
            }).join('') + '</div>' +
          '<p class="ds-cap" style="margin-top:12px">Оценка завершения — 34 минуты. Можно уйти со страницы, обработка идёт на сервере.</p></div>' +

        '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:14px">Аудиодорожки</h3>' +
          '<div class="ds-tablewrap"><table class="ds-table">' +
            '<thead><tr><th>Язык</th><th>Тип</th><th>Каналы</th><th>По умолчанию</th><th></th></tr></thead><tbody>' +
            [['Русский', 'Дубляж', '5.1', 1], ['English', 'Оригинал', 'Stereo', 0], ['Русский', 'Тифлокомментарий (AD)', 'Stereo', 0]].map(function (r) {
              return '<tr><td style="font-weight:600">' + r[0] + '</td><td>' + r[1] + '</td>' +
                '<td class="ds-num">' + r[2] + '</td>' +
                '<td>' + (r[3] ? '<span class="ds-badge ds-badge--ok">По умолчанию</span>' : '<button class="ds-btn ds-btn--sm ds-btn--ghost">Сделать</button>') + '</td>' +
                '<td><button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" aria-label="Действия">' + ic('moreH', 15) + '</button></td></tr>';
            }).join('') + '</tbody></table></div></div>' +
      '</div>' +

      '<div class="ds-stack ds-g4" style="position:sticky;top:84px">' +
        '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:12px">Черновик</h3>' +
          '<div style="border-radius:var(--ds-r-md);overflow:hidden;position:relative;aspect-ratio:2/3;border:1px solid var(--ds-line)">' +
            art('Год тишины', '', 'position:absolute;inset:0', 'Год тишины', 17) + '</div>' +
          '<div class="ds-stack ds-g2" style="margin-top:14px">' +
            [['Название', 'Год тишины'], ['Оригинальное', 'The Silent Year'], ['Год', '2025'],
             ['Хронометраж', '2 ч 12 мин'], ['Возраст', '16+'], ['Страна', 'Россия']].map(function (r) {
              return '<div class="ds-between"><span class="ds-cap">' + r[0] + '</span>' +
                '<span class="ds-sm" style="font-weight:600">' + r[1] + '</span></div>';
            }).join('') + '</div></div>' +
        '<div class="ds-card" style="border-color:var(--ds-warn);background:var(--ds-warn-dim)">' +
          '<div class="ds-row-f ds-g2" style="margin-bottom:8px"><span style="color:var(--ds-warn);display:flex">' + ic('alert', 18) + '</span>' +
            '<h3 class="ds-h3">До публикации осталось</h3></div>' +
          '<div class="ds-stack ds-g2">' +
            [['Обработка 1080p, 2K, 4K', 0], ['Загрузить Русский CC+', 0], ['Добавить в коллекции', 0], ['Заполнить лицензию', 0]].map(function (r) {
              return '<div class="ds-row-f ds-g2"><span style="width:15px;height:15px;border-radius:5px;border:2px solid var(--ds-line-strong);flex:none"></span>' +
                '<span class="ds-cap" style="color:var(--ds-ink-2)">' + r[0] + '</span></div>';
            }).join('') + '</div></div>' +
        '<div class="ds-row-f ds-g2">' +
          '<button class="ds-btn ds-btn--secondary ds-grow">Назад</button>' +
          '<button class="ds-btn ds-btn--primary ds-grow">Далее</button></div>' +
      '</div></div>');
};

/* ---------- API import ---------- */
A.apiImport = function () {
  return adminShell('movies', 'Импорт через API', 'Предпросмотр перед созданием черновика', '',
    '<div class="ds-card" style="margin-bottom:16px">' +
      '<div class="ds-between"><div class="ds-row-f ds-g3">' +
        '<span style="color:var(--ds-ok);display:flex">' + ic('checkc', 22) + '</span>' +
        '<div><div class="ds-h3">Кинопоставщик «Северный каталог»</div>' +
        '<div class="ds-cap ds-num">api.severkatalog.ru · production · подключено</div></div></div>' +
        '<div class="ds-row-f ds-g2">' +
          '<span class="ds-badge ds-badge--ok">Соединение активно</span>' +
          '<button class="ds-btn ds-btn--sm ds-btn--secondary" data-ago="api">Настроить</button></div></div></div>' +

    '<div style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:18px;align-items:start">' +
      '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:14px">Данные из API</h3>' +
        '<pre class="ds-scroll" style="margin:0;padding:14px;border-radius:var(--ds-r-md);background:var(--ds-sunken);border:1px solid var(--ds-line);font-family:var(--ds-mono);font-size:11.5px;line-height:1.7;overflow-x:auto;color:var(--ds-ink-2)">' +
'{\n' +
'  "external_id": "SK-2024-01187",\n' +
'  "title_ru": "Свидетели",\n' +
'  "title_orig": "The Witnesses",\n' +
'  "year": 2024,\n' +
'  "runtime_min": 109,\n' +
'  "country": "UA",\n' +
'  "genres": ["documentary", "drama"],\n' +
'  "director": "Olena Marchenko",\n' +
'  "cast": ["A. Bondar", "M. Levchenko"],\n' +
'  "age_rating": "16",\n' +
'  "synopsis": "Хроника одного города...",\n' +
'  "poster_url": "https://…/poster.jpg",\n' +
'  "subtitles": [\n' +
'    { "lang": "ru", "type": "cc_plus" },\n' +
'    { "lang": "en", "type": "cc" }\n' +
'  ],\n' +
'  "rights": {\n' +
'    "owner": "Sever Katalog LLC",\n' +
'    "territories": ["RU", "BY", "KZ"],\n' +
'    "from": "2026-09-01", "to": "2027-08-31",\n' +
'    "download": true, "uhd": false\n' +
'  }\n' +
'}' + '</pre></div>' +

      '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:14px">Соответствие полям DeafSuslik</h3>' +
        '<div class="ds-stack ds-g1">' +
          [['title_ru', 'Название', 'Свидетели', 1], ['title_orig', 'Оригинальное название', 'The Witnesses', 1],
           ['year', 'Год', '2024', 1], ['runtime_min', 'Хронометраж', '1 ч 49 мин', 1],
           ['country', 'Страна', 'Украина', 1], ['genres', 'Жанры', 'Документальный, Драма', 1],
           ['director', 'Режиссёр', 'Олена Марченко', 1], ['age_rating', 'Возраст', '16+', 1],
           ['poster_url', 'Постер', 'Скачается в хранилище', 1],
           ['subtitles', 'Субтитры', 'Метаданные · файлы отдельно', 0],
           ['rights', 'Лицензия', 'RU, BY, KZ · до 31.08.2027', 1],
           ['—', 'Мастер-видео', 'Не передаётся API — загрузить вручную', 0]].map(function (r) {
            return '<div class="ds-between" style="padding:9px 11px;border-radius:var(--ds-r-sm);background:' + (r[3] ? 'var(--ds-void)' : 'var(--ds-warn-dim)') + ';border:1px solid ' + (r[3] ? 'var(--ds-line)' : 'rgba(255,159,69,.3)') + '">' +
              '<div style="min-width:0"><div class="ds-num ds-cap">' + r[0] + ' → ' + r[1] + '</div>' +
              '<div class="ds-sm" style="font-weight:600;margin-top:2px">' + r[2] + '</div></div>' +
              '<span style="color:var(--ds-' + (r[3] ? 'ok' : 'warn') + ');display:flex;flex:none">' + ic(r[3] ? 'check' : 'alert', 16, 2.4) + '</span></div>';
          }).join('') + '</div></div></div>' +

    '<div class="ds-card" style="margin-top:16px">' +
      '<div class="ds-between"><div>' +
        '<h3 class="ds-h2">Импортировать как черновик</h3>' +
        '<p class="ds-sm" style="margin-top:5px">Фильм не появится в каталоге, пока редактор не проверит метаданные, не загрузит видео и субтитры и не подтвердит лицензию.</p></div>' +
        '<div class="ds-row-f ds-g2" style="flex:none">' +
          '<button class="ds-btn ds-btn--ghost">Пропустить</button>' +
          '<button class="ds-btn ds-btn--primary" data-ago="movies">Импортировать как черновик</button></div></div></div>' +

    '<div class="ds-card" style="margin-top:16px">' +
      '<h3 class="ds-h2" style="margin-bottom:14px">Массовый импорт</h3>' +
      '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px">' +
        [['Найдено', '126', ''], ['Готовы к импорту', '118', 'ok'], ['Без метаданных', '5', 'warn'], ['Ошибки', '3', 'err']].map(function (s) {
          return '<div class="ds-stat" style="background:var(--ds-void)"><div class="ds-stat__k">' + s[0] + '</div>' +
            '<div class="ds-stat__v" style="font-size:1.4rem' + (s[2] ? ';color:var(--ds-' + s[2] + ')' : '') + '">' + s[1] + '</div></div>';
        }).join('') + '</div>' +
      '<div class="ds-row-f ds-g2" style="margin-top:14px">' +
        '<button class="ds-btn ds-btn--sm ds-btn--secondary">Импортировать 118</button>' +
        '<button class="ds-btn ds-btn--sm ds-btn--ghost">Выбрать вручную</button>' +
        '<button class="ds-btn ds-btn--sm ds-btn--ghost">Отчёт об ошибках</button></div></div>');
};
