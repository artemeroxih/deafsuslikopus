/* ============================================================
   deafsuslik Admin — subtitles, people, money, support, system
   ============================================================ */

/* ---------- Subtitles per movie ---------- */
A.subsList = function () {
  var ROWS = [
    ['Русский', 'CC+', 'ok', 'Опубликованы', 'Мария Р.', '2 сен, 14:42', 418],
    ['Русский', 'CC', 'ok', 'Опубликованы', 'Мария Р.', '28 авг', 402],
    ['English', 'CC+', 'info', 'На вычитке', 'Игорь С.', '1 сен', 418],
    ['English', 'CC', 'ok', 'Опубликованы', 'Импорт', '24 авг', 402],
    ['Deutsch', 'SUB', 'warn', 'Черновик автогенерации', 'Система', '2 сен, 09:10', 396],
    ['Français', 'SUB', 'err', '12 ошибок валидации', 'Импорт', '30 авг', 388]
  ];
  return adminShell('subs-list', 'Субтитры и CC+', 'Год тишины · DS-M-04187',
    '<button class="ds-btn ds-btn--sm ds-btn--secondary">' + ic('sparkle', 13) + ' Создать автоматически</button>' +
    '<button class="ds-btn ds-btn--sm ds-btn--primary">' + ic('plus', 14) + ' Добавить субтитры</button>',
    '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:18px">' +
      stat('Языков', '6') + stat('С CC+', '2') + stat('Ждут вычитки', '2', null) + stat('С ошибками', '1', null, 'err') +
    '</div>' +
    '<div class="ds-card ds-card--flush"><div class="ds-tablewrap"><table class="ds-table">' +
      '<thead><tr><th>Язык</th><th>Тип</th><th>Статус</th><th>Реплик</th><th>Автор</th><th>Обновлено</th><th></th></tr></thead><tbody>' +
      ROWS.map(function (r) {
        return '<tr><td style="font-weight:600">' + r[0] + '</td>' +
          '<td><span class="ds-badge ' + (r[1] === 'CC+' ? 'ds-badge--ccplus' : r[1] === 'CC' ? 'ds-badge--cc' : '') + '">' + r[1] + '</span></td>' +
          '<td><span class="ds-badge ds-badge--' + r[2] + '">' + r[3] + '</span></td>' +
          '<td class="ds-num">' + r[6] + '</td>' +
          '<td class="ds-mut2">' + r[4] + '</td><td class="ds-num ds-mut2">' + r[5] + '</td>' +
          '<td><div class="ds-row-f ds-g1">' +
            '<button class="ds-btn ds-btn--sm ds-btn--secondary" data-ago="editor">Открыть в редакторе</button>' +
            '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" aria-label="Действия">' + ic('moreH', 15) + '</button></div></td></tr>';
      }).join('') + '</tbody></table></div></div>' +

    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:16px;align-items:start">' +
      '<div class="ds-card" style="border-color:rgba(255,92,92,.28)">' +
        '<h3 class="ds-h2" style="margin-bottom:12px">Валидация · Français SUB</h3>' +
        '<div class="ds-stack ds-g2">' +
          [['err', 'Перекрытие реплик', '00:14:22 — #64 начинается до конца #63'],
           ['err', 'Слишком длинная строка', '00:41:07 — 58 символов при лимите 42'],
           ['warn', 'Высокая скорость чтения', '01:02:11 — 24 симв./сек при лимите 17'],
           ['warn', 'Пустая реплика', '01:33:40 — #301 без текста'],
           ['warn', 'Неподдерживаемый символ', '01:51:02 — U+202E в строке']].map(function (r) {
            return '<div class="ds-row-f ds-g3" style="padding:10px 12px;border-radius:var(--ds-r-sm);background:var(--ds-void);border:1px solid var(--ds-line)">' +
              '<span style="color:var(--ds-' + r[0] + ');display:flex;flex:none">' + ic('alert', 16) + '</span>' +
              '<div class="ds-grow"><div class="ds-sm" style="font-weight:600">' + r[1] + '</div>' +
              '<div class="ds-cap ds-num">' + r[2] + '</div></div>' +
              '<button class="ds-btn ds-btn--sm ds-btn--ghost" data-ago="editor">Открыть</button></div>';
          }).join('') + '</div>' +
        '<p class="ds-cap" style="margin-top:12px">Публикация заблокирована, пока есть ошибки уровня «Ошибка».</p></div>' +

      '<div class="ds-card">' +
        '<h3 class="ds-h2" style="margin-bottom:12px">Автогенерация и перевод</h3>' +
        '<div class="ds-stack ds-g3">' +
          '<div style="padding:14px;border-radius:var(--ds-r-md);background:var(--ds-void);border:1px solid var(--ds-line)">' +
            '<div class="ds-between"><span class="ds-h3" style="font-size:13.5px">Распознавание речи</span>' +
              '<span class="ds-badge ds-badge--warn">Черновик</span></div>' +
            '<p class="ds-cap" style="margin-top:6px">Аудио → транскрипт → тайминги → черновик. Результат всегда получает статус ' +
            '«Требует вычитки» и не публикуется автоматически.</p>' +
            '<button class="ds-btn ds-btn--sm ds-btn--secondary" style="margin-top:10px">Запустить для Deutsch</button></div>' +
          '<div style="padding:14px;border-radius:var(--ds-r-md);background:var(--ds-void);border:1px solid var(--ds-line)">' +
            '<div class="ds-between"><span class="ds-h3" style="font-size:13.5px">Перевод субтитров</span>' +
              '<span class="ds-badge ds-badge--warn">Черновик</span></div>' +
            '<div class="ds-row-f ds-g2" style="margin-top:10px">' +
              '<select class="ds-select" style="min-height:36px;padding:6px 30px 6px 12px;font-size:12.5px"><option>Русский CC+</option></select>' +
              '<span style="color:var(--ds-ink-3);display:flex">' + ic('chevR', 16) + '</span>' +
              '<select class="ds-select" style="min-height:36px;padding:6px 30px 6px 12px;font-size:12.5px"><option>English</option><option>Deutsch</option></select></div>' +
            '<p class="ds-cap" style="margin-top:10px">Описания звука в CC+ переводятся отдельным проходом — их формулировки ' +
            'проверяет редактор, а не автомат.</p>' +
            '<button class="ds-btn ds-btn--sm ds-btn--secondary" style="margin-top:10px">Создать перевод</button></div></div>' +
        '<div class="ds-strip" style="margin-top:14px">' +
          '<span class="ds-strip__label">Правило</span>' +
          '<p class="ds-cap" style="margin:0">Ни одни автоматические субтитры не попадают к зрителю без ручной вычитки. ' +
          'Это не техническое ограничение, а обещание аудитории.</p></div></div></div>');
};

/* ---------- Subtitle editor — the workhorse screen ---------- */
A.editor = function () {
  var CUES = [
    ['#414', '01:21:48,100', '01:21:50,640', '', 'Марк смотрит на приёмник.', 0, 0],
    ['#415', '01:21:52,000', '01:21:55,120', '', '[помехи в динамике]', 1, 0],
    ['#416', '01:21:58,400', '01:22:01,900', 'МАРК', 'Приём. Кто-нибудь меня слышит?', 0, 0],
    ['#417', '01:22:04,200', '01:22:07,050', '', '[долгая тишина]', 1, 0],
    ['#418', '01:22:16,340', '01:22:19,120', 'АННА', 'Я скоро вернусь, обещаю.', 0, 1],
    ['#419', '01:22:19,400', '01:22:21,000', '', '[дверь резко захлопывается]', 1, 1],
    ['#420', '01:22:24,600', '01:22:27,300', 'МАРК', 'Анна? Это ты?', 0, 0],
    ['#421', '01:22:29,000', '01:22:33,480', '', '[ветер усиливается за окном]', 1, 0]
  ];
  return adminShell('editor', 'Редактор субтитров', 'Год тишины · Русский CC+ · открыт на 01:22:18 из обращения #DS-10482',
    '<button class="ds-btn ds-btn--sm ds-btn--secondary">' + ic('search', 13) + ' Найти и заменить</button>' +
    '<button class="ds-btn ds-btn--sm ds-btn--amber">Опубликовать версию</button>',
    '<div class="ds-strip" style="margin-bottom:16px;border-left-color:var(--ds-warn);background:var(--ds-warn-dim)">' +
      '<span class="ds-strip__label" style="color:var(--ds-warn)">Из поддержки</span>' +
      '<p class="ds-sm" style="margin:0">Обращение <strong>#DS-10482</strong>: «в сцене дверь закрывают тихо, а в CC+ написано «резко захлопывается»». ' +
      'Редактор открыт ровно на этой реплике.</p></div>' +

    '<div style="display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:18px;align-items:start">' +
      '<div class="ds-stack ds-g4">' +
        '<div class="ds-card ds-card--flush">' +
          '<div class="ds-art" style="aspect-ratio:16/9;position:relative;display:flex;align-items:flex-end;justify-content:center;padding-bottom:26px">' +
            dsArt('editor-video') + '<div class="ds-art__vig"></div>' +
            '<div class="ds-cuetrack" style="position:relative;z-index:3">' +
              '<span class="ds-cuebox"><span class="ds-cue" style="font-size:18px">' +
              '<span class="ds-cue__speaker">АННА:</span>Я скоро вернусь, обещаю.' +
              '<span class="ds-cue__sound">[дверь резко захлопывается]</span></span></span></div></div>' +
          '<div style="padding:14px 16px;border-top:1px solid var(--ds-line)">' +
            '<div class="ds-row-f ds-g3">' +
              '<button class="ds-iconbtn ds-iconbtn--sm" aria-label="Назад на кадр">' + ic('chevL', 16) + '</button>' +
              '<button class="ds-iconbtn" style="background:var(--ds-ink);color:var(--ds-ink-inv);border-color:transparent" aria-label="Пауза">' + ic('pause', 18, 2.4) + '</button>' +
              '<button class="ds-iconbtn ds-iconbtn--sm" aria-label="Вперёд на кадр">' + ic('chevR', 16) + '</button>' +
              '<span class="ds-num" style="font-size:13px;font-weight:700">01:22:18,120</span>' +
              '<div class="ds-grow"></div>' +
              '<div class="ds-seg"><button aria-selected="true">0.5×</button><button aria-selected="false">1×</button><button aria-selected="false">2×</button></div></div>' +
            '<div style="margin-top:14px;position:relative;height:56px;border-radius:var(--ds-r-sm);background:var(--ds-sunken);border:1px solid var(--ds-line);overflow:hidden">' +
              '<div style="position:absolute;inset:0;display:flex;align-items:center;gap:1px;padding:0 4px">' +
                Array.apply(null, Array(120)).map(function (_, i) {
                  var h = 12 + Math.abs(Math.sin(i * 0.7) * 26) + (i > 52 && i < 62 ? 14 : 0);
                  return '<div style="flex:1;height:' + h + 'px;border-radius:1px;background:' +
                    (i > 52 && i < 62 ? 'var(--ds-amber)' : 'var(--ds-raised-3)') + '"></div>';
                }).join('') + '</div>' +
              '<div style="position:absolute;top:0;bottom:0;left:46%;width:2px;background:var(--ds-blue)"></div>' +
              '<div style="position:absolute;top:0;bottom:0;left:44%;width:8%;background:rgba(95,227,208,.14);border-left:1px solid var(--ds-amber);border-right:1px solid var(--ds-amber)"></div>' +
            '</div>' +
            '<div class="ds-between" style="margin-top:6px"><span class="ds-cap ds-num">01:22:10</span>' +
              '<span class="ds-cap ds-num">01:22:35</span></div></div></div>' +

        '<div class="ds-card ds-card--flush">' +
          '<div class="ds-between" style="padding:14px 16px;border-bottom:1px solid var(--ds-line)">' +
            '<h3 class="ds-h2">Реплики</h3>' +
            '<div class="ds-row-f ds-g2">' +
              '<button class="ds-btn ds-btn--sm ds-btn--ghost">' + ic('plus', 13) + ' Добавить</button>' +
              '<button class="ds-btn ds-btn--sm ds-btn--ghost">' + ic('scissors', 13) + ' Разделить</button>' +
              '<button class="ds-btn ds-btn--sm ds-btn--ghost">' + ic('merge', 13) + ' Объединить</button></div></div>' +
          '<div class="ds-tablewrap"><table class="ds-table">' +
            '<thead><tr><th style="width:52px">№</th><th style="width:132px">Начало</th><th style="width:132px">Конец</th>' +
            '<th style="width:110px">Говорящий</th><th>Текст</th><th style="width:62px">Симв.</th><th style="width:44px"></th></tr></thead><tbody>' +
            CUES.map(function (c) {
              return '<tr' + (c[6] ? ' style="background:var(--ds-amber-dim)"' : '') + '>' +
                '<td class="ds-num" style="color:var(--ds-ink-3)">' + c[0] + '</td>' +
                '<td class="ds-num" style="font-size:11.5px">' + c[1] + '</td>' +
                '<td class="ds-num" style="font-size:11.5px">' + c[2] + '</td>' +
                '<td>' + (c[3] ? '<span class="ds-badge" style="color:var(--ds-amber);border-color:var(--ds-amber-edge)">' + c[3] + '</span>' : '<span class="ds-mut2">—</span>') + '</td>' +
                '<td>' + (c[5] ? '<span class="ds-cue__sound" style="display:inline;font-size:13px">' + c[4] + '</span>' : c[4]) + '</td>' +
                '<td class="ds-num ds-mut2">' + c[4].length + '</td>' +
                '<td><button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" aria-label="Действия">' + ic('moreH', 14) + '</button></td></tr>';
            }).join('') + '</tbody></table></div></div></div>' +

      '<div class="ds-stack ds-g4" style="position:sticky;top:84px">' +
        '<div class="ds-card" style="border-color:var(--ds-amber-edge)">' +
          '<h3 class="ds-h2" style="margin-bottom:14px">Реплика #419</h3>' +
          '<div class="ds-stack ds-g3">' +
            '<div class="ds-row-f ds-g2">' +
              '<div class="ds-field ds-grow"><label class="ds-label">Начало</label>' +
                '<input class="ds-input ds-num" value="01:22:19,400" style="min-height:42px;font-size:13px"></div>' +
              '<div class="ds-field ds-grow"><label class="ds-label">Конец</label>' +
                '<input class="ds-input ds-num" value="01:22:21,000" style="min-height:42px;font-size:13px"></div></div>' +
            '<div class="ds-row-f ds-g2">' +
              '<button class="ds-btn ds-btn--sm ds-btn--secondary ds-grow">−100 мс</button>' +
              '<button class="ds-btn ds-btn--sm ds-btn--secondary ds-grow">+100 мс</button>' +
              '<button class="ds-btn ds-btn--sm ds-btn--secondary ds-grow">По курсору</button></div>' +
            '<div class="ds-field"><label class="ds-label">Тип реплики</label>' +
              '<div class="ds-wrap ds-g2">' + [['Реплика', 0], ['Описание звука', 1], ['Музыка', 0]].map(function (t) {
                return '<button class="ds-chip ds-chip--amber"' + (t[1] ? ' aria-pressed="true"' : '') + '>' + t[0] + '</button>'; }).join('') + '</div></div>' +
            '<div class="ds-field"><label class="ds-label">Говорящий</label>' +
              '<select class="ds-select"><option>— не указан —</option><option>АННА</option><option>МАРК</option><option>РАДИСТ</option></select></div>' +
            '<div class="ds-field"><label class="ds-label">Текст</label>' +
              '<textarea class="ds-textarea" style="min-height:76px;font-family:var(--ds-mono);font-size:13px">[дверь тихо закрывается]</textarea>' +
              '<div class="ds-between" style="margin-top:6px">' +
                '<span class="ds-cap ds-num">24 / 42 симв.</span>' +
                '<span class="ds-cap ds-num" style="color:var(--ds-ok)">15 симв./сек · норма</span></div></div>' +
            '<div style="padding:11px 13px;border-radius:var(--ds-r-sm);background:var(--ds-void);border:1px solid var(--ds-line)">' +
              '<div class="ds-cap" style="margin-bottom:5px">Было</div>' +
              '<span class="ds-cue__sound" style="font-size:12.5px;text-decoration:line-through;opacity:.55">[дверь резко захлопывается]</span></div>' +
            '<div class="ds-row-f ds-g2">' +
              '<button class="ds-btn ds-btn--ghost ds-grow">Отменить</button>' +
              '<button class="ds-btn ds-btn--amber ds-grow">Сохранить</button></div></div></div>' +

        '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:12px">Проверка файла</h3>' +
          '<div class="ds-stack ds-g2">' +
            [['ok', 'Перекрытий нет'], ['ok', 'Все тайминги валидны'], ['ok', 'Пустых реплик нет'],
             ['ok', 'Кодировка UTF-8'], ['warn', '2 реплики длиннее 42 символов'], ['ok', 'Скорость чтения в норме']].map(function (r) {
              return '<div class="ds-row-f ds-g2"><span style="color:var(--ds-' + r[0] + ');display:flex;flex:none">' +
                ic(r[0] === 'ok' ? 'check' : 'alert', 15, 2.4) + '</span>' +
                '<span class="ds-cap" style="color:var(--ds-ink-2)">' + r[1] + '</span></div>';
            }).join('') + '</div></div>' +

        '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:12px">Версии</h3>' +
          '<div class="ds-stack ds-g2">' +
            [['v4 · черновик', 'Мария Р. · сейчас', 1], ['v3', 'Мария Р. · 28 авг', 0], ['v2', 'Игорь С. · 12 авг', 0], ['v1 · импорт', 'Система · 4 авг', 0]].map(function (r) {
              return '<div class="ds-between" style="padding:9px 11px;border-radius:var(--ds-r-sm);background:' + (r[2] ? 'var(--ds-blue-dim)' : 'var(--ds-void)') + ';border:1px solid ' + (r[2] ? 'var(--ds-blue-edge)' : 'var(--ds-line)') + '">' +
                '<div><div class="ds-sm" style="font-weight:600">' + r[0] + '</div>' +
                '<div class="ds-cap">' + r[1] + '</div></div>' +
                (r[2] ? '' : '<button class="ds-btn ds-btn--sm ds-btn--ghost">Сравнить</button>') + '</div>';
            }).join('') + '</div></div>' +

        '<button class="ds-btn ds-btn--primary ds-btn--block" data-ago="ticket">Исправлено — вернуться к обращению</button>' +
      '</div></div>');
};

/* ---------- Users ---------- */
A.users = function () {
  var U = [
    ['Анна Ковалёва', 'anna.k@example.ru', '12 мар 2026', 'act', 'ВИП', 'Сейчас', 3],
    ['Игорь Демидов', 'i.demidov@example.ru', '4 янв 2026', 'act', 'ВИП', '2 часа назад', 2],
    ['Ольга Титова', 'olga.t@example.ru', '28 фев 2026', 'act', 'ВИП', 'Вчера', 1],
    ['Павел Рыков', 'p.rykov@example.ru', '19 июн 2026', 'susp', '—', '14 авг', 0],
    ['Мария Лисина', 'm.lisina@example.ru', '2 авг 2026', 'act', 'ВИП', '3 дня назад', 2],
    ['Сергей Ким', 's.kim@example.ru', '11 мая 2026', 'del', '—', '1 июл', 0]
  ];
  var ST = { act: ['ds-badge--ok', 'Активен'], susp: ['ds-badge--warn', 'Заблокирован'], del: ['ds-badge--err', 'Удалён'] };
  return adminShell('users', 'Пользователи', '48 214 всего · 31 907 активных за 30 дней', '',
    '<div class="ds-between" style="margin-bottom:16px">' +
      '<div class="ds-wrap ds-g2">' + ['Все', 'Активные', 'С подпиской', 'Без подписки', 'Заблокированные', 'Удалённые'].map(function (t, i) {
        return '<button class="ds-chip"' + (i === 0 ? ' aria-pressed="true"' : '') + '>' + t + '</button>'; }).join('') + '</div>' +
      '<button class="ds-btn ds-btn--sm ds-btn--secondary">Экспорт CSV</button></div>' +
    '<div class="ds-card ds-card--flush"><div class="ds-tablewrap"><table class="ds-table">' +
      '<thead><tr><th>Пользователь</th><th>Регистрация</th><th>Статус</th><th>Подписка</th><th>Последняя активность</th><th>Устройств</th><th></th></tr></thead><tbody>' +
      U.map(function (u) {
        var s = ST[u[3]];
        return '<tr style="cursor:pointer" data-ago="user"><td><div class="ds-row-f ds-g3">' +
          '<div style="width:30px;height:30px;border-radius:99px;position:relative;overflow:hidden;flex:none">' + art(u[0], '', 'position:absolute;inset:0') + '</div>' +
          '<div><div style="font-weight:600">' + u[0] + '</div><div class="ds-cap ds-num">' + u[1] + '</div></div></div></td>' +
          '<td class="ds-num ds-mut2">' + u[2] + '</td>' +
          '<td><span class="ds-badge ' + s[0] + '">' + s[1] + '</span></td>' +
          '<td class="ds-sm">' + u[4] + '</td>' +
          '<td class="ds-num ds-mut2">' + u[5] + '</td>' +
          '<td class="ds-num">' + u[6] + '</td>' +
          '<td><span style="color:var(--ds-ink-4);display:flex">' + ic('chevR', 15) + '</span></td></tr>';
      }).join('') + '</tbody></table></div></div>' +
    '<p class="ds-cap" style="margin-top:12px">Роль «Поддержка» видит email и подписки, но не историю просмотра — она открывается ' +
    'только при наличии обращения от этого пользователя.</p>');
};

A.user = function () {
  return adminShell('users', 'Анна Ковалёва', 'anna.k@example.ru · ID DS-U-48211',
    '<button class="ds-btn ds-btn--sm ds-btn--secondary">Написать</button>' +
    '<button class="ds-btn ds-btn--sm ds-btn--danger">Заблокировать</button>',
    '<div style="display:grid;grid-template-columns:300px minmax(0,1fr);gap:20px;align-items:start">' +
      '<div class="ds-stack ds-g4">' +
        '<div class="ds-card ds-center">' +
          '<div style="width:88px;height:88px;border-radius:28px;overflow:hidden;position:relative;margin:0 auto">' + art('Анна Ковалёва', '', 'position:absolute;inset:0') + '</div>' +
          '<h3 class="ds-h1" style="margin-top:14px">Анна Ковалёва</h3>' +
          '<p class="ds-cap ds-num">anna.k@example.ru</p>' +
          '<span class="ds-badge ds-badge--ok ds-badge--lg" style="margin-top:10px">Активен</span></div>' +
        '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:12px">Аккаунт</h3>' +
          '<div class="ds-stack ds-g2">' +
            [['Регистрация', '12 марта 2026'], ['Последний вход', 'Сейчас'], ['Устройств', '3 из 5'],
             ['2FA', 'Выключена'], ['Язык', 'Русский'], ['Субтитры', 'Русский CC+, крупный']].map(function (r) {
              return '<div class="ds-between"><span class="ds-cap">' + r[0] + '</span>' +
                '<span class="ds-sm" style="font-weight:600">' + r[1] + '</span></div>';
            }).join('') + '</div></div>' +
        '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:12px">Заметки сотрудников</h3>' +
          '<div style="padding:11px;border-radius:var(--ds-r-sm);background:var(--ds-void);border:1px solid var(--ds-line)">' +
            '<p class="ds-cap">Пользуется CC+ постоянно, даёт подробную обратную связь по субтитрам. ' +
            'Стоит приглашать в бета-тесты новых языков.</p>' +
            '<p class="ds-cap ds-num" style="margin-top:7px;color:var(--ds-ink-4)">Мария Р. · 14 сентября</p></div>' +
          '<button class="ds-btn ds-btn--sm ds-btn--ghost ds-btn--block" style="margin-top:10px">' + ic('plus', 13) + ' Добавить заметку</button>' +
          '<p class="ds-cap" style="margin-top:8px;color:var(--ds-ink-4)">Заметки никогда не видны пользователю.</p></div></div>' +

      '<div class="ds-stack ds-g4">' +
        '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:14px">Подписка</h3>' +
          '<div class="ds-tablewrap"><table class="ds-table">' +
            '<thead><tr><th>Подписка</th><th>Цена</th><th>Статус</th><th>Подключена</th><th>Следующее списание</th><th></th></tr></thead><tbody>' +
            [['ВИП', '500 ₽ / месяц', 'ok', 'Активна', '12 мар 2026', '12 окт 2026']].map(function (r) {
              return '<tr><td style="font-weight:600">' + r[0] + '</td><td class="ds-num">' + r[1] + '</td>' +
                '<td><span class="ds-badge ds-badge--' + r[2] + '">' + r[3] + '</span></td>' +
                '<td class="ds-num ds-mut2">' + r[4] + '</td><td class="ds-num">' + r[5] + '</td>' +
                '<td><button class="ds-btn ds-btn--sm ds-btn--ghost">Открыть</button></td></tr>';
            }).join('') + '</tbody></table></div></div>' +

        '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:14px">Платежи</h3>' +
          '<div class="ds-tablewrap"><table class="ds-table">' +
            '<thead><tr><th>Дата</th><th>Подписка</th><th>Сумма</th><th>Статус</th><th>Ссылка на операцию</th></tr></thead><tbody>' +
            [['12 сен 2026', 'ВИП', '500 ₽', 'ok', 'Оплачен', 'DS-PAY-88214'],
             ['12 авг 2026', 'ВИП', '500 ₽', 'ok', 'Оплачен', 'DS-PAY-87001'],
             ['12 июн 2026', 'ВИП', '500 ₽', 'err', 'Отклонён банком', 'DS-PAY-86440']].map(function (r) {
              return '<tr><td class="ds-num ds-mut2">' + r[0] + '</td><td>' + r[1] + '</td><td class="ds-num">' + r[2] + '</td>' +
                '<td><span class="ds-badge ds-badge--' + r[3] + '">' + r[4] + '</span></td>' +
                '<td class="ds-num ds-mut2">' + r[5] + '</td></tr>';
            }).join('') + '</tbody></table></div>' +
          '<p class="ds-cap" style="margin-top:10px">Номер карты и CVV не хранятся и недоступны ни одной роли. ' +
          'Для разбора платежа используется только ссылка на операцию.</p></div>' +

        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">' +
          '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:12px">Устройства</h3>' +
            '<div class="ds-stack ds-g2">' +
              [['iPhone 17 Pro', 'Сейчас'], ['Galaxy S25', 'Вчера'], ['Chrome — macOS', '2 часа назад']].map(function (r) {
                return '<div class="ds-between"><span class="ds-sm">' + r[0] + '</span>' +
                  '<span class="ds-cap ds-num">' + r[1] + '</span></div>';
              }).join('') + '</div></div>' +
          '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:12px">Обращения</h3>' +
            '<div class="ds-stack ds-g2">' +
              [['#DS-10482', 'В работе', 'info'], ['#DS-10318', 'Решено', 'ok'], ['#DS-10240', 'Закрыто', '']].map(function (r) {
                return '<div class="ds-between"><span class="ds-num ds-sm" style="color:var(--ds-blue)">' + r[0] + '</span>' +
                  '<span class="ds-badge ' + (r[2] ? 'ds-badge--' + r[2] : '') + '">' + r[1] + '</span></div>';
              }).join('') + '</div></div></div></div></div>');
};

/* ---------- Payments ---------- */
A.payments = function () {
  return adminShell('payments', 'Платежи', 'Сентябрь 2026', '<button class="ds-btn ds-btn--sm ds-btn--secondary">Экспорт</button>',
    '<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:14px;margin-bottom:18px">' +
      stat('Оплачено', '13 740 000 ₽', '+4.4%') + stat('Успешных', '27 108') +
      stat('Отклонено', '1 042', '3.7%', 'err') + stat('Ожидают', '86') + stat('Возвраты', '18') +
    '</div>' +
    '<div class="ds-between" style="margin-bottom:14px">' +
      '<div class="ds-wrap ds-g2">' + ['Все', 'Оплачены', 'Отклонены', 'Ожидают', 'Возвраты'].map(function (t, i) {
        return '<button class="ds-chip"' + (i === 0 ? ' aria-pressed="true"' : '') + '>' + t + '</button>'; }).join('') + '</div>' +
      '<select class="ds-select" style="width:auto;min-height:34px;padding:5px 32px 5px 12px;font-size:12.5px"><option>Все платежи</option><option>Успешные</option><option>Отклонённые</option><option>Возвраты</option></select></div>' +
    '<div class="ds-card ds-card--flush"><div class="ds-tablewrap"><table class="ds-table">' +
      '<thead><tr><th>Дата и время</th><th>Пользователь</th><th>Тариф</th><th>Сумма</th><th>Статус</th><th>Ссылка на операцию</th><th>Код банка</th><th></th></tr></thead><tbody>' +
      [['2 сен, 14:22', 'Анна Ковалёва', 'ВИП', '500 ₽', 'ok', 'Оплачен', 'DS-PAY-88214', '00'],
       ['2 сен, 13:58', 'Игорь Демидов', 'ВИП', '500 ₽', 'ok', 'Оплачен', 'DS-PAY-88213', '00'],
       ['2 сен, 13:40', 'Ольга Титова', 'ВИП', '500 ₽', 'err', 'Отклонён', 'DS-PAY-88212', '51'],
       ['2 сен, 12:11', 'Мария Лисина', 'ВИП', '500 ₽', 'ok', 'Оплачен', 'DS-PAY-88210', '00'],
       ['2 сен, 11:05', 'Пётр Волков', 'ВИП', '500 ₽', 'warn', 'Ожидает 3-D Secure', 'DS-PAY-88208', '—'],
       ['1 сен, 22:40', 'Елена Крон', 'ВИП', '500 ₽', 'info', 'Возврат', 'DS-PAY-88190', '00']].map(function (r) {
        return '<tr><td class="ds-num ds-mut2">' + r[0] + '</td><td style="font-weight:600">' + r[1] + '</td>' +
          '<td>' + r[2] + '</td><td class="ds-num">' + r[3] + '</td>' +
          '<td><span class="ds-badge ds-badge--' + r[4] + '">' + r[5] + '</span></td>' +
          '<td class="ds-num ds-mut2">' + r[6] + '</td><td class="ds-num ds-mut2">' + r[7] + '</td>' +
          '<td><button class="ds-btn ds-btn--sm ds-btn--ghost">Детали</button></td></tr>';
      }).join('') + '</tbody></table></div></div>' +
    '<div class="ds-strip" style="margin-top:16px;border-left-color:var(--ds-err);background:var(--ds-err-dim)">' +
      '<span class="ds-strip__label" style="color:var(--ds-err)">Безопасность</span>' +
      '<p class="ds-sm" style="margin:0">Полный номер карты, срок действия и CVV не проходят через deafsuslik и не отображаются ' +
      'ни одной роли, включая владельца. Для разбора спора достаточно ссылки на операцию и кода отказа банка.</p></div>');
};

/* ---------- Analytics ---------- */
A.analytics = function () {
  return adminShell('analytics', 'Аналитика просмотров', 'Последние 30 дней',
    '<button class="ds-btn ds-btn--sm ds-btn--secondary">' + ic('calendar', 13) + ' 30 дней</button>',
    '<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:14px">' +
      stat('Просмотров', '1 284 000', '+7.1%') + stat('Уникальных зрителей', '31 907', '+5.8%') +
      stat('Часов просмотра', '2 148 000', '+6.4%') + stat('Средняя досмотренность', '74%', '+2 п.п.') +
      stat('Просмотров с CC+', '62%', '+4 п.п.') +
    '</div>' +
    '<div style="display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:16px;margin-top:18px;align-items:start">' +
      '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:16px">Просмотры по дням</h3>' +
        bars([['1', 38], ['5', 41], ['9', 44], ['13', 40], ['17', 47], ['21', 51], ['25', 49], ['29', 56]], 130) + '</div>' +
      '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:14px">Платформы</h3>' +
        '<div class="ds-stack ds-g4">' +
          [['iPhone', 41, 'var(--ds-blue)'], ['Android', 34, 'var(--ds-blue-lo)'], ['Web', 25, 'var(--ds-raised-3)']].map(function (r) {
            return '<div><div class="ds-between" style="margin-bottom:5px"><span class="ds-sm">' + r[0] + '</span>' +
              '<span class="ds-num ds-sm" style="font-weight:700">' + r[1] + '%</span></div>' +
              '<div style="height:7px;border-radius:99px;background:var(--ds-raised);overflow:hidden">' +
              '<div style="height:100%;width:' + r[1] + '%;background:' + r[2] + ';border-radius:99px"></div></div></div>';
          }).join('') + '</div>' +
        '<h3 class="ds-h2" style="margin:20px 0 14px">Качество</h3>' +
        '<div class="ds-stack ds-g3">' +
          [['4K UHD', 18], ['1080p', 44], ['720p', 24], ['480p', 9], ['360p', 5]].map(function (r) {
            return '<div class="ds-between"><span class="ds-cap">' + r[0] + '</span>' +
              '<div class="ds-row-f ds-g3" style="flex:1;margin-left:14px">' +
                '<div style="flex:1;height:5px;border-radius:99px;background:var(--ds-raised);overflow:hidden">' +
                '<div style="height:100%;width:' + (r[1] / 44 * 100) + '%;background:var(--ds-amber-lo);border-radius:99px"></div></div>' +
                '<span class="ds-num ds-cap" style="width:28px;text-align:right">' + r[1] + '%</span></div></div>';
          }).join('') + '</div></div></div>' +

    '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-top:16px;align-items:start">' +
      '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:14px">Языки субтитров</h3>' +
        '<div class="ds-stack ds-g3">' +
          [['Русский CC+', 58], ['Русский CC', 19], ['English CC+', 8], ['English CC', 6], ['Deutsch', 3], ['Выключены', 6]].map(function (r) {
            return '<div class="ds-between"><span class="ds-cap">' + r[0] + '</span>' +
              '<span class="ds-num ds-sm" style="font-weight:600">' + r[1] + '%</span></div>';
          }).join('') + '</div></div>' +
      '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:14px">Самое скачиваемое</h3>' +
        '<div class="ds-stack ds-g2">' + [0, 9, 6, 14, 10].map(function (i, k) {
          var m = M(i);
          return '<div class="ds-between"><span class="ds-sm">' + (k + 1) + '. ' + m.t + '</span>' +
            '<span class="ds-num ds-cap">' + (9 - k) + ' 4' + k + '0</span></div>';
        }).join('') + '</div></div>' +
      '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:14px">Коллекции</h3>' +
        '<div class="ds-stack ds-g3">' +
          [['Лучшее с CC+', '128 400', 'var(--ds-amber)'], ['Реальные события', '96 100', 'var(--ds-coll)'],
           ['Фильмы на вечер', '42 800', 'var(--ds-coll)'], ['Лучшее в 4K', '38 200', 'var(--ds-blue)']].map(function (r) {
            return '<div class="ds-between"><div class="ds-row-f ds-g2">' +
              '<span style="width:18px;height:3px;border-radius:2px;background:' + r[2] + '"></span>' +
              '<span class="ds-cap">' + r[0] + '</span></div>' +
              '<span class="ds-num ds-sm">' + r[1] + '</span></div>';
          }).join('') + '</div></div></div>' +

    '<div class="ds-card" style="margin-top:16px">' +
      '<h3 class="ds-h2" style="margin-bottom:14px">Поисковые запросы без результатов</h3>' +
      '<p class="ds-sm" style="margin-bottom:14px">Прямой список того, чего людям не хватает в каталоге.</p>' +
      '<div class="ds-tablewrap"><table class="ds-table">' +
        '<thead><tr><th>Запрос</th><th>Показов</th><th>Динамика</th><th>Комментарий</th><th></th></tr></thead><tbody>' +
        [['интерстеллар', '1 840', '+22%', 'Нет прав на показ'],
         ['сериалы с cc+', '1 204', '+64%', 'Сериалы ещё не запущены'],
         ['аудиодескрипция', '806', '+31%', 'AD есть у 42 фильмов — плохая находимость'],
         ['фильмы жестовый язык', '512', '+118%', 'Функция не реализована'],
         ['субтитры для детей', '388', '+9%', 'Нет отдельной подборки']].map(function (r) {
          return '<tr><td style="font-weight:600">' + r[0] + '</td><td class="ds-num">' + r[1] + '</td>' +
            '<td class="ds-num" style="color:var(--ds-ok)">' + r[2] + '</td>' +
            '<td class="ds-mut2">' + r[3] + '</td>' +
            '<td><button class="ds-btn ds-btn--sm ds-btn--ghost">Создать задачу</button></td></tr>';
        }).join('') + '</tbody></table></div></div>');
};

/* ---------- Support admin ---------- */
A.tickets = function () {
  var T = [
    ['#DS-10482', 'Анна Ковалёва', 'Описание звука не соответствует сцене', 'Ошибка CC+', 'Год тишины', 'norm', 'Обычный', 'Мария Р.', 'info', 'В работе', '14:42', 0],
    ['#DS-10481', 'Пётр Волков', 'Не запускается 4K на Android', 'Видео', 'Пепел и снег', 'high', 'Высокий', 'Технические', 'info', 'В работе', '13:20', 1],
    ['#DS-10479', 'Елена Крон', 'Списали дважды за месяц', 'Оплата', '—', 'urg', 'Срочный', 'Финансы', 'warn', 'Ожидает пользователя', '11:04', 1],
    ['#DS-10477', 'Игорь Демидов', 'Субтитры отстают на 3 секунды', 'Субтитры', 'Глубина', 'norm', 'Обычный', 'Мария Р.', '', 'Новое', '10:15', 0],
    ['#DS-10474', 'Ольга Титова', 'Офлайн-фильм не открывается', 'Загрузки', 'Свидетели', 'high', 'Высокий', '—', '', 'Новое', '09:40', 0],
    ['#DS-10470', 'Мария Лисина', 'Не пришёл чек', 'Оплата', '—', 'low', 'Низкий', 'Финансы', 'ok', 'Решено', 'Вчера', 0]
  ];
  var PR = { urg: 'ds-badge--err', high: 'ds-badge--warn', norm: '', low: '' };
  return adminShell('tickets', 'Обращения', '48 открытых · 2 просрочены',
    '<button class="ds-btn ds-btn--sm ds-btn--secondary">Мои · 12</button>',
    '<div style="display:grid;grid-template-columns:repeat(6,1fr);gap:12px;margin-bottom:18px">' +
      stat('Новые', '14') + stat('В работе', '26') + stat('Ждут пользователя', '8') +
      stat('Просрочены', '2', null, 'err') + stat('Первый ответ', '38 мин') + stat('Решение', '4.2 ч') +
    '</div>' +
    '<div class="ds-between" style="margin-bottom:14px;flex-wrap:wrap;gap:10px">' +
      '<div class="ds-wrap ds-g2">' + ['Все · 48', 'Новые · 14', 'В работе · 26', 'Ждут ответа · 8', 'Решённые', 'Закрытые'].map(function (t, i) {
        return '<button class="ds-chip"' + (i === 0 ? ' aria-pressed="true"' : '') + '>' + t + '</button>'; }).join('') + '</div>' +
      '<div class="ds-row-f ds-g2">' +
        '<select class="ds-select" style="width:auto;min-height:34px;padding:5px 32px 5px 12px;font-size:12.5px"><option>Все категории</option><option>Субтитры и CC+</option><option>Видео</option><option>Оплата</option><option>Загрузки</option></select>' +
        '<select class="ds-select" style="width:auto;min-height:34px;padding:5px 32px 5px 12px;font-size:12.5px"><option>Все исполнители</option><option>Мария Р.</option><option>Технические</option><option>Финансы</option></select></div></div>' +
    '<div class="ds-card ds-card--flush"><div class="ds-tablewrap"><table class="ds-table">' +
      '<thead><tr><th>Номер</th><th>Пользователь</th><th>Тема</th><th>Категория</th><th>Фильм</th><th>Приоритет</th><th>Исполнитель</th><th>Статус</th><th>Активность</th></tr></thead><tbody>' +
      T.map(function (t) {
        return '<tr style="cursor:pointer" data-ago="ticket"' + (t[11] ? ' style="background:rgba(255,92,92,.05);cursor:pointer"' : '') + '>' +
          '<td class="ds-num" style="color:var(--ds-blue)">' + t[0] + (t[11] ? ' <span class="ds-badge ds-badge--err">SLA</span>' : '') + '</td>' +
          '<td>' + t[1] + '</td><td style="font-weight:600">' + t[2] + '</td>' +
          '<td class="ds-mut2">' + t[3] + '</td><td class="ds-mut2">' + t[4] + '</td>' +
          '<td><span class="ds-badge ' + PR[t[5]] + '">' + t[6] + '</span></td>' +
          '<td class="ds-mut2">' + t[7] + '</td>' +
          '<td><span class="ds-badge ' + (t[8] ? 'ds-badge--' + t[8] : '') + '">' + t[9] + '</span></td>' +
          '<td class="ds-num ds-mut2">' + t[10] + '</td></tr>';
      }).join('') + '</tbody></table></div></div>' +
    '<div class="ds-card" style="margin-top:16px">' +
      '<h3 class="ds-h2" style="margin-bottom:12px">Маршрутизация и SLA</h3>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px">' +
        '<div><p class="ds-eyebrow" style="margin-bottom:10px">Кому уходит</p>' +
          '<div class="ds-stack ds-g2">' +
            [['Ошибка в субтитрах, CC+', 'Редактор субтитров'], ['Видео, качество, зависания', 'Технические'],
             ['Оплата, подписка, возврат', 'Финансы'], ['Аккаунт, вход, устройства', 'Поддержка'],
             ['Предложить фильм', 'Контент-менеджер']].map(function (r) {
              return '<div class="ds-between"><span class="ds-cap">' + r[0] + '</span>' +
                '<span class="ds-sm" style="font-weight:600">' + r[1] + '</span></div>';
            }).join('') + '</div></div>' +
        '<div><p class="ds-eyebrow" style="margin-bottom:10px">Целевое время ответа</p>' +
          '<div class="ds-stack ds-g2">' +
            [['Срочный', '1 час', 'err'], ['Высокий', '4 часа', 'warn'], ['Обычный', '24 часа', ''], ['Низкий', '48 часов', '']].map(function (r) {
              return '<div class="ds-between"><span class="ds-badge ' + (r[2] ? 'ds-badge--' + r[2] : '') + '">' + r[0] + '</span>' +
                '<span class="ds-num ds-sm">' + r[1] + '</span></div>';
            }).join('') + '</div></div></div></div>');
};

A.ticket = function () {
  return adminShell('tickets', '#DS-10482 · Описание звука не соответствует сцене', 'Ошибка CC+ · Год тишины · 01:22:18',
    '<button class="ds-btn ds-btn--sm ds-btn--amber" data-ago="editor">Открыть в редакторе субтитров</button>',
    '<div style="display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:20px;align-items:start">' +
      '<div class="ds-card">' +
        '<div class="ds-between" style="padding-bottom:14px;border-bottom:1px solid var(--ds-line);margin-bottom:18px">' +
          '<div class="ds-row-f ds-g2"><span class="ds-badge ds-badge--info ds-badge--lg">В работе</span>' +
            '<span class="ds-badge ds-badge--lg">Обычный приоритет</span>' +
            '<span class="ds-badge ds-badge--lg">Мария Р.</span></div>' +
          '<span class="ds-cap ds-num">Создано 14 сентября, 09:12</span></div>' +

        [[1, 'Анна Ковалёва', '09:12', 'На 01:22:18 в CC+ написано «[дверь резко захлопывается]», но в сцене дверь закрывают очень тихо — это меняет смысл эпизода.'],
         [0, 'Мария Р. · поддержка', '10:40', 'Спасибо, вижу проблему. Открыла редактор на этой реплике, сверяюсь с оригинальной дорожкой. Ответим сегодня.'],
         [0, 'Мария Р. · редактор субтитров', '14:42', 'Вы правы. Исправила на «[дверь тихо закрывается]». Новая версия субтитров опубликована — обновите страницу плеера.']
        ].map(function (m) {
          return '<div style="display:flex;gap:12px;flex-direction:' + (m[0] ? 'row' : 'row-reverse') + ';margin-bottom:16px">' +
            '<div style="width:32px;height:32px;border-radius:99px;flex:none;position:relative;overflow:hidden;' +
              (m[0] ? '' : 'background:var(--ds-amber-dim);border:1px solid var(--ds-amber-edge);display:grid;place-items:center;color:var(--ds-amber)') + '">' +
              (m[0] ? art(m[1], '', 'position:absolute;inset:0') : ic('shield', 16)) + '</div>' +
            '<div style="max-width:78%">' +
              '<div class="ds-row-f ds-g2" style="margin-bottom:5px;' + (m[0] ? '' : 'justify-content:flex-end') + '">' +
                '<span class="ds-sm" style="font-weight:600">' + m[1] + '</span>' +
                '<span class="ds-cap ds-num">' + m[2] + '</span></div>' +
              '<div style="padding:12px 15px;border-radius:var(--ds-r-md);background:' + (m[0] ? 'var(--ds-raised-2)' : 'var(--ds-amber-dim)') +
                ';border:1px solid ' + (m[0] ? 'var(--ds-line)' : 'var(--ds-amber-edge)') + '">' +
                '<p class="ds-sm" style="color:var(--ds-ink)">' + m[3] + '</p></div></div></div>';
        }).join('') +

        '<div style="padding:14px;border-radius:var(--ds-r-md);background:var(--ds-warn-dim);border:1px solid rgba(255,159,69,.3);margin-bottom:18px">' +
          '<div class="ds-row-f ds-g2" style="margin-bottom:7px"><span style="color:var(--ds-warn);display:flex">' + ic('lock', 15) + '</span>' +
            '<span class="ds-cap" style="color:var(--ds-warn);font-weight:700;letter-spacing:.08em">ВНУТРЕННЯЯ ЗАМЕТКА · НЕ ВИДНА ПОЛЬЗОВАТЕЛЮ</span></div>' +
          '<p class="ds-sm">Сверила с исходной дорожкой — звук закрывающейся двери −28 dB, режиссёрская задумка. ' +
          'Проверить остальные описания дверей в этом фильме, там ещё два похожих места.</p>' +
          '<p class="ds-cap ds-num" style="margin-top:7px">Мария Р. · 14 сентября, 13:58</p></div>' +

        '<div class="ds-field"><label class="ds-label">Ответ пользователю</label>' +
          '<textarea class="ds-textarea" placeholder="Сообщение будет отправлено пользователю и придёт push-уведомлением"></textarea>' +
          '<div class="ds-between" style="margin-top:10px">' +
            '<div class="ds-row-f ds-g2">' +
              '<button class="ds-btn ds-btn--sm ds-btn--ghost">' + ic('paperclip', 13) + ' Прикрепить</button>' +
              '<button class="ds-btn ds-btn--sm ds-btn--ghost">' + ic('lock', 13) + ' Внутренняя заметка</button></div>' +
            '<div class="ds-row-f ds-g2">' +
              '<select class="ds-select" style="width:auto;min-height:34px;padding:5px 32px 5px 12px;font-size:12.5px"><option>Решено</option><option>В работе</option><option>Ожидает пользователя</option><option>Закрыто</option></select>' +
              '<button class="ds-btn ds-btn--sm ds-btn--primary">Отправить</button></div></div></div></div>' +

      '<div class="ds-stack ds-g4" style="position:sticky;top:84px">' +
        '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:12px">Пользователь</h3>' +
          '<button class="ds-row" data-ago="user" style="border-radius:var(--ds-r-sm);border-bottom:0;padding:9px 0">' +
            '<div style="width:34px;height:34px;border-radius:99px;position:relative;overflow:hidden;flex:none;margin-right:10px">' + art('Анна Ковалёва', '', 'position:absolute;inset:0') + '</div>' +
            '<span class="ds-row__main"><span class="ds-row__title" style="font-size:13.5px">Анна Ковалёва</span>' +
            '<span class="ds-row__sub ds-num">anna.k@example.ru</span></span>' +
            '<span class="ds-row__chev">' + ic('chevR', 15) + '</span></button>' +
          '<div class="ds-stack ds-g2" style="margin-top:12px;padding-top:12px;border-top:1px solid var(--ds-line)">' +
            [['Подписка', 'ВИП · активна'], ['Обращений', '3'], ['Регистрация', '12 мар 2026']].map(function (r) {
              return '<div class="ds-between"><span class="ds-cap">' + r[0] + '</span>' +
                '<span class="ds-sm" style="font-weight:600">' + r[1] + '</span></div>';
            }).join('') + '</div></div>' +

        '<div class="ds-card" style="border-color:var(--ds-amber-edge)">' +
          '<h3 class="ds-h2" style="margin-bottom:12px">Данные из плеера</h3>' +
          '<div class="ds-stack ds-g2">' +
            [['Фильм', 'Год тишины'], ['ID', 'DS-M-04187'], ['Момент', '01:22:18'], ['Реплика', '#418–419'],
             ['Язык', 'Русский'], ['Тип', 'CC+'], ['Качество', '1080p (AUTO)'], ['Озвучка', 'Русский'],
             ['Платформа', 'Web · Chrome 141'], ['Устройство', 'macOS 15.2'], ['Версия', '4.8.2']].map(function (r) {
              return '<div class="ds-between"><span class="ds-cap">' + r[0] + '</span>' +
                '<span class="ds-num" style="font-size:11.5px;color:var(--ds-ink-2)">' + r[1] + '</span></div>';
            }).join('') + '</div>' +
          '<button class="ds-btn ds-btn--sm ds-btn--amber ds-btn--block" data-ago="editor" style="margin-top:14px">Открыть 01:22:18 в редакторе</button></div>' +

        '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:12px">Назначение</h3>' +
          '<div class="ds-field" style="margin-bottom:10px"><label class="ds-label">Исполнитель</label>' +
            '<select class="ds-select"><option>Мария Р. · Редактор субтитров</option><option>Игорь С. · Технические</option><option>Финансы</option></select></div>' +
          '<div class="ds-field"><label class="ds-label">Приоритет</label>' +
            '<select class="ds-select"><option>Обычный</option><option>Низкий</option><option>Высокий</option><option>Срочный</option></select></div></div>' +

        '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:12px">История</h3>' +
          '<div class="ds-stack ds-g3">' +
            [['Новое', '09:12'], ['Принято', '09:40'], ['В работе · Редактор субтитров', '10:40'],
             ['Субтитры исправлены, v4 опубликована', '14:42']].map(function (r, i, arr) {
              return '<div class="ds-row-f ds-g3"><span style="width:8px;height:8px;border-radius:99px;flex:none;background:' +
                (i === arr.length - 1 ? 'var(--ds-blue)' : 'var(--ds-ok)') + '"></span>' +
                '<div class="ds-grow"><div class="ds-cap" style="color:var(--ds-ink-2)">' + r[0] + '</div>' +
                '<div class="ds-cap ds-num">' + r[1] + '</div></div></div>';
            }).join('') + '</div></div></div></div>');
};

/* ---------- Roles ---------- */
A.roles = function () {
  var ROLES = ['OWNER', 'ADMIN', 'КОНТЕНТ', 'СУБТИТРЫ', 'ПОДДЕРЖКА', 'ТЕХНИЧЕСКИЕ', 'ФИНАНСЫ', 'АНАЛИТИК'];
  var PERMS = [
    ['Публиковать и удалять фильмы',   [1, 1, 1, 0, 0, 0, 0, 0]],
    ['Загружать мастер-видео',         [1, 1, 1, 0, 0, 1, 0, 0]],
    ['Редактировать субтитры и CC+',   [1, 1, 0, 1, 0, 0, 0, 0]],
    ['Публиковать версии субтитров',   [1, 1, 0, 1, 0, 0, 0, 0]],
    ['Перезапускать обработку видео',  [1, 1, 0, 0, 0, 1, 0, 0]],
    ['Видеть email пользователей',     [1, 1, 0, 0, 1, 0, 1, 0]],
    ['Видеть историю просмотра',       [1, 1, 0, 0, 0, 0, 0, 0]],
    ['Блокировать пользователей',      [1, 1, 0, 0, 0, 0, 0, 0]],
    ['Видеть платежи',                 [1, 1, 0, 0, 0, 0, 1, 0]],
    ['Делать возврат',                 [1, 0, 0, 0, 0, 0, 1, 0]],
    ['Работать с обращениями',         [1, 1, 0, 1, 1, 1, 1, 0]],
    ['Смотреть аналитику',             [1, 1, 1, 0, 0, 0, 1, 1]],
    ['Менять API-интеграции',          [1, 1, 0, 0, 0, 0, 0, 0]],
    ['Менять роли сотрудников',        [1, 0, 0, 0, 0, 0, 0, 0]],
    ['Удалять безвозвратно',           [1, 0, 0, 0, 0, 0, 0, 0]]
  ];
  return adminShell('roles', 'Роли и доступы', '8 ролей · 14 сотрудников',
    '<button class="ds-btn ds-btn--sm ds-btn--primary">' + ic('plus', 14) + ' Добавить сотрудника</button>',
    '<div class="ds-card ds-card--flush" style="margin-bottom:16px"><div class="ds-tablewrap"><table class="ds-table">' +
      '<thead><tr><th style="min-width:250px">Право</th>' + ROLES.map(function (r) {
        return '<th style="text-align:center;font-size:9px">' + r + '</th>'; }).join('') + '</tr></thead><tbody>' +
      PERMS.map(function (p) {
        return '<tr><td style="font-weight:500">' + p[0] + '</td>' +
          p[1].map(function (v) {
            return '<td style="text-align:center">' + (v
              ? '<span style="color:var(--ds-ok);display:inline-flex">' + ic('check', 15, 2.8) + '</span>'
              : '<span style="color:var(--ds-ink-4);display:inline-flex">' + ic('minus', 15, 2.8) + '</span>') + '</td>';
          }).join('') + '</tr>';
      }).join('') + '</tbody></table></div></div>' +
    '<div class="ds-card ds-card--flush"><div class="ds-tablewrap"><table class="ds-table">' +
      '<thead><tr><th>Сотрудник</th><th>Роль</th><th>2FA</th><th>Последний вход</th><th></th></tr></thead><tbody>' +
      [['Артём Е.', 'a.e@deafsuslik.ru', 'OWNER', 1, 'Сейчас'],
       ['Игорь Соловьёв', 'i.s@deafsuslik.ru', 'ТЕХНИЧЕСКИЕ', 1, '2 часа назад'],
       ['Мария Романова', 'maria.r@deafsuslik.ru', 'СУБТИТРЫ', 1, 'Сейчас'],
       ['Ольга Ким', 'o.kim@deafsuslik.ru', 'КОНТЕНТ', 1, 'Вчера'],
       ['Денис Полев', 'd.polev@deafsuslik.ru', 'ФИНАНСЫ', 0, '3 дня назад']].map(function (r) {
        return '<tr><td><div class="ds-row-f ds-g3">' +
          '<div style="width:28px;height:28px;border-radius:99px;position:relative;overflow:hidden;flex:none">' + art(r[0], '', 'position:absolute;inset:0') + '</div>' +
          '<div><div style="font-weight:600">' + r[0] + '</div><div class="ds-cap ds-num">' + r[1] + '</div></div></div></td>' +
          '<td><span class="ds-badge ' + (r[2] === 'OWNER' ? 'ds-badge--blue' : '') + '">' + r[2] + '</span></td>' +
          '<td>' + (r[3] ? '<span class="ds-badge ds-badge--ok">Включена</span>' : '<span class="ds-badge ds-badge--err">Выключена</span>') + '</td>' +
          '<td class="ds-num ds-mut2">' + r[4] + '</td>' +
          '<td><button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" aria-label="Действия">' + ic('moreH', 15) + '</button></td></tr>';
      }).join('') + '</tbody></table></div></div>' +
    '<div class="ds-strip" style="margin-top:16px">' +
      '<span class="ds-strip__label">Принцип</span>' +
      '<p class="ds-sm" style="margin:0">Разделы, недоступные роли, не отображаются в меню вообще — сотрудник не видит того, ' +
      'к чему у него нет доступа. Опасные действия (удалить фильм, удалить пользователя, сменить роль, отключить интеграцию, ' +
      'вернуть платёж) требуют повторного ввода пароля.</p></div>');
};

/* ---------- Audit log ---------- */
A.audit = function () {
  var L = [
    ['Мария Романова', 'СУБТИТРЫ', 'Отредактировала Русский CC+', 'Год тишины · реплика #419 · 01:22:19', '2 сен, 14:42', 'edit'],
    ['Мария Романова', 'СУБТИТРЫ', 'Опубликовала версию субтитров v4', 'Год тишины · Русский CC+', '2 сен, 14:43', 'upload'],
    ['Игорь Соловьёв', 'ТЕХНИЧЕСКИЕ', 'Перезапустил обработку 4K', 'Ночная смена', '2 сен, 13:10', 'refresh'],
    ['Ольга Ким', 'КОНТЕНТ', 'Опубликовала фильм', 'Свидетели', '2 сен, 13:10', 'check'],
    ['Система', '—', 'Завершила обработку', 'Пепел и снег · 4K UHD', '2 сен, 12:04', 'cloud'],
    ['Денис Полев', 'ФИНАНСЫ', 'Оформил возврат 500 ₽', 'DS-PAY-88190 · Елена Крон', '1 сен, 22:41', 'card'],
    ['Артём Е.', 'OWNER', 'Изменил роль сотрудника', 'Мария Романова: ПОДДЕРЖКА → СУБТИТРЫ', '1 сен, 18:20', 'shield'],
    ['Ольга Ким', 'КОНТЕНТ', 'Продлила лицензию', 'Территория льда · до 31.12.2027', '1 сен, 11:20', 'shield'],
    ['Артём Е.', 'OWNER', 'Обновил ключ интеграции', 'Северный каталог · production', '31 авг, 16:02', 'key']
  ];
  return adminShell('audit', 'Журнал действий', 'Хранится 24 месяца, изменению не подлежит',
    '<button class="ds-btn ds-btn--sm ds-btn--secondary">Экспорт</button>',
    '<div class="ds-between" style="margin-bottom:14px">' +
      '<div class="ds-wrap ds-g2">' + ['Все', 'Контент', 'Субтитры', 'Пользователи', 'Финансы', 'Система', 'Опасные'].map(function (t, i) {
        return '<button class="ds-chip"' + (i === 0 ? ' aria-pressed="true"' : '') + '>' + t + '</button>'; }).join('') + '</div>' +
      '<select class="ds-select" style="width:auto;min-height:34px;padding:5px 32px 5px 12px;font-size:12.5px"><option>Все сотрудники</option></select></div>' +
    '<div class="ds-card ds-card--flush">' + L.map(function (r) {
      return '<div class="ds-row" style="cursor:default;padding:14px 18px;align-items:flex-start">' +
        '<span class="ds-row__ico" style="margin-top:2px">' + ic(r[5], 18) + '</span>' +
        '<span class="ds-row__main"><span class="ds-row__title" style="font-size:13.5px">' +
          '<strong>' + r[0] + '</strong> · ' + r[2] + '</span>' +
        '<span class="ds-row__sub ds-num">' + r[3] + '</span></span>' +
        '<span class="ds-badge">' + r[1] + '</span>' +
        '<span class="ds-row__meta ds-num" style="margin-left:12px">' + r[4] + '</span></div>';
    }).join('') + '</div>');
};

/* ---------- Storage / rights / trash / settings ---------- */
A.storage = function () {
  return adminShell('storage', 'Хранилище', '3.9 TB из 5 TB · 78%', '',
    '<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:14px;margin-bottom:18px">' +
      stat('Мастер-файлы', '2.4 TB') + stat('Готовые качества', '1.28 TB') +
      stat('Изображения', '164 GB') + stat('Субтитры', '2.1 GB') + stat('Свободно', '1.1 TB', null, 'warn') +
    '</div>' +
    '<div class="ds-card" style="margin-bottom:16px">' +
      '<div class="ds-between" style="margin-bottom:12px"><h3 class="ds-h2">Распределение</h3>' +
        '<span class="ds-num ds-sm ds-mut">3.9 / 5 TB</span></div>' +
      '<div style="height:14px;border-radius:99px;background:var(--ds-raised-3);overflow:hidden;display:flex">' +
        '<div style="width:48%;background:var(--ds-blue)"></div><div style="width:26%;background:var(--ds-blue-lo)"></div>' +
        '<div style="width:3.3%;background:var(--ds-amber)"></div><div style="width:0.6%;background:var(--ds-ok)"></div></div>' +
      '<div class="ds-wrap ds-g6" style="margin-top:12px">' +
        [['Мастер-файлы 2.4 TB', 'var(--ds-blue)'], ['Качества 1.28 TB', 'var(--ds-blue-lo)'],
         ['Изображения 164 GB', 'var(--ds-amber)'], ['Субтитры 2.1 GB', 'var(--ds-ok)'],
         ['Свободно 1.1 TB', 'var(--ds-raised-3)']].map(function (s) {
          return '<div class="ds-row-f ds-g2"><span style="width:9px;height:9px;border-radius:3px;background:' + s[1] + '"></span>' +
            '<span class="ds-cap">' + s[0] + '</span></div>';
        }).join('') + '</div>' +
      '<div class="ds-strip" style="margin-top:16px;border-left-color:var(--ds-warn);background:var(--ds-warn-dim)">' +
        '<span class="ds-strip__label" style="color:var(--ds-warn)">Совет</span>' +
        '<p class="ds-cap" style="margin:0">Мастер-файлы 214 архивных фильмов не открывались 12 месяцев — 680 GB. ' +
        'Их можно перенести в холодное хранилище без потери готовых качеств.</p></div></div>' +
    '<div class="ds-card ds-card--flush"><div class="ds-tablewrap"><table class="ds-table">' +
      '<thead><tr><th>Фильм</th><th>Мастер</th><th>Качества</th><th>Субтитры</th><th>Всего</th><th>Последний просмотр</th><th></th></tr></thead><tbody>' +
      [[9, '184 GB', '21.4 GB', '2.4 MB', '205 GB', 'Сейчас'],
       [6, '162 GB', '19.8 GB', '1.8 MB', '182 GB', '2 часа назад'],
       [0, '148 GB', '18.2 GB', '2.1 MB', '166 GB', 'Вчера'],
       [17, '96 GB', '11.4 GB', '0.9 MB', '107 GB', '14 месяцев назад']].map(function (r, i) {
        var m = M(r[0]);
        return '<tr><td><div class="ds-row-f ds-g3">' +
          '<div style="width:28px;aspect-ratio:2/3;border-radius:4px;overflow:hidden;position:relative;flex:none">' + art(m.t, '', 'position:absolute;inset:0') + '</div>' +
          '<span style="font-weight:600">' + m.t + '</span></div></td>' +
          '<td class="ds-num">' + r[1] + '</td><td class="ds-num">' + r[2] + '</td><td class="ds-num">' + r[3] + '</td>' +
          '<td class="ds-num" style="font-weight:700">' + r[4] + '</td>' +
          '<td class="ds-num ' + (i === 3 ? '' : 'ds-mut2') + '"' + (i === 3 ? ' style="color:var(--ds-warn)"' : '') + '>' + r[5] + '</td>' +
          '<td>' + (i === 3 ? '<button class="ds-btn ds-btn--sm ds-btn--secondary">В архив</button>' : '') + '</td></tr>';
      }).join('') + '</tbody></table></div></div>');
};

A.rights = function () {
  return adminShell('rights', 'Права и лицензии', '5 лицензий истекают в ближайшие 14 дней', '',
    '<div class="ds-card ds-card--flush" style="margin-bottom:16px"><div class="ds-tablewrap"><table class="ds-table">' +
      '<thead><tr><th>Фильм</th><th>Правообладатель</th><th>Территории</th><th>Действует</th><th>Онлайн</th><th>Офлайн</th><th>4K</th><th>Статус</th></tr></thead><tbody>' +
      [[9, 'Северный каталог', 'RU · BY · KZ', 'до 31.12.2027', 1, 1, 1, 'ok', 'Действует'],
       [6, 'Sever Katalog LLC', 'RU', 'до 14.09.2026', 1, 1, 0, 'warn', 'Истекает через 12 дней'],
       [0, 'Пирамида Медиа', 'RU · BY', 'до 30.06.2028', 1, 1, 1, 'ok', 'Действует'],
       [17, 'Nordic Films', 'RU', 'истекла 28.08.2026', 0, 0, 0, 'err', 'Истекла — фильм скрыт'],
       [14, 'Восток Дистрибуция', 'RU · KZ', 'до 09.09.2026', 1, 0, 1, 'warn', 'Истекает через 7 дней']].map(function (r) {
        var m = M(r[0]);
        return '<tr><td><div class="ds-row-f ds-g3">' +
          '<div style="width:28px;aspect-ratio:2/3;border-radius:4px;overflow:hidden;position:relative;flex:none">' + art(m.t, '', 'position:absolute;inset:0') + '</div>' +
          '<span style="font-weight:600">' + m.t + '</span></div></td>' +
          '<td class="ds-mut2">' + r[1] + '</td><td class="ds-num" style="font-size:11.5px">' + r[2] + '</td>' +
          '<td class="ds-num ds-mut2">' + r[3] + '</td>' +
          [4, 5, 6].map(function (k) {
            return '<td>' + (r[k] ? '<span style="color:var(--ds-ok);display:flex">' + ic('check', 15, 2.6) + '</span>'
              : '<span style="color:var(--ds-ink-4);display:flex">' + ic('minus', 15, 2.6) + '</span>') + '</td>';
          }).join('') +
          '<td><span class="ds-badge ds-badge--' + r[7] + '">' + r[8] + '</span></td></tr>';
      }).join('') + '</tbody></table></div></div>' +
    '<div class="ds-strip" style="border-left-color:var(--ds-err);background:var(--ds-err-dim)">' +
      '<span class="ds-strip__label" style="color:var(--ds-err)">Автоматика</span>' +
      '<p class="ds-sm" style="margin:0">Истечение лицензии автоматически скрывает фильм из каталога и делает скачанные копии ' +
      'недоступными на следующий день. Импорт метаданных через API не создаёт прав на показ — публикация без ' +
      'заполненной лицензии невозможна.</p></div>');
};

A.trash = function () {
  return adminShell('trash', 'Корзина', 'Удалённое хранится 30 дней, потом стирается безвозвратно', '',
    '<div class="ds-card ds-card--flush"><div class="ds-tablewrap"><table class="ds-table">' +
      '<thead><tr><th>Объект</th><th>Тип</th><th>Удалил</th><th>Когда</th><th>Сотрётся через</th><th></th></tr></thead><tbody>' +
      [['Ночная смена', 'Фильм', 'Ольга Ким', '28 авг', '4 дня'],
       ['Français SUB · Год тишины', 'Субтитры', 'Мария Р.', '30 авг', '6 дней'],
       ['Кино для поездки', 'Коллекция', 'Ольга Ким', '1 сен', '28 дней'],
       ['s.kim@example.ru', 'Пользователь', 'Артём Е.', '1 июл', 'Стёрт']].map(function (r, i) {
        return '<tr><td style="font-weight:600">' + r[0] + '</td><td class="ds-mut2">' + r[1] + '</td>' +
          '<td class="ds-mut2">' + r[2] + '</td><td class="ds-num ds-mut2">' + r[3] + '</td>' +
          '<td class="ds-num"' + (i === 0 ? ' style="color:var(--ds-warn)"' : '') + '>' + r[4] + '</td>' +
          '<td><div class="ds-row-f ds-g2">' +
            (i === 3 ? '' : '<button class="ds-btn ds-btn--sm ds-btn--secondary">Восстановить</button>' +
            '<button class="ds-btn ds-btn--sm ds-btn--danger">Стереть</button>') + '</div></td></tr>';
      }).join('') + '</tbody></table></div></div>' +
    '<div class="ds-strip" style="margin-top:16px;border-left-color:var(--ds-err);background:var(--ds-err-dim)">' +
      '<span class="ds-strip__label" style="color:var(--ds-err)">Подтверждение</span>' +
      '<p class="ds-sm" style="margin:0">Безвозвратное удаление требует ввода названия объекта и повторного ввода пароля. ' +
      'Право есть только у роли OWNER.</p></div>');
};

A.api = function () {
  return adminShell('api', 'API и интеграции', '2 подключения',
    '<button class="ds-btn ds-btn--sm ds-btn--primary">' + ic('plus', 14) + ' Добавить интеграцию</button>',
    '<div class="ds-stack ds-g4">' +
      [['Северный каталог', 'api.severkatalog.ru/v2', 'production', 'ok', 'Подключено', 'Метаданные, обложки, права', '2 сен, 12:04'],
       ['Тестовый источник', 'sandbox.example.ru/v1', 'test', 'warn', 'Ключ истекает через 8 дней', 'Только метаданные', '28 авг']].map(function (r) {
        return '<div class="ds-card">' +
          '<div class="ds-between"><div class="ds-row-f ds-g3">' +
            '<span style="color:var(--ds-' + r[3] + ');display:flex">' + ic(r[3] === 'ok' ? 'checkc' : 'alert', 22) + '</span>' +
            '<div><div class="ds-h3">' + r[0] + '</div>' +
            '<div class="ds-cap ds-num">' + r[1] + '</div></div></div>' +
            '<div class="ds-row-f ds-g2">' +
              '<span class="ds-badge ' + (r[2] === 'production' ? 'ds-badge--blue' : '') + '">' + r[2] + '</span>' +
              '<span class="ds-badge ds-badge--' + r[3] + '">' + r[4] + '</span></div></div>' +
          '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:16px;padding-top:14px;border-top:1px solid var(--ds-line)">' +
            '<div><div class="ds-cap">Что импортирует</div><div class="ds-sm" style="margin-top:3px">' + r[5] + '</div></div>' +
            '<div><div class="ds-cap">Последний импорт</div><div class="ds-sm ds-num" style="margin-top:3px">' + r[6] + '</div></div>' +
            '<div><div class="ds-cap">Ключ</div>' +
              '<div class="ds-row-f ds-g2" style="margin-top:3px"><span class="ds-num ds-sm">sk_••••••••••••4f2a</span>' +
              '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" aria-label="Показать ключ">' + ic('eye', 14) + '</button></div></div></div>' +
          '<div class="ds-row-f ds-g2" style="margin-top:14px">' +
            '<button class="ds-btn ds-btn--sm ds-btn--secondary">Проверить соединение</button>' +
            '<button class="ds-btn ds-btn--sm ds-btn--ghost">Обновить ключ</button>' +
            '<button class="ds-btn ds-btn--sm ds-btn--ghost" data-ago="api-import">Импортировать</button>' +
            '<div class="ds-grow"></div>' +
            '<button class="ds-btn ds-btn--sm ds-btn--danger">Отключить</button></div></div>';
      }).join('') + '</div>' +
    '<div class="ds-strip" style="margin-top:16px;border-left-color:var(--ds-err);background:var(--ds-err-dim)">' +
      '<span class="ds-strip__label" style="color:var(--ds-err)">Безопасность</span>' +
      '<p class="ds-sm" style="margin:0">Ключи и секреты хранятся только на сервере и никогда не попадают в клиентский код ' +
      'публичного приложения. В админке ключ показывается замаскированным; полное значение доступно только роли OWNER ' +
      'после повторного ввода пароля и записывается в журнал действий.</p></div>');
};

A.collections = function () {
  var C = [['Лучшее с CC+', 340, 'Опубликована', 'ok', 'var(--ds-amber)'],
    ['Основано на реальных событиях', 214, 'Опубликована', 'ok', 'var(--ds-coll)'],
    ['Медленное кино', 96, 'Опубликована', 'ok', 'var(--ds-coll)'],
    ['Фильмы на вечер', 42, 'Опубликована', 'ok', 'var(--ds-blue)'],
    ['Лучшее в 4K', 268, 'Опубликована', 'ok', 'var(--ds-blue)'],
    ['Кино для поездки', 88, 'Черновик', '', 'var(--ds-raised-3)'],
    ['Новинки недели', 18, 'Запланирована на 5 сен', 'warn', 'var(--ds-blue)']];
  return adminShell('collections', 'Коллекции', '7 редакционных подборок',
    '<button class="ds-btn ds-btn--sm ds-btn--primary">' + ic('plus', 14) + ' Новая коллекция</button>',
    '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px">' +
      C.map(function (c) {
        return '<div class="ds-card ds-card--flush">' +
          '<div style="display:grid;grid-template-columns:repeat(3,1fr);height:110px;gap:1px;position:relative">' +
            [0, 1, 2].map(function (k) { return '<div style="position:relative;overflow:hidden">' + art(c[0] + k, '', 'position:absolute;inset:0') + '</div>'; }).join('') +
            '<div style="position:absolute;left:0;top:0;bottom:0;width:4px;background:' + c[4] + '"></div></div>' +
          '<div style="padding:14px 16px">' +
            '<div class="ds-between"><h3 class="ds-h3">' + c[0] + '</h3>' +
              '<span class="ds-badge ' + (c[3] ? 'ds-badge--' + c[3] : '') + '">' + c[2] + '</span></div>' +
            '<p class="ds-cap ds-num" style="margin-top:4px">' + c[1] + ' фильмов</p>' +
            '<div class="ds-row-f ds-g2" style="margin-top:12px">' +
              '<button class="ds-btn ds-btn--sm ds-btn--secondary ds-grow">Редактировать</button>' +
              '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" aria-label="Действия">' + ic('moreH', 15) + '</button></div></div></div>';
      }).join('') + '</div>' +
    '<div class="ds-card" style="margin-top:18px">' +
      '<h3 class="ds-h2" style="margin-bottom:14px">Главная страница — порядок блоков</h3>' +
      '<p class="ds-sm" style="margin-bottom:14px">Перетащите, чтобы изменить порядок. Блок «Продолжить просмотр» персональный и всегда идёт первым.</p>' +
      '<div class="ds-stack ds-g2">' +
        [['Герой — фильм недели', 'Год тишины', 1], ['Продолжить просмотр', 'персональный', 0],
         ['Для вас', 'рекомендации', 0], ['Популярное', 'автоматически', 0], ['Новинки', 'автоматически', 0],
         ['Подписка ВИП', 'блок тарифа', 0], ['С субтитрами', 'коллекция', 0], ['Лучшее с CC+', 'коллекция', 0],
         ['Доступно в 4K', 'коллекция', 0], ['Можно скачать', 'коллекция', 0]].map(function (r) {
          return '<div class="ds-row-f ds-g3" style="padding:11px 14px;border-radius:var(--ds-r-md);background:var(--ds-void);border:1px solid var(--ds-line)">' +
            '<span style="color:var(--ds-ink-4);display:flex;cursor:grab">' + ic('drag', 16) + '</span>' +
            '<span class="ds-sm ds-grow" style="font-weight:600;color:var(--ds-ink)">' + r[0] + '</span>' +
            '<span class="ds-cap">' + r[1] + '</span>' +
            (r[2] ? '<button class="ds-btn ds-btn--sm ds-btn--ghost">Сменить фильм</button>' : '') +
            '<label class="ds-switch"><input type="checkbox" checked><span class="ds-switch__track"></span><span class="ds-switch__thumb"></span></label></div>';
        }).join('') + '</div></div>');
};
