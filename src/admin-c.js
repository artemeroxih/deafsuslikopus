/* ============================================================
   DeafSuslik Admin — экраны, которых не хватало
   Главная страница, сериалы, обработка, подписки,
   выручка, поиск, настройки
   ============================================================ */

/* ---------- Управление главной страницей ---------- */
A.homepage = function () {
  var BLOCKS = [
    ['Герой — фильм недели', 'Год тишины', 1, 'выбран вручную'],
    ['Продолжить просмотр', 'персональный', 1, 'считается автоматически'],
    ['Для вас', 'рекомендации', 1, 'считается автоматически'],
    ['Популярное', 'топ за 7 дней', 1, 'считается автоматически'],
    ['Новинки', 'последние 30 дней', 1, 'считается автоматически'],
    ['Подписка ВИП', 'блок тарифа', 1, 'фиксированный'],
    ['Лучшее с CC+', 'коллекция', 1, 'коллекция'],
    ['Реальные события', 'коллекция', 1, 'коллекция'],
    ['Доступно в 4K', 'коллекция', 1, 'коллекция'],
    ['Можно скачать', 'коллекция', 1, 'коллекция'],
    ['Фильмы на вечер', 'коллекция', 0, 'коллекция'],
    ['Недавно добавлено', 'автоматически', 1, 'считается автоматически']
  ];
  // Пресеты проверены на контраст заранее — произвольный цвет недоступен
  var THEMES = [
    ['Бирюза', '#35E0CB', '11.9:1', 1],
    ['Синий', '#4C8DFF', '6.1:1', 0],
    ['Фиолетовый', '#9B8CFF', '7.1:1', 0],
    ['Янтарь', '#FFD426', '12.4:1', 0]
  ];

  return adminShell('homepage', 'Главная страница', 'Что видит зритель при входе',
    '<button class="ds-btn ds-btn--sm ds-btn--secondary">Предпросмотр</button>' +
    '<button class="ds-btn ds-btn--sm ds-btn--primary">Опубликовать</button>',

    '<div style="display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:20px;align-items:start">' +
      '<div class="ds-stack ds-g4">' +

        /* --- герой --- */
        '<div class="ds-card">' +
          '<div class="ds-between" style="margin-bottom:16px"><h3 class="ds-h2">Герой</h3>' +
            '<span class="ds-badge ds-badge--ok">Опубликован</span></div>' +
          '<div class="ds-row-f ds-g4">' +
            '<div style="width:150px;flex:none;position:relative;aspect-ratio:16/9;border-radius:var(--ds-r-md);overflow:hidden;border:1px solid var(--ds-line)">' +
              art('Год тишиныhero', '', 'position:absolute;inset:0') + '</div>' +
            '<div class="ds-grow ds-stack ds-g3">' +
              '<div class="ds-field"><label class="ds-label">Фильм в герое</label>' +
                '<div class="ds-search" style="min-height:44px"><span style="color:var(--ds-ink-3);display:flex">' + ic('search', 17) + '</span>' +
                '<input value="Год тишины (2025)" style="font-size:13px"></div></div>' +
              '<div class="ds-field"><label class="ds-label">Надзаголовок</label>' +
                '<input class="ds-input" value="Фильм недели" style="min-height:42px"></div></div></div>' +
          '<div class="ds-field" style="margin-top:14px"><label class="ds-label">Описание в герое — можно переопределить</label>' +
            '<textarea class="ds-textarea" style="min-height:70px">Оператор северной станции теряет связь с материком и остаётся один на один с тишиной, которую он сам когда-то выбрал.</textarea>' +
            '<span class="ds-help">Пусто — возьмётся описание из карточки фильма.</span></div>' +
          '<div class="ds-row-f ds-g3" style="margin-top:14px">' +
            '<div class="ds-field ds-grow"><label class="ds-label">Первая кнопка</label>' +
              '<select class="ds-select" style="min-height:42px"><option>Смотреть</option><option>Продолжить</option><option>Трейлер</option></select></div>' +
            '<div class="ds-field ds-grow"><label class="ds-label">Показывать до</label>' +
              '<input class="ds-input" value="09.09.2026" style="min-height:42px"></div></div></div>' +

        /* --- порядок блоков --- */
        '<div class="ds-card">' +
          '<div class="ds-between" style="margin-bottom:6px"><h3 class="ds-h2">Блоки и порядок</h3>' +
            '<button class="ds-btn ds-btn--sm ds-btn--ghost">' + ic('plus', 13) + ' Добавить блок</button></div>' +
          '<p class="ds-cap" style="margin-bottom:14px">Перетащите за ручку. «Продолжить просмотр» персональный: у каждого зрителя свои фильмы.</p>' +
          '<div class="ds-stack ds-g2">' + BLOCKS.map(function (b, i) {
            return '<div class="ds-row-f ds-g3" style="padding:11px 13px;border-radius:var(--ds-r-md);background:var(--ds-void);border:1px solid var(--ds-line)' +
              (b[2] ? '' : ';opacity:.5') + '">' +
              '<span style="color:var(--ds-ink-4);display:flex;cursor:grab">' + ic('drag', 16) + '</span>' +
              '<span class="ds-num ds-mut2" style="width:20px;font-size:11px">' + (i + 1) + '</span>' +
              '<span class="ds-grow" style="font-size:13.5px;font-weight:600">' + b[0] + '</span>' +
              '<span class="ds-cap">' + b[3] + '</span>' +
              '<span class="ds-badge">' + b[1] + '</span>' +
              '<label class="ds-switch"><input type="checkbox"' + (b[2] ? ' checked' : '') + '><span class="ds-switch__track"></span><span class="ds-switch__thumb"></span></label></div>';
          }).join('') + '</div></div>' +

        /* --- оформление --- */
        '<div class="ds-card">' +
          '<h3 class="ds-h2" style="margin-bottom:6px">Оформление</h3>' +
          '<p class="ds-cap" style="margin-bottom:16px">Здесь намеренно нельзя всё. Ниже объяснено, что можно менять и почему остальное закрыто.</p>' +

          '<p class="ds-label" style="margin-bottom:9px">Акцент кампании</p>' +
          '<div class="ds-wrap ds-g2">' + THEMES.map(function (t) {
            return '<button class="ds-chip" style="height:44px;padding:0 14px' + (t[3] ? ';border-color:var(--ds-accent);border-width:2px' : '') + '">' +
              '<span style="width:16px;height:16px;border-radius:99px;background:' + t[1] + ';margin-right:8px"></span>' +
              '<span style="text-align:left"><span style="display:block;font-size:12.5px">' + t[0] + '</span>' +
              '<span class="ds-num" style="display:block;font-size:9.5px;color:var(--ds-ok)">' + t[2] + '</span></span></button>';
          }).join('') + '</div>' +
          '<p class="ds-cap" style="margin-top:10px">Четыре проверенных варианта. У каждого под названием — измеренный контраст на фоне. ' +
          'Произвольный цвет закрыт: пипетка позволила бы выбрать оттенок, на котором текст перестанет читаться.</p>' +

          '<div class="ds-divider" style="margin:18px 0"></div>' +

          '<div class="ds-stack ds-g3">' +
            [['Шрифт', 'Playfair Display + Onest', 'Закрыт', 'Гарнитуры — часть узнаваемости продукта. Смена шрифта на одной странице разрушает связь с остальными 107 экранами.'],
             ['Цвет фона', 'Из палитры системы', 'Закрыт', 'Фон задаёт контраст для всего текста сразу. Свободный выбор ломает читаемость там, где её никто не проверит.'],
             ['Подложка героя', 'Кадр фильма', 'Открыт', 'Берётся из карточки выбранного фильма. Можно загрузить отдельную — требования: 2560×1440, до 4 МБ.'],
             ['Название сервиса', 'DeafSuslik', 'Закрыт', 'Меняется только в Настройках и сразу везде, а не на отдельной странице.']].map(function (r) {
              var open = r[2] === 'Открыт';
              return '<div style="padding:13px 14px;border-radius:var(--ds-r-md);background:var(--ds-void);border:1px solid ' +
                (open ? 'var(--ds-line)' : 'rgba(255,159,69,.22)') + '">' +
                '<div class="ds-between"><div class="ds-row-f ds-g2">' +
                  '<span style="color:var(--ds-' + (open ? 'ok' : 'warn') + ');display:flex">' + ic(open ? 'unlock' : 'lock', 15) + '</span>' +
                  '<span class="ds-sm" style="font-weight:600;color:var(--ds-ink)">' + r[0] + '</span></div>' +
                  '<div class="ds-row-f ds-g2"><span class="ds-cap">' + r[1] + '</span>' +
                  '<span class="ds-badge ' + (open ? 'ds-badge--ok' : '') + '">' + r[2] + '</span></div></div>' +
                '<p class="ds-cap" style="margin-top:7px;line-height:1.5">' + r[3] + '</p></div>';
            }).join('') + '</div></div>' +
      '</div>' +

      /* --- предпросмотр --- */
      '<div class="ds-stack ds-g4" style="position:sticky;top:84px">' +
        '<div class="ds-card ds-card--flush">' +
          '<p class="ds-eyebrow" style="padding:14px 16px 10px">Как это увидит зритель</p>' +
          '<div style="position:relative;aspect-ratio:16/10;overflow:hidden;border-top:1px solid var(--ds-line);border-bottom:1px solid var(--ds-line)">' +
            art('Год тишиныhero', '', 'position:absolute;inset:0') +
            '<div style="position:absolute;inset:0;background:linear-gradient(90deg,rgba(12,22,56,.94) 6%,rgba(12,22,56,.45) 62%,transparent)"></div>' +
            '<div style="position:absolute;left:14px;right:14px;bottom:12px">' +
              '<div class="ds-eyebrow" style="color:var(--ds-accent);font-size:8px">Фильм недели</div>' +
              '<div style="font-family:var(--ds-display);font-weight:800;font-size:19px;letter-spacing:-.02em;margin-top:3px">Год тишины</div>' +
              '<div class="ds-wrap ds-g1" style="margin-top:6px">' +
                '<span class="ds-badge ds-badge--ccplus" style="height:15px;font-size:8px">CC+</span>' +
                '<span class="ds-badge ds-badge--4k" style="height:15px;font-size:8px">4K</span></div>' +
              '<span class="ds-btn ds-btn--sm ds-btn--primary" style="margin-top:9px;min-height:26px;font-size:10px;text-transform:uppercase">' + ic('play', 10) + ' Смотреть</span>' +
            '</div></div>' +
          '<div style="padding:12px 16px">' +
            '<p class="ds-cap">Ниже пойдут 10 включённых блоков в заданном порядке.</p></div></div>' +

        '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:12px">Публикация</h3>' +
          '<div class="ds-stack ds-g2">' +
            [['Последнее изменение', 'Ольга К. · 12:04'], ['Опубликовано', '2 сентября, 09:30'],
             ['Активных блоков', '11 из 12'], ['Черновик', 'есть несохранённые правки']].map(function (r) {
              return '<div class="ds-between"><span class="ds-cap">' + r[0] + '</span>' +
                '<span class="ds-sm" style="font-weight:600">' + r[1] + '</span></div>';
            }).join('') + '</div>' +
          '<button class="ds-btn ds-btn--primary ds-btn--block" style="margin-top:14px">Опубликовать изменения</button>' +
          '<button class="ds-btn ds-btn--ghost ds-btn--block" style="margin-top:8px">Вернуть опубликованную версию</button></div>' +
      '</div></div>');
};

/* ---------- Сериалы ---------- */
A.series = function () {
  return adminShell('series', 'Сериалы', 'Сезоны и эпизоды',
    '<button class="ds-btn ds-btn--sm ds-btn--primary">' + ic('plus', 14) + ' Добавить сериал</button>',
    '<div class="ds-card" style="border-color:var(--ds-accent-edge);background:linear-gradient(140deg,rgba(76,141,255,.08),transparent 50%),var(--ds-panel);margin-bottom:18px">' +
      '<div class="ds-row-f ds-g3"><span style="color:var(--ds-accent);display:flex">' + ic('info', 22) + '</span>' +
      '<div><h3 class="ds-h3">Раздел готовится к запуску</h3>' +
      '<p class="ds-sm" style="margin-top:5px">Каталог сейчас состоит из полнометражных фильмов. Структура сезонов и эпизодов ' +
      'спроектирована, но контента в ней пока нет — первые сериалы появятся после подписания лицензий.</p></div></div></div>' +
    '<div class="ds-card ds-card--flush"><div class="ds-tablewrap"><table class="ds-table">' +
      '<thead><tr><th>Сериал</th><th>Сезонов</th><th>Эпизодов</th><th>Субтитры</th><th>Статус</th><th></th></tr></thead><tbody>' +
      [['Северные хроники', '2', '16', 'RU CC+', 'draft', 'Черновик'],
       ['Станция', '1', '8', 'нет', 'draft', 'Черновик']].map(function (r) {
        return '<tr><td><div class="ds-row-f ds-g3">' +
          '<div style="width:30px;aspect-ratio:2/3;border-radius:5px;overflow:hidden;position:relative;flex:none">' + art(r[0], '', 'position:absolute;inset:0') + '</div>' +
          '<span style="font-weight:600">' + r[0] + '</span></div></td>' +
          '<td class="ds-num">' + r[1] + '</td><td class="ds-num">' + r[2] + '</td>' +
          '<td>' + (r[3] === 'нет' ? '<span class="ds-badge ds-badge--warn">Нет</span>' : '<span class="ds-num" style="font-size:11.5px;color:var(--ds-amber)">' + r[3] + '</span>') + '</td>' +
          '<td><span class="ds-badge">' + r[5] + '</span></td>' +
          '<td><button class="ds-btn ds-btn--sm ds-btn--ghost">Открыть</button></td></tr>';
      }).join('') + '</tbody></table></div></div>');
};

/* ---------- Обработка видео ---------- */
A.processing = function () {
  var JOBS = [
    ['Год тишины', '1080p Full HD', 82, 'run', 'Обработка', '34 мин'],
    ['Год тишины', '1440p / 2K', 0, 'wait', 'В очереди', '—'],
    ['Год тишины', '2160p / 4K UHD', 0, 'wait', 'В очереди', '—'],
    ['Ночная смена', '2160p / 4K UHD', 41, 'err', 'Ошибка кодирования', '—'],
    ['Пепел и снег', '2160p / 4K UHD', 100, 'ok', 'Готово', '—'],
    ['Свидетели', '1080p Full HD', 100, 'ok', 'Готово', '—']
  ];
  var ST = { run: 'ds-badge--info', wait: '', err: 'ds-badge--err', ok: 'ds-badge--ok' };
  return adminShell('processing', 'Обработка видео', '3 задачи в работе · 1 ошибка',
    '<button class="ds-btn ds-btn--sm ds-btn--secondary">' + ic('refresh', 13) + ' Обновить</button>',
    '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:18px">' +
      stat('В работе', '1') + stat('В очереди', '2') + stat('Готово за сутки', '14', '+3') + stat('Ошибок', '1', null, 'err') +
    '</div>' +
    '<div class="ds-card" style="margin-bottom:16px;border-color:rgba(255,92,92,.28)">' +
      '<div class="ds-between"><div class="ds-row-f ds-g3">' +
        '<span style="color:var(--ds-err);display:flex">' + ic('alert', 22) + '</span>' +
        '<div><h3 class="ds-h3">Ночная смена · 4K UHD</h3>' +
        '<p class="ds-cap ds-num" style="margin-top:3px">Прервано на 41%. Мастер-файл содержит переменную частоту кадров — кодировщик не смог выровнять поток.</p></div></div>' +
        '<div class="ds-row-f ds-g2" style="flex:none">' +
          '<button class="ds-btn ds-btn--sm ds-btn--secondary">Перезапустить</button>' +
          '<button class="ds-btn ds-btn--sm ds-btn--ghost">Журнал</button></div></div></div>' +
    '<div class="ds-card ds-card--flush"><div class="ds-tablewrap"><table class="ds-table">' +
      '<thead><tr><th>Фильм</th><th>Качество</th><th>Прогресс</th><th>Статус</th><th>Осталось</th><th></th></tr></thead><tbody>' +
      JOBS.map(function (j) {
        return '<tr><td style="font-weight:600">' + j[0] + '</td><td class="ds-num">' + j[1] + '</td>' +
          '<td style="min-width:160px">' + (j[2] > 0 && j[2] < 100
            ? '<div class="ds-prog ds-prog--accent"><div class="ds-prog__bar" style="width:' + j[2] + '%"></div></div>' +
              '<span class="ds-num ds-cap">' + j[2] + '%</span>'
            : j[3] === 'err' ? '<div class="ds-prog"><div class="ds-prog__bar" style="width:' + j[2] + '%;background:var(--ds-err)"></div></div>'
            : '<span class="ds-mut2">—</span>') + '</td>' +
          '<td><span class="ds-badge ' + ST[j[3]] + '">' + j[4] + '</span></td>' +
          '<td class="ds-num ds-mut2">' + j[5] + '</td>' +
          '<td><button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" aria-label="Действия">' + ic('moreH', 15) + '</button></td></tr>';
      }).join('') + '</tbody></table></div></div>');
};

/* ---------- Подписки ---------- */
A.subsAdmin = function () {
  return adminShell('subs-admin', 'Подписки', 'Единственный тариф — ВИП, 500 ₽ / месяц', '',
    '<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:14px;margin-bottom:18px">' +
      stat('Активных', '27 480', '+2.1%') + stat('Новых за месяц', '1 284', '+11%') +
      stat('Отменено', '396', '1.4% churn') + stat('Ошибка оплаты', '212', null, 'err') + stat('MRR', '13 740 000 ₽', '+4.4%') +
    '</div>' +
    '<div class="ds-between" style="margin-bottom:14px">' +
      '<div class="ds-wrap ds-g2">' + ['Все', 'Активные', 'Отменённые', 'Истёкшие', 'Ошибка оплаты'].map(function (t, i) {
        return '<button class="ds-chip"' + (i === 0 ? ' aria-pressed="true"' : '') + '>' + t + '</button>'; }).join('') + '</div>' +
      '<button class="ds-btn ds-btn--sm ds-btn--secondary">Экспорт</button></div>' +
    '<div class="ds-card ds-card--flush"><div class="ds-tablewrap"><table class="ds-table">' +
      '<thead><tr><th>Пользователь</th><th>Подключена</th><th>Следующее списание</th><th>Списаний</th><th>Статус</th><th></th></tr></thead><tbody>' +
      [['Анна Ковалёва', '12 мар 2026', '12 окт 2026', '7', 'ok', 'Активна'],
       ['Игорь Демидов', '4 янв 2026', '4 окт 2026', '9', 'ok', 'Активна'],
       ['Ольга Титова', '28 фев 2026', '28 сен 2026', '7', 'ok', 'Активна'],
       ['Павел Рыков', '19 июн 2026', '—', '2', 'err', 'Ошибка оплаты'],
       ['Мария Лисина', '2 авг 2026', '2 окт 2026', '2', 'ok', 'Активна'],
       ['Сергей Ким', '11 мая 2026', '—', '3', '', 'Отменена']].map(function (r) {
        return '<tr><td style="font-weight:600">' + r[0] + '</td>' +
          '<td class="ds-num ds-mut2">' + r[1] + '</td><td class="ds-num">' + r[2] + '</td>' +
          '<td class="ds-num">' + r[3] + '</td>' +
          '<td><span class="ds-badge ' + (r[4] ? 'ds-badge--' + r[4] : '') + '">' + r[5] + '</span></td>' +
          '<td><button class="ds-btn ds-btn--sm ds-btn--ghost">Открыть</button></td></tr>';
      }).join('') + '</tbody></table></div></div>');
};

/* ---------- Выручка ---------- */
A.revenue = function () {
  return adminShell('revenue', 'Выручка', 'Сентябрь 2026',
    '<button class="ds-btn ds-btn--sm ds-btn--secondary">' + ic('calendar', 13) + ' 12 месяцев</button>',
    '<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:14px">' +
      stat('MRR', '13 740 000 ₽', '+4.4%') + stat('За месяц', '13 740 000 ₽', '+4.4%') +
      stat('Средний чек', '500 ₽', 'фикс.') + stat('Churn', '1.4%', '−0.4 п.п.') +
      stat('LTV', '8 900 ₽', '+6.2%') +
    '</div>' +
    '<div class="ds-card" style="margin-top:18px">' +
      '<div class="ds-between" style="margin-bottom:16px"><h3 class="ds-h2">Выручка по месяцам, млн ₽</h3>' +
        '<div class="ds-seg"><button aria-selected="true">MRR</button><button aria-selected="false">Подписчики</button></div></div>' +
      bars([['мар', 10.9], ['апр', 11.4], ['май', 11.8], ['июн', 12.3], ['июл', 12.7], ['авг', 13.2], ['сен', 13.74]], 150) +
    '</div>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:16px;align-items:start">' +
      '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:14px">Приток и отток</h3>' +
        '<div class="ds-stack ds-g4">' +
          [['Новые подписки', '1 284', 'var(--ds-ok)', 100],
           ['Возобновлённые', '318', 'var(--ds-accent)', 25],
           ['Отменённые', '396', 'var(--ds-warn)', 31],
           ['Ошибка оплаты', '212', 'var(--ds-err)', 17]].map(function (r) {
            return '<div><div class="ds-between" style="margin-bottom:5px"><span class="ds-sm">' + r[0] + '</span>' +
              '<span class="ds-num ds-sm" style="font-weight:700">' + r[1] + '</span></div>' +
              '<div style="height:7px;border-radius:99px;background:var(--ds-raised);overflow:hidden">' +
              '<div style="height:100%;width:' + r[3] + '%;background:' + r[2] + ';border-radius:99px"></div></div></div>';
          }).join('') + '</div></div>' +
      '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:14px">Способы оплаты</h3>' +
        '<div class="ds-stack ds-g3">' +
          [['Банковская карта', '78%'], ['СБП', '14%'], ['Apple Pay', '5%'], ['Google Pay', '3%']].map(function (r) {
            return '<div class="ds-between"><span class="ds-cap">' + r[0] + '</span>' +
              '<span class="ds-num ds-sm" style="font-weight:600">' + r[1] + '</span></div>';
          }).join('') + '</div>' +
        '<div class="ds-strip" style="margin-top:16px">' +
          '<span class="ds-strip__label">Тариф</span>' +
          '<p class="ds-cap" style="margin:0">Подписка одна, поэтому выручка не дробится по уровням. Средний чек равен цене тарифа: ' +
          'разброса нет, и любое изменение MRR — это изменение числа подписчиков, а не структуры продаж.</p></div></div></div>');
};

/* ---------- Поисковая аналитика ---------- */
A.searchan = function () {
  return adminShell('searchan', 'Поиск', 'Что зрители ищут и чего не находят', '',
    '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:18px">' +
      stat('Запросов за месяц', '184 200', '+9.4%') + stat('Без результата', '11 800', '6.4%', 'err') +
      stat('Поиск → просмотр', '38%', '+2 п.п.') + stat('Среднее уточнений', '1.4') +
    '</div>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;align-items:start">' +
      '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:14px">Самые частые запросы</h3>' +
        '<div class="ds-stack ds-g2">' +
          [['год тишины', '12 400'], ['документальные', '9 100'], ['фильмы с cc+', '7 800'],
           ['реальные события', '6 200'], ['новинки 2026', '5 400'], ['4k', '4 900']].map(function (r, i) {
            return '<div class="ds-between" style="padding:7px 0;border-bottom:1px solid var(--ds-line)">' +
              '<div class="ds-row-f ds-g3"><span class="ds-num ds-mut2" style="width:16px">' + (i + 1) + '</span>' +
              '<span class="ds-sm">' + r[0] + '</span></div>' +
              '<span class="ds-num ds-cap">' + r[1] + '</span></div>';
          }).join('') + '</div></div>' +
      '<div class="ds-card" style="border-color:rgba(255,159,69,.28)">' +
        '<h3 class="ds-h2" style="margin-bottom:6px">Запросы без результата</h3>' +
        '<p class="ds-cap" style="margin-bottom:14px">Прямой список того, чего людям не хватает в каталоге.</p>' +
        '<div class="ds-stack ds-g2">' +
          [['интерстеллар', '1 840', 'Нет прав на показ'],
           ['сериалы с cc+', '1 204', 'Сериалы не запущены'],
           ['аудиодескрипция', '806', 'AD есть у 42 фильмов — плохая находимость'],
           ['фильмы жестовый язык', '512', 'Функция не реализована'],
           ['субтитры для детей', '388', 'Нет отдельной подборки']].map(function (r) {
            return '<div style="padding:10px 12px;border-radius:var(--ds-r-sm);background:var(--ds-void);border:1px solid var(--ds-line)">' +
              '<div class="ds-between"><span class="ds-sm" style="font-weight:600">' + r[0] + '</span>' +
              '<span class="ds-num ds-cap">' + r[1] + '</span></div>' +
              '<p class="ds-cap" style="margin-top:4px">' + r[2] + '</p></div>';
          }).join('') + '</div>' +
        '<button class="ds-btn ds-btn--sm ds-btn--secondary ds-btn--block" style="margin-top:14px">Выгрузить для отдела контента</button></div></div>');
};

/* ---------- Настройки ---------- */
A.asettings = function () {
  function group(title, rows) {
    return '<div class="ds-card ds-card--flush" style="margin-bottom:16px">' +
      '<p class="ds-eyebrow" style="padding:16px 18px 10px">' + title + '</p>' +
      '<div class="ds-rows">' + rows.map(function (r) {
        return '<div class="ds-row" style="cursor:default">' +
          '<span class="ds-row__main"><span class="ds-row__title">' + r[0] + '</span>' +
          (r[2] ? '<span class="ds-row__sub">' + r[2] + '</span>' : '') + '</span>' +
          (r[1] === true || r[1] === false
            ? '<label class="ds-switch"><input type="checkbox"' + (r[1] ? ' checked' : '') + '><span class="ds-switch__track"></span><span class="ds-switch__thumb"></span></label>'
            : '<span class="ds-row__meta">' + r[1] + '</span>') + '</div>';
      }).join('') + '</div></div>';
  }
  return adminShell('asettings', 'Настройки', 'Общие параметры сервиса',
    '<button class="ds-btn ds-btn--sm ds-btn--primary">Сохранить</button>',
    '<div style="display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:20px;align-items:start"><div>' +
      group('Бренд', [
        ['Название сервиса', 'DeafSuslik', 'Меняется здесь и сразу во всех 108 экранах'],
        ['Логотип', 'Загружен', 'SVG, знак и слово раздельно'],
        ['Домен', 'deafsuslik.ru', ''],
        ['Почта поддержки', 'help@deafsuslik.ru', '']
      ]) +
      group('Видео по умолчанию', [
        ['Качества при загрузке', '360p → 1080p', 'Выше — вручную по фильму'],
        ['Максимум для скачивания', '1080p Full HD', ''],
        ['Срок жизни загрузки', '30 дней', ''],
        ['Автоматически готовить 4K', false, 'Дорого по хранилищу, включается точечно']
      ]) +
      group('Субтитры и CC+', [
        ['Язык по умолчанию', 'Русский', ''],
        ['Предпочитать CC+', true, 'Если у фильма есть CC+, включатся они'],
        ['Автогенерация субтитров', true, 'Результат всегда получает статус «Требует вычитки»'],
        ['Публиковать автосубтитры без вычитки', false, 'Выключено намеренно — см. пояснение справа'],
        ['Лимит символов в строке', '42', ''],
        ['Лимит скорости чтения', '17 симв./сек', '']
      ]) +
      group('Безопасность', [
        ['Двухфакторная аутентификация для сотрудников', true, 'Обязательна для всех ролей'],
        ['Срок админ-сессии', '8 часов', ''],
        ['Повторный пароль на опасных действиях', true, 'Удаление, смена роли, возврат платежа'],
        ['Журнал действий', '24 месяца', 'Изменению не подлежит']
      ]) +
      '</div>' +
      '<div class="ds-stack ds-g4" style="position:sticky;top:84px">' +
        '<div class="ds-card" style="border-color:var(--ds-amber-edge);background:var(--ds-amber-dim)">' +
          '<div class="ds-row-f ds-g2" style="margin-bottom:8px"><span style="color:var(--ds-amber);display:flex">' + ic('cc', 18) + '</span>' +
          '<h3 class="ds-h3">Почему автосубтитры не публикуются сами</h3></div>' +
          '<p class="ds-sm">Распознавание речи ошибается на именах, терминах и перекрывающихся репликах. ' +
          'Для зрителя, который не слышит, такая ошибка не мелочь — он не может проверить её на слух. ' +
          'Поэтому переключатель есть, но выключен, и включить его может только владелец проекта.</p></div>' +
        '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:12px">Версия</h3>' +
          '<div class="ds-stack ds-g2">' +
            [['Админ-панель', '4.8.2'], ['Веб-приложение', '4.8.2'], ['iOS', '4.8.2'], ['Android', '4.8.1']].map(function (r) {
              return '<div class="ds-between"><span class="ds-cap">' + r[0] + '</span>' +
                '<span class="ds-num ds-sm">' + r[1] + '</span></div>';
            }).join('') + '</div></div></div></div>');
};
