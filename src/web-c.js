/* ============================================================
   Web screens 23–40 — downloads, subscriptions, account, support
   ============================================================ */

/* Downloads / offline */
S.downloads = function () {
  var ROWS = [
    { i: 0,  st: 'done',   q: '1080p Full HD', sub: 'Русский CC+', sz: '2.8 GB', p: 100, note: 'Доступно офлайн 24 дня' },
    { i: 10, st: 'run',    q: '720p HD',       sub: 'Русский CC+', sz: '1.4 GB', p: 78,  note: 'Осталось 2 мин · 8.4 МБ/с' },
    { i: 6,  st: 'paused', q: '1080p Full HD', sub: 'Русский',     sz: '2.4 GB', p: 41,  note: 'Пауза · загружено 984 MB' },
    { i: 14, st: 'queued', q: '4K UHD',        sub: 'Русский CC+', sz: '8.7 GB', p: 0,   note: 'В очереди · начнётся после текущей' },
    { i: 3,  st: 'failed', q: '1080p Full HD', sub: 'English CC',  sz: '2.6 GB', p: 63,  note: 'Обрыв соединения на 63%' },
    { i: 17, st: 'expired',q: '720p HD',       sub: 'Русский CC+', sz: '1.2 GB', p: 100, note: 'Срок истёк 28 августа' }
  ];
  var ST = {
    done:   ['ds-badge--ok',   'Готово',       'check'],
    run:    ['ds-badge--info', 'Загружается',  'download'],
    paused: ['ds-badge--warn', 'Пауза',        'pause'],
    queued: ['',               'В очереди',    'clock'],
    failed: ['ds-badge--err',  'Ошибка',       'alert'],
    expired:['ds-badge--err',  'Истёк срок',   'clock']
  };
  return libraryPage('downloads',
    '<div class="ds-card" style="margin-bottom:24px">' +
      '<div class="ds-between" style="margin-bottom:14px"><h3 class="ds-h2">Место на устройстве</h3>' +
        '<span class="ds-num ds-sm ds-mut">16.7 GB из 64 GB</span></div>' +
      '<div style="height:10px;border-radius:99px;background:var(--ds-raised-3);overflow:hidden;display:flex">' +
        '<div style="width:18%;background:var(--ds-blue)"></div><div style="width:8%;background:var(--ds-amber)"></div>' +
        '<div style="width:12%;background:var(--ds-raised-3);border-left:1px solid var(--ds-void)"></div></div>' +
      '<div class="ds-wrap ds-g5" style="margin-top:12px">' +
        [['Фильмы', '11.4 GB', 'var(--ds-blue)'], ['Субтитры и CC+', '0.3 GB', 'var(--ds-amber)'],
         ['Другое', '5.0 GB', 'var(--ds-raised-3)'], ['Свободно', '47.3 GB', 'transparent']].map(function (s) {
          return '<div class="ds-row-f ds-g2"><span style="width:9px;height:9px;border-radius:3px;background:' + s[2] + ';border:1px solid var(--ds-line-mid)"></span>' +
            '<span class="ds-cap">' + s[0] + '</span><span class="ds-num ds-sm">' + s[1] + '</span></div>';
        }).join('') + '</div></div>' +

    '<div class="ds-between" style="margin-bottom:16px">' +
      '<div class="ds-wrap ds-g2">' + ['Все', 'Загружено', 'Загружается', 'Ошибки'].map(function (t, i) {
        return '<button class="ds-chip"' + (i === 0 ? ' aria-pressed="true"' : '') + '>' + t + '</button>'; }).join('') + '</div>' +
      '<div class="ds-row-f ds-g2"><button class="ds-btn ds-btn--sm ds-btn--secondary">' + ic('pause', 14) + ' Пауза для всех</button>' +
      '<button class="ds-btn ds-btn--sm ds-btn--danger">Удалить завершённые</button></div></div>' +

    '<div class="ds-stack ds-g3">' + ROWS.map(function (d) {
      var m = M(d.i), s = ST[d.st];
      return '<div class="ds-dl" style="padding:16px;align-items:stretch">' +
        '<div class="ds-dl__art" style="width:88px;position:relative">' + art(m.t, '', 'position:absolute;inset:0') + '</div>' +
        '<div class="ds-dl__main"><div class="ds-between" style="align-items:flex-start">' +
          '<div style="min-width:0"><div class="ds-h2">' + m.t + '</div>' +
          '<div class="ds-cap ds-num" style="margin-top:4px">' + d.q + ' · ' + d.sz + ' · ' + m.d + '</div></div>' +
          '<span class="ds-badge ' + s[0] + '">' + ic(s[2], 9, 2.6) + ' ' + s[1] + (d.st === 'run' ? ' ' + d.p + '%' : '') + '</span></div>' +
        '<div class="ds-wrap ds-g1">' +
          (d.sub.indexOf('CC+') > -1 ? '<span class="ds-badge ds-badge--ccplus">CC+</span>' : '<span class="ds-badge ds-badge--cc">CC</span>') +
          '<span class="ds-badge">' + d.sub + '</span>' +
          (d.st === 'done' ? '<span class="ds-badge ds-badge--offline">' + ic('download', 9, 2.6) + ' Доступно офлайн</span>' : '') + '</div>' +
        (d.st === 'run' || d.st === 'paused' || d.st === 'failed'
          ? '<div class="ds-prog ds-prog--thick' + (d.st === 'run' ? ' ds-prog--amber' : '') + '"><div class="ds-prog__bar" style="width:' + d.p + '%' +
            (d.st === 'failed' ? ';background:var(--ds-err)' : d.st === 'paused' ? ';background:var(--ds-warn)' : '') + '"></div></div>' : '') +
        '<div class="ds-between" style="margin-top:auto"><span class="ds-cap">' + d.note + '</span>' +
          '<div class="ds-row-f ds-g2">' +
            (d.st === 'done'   ? '<button class="ds-btn ds-btn--sm ds-btn--primary" data-go="player">' + ic('play', 12) + ' Смотреть офлайн</button>' : '') +
            (d.st === 'run'    ? '<button class="ds-btn ds-btn--sm ds-btn--secondary">' + ic('pause', 12) + ' Пауза</button>' : '') +
            (d.st === 'paused' ? '<button class="ds-btn ds-btn--sm ds-btn--secondary">' + ic('play', 12) + ' Продолжить</button>' : '') +
            (d.st === 'failed' ? '<button class="ds-btn ds-btn--sm ds-btn--secondary">' + ic('refresh', 12) + ' Повторить</button>' : '') +
            (d.st === 'expired'? '<button class="ds-btn ds-btn--sm ds-btn--secondary">' + ic('download', 12) + ' Скачать снова</button>' : '') +
            '<button class="ds-iconbtn ds-iconbtn--sm ds-iconbtn--bare" aria-label="Удалить">' + ic('trash', 15) + '</button></div></div>' +
        '</div></div>';
    }).join('') + '</div>' +

    '<div style="margin-top:44px;max-width:560px"><p class="ds-eyebrow" style="margin-bottom:12px">Когда нет интернета</p>' +
      '<div class="ds-card" style="border-color:var(--ds-warn);background:var(--ds-warn-dim)">' +
        '<div class="ds-row-f ds-g3"><span style="color:var(--ds-warn);display:flex">' + ic('wifioff', 24) + '</span>' +
        '<div class="ds-grow"><h4 class="ds-h2">Вы офлайн</h4>' +
        '<p class="ds-sm" style="margin-top:4px">Каталог и поиск недоступны. Скачанные фильмы вместе с субтитрами можно смотреть прямо сейчас.</p></div>' +
        '<button class="ds-btn ds-btn--secondary" style="flex:none">Открыть загрузки</button></div></div></div>');
};

/* 23 — Subscription */
S.plans = function () {
  return topbar('') + '<main class="ds-container" style="padding-top:56px;padding-bottom:64px;max-width:1080px">' +
    '<div class="ds-center" style="max-width:640px;margin:0 auto">' +
      '<h1 class="ds-d1">Одна подписка</h1>' +
      '<p class="ds-body" style="margin:14px auto 0">500 ₽ в месяц открывают весь deafsuslik. ' +
      'Никаких уровней, коллекций за отдельную плату и доплат за качество — у всех одинаковый доступ.</p></div>' +
    '<div style="margin-top:36px">' + planCard(VIP) + '</div>' +

    '<div class="ds-card" style="margin-top:20px">' +
      '<h3 class="ds-h1" style="margin-bottom:18px">Что входит</h3>' +
      '<div class="ds-tablewrap"><table class="ds-table">' +
        '<thead><tr><th style="width:58%">Возможность</th><th>ВИП · <span class="ds-num" style="color:var(--ds-vip)">500 ₽ / месяц</span></th></tr></thead><tbody>' +
        [['Весь каталог — 1 204 фильма', 1],
         ['Коллекция «Реальные события» — 214', 1],
         ['Все редакционные подборки', 1],
         ['Субтитры CC', 1],
         ['Расширенные CC+', 1],
         ['Тифлокомментарий (AD), где есть', 1],
         ['Качество до 4K UHD', 1],
         ['Скачивание и просмотр офлайн', 1],
         ['Одновременно устройств', '5'],
         ['Реклама', 'Нет']].map(function (r) {
          return '<tr><td>' + r[0] + '</td><td>' + (r[1] === 1
            ? '<span style="color:var(--ds-ok);display:flex">' + ic('check', 17, 2.6) + '</span>'
            : '<span class="ds-num ds-sm">' + r[1] + '</span>') + '</td></tr>';
        }).join('') + '</tbody></table></div></div>' +

    '<div class="ds-card" style="margin-top:20px">' +
      '<h3 class="ds-h2" style="margin-bottom:14px">Частые вопросы об оплате</h3>' +
      '<div class="ds-stack">' +
        [['Это разовый платёж?', 'Нет. Подписка регулярная: 500 ₽ списываются сегодня и дальше в ту же дату каждый месяц, пока вы не отмените.'],
         ['Есть ли тарифы подешевле или подороже?', 'Нет. Подписка одна и стоит 500 ₽ в месяц. Все коллекции, все качества и все субтитры входят в неё без доплат.'],
         ['Как отменить?', 'Профиль → Моя подписка → Управление → Отменить. Доступ сохраняется до конца оплаченного месяца.'],
         ['Что будет с загрузками после отмены?', 'Скачанные фильмы перестанут открываться на следующий день после окончания оплаченного периода.'],
         ['Можно ли смотреть на нескольких устройствах?', 'Да, до пяти одновременно на одном аккаунте. Прогресс синхронизируется между ними.']].map(function (q) {
          return '<details style="border-bottom:1px solid var(--ds-line);padding:14px 0">' +
            '<summary style="cursor:pointer;font-weight:600;list-style:none;display:flex;justify-content:space-between;gap:12px">' + q[0] +
            '<span style="color:var(--ds-ink-3);display:flex">' + ic('chevD', 17) + '</span></summary>' +
            '<p class="ds-sm" style="margin-top:10px">' + q[1] + '</p></details>';
        }).join('') + '</div></div>' +
    '</main>' + webFoot();
};

/* 24–25 — Collection landing pages (content, not a paid tier) */
function landingPage(coll, idx) {
  return topbar(coll.nav) +
    '<section style="position:relative;min-height:620px;margin-top:-68px">' +
      '<div class="ds-art" style="position:absolute;inset:0">' + dsArt(coll.name + 'land') + '</div>' +
      '<div style="position:absolute;inset:0;background:linear-gradient(100deg,rgba(6,11,24,.96) 12%,rgba(6,11,24,.5) 62%,transparent),linear-gradient(to top,var(--ds-void) 2%,transparent 44%)"></div>' +
      '<div style="position:absolute;inset:0;background:radial-gradient(60% 60% at 78% 32%, ' + coll.hex + '26, transparent 62%)"></div>' +
      '<div class="ds-container" style="position:relative;padding-top:140px;padding-bottom:52px;max-width:1180px">' +
        '<div style="max-width:600px">' +
          '<div class="ds-row-f ds-g2" style="margin-bottom:18px">' +
            '<span style="width:34px;height:3px;border-radius:2px;background:' + coll.hex + '"></span>' +
            '<span class="ds-eyebrow" style="color:' + coll.hex + '">Коллекция deafsuslik</span></div>' +
          '<h1 class="ds-hero-title" style="font-size:clamp(2.4rem,4.6vw,4rem)">' + coll.name + '</h1>' +
          '<p class="ds-body" style="margin-top:18px;font-size:1.0625rem">' + coll.desc + '</p>' +
          '<div class="ds-wrap ds-g6" style="margin-top:28px">' +
            [[coll.count, 'фильмов'], ['CC+', 'на большинстве'], ['4K', 'где доступно'], ['Офлайн', 'скачивание']].map(function (s) {
              return '<div><div class="ds-num" style="font-size:1.4rem;font-weight:700;color:' + coll.hex + '">' + s[0] + '</div>' +
                '<div class="ds-cap">' + s[1] + '</div></div>';
            }).join('') + '</div>' +
          '<div class="ds-row-f ds-g3" style="margin-top:32px">' +
            '<button class="ds-btn ds-btn--lg ds-btn--primary" data-go="player">' + ic('play', 17) + ' Смотреть</button>' +
            '<button class="ds-btn ds-btn--lg ds-btn--outline">Смотреть трейлеры</button></div>' +
          '<p class="ds-cap" style="margin-top:14px">Входит в подписку ВИП — 500 ₽ / месяц, без доплат.</p>' +
        '</div></div></section>' +

    '<main class="ds-container" style="padding-bottom:64px">' +
      wRail('Новинки коллекции', idx.slice(0, 7), { mt: 8, offline: 1 }) +
      wRail('Самое популярное', idx.slice(2, 9), { offline: 1 }) +
      wRail('Лучшее с CC+', idx.slice(1, 8), { offline: 1 }) +
      '<section style="margin-top:52px">' + planCard(VIP) + '</section>' +
    '</main>' + webFoot();
}
var COLL_REAL = { name: 'Реальные события', nav: 'real', hex: '#C89BFF', count: 214,
  desc: 'Документальное кино и фильмы, основанные на реальных событиях. Коллекция пополняется каждую неделю.' };
S.landingReal = function () { return landingPage(COLL_REAL, [5, 10, 14, 18, 1, 6, 9, 11, 16]); };

/* 27 — Checkout */
S.checkout = function () {
  var p = VIP;
  return topbar('') + '<main class="ds-container" style="padding-top:44px;padding-bottom:64px;max-width:1080px">' +
    '<button class="ds-btn ds-btn--sm ds-btn--ghost" data-go="plans" style="padding-left:0">' + ic('arrowL', 15) + ' К тарифам</button>' +
    '<h1 class="ds-d1" style="margin-top:14px">Оформление подписки</h1>' +
    '<div style="display:grid;grid-template-columns:minmax(0,1fr) 380px;gap:36px;margin-top:28px;align-items:start">' +
      '<div class="ds-stack ds-g4">' +
        '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:16px">Способ оплаты</h3>' +
          '<div class="ds-stack ds-g2">' +
            [['Банковская карта', '•••• 4417 · Mir · до 09/28', 1], ['Новая карта', 'Добавить карту', 0], ['СБП', 'Оплата через приложение банка', 0]].map(function (r) {
              return '<label class="ds-opt' + (r[2] ? ' is-on' : '') + '" style="padding:14px;border-radius:var(--ds-r-md);border:1px solid ' + (r[2] ? 'var(--ds-blue-edge)' : 'var(--ds-line)') + (r[2] ? ';background:var(--ds-blue-dim)' : '') + '">' +
                '<span class="ds-opt__box ds-opt__box--radio"></span>' +
                '<span class="ds-row__ico" style="color:var(--ds-ink-2)">' + ic('card', 19) + '</span>' +
                '<span class="ds-grow"><span style="font-size:14px;font-weight:600">' + r[0] + '</span>' +
                '<span class="ds-row__sub" style="display:block">' + r[1] + '</span></span></label>';
            }).join('') + '</div></div>' +
        '<div class="ds-card"><h3 class="ds-h2" style="margin-bottom:14px">Регулярное списание</h3>' +
          '<div class="ds-stack ds-g3">' +
            [['Сегодня спишется', p.price + ' ₽'],
             ['Дальше — каждый месяц', p.price + ' ₽'],
             ['Следующее списание', '2 октября 2026'],
             ['Способ отмены', 'Профиль → Мои подписки']].map(function (r) {
              return '<div class="ds-between"><span class="ds-sm ds-mut">' + r[0] + '</span>' +
                '<span class="ds-sm" style="font-weight:600">' + r[1] + '</span></div>';
            }).join('') + '</div>' +
          '<div class="ds-strip" style="margin-top:16px;background:var(--ds-blue-dim);border-left-color:var(--ds-blue)">' +
            '<span class="ds-strip__label" style="color:var(--ds-blue)">Важно</span>' +
            '<p class="ds-cap" style="margin:0">Подписка продлевается автоматически каждый месяц, пока вы её не отмените. ' +
            'Отменить можно в любой момент — доступ сохранится до конца оплаченного периода.</p></div></div>' +
        '<label class="ds-opt" style="align-items:flex-start"><span class="ds-opt__box ds-opt__box--check is-on" style="border-color:var(--ds-amber);background:var(--ds-amber);margin-top:2px"></span>' +
          '<span class="ds-sm">Соглашаюсь с <span style="color:var(--ds-blue)">условиями подписки</span> и разрешаю ежемесячное списание ' + p.price + ' ₽</span></label>' +
      '</div>' +
      '<aside style="position:sticky;top:92px">' +
        '<div class="ds-card" style="border-color:' + p.hex + '33">' +
          '<p class="ds-eyebrow" style="margin-bottom:12px">Ваш заказ</p>' +
          '<div class="ds-row-f ds-g3"><span style="width:4px;height:40px;border-radius:2px;background:' + p.color + '"></span>' +
            '<div><div class="ds-h2">' + p.name + '</div><div class="ds-cap">Ежемесячная подписка</div></div></div>' +
          '<div class="ds-divider" style="margin:18px 0"></div>' +
          '<div class="ds-between" style="margin-bottom:8px"><span class="ds-sm ds-mut">Подписка, 1 месяц</span>' +
            '<span class="ds-num ds-sm">' + p.price + ' ₽</span></div>' +
          '<div class="ds-between"><span class="ds-sm ds-mut">Скидка</span><span class="ds-num ds-sm">0 ₽</span></div>' +
          '<div class="ds-divider" style="margin:18px 0"></div>' +
          '<div class="ds-between"><span class="ds-h3">Итого сегодня</span>' +
            '<span class="ds-num" style="font-size:1.6rem;font-weight:700">' + p.price + ' ₽</span></div>' +
          '<p class="ds-cap" style="margin-top:4px;text-align:right">затем ' + p.price + ' ₽ / месяц</p>' +
          '<button class="ds-btn ds-btn--lg ds-btn--block ds-btn--primary" data-go="pay-ok" style="margin-top:18px">Оплатить ' + p.price + ' ₽</button>' +
          '<div class="ds-row-f ds-g2 ds-center" style="margin-top:14px;justify-content:center;color:var(--ds-ok)">' + ic('shield', 15) +
            '<span class="ds-cap">Защищённый платёж · 3-D Secure</span></div>' +
          '<p class="ds-cap" style="margin-top:12px;text-align:center">Данные карты обрабатывает банк-эквайер. ' +
          'deafsuslik не хранит номер карты и CVV.</p></div>' +
      '</aside></div></main>' + webFoot();
};

/* 28 — Payment success */
S.payOk = function () {
  var p = VIP;
  return topbar('') + '<main class="ds-container" style="padding-top:80px;padding-bottom:80px;max-width:600px">' +
    '<div class="ds-center">' +
      '<div style="width:88px;height:88px;border-radius:99px;margin:0 auto;display:grid;place-items:center;background:var(--ds-ok-dim);border:1px solid rgba(61,220,151,.35);color:var(--ds-ok)">' + ic('check', 40, 2.6) + '</div>' +
      '<h1 class="ds-d1" style="margin-top:26px">Подписка активирована</h1>' +
      '<p class="ds-body" style="margin:12px auto 0">Коллекция уже открыта. Приятного просмотра.</p></div>' +
    '<div class="ds-card" style="margin-top:32px;border-color:' + p.hex + '33">' +
      '<div class="ds-row-f ds-g3"><span style="width:4px;height:44px;border-radius:2px;background:' + p.color + '"></span>' +
        '<div class="ds-grow"><div class="ds-h1">' + p.name + '</div>' +
        '<div class="ds-num ds-sm ds-mut" style="margin-top:2px">' + p.price + ' ₽ / месяц</div></div>' +
        '<span class="ds-badge ds-badge--ok ds-badge--lg">Активна</span></div>' +
      '<div class="ds-divider" style="margin:20px 0"></div>' +
      '<div class="ds-stack ds-g3">' +
        [['Списано сегодня', p.price + ' ₽'], ['Способ оплаты', 'Mir •••• 4417'],
         ['Следующее списание', '2 октября 2026'], ['Номер операции', 'DS-PAY-88214']].map(function (r) {
          return '<div class="ds-between"><span class="ds-sm ds-mut">' + r[0] + '</span>' +
            '<span class="ds-sm ds-num" style="font-weight:600">' + r[1] + '</span></div>';
        }).join('') + '</div></div>' +
    '<div class="ds-row-f ds-g3" style="margin-top:24px">' +
      '<button class="ds-btn ds-btn--lg ds-btn--primary ds-grow" data-go="home">Начать смотреть</button>' +
      '<button class="ds-btn ds-btn--lg ds-btn--secondary" data-go="subs">Моя подписка</button></div>' +
    '<p class="ds-cap ds-center" style="margin-top:18px">Чек отправлен на anna.k@example.ru</p>' +
    '</main>' + webFoot();
};

/* 29 — Payment error */
S.payErr = function () {
  return topbar('') + '<main class="ds-container" style="padding-top:80px;padding-bottom:80px;max-width:600px">' +
    '<div class="ds-center">' +
      '<div style="width:88px;height:88px;border-radius:99px;margin:0 auto;display:grid;place-items:center;background:var(--ds-err-dim);border:1px solid rgba(255,92,92,.35);color:var(--ds-err)">' + ic('alert', 38, 2.4) + '</div>' +
      '<h1 class="ds-d1" style="margin-top:26px">Платёж не прошёл</h1>' +
      '<p class="ds-body" style="margin:12px auto 0">Банк отклонил операцию с картой Mir •••• 4417. Деньги не списаны.</p></div>' +
    '<div class="ds-card" style="margin-top:32px">' +
      '<p class="ds-eyebrow" style="margin-bottom:14px">Что можно сделать</p>' +
      '<div class="ds-stack">' +
        [['Проверить баланс', 'На карте может не хватать 500 ₽'],
         ['Разрешить интернет-платежи', 'Иногда банк блокирует их по умолчанию'],
         ['Оплатить другой картой', 'Или через СБП'],
         ['Позвонить в банк', 'Код отказа: 51 — недостаточно средств']].map(function (r) {
          return '<div class="ds-row" style="cursor:default"><span class="ds-row__ico">' + ic('info', 17) + '</span>' +
            '<span class="ds-row__main"><span class="ds-row__title">' + r[0] + '</span>' +
            '<span class="ds-row__sub">' + r[1] + '</span></span></div>';
        }).join('') + '</div></div>' +
    '<div class="ds-row-f ds-g3" style="margin-top:24px">' +
      '<button class="ds-btn ds-btn--lg ds-btn--primary ds-grow" data-go="checkout">Повторить оплату</button>' +
      '<button class="ds-btn ds-btn--lg ds-btn--secondary" data-go="checkout">Другой способ</button></div>' +
    '<button class="ds-btn ds-btn--ghost ds-btn--block" data-go="support" style="margin-top:10px">Написать в поддержку</button>' +
    '<div class="ds-strip" style="margin-top:24px">' +
      '<span class="ds-strip__label">Данные</span>' +
      '<p class="ds-cap" style="margin:0">Если напишете в поддержку, к обращению автоматически приложатся номер операции ' +
      'и код отказа банка. Номер карты и CVV не передаются и нигде не сохраняются.</p></div>' +
    '</main>' + webFoot();
};
