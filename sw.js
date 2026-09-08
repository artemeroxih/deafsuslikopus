/* Service worker витрины DeafSuslik.
 *
 * Задача одна: чтобы установленное приложение открывалось мгновенно и
 * работало без сети. Это витрина прототипов, а не сам сервис, — фильмы
 * здесь не кэшируются, потому что фильмов здесь нет.
 *
 * Версию менять при каждом изменении списка ниже: старые кэши удаляются
 * по несовпадению имени, иначе установленное приложение застрянет на
 * прошлой сборке — ровно та беда, из-за которой мы ушли с Vercel.
 */
var VERSION = 'ds-2026-09-08';
var CORE = VERSION + '-core';
var RUNTIME = VERSION + '-runtime';

/* Админ-панель в приложение не входит: это инструмент для компьютера.
   Её не кэшируем и офлайн не отдаём — пусть честно требует сеть. */
var EXCLUDE = /admin\.html$/;

var PRECACHE = [
  './',
  'all.html',
  'index.html',
  'manifest.json',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'apple-touch-icon.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CORE).then(function (c) {
      // Одна недоступная мелочь не должна ронять всю установку.
      return Promise.all(PRECACHE.map(function (u) {
        return c.add(new Request(u, { cache: 'reload' })).catch(function () {});
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        return k.indexOf(VERSION) === 0 ? null : caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

function fromNetwork(req, cacheName) {
  return fetch(req).then(function (res) {
    if (res && (res.ok || res.type === 'opaque')) {
      var copy = res.clone();
      caches.open(cacheName).then(function (c) { c.put(req, copy); });
    }
    return res;
  });
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;

  var url = new URL(req.url);
  if (EXCLUDE.test(url.pathname)) return;      // админка — только по сети

  // Шрифты приходят с чужого домена и не меняются: сначала кэш.
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(
      caches.match(req).then(function (hit) { return hit || fromNetwork(req, RUNTIME); })
    );
    return;
  }

  if (url.origin !== location.origin) return;

  // Страницы берём из сети, чтобы правки доезжали сразу, и падаем в кэш,
  // только когда сети нет.
  if (req.mode === 'navigate' || (req.headers.get('accept') || '').indexOf('text/html') > -1) {
    e.respondWith(
      fromNetwork(req, CORE).catch(function () {
        return caches.match(req).then(function (hit) {
          return hit || caches.match('all.html') || caches.match('./');
        });
      })
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(function (hit) {
      return hit || fromNetwork(req, RUNTIME).catch(function () { return hit; });
    })
  );
});
