// sw.js — Service worker MBS Connect
//
// Rôle 1 : rendre l'app installable et utilisable hors-ligne en mettant en
// cache la "coquille" de l'application (index.html, manifest, icônes).
// Rôle 2 : recevoir les notifications push envoyées par
// /api/notify (fonction Netlify) quand l'équipe MBS publie une annonce,
// et les afficher sur l'appareil de l'étudiant même si l'app est fermée.
//
// Important : si tu modifies index.html ou ce fichier, change la valeur de
// CACHE_VERSION ci-dessous pour forcer les téléphones à récupérer la
// nouvelle version (sinon ils gardent l'ancienne en cache un moment).
const CACHE_VERSION = 'mbs-connect-v1';

const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Stratégie réseau :
// - pour les appels à l'API partagée (/api/...) : toujours le réseau (les
//   données doivent être fraîches, jamais servies depuis le cache).
// - pour le reste (coquille de l'app) : cache d'abord, puis réseau en
//   secours, pour que l'app s'ouvre même hors-ligne.
self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(fetch(request).catch(() => caches.match(request)));
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request)
        .then((response) => {
          if (response && response.ok && request.url.startsWith(self.location.origin)) {
            const clone = response.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => (request.mode === 'navigate' ? caches.match('./index.html') : undefined));
    })
  );
});

// ---------------- Notifications push (annonces de l'équipe MBS) ----------------

self.addEventListener('push', (event) => {
  let payload = {};
  try {
    payload = event.data ? event.data.json() : {};
  } catch (e) {
    payload = { title: 'MBS Connect', body: event.data ? event.data.text() : '' };
  }

  const title = payload.title || 'MBS Connect';
  const options = {
    body: payload.body || '',
    icon: './icon-192.png',
    badge: './icon-192.png',
    tag: payload.tag || 'mbs-announcement',
    renotify: true,
    data: { url: payload.url || './index.html#annonces' },
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url) || './index.html';

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if ('focus' in client) {
          client.focus();
          if ('navigate' in client) client.navigate(targetUrl);
          return;
        }
      }
      if (self.clients.openWindow) return self.clients.openWindow(targetUrl);
    })
  );
});
