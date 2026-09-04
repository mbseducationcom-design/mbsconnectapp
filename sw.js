// Service worker MBS Connect
// Met en cache les fichiers statiques (HTML, manifest, icônes) pour que
// l'app s'ouvre instantanément et fonctionne même avec une connexion
// coupée. Les appels vers /api/store (données partagées) ne sont JAMAIS
// mis en cache : ils doivent toujours aller chercher les données fraîches
// sur le réseau.

const CACHE_NAME = "mbs-connect-v1";
const STATIC_ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Ne jamais mettre en cache les appels à l'API de données partagées.
  if (url.pathname.startsWith("/api/")) {
    return;
  }

  // Pour la navigation (ouverture de la page), on essaie le réseau
  // d'abord et on retombe sur le cache si hors-ligne.
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).catch(() => caches.match("./index.html"))
    );
    return;
  }

  // Pour le reste (assets statiques) : cache d'abord, réseau en secours.
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return (
        cached ||
        fetch(event.request).then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
      );
    })
  );
});
