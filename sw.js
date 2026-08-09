const CACHE = 'pancalc-v4';
const APP_FILES = ['index.html', 'styles.css', 'app.js', 'manifest.json', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(APP_FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const fileName = url.pathname.split('/').pop();
  const isAppFile = APP_FILES.includes(fileName);

  // Archivos propios de la app: network-first (siempre actualizados si hay internet,
  // caché solo como respaldo cuando estás sin conexión)
  if (isAppFile) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Resto (Firebase CDN, etc.): estrategia por defecto
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
