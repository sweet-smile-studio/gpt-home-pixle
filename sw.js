const CACHE_NAME = 'maedeh-planner-v3.0.1';
const APP_SHELL = [
  './', './index.html', './manifest.json',
  './css/styles.css', './js/app.js', './js/firebase-config.js',
  './icons/icon-192.png', './icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match('./index.html')))
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.matchAll({type: 'window', includeUncontrolled: true}).then(list => {
    for (const client of list) {
      if ('focus' in client) return client.focus();
    }
    if (clients.openWindow) return clients.openWindow('./index.html');
  }));
});

self.addEventListener('push', event => {
  let data = {};
  try { data = event.data ? event.data.json() : {}; } catch (_) { data = { title: 'Maedeh ✨️', body: event.data ? event.data.text() : '' }; }
  const title = data.title || 'Maedeh ✨️';
  const options = {
    body: data.body || 'یادآوری برنامه',
    icon: './icons/icon-192.png',
    badge: './icons/icon-192.png',
    tag: data.tag || 'maedeh-planner',
    data: data.url || './index.html',
    requireInteraction: Boolean(data.requireInteraction)
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
