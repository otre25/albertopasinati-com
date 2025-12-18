// Service Worker for Alberto Pasinati Portfolio
// Version 1.0.0

const CACHE_NAME = 'albertopasinati-v1';
const RUNTIME_CACHE = 'albertopasinati-runtime';

// Assets da cachare immediatamente all'installazione
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/index.css',
  '/alberto-hero-v2.webp',
  '/favicon-32x32.png',
  '/manifest.json',
];

// Installazione del Service Worker
self.addEventListener('install', (event) => {
  console.log('[SW] Installing Service Worker...');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Precaching App Shell');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Attivazione del Service Worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating Service Worker...');

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Elimina vecchie cache
          if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Strategia di caching
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return;
  }

  // HTML - Network First (per avere sempre contenuto aggiornato)
  if (request.headers.get('Accept').includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Clone della response per la cache
          const responseClone = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // Fallback alla cache se offline
          return caches.match(request).then((cachedResponse) => {
            return cachedResponse || caches.match('/index.html');
          });
        })
    );
    return;
  }

  // Immagini e Assets - Cache First (performance)
  if (
    request.destination === 'image' ||
    request.url.endsWith('.webp') ||
    request.url.endsWith('.png') ||
    request.url.endsWith('.jpg') ||
    request.url.endsWith('.jpeg') ||
    request.url.endsWith('.svg') ||
    request.url.endsWith('.css') ||
    request.url.endsWith('.js')
  ) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(request).then((response) => {
          // Salva in cache per il futuro
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(RUNTIME_CACHE).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        });
      })
    );
    return;
  }

  // Altri request - Network First con fallback
  event.respondWith(
    fetch(request)
      .then((response) => {
        const responseClone = response.clone();
        caches.open(RUNTIME_CACHE).then((cache) => {
          cache.put(request, responseClone);
        });
        return response;
      })
      .catch(() => {
        return caches.match(request);
      })
  );
});

// Gestione messaggi dal client
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
