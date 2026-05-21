/* Chatterbox Service Worker – Android PWA support */
const CACHE_NAME = 'chatterbox-v1';
const PRECACHE_URLS = [
  '/ume2meu/',
    '/ume2meu/index.html',
      '/ume2meu/manifest.json',
        '/ume2meu/icons/icon-192.png',
          '/ume2meu/icons/icon-512.png'
          ];

          /* Install: cache core assets */
          self.addEventListener('install', event => {
            event.waitUntil(
                caches.open(CACHE_NAME)
                      .then(cache => cache.addAll(PRECACHE_URLS))
                            .then(() => self.skipWaiting())
                              );
                              });

                              /* Activate: remove old caches */
                              self.addEventListener('activate', event => {
                                event.waitUntil(
                                    caches.keys().then(keys =>
                                          Promise.all(
                                                  keys
                                                            .filter(key => key !== CACHE_NAME)
                                                                      .map(key => caches.delete(key))
                                                                            )
                                                                                ).then(() => self.clients.claim())
                                                                                  );
                                                                                  });

                                                                                  /* Fetch: serve from cache, fall back to network */
                                                                                  self.addEventListener('fetch', event => {
                                                                                    /* Only handle GET requests */
                                                                                      if (event.request.method !== 'GET') return;

                                                                                        /* Pass through requests to external APIs (translation, PeerJS CDN) */
                                                                                          const url = new URL(event.request.url);
                                                                                            if (url.hostname !== self.location.hostname) {
                                                                                                return; /* let the browser handle cross-origin requests normally */
                                                                                                  }

                                                                                                    event.respondWith(
                                                                                                        caches.match(event.request).then(cached => {
                                                                                                              if (cached) return cached;
                                                                                                                    return fetch(event.request).then(response => {
                                                                                                                            /* Cache successful same-origin responses */
                                                                                                                                    if (response && response.status === 200 && response.type === 'basic') {
                                                                                                                                              const clone = response.clone();
                                                                                                                                                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                                                                                                                                                                }
                                                                                                                                                                        return response;
                                                                                                                                                                              });
                                                                                                                                                                                  })
                                                                                                                                                                                    );
                                                                                                                                                                                    });
