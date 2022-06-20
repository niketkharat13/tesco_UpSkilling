const cacheVers = 'v1';
const cacheAssets = [
    './inndex.html',
    './app.js'
]
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(cacheVers).then(cache => {
            console.log("Service worker installed");
            cache.addAll(cacheAssets)
        }).then(() => self.skipWaiting())
    )
})

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(cache => {
            if (cache != cacheVers) {
                console.log("deleting old cache");
                return caches.delete(cache)
            }
        })
    )
})


self.addEventListener('fetch', e => {
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)))
})