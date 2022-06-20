navigator.serviceWorker.register('path_name')

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('v1').then(cache =>{
            cache.addAll('all_file')
        }).then(() => self.skipWaiting())
    )
})


self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(cache => {
            if (cache != 'v1') {
                caches.delete(cache)
            }
        })
    )
})


self.addEventListener('fetch', e => {
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)))
})