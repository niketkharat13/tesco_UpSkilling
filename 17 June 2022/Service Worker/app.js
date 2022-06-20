const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service_worker.js')
    }
}

registerServiceWorker();   