document.getElementById('search_ip').addEventListener('keyup', () => doSomeMagic())

var counter = 0

function clickEvennnt() {
    console.log("searching....", counter++);
}

function debounce(cb , delay = 300) {
    let timer;
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            cb(this)
        }, delay);
    }
}

var doSomeMagic = debounce(clickEvennnt, 500)