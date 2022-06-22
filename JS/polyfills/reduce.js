Array.prototype.reduceFn = function (cb, iv) {
    let accumulator = iv;
    for (let i = 0; i < this.length; i++) {
        if (accumulator != null) {
            accumulator = cb.call(undefined, this[i], accumulator)
        } else {
            accumulator = this[i]
        }
    }
    return accumulator;
}


let reducerfn = [1,2,3,4].reduceFn((curr, acc) => {
    return acc + curr;
}, 0)

console.log(reducerfn);