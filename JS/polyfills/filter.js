Array.prototype.filterFn = function (cb){
    let filter = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            filter.push(this[i])
        }
    }
    return filter;
}

let flt = [1,2,3,4].filterFn((e) => e%2 == 0)
console.log(flt);