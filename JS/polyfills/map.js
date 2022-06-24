Array.prototype.mapFunction = function (cb){
    let newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(cb(this[i]))
    }
    return newArray;
}

let arr = [1,2,3];
let mappolyfills = arr.mapFunction((a) => {
    return a * 2
})