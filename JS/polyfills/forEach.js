Array.prototype.forEachFn = function(cb){
    for (let i = 0; i < this.length; i++) {
        cb(this[i])
    }
}


[1,2,3].forEach((a) => {

})