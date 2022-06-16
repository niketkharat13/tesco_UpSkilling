var playerFn = (function () {
    var instance = null;
    function constructorFn(name, age) {
        return {
            name, age
        }
    }
    return {
        getInstance: function (name, age) {
            if (!instance) {
                instance = constructorFn(name, age);
            }
            return instance;
        }
    }
})()

var player = playerFn.getInstance("Niket", 24);
var player2 = playerFn.getInstance("XYZ", 01)
console.log(player);
console.log(player2);