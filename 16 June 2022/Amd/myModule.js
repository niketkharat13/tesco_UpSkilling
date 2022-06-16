define(function() {
    let counnter = 0;
    return function counterAction(type) {
        if (type == "INCREMENT") {
            counnter += 1;
        } else {
            counnter -= 1;
        }
        return counnter;
    }
});