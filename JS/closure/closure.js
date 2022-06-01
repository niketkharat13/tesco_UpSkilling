function counterClosure() {
    var counter = 0;
    return function (type) {
        console.log(counter);
        if (type === "INCREMENT") {
            counter+= 1;
        } else {
            counter-= 1;
        }
        document.getElementById('cntrdisplay').innerText = counter;
    }
}

var counterInst = counterClosure();


// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment) 