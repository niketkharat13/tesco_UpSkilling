function multiplication(x, y) {
    return x * y;
}

let b = multiplication(14,56);
console.log(b);

let arrayEl = [1,2,3];

function addElementToArray(array, el) {
    return [...arrayEl, el]
}

let a = addElementToArray(addElementToArray, 4);
console.log(a);

// Function which does not affect changes outside, it return the same value when we provide same input, it shouldn't done any side effect