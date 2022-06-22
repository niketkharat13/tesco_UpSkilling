Array.prototype.includesFn = function(element) {
    let isIncluded = false;
    for (let i = 0; i < this.length; i++) {
        if (element == this[i]) {
            isIncluded = true;
            break;
        }
    }
} 

String.prototype.includesFn = function(str) {
    let s1 = this.length;
    let s2 = str.length;
    for (let i = 0; i < s1 - s2 ; i++) {
        let j;
        for (j = 0; j < s2; j++) {
            if (this[i + j] != str[j]) 
                break;
        }
        console.log(j, i);
        if (j == s2) {
            return i;
        }
    }
    return -1;
}



let a = 'Niket'.includesFn("Nik")
console.log(a);