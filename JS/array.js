let array = [1,2,4,5];

let newarr = array.map(e => e*2);
console.log(newarr);
array.forEach(e => {
    let ans = 1;
    if (e == 0 || e == 1) {
        return ans;
    } else {
        for (let i = e; i >= 1; i--) {
            ans*= i;
        }
        console.log(`factorial of ${e}: ${ans}`);
    }
})
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

let includeExample = array.includes(6);
console.log(includeExample);

let filtered = array.filter(element => element/2 == 0);
console.log(filtered);