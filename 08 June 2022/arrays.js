const numberArr = [1,2,3,4,5,6];

const filteredArr = numberArr.filter(num => num > 5);
console.log(filteredArr);

const mappedArr = numberArr.map(num => ({num}));
console.log(mappedArr);

let multiplication = numberArr.reduce((prev, curr) => {
    return prev * curr;
})
console.log(multiplication);

function findMax(...nums) {
    let currMax = nums[0];
    let currMin= nums[0];
    for (const num of nums) {
        if (num > currMax) {
            currMax = num
        } else if (num < currMin) {
            currMin = num;
        }
    }
    return [currMax, currMin];
}

let [max, min] = findMax(...numberArr);
console.log(max, min);