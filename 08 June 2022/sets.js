const set = new Set();
set.add(10);
set.add(-5);
set.add(10);
console.log(set);
set.delete(-5)
let has = set.has(10);
// console.log(has);


let person1 = {name: 'Niket', id: '1010'}
let person2 = {name: 'Niket1', id: '10101'}

const map = new Map();
map.set(person1, [{date: '08/09/2022'}])
map.set(person2, 'Data not found')
console.log(map.get(person1));
