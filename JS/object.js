let obj = {key: '1', value: 'One'}

for (const [k, v] of Object.entries(obj)) {
    console.log(k, v);
}

for (const v of Object.values(obj)) {
    console.log(v);
}