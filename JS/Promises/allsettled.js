const promise11 = Promise.resolve(3);
const promise22 = 42;
const promise33 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'foo');
});

Promise.allSettled([promise11, promise22, promise33]).then((values) => {
  console.log(values);
});