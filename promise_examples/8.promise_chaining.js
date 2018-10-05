// The same solution as callback hell, without the hell
new Promise((resolve, reject) => {
  setTimeout(() => resolve('After 3 Seconds'), 3000);
})
.then(result => {
  console.log(result);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('2 Seconds Later'), 2000);
  });
})
.then(result => {
  console.log(result);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('1 Second Later'), 1000);
  });
})
.then(result => console.log(result));
