// The same example but with a catch
new Promise((resolve, reject) => {
  if (process.argv[2] == 1)
    reject(new Error("First Error"));
  else
    setTimeout(() => resolve('After 3 Seconds'), 3000);
})
.then(result => {
  console.log(result);
  return new Promise((resolve, reject) => {
    if (process.argv[2] == 2)
      reject(new Error("Second Error"));
    else
      setTimeout(() => resolve('2 Seconds Later'), 2000);
  });
})
.then(result => {
  console.log(result);
  return new Promise((resolve, reject) => {
    if (process.argv[2] == 3)
      reject(new Error("Third Error"));
    else
      setTimeout(() => resolve('1 Second Later'), 1000);
  });
})
.then(result => console.log(result))
.catch(error => console.log(error.message));
