// Traditional Async - Problem
// function f() {
//   let result;
//   setTimeout(() => {result = "done!"}, 1000);
//   console.log(result);
// }
// f();

// Fix Traditional Async way
// function f() {
//   setTimeout(() => {console.log("done!")}, 1000);
// }
// f();

// Fix the Promise Way
// function f() {
//   new Promise((resolve, reject) => {
//     setTimeout(() => {resolve("done!")}, 3000)
//   })
//   .then(result => console.log(result));
// }
// f();

// Fix the Async/Await Way
// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 3000);
//   });
//   let result = await promise;
//   console.log(result);
// }
// f();

const f = async function() {
  console.log('Start of Function Call of f()');
  let result;
  // Setup the first promise
  let p = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  })
  result = await p;
  console.log(result);
  // Setup the second promise
  p = new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), result * 2000);
  });
  result = await p;
  console.log(result);
  // Setup the third promise
  p = new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), result * 2000);
  });
  result = await p;
  console.log(result);
  console.log('End of Function Call of f()');
};
f();