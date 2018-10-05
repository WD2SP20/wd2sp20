// Need updated version of node to handle async/await
// nvm install v10.11

// Traditional Async
function f() {
  setTimeout(() => {console.log("done!")}, 1000);
}
f();

// Fix Promise Way
function g() {
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  })
  .then(result => {
    console.log(result);
  });
}

g();

// Fix the Async/Await Way
async function h() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });

  let result = await promise;
  console.log(result);
}

h();
