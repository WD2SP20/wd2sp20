// A calback approach to async
/*
setTimeout(() => {
  console.log('This will run after 3 seconds');
},3000);
*/

// And the promise solution to the same problem
// We need to write a function that returns a promise
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

// Call the function and handle the result
delay(3000)
.then(() => {
  console.log('This will run after 3 seconds');
});
