// A promise the fulfills after 1 second
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
// The second function runs with reject
promise.then(
  result => console.log(result), // shows "done!" after 1 second
  error => console.log(error) // doesn't run
);
