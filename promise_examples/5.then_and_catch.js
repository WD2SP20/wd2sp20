// Example of using .then and .catch
// Create a promise.
// Will resolve if there is a command line argument
// Will reject if no command line argument is given
new Promise(function(resolve, reject) {
  setTimeout(() => {
    if (process.argv[2]) {
      resolve("done!");
    } else {
      reject(new Error("Whoops!"));
    }
  }, 1000);
})
.then(result => {
  console.log(result);
})
.catch(error => {
  console.log(error);
});
