let promise = new Promise(function(resolve, reject) {
    // Anonomous Function runs when Promise is created.

    setTimeout(() => resolve('Single is Finished'), 1000);
});
// Log the promise (should be pending)
console.log(promise);
// Log the promise (should be fullfilled)
setTimeout(() => console.log(promise), 2000);