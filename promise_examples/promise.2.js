let promise = new Promise(function(resolve, reject) {
    // Anonomous Function runs when Promise is created.

    // setTimeout(() => resolve('Single is Finished'), 1000);
    setTimeout(() => reject(new Error("Single is Terrible, no one gets it!")), 10000);
});
// I want to handle when the promise is finished (fullfilled/rejected)
promise.then(
    result => console.log(result),
    error => console.log(error.message)
);

console.log('Somewhere down here');
