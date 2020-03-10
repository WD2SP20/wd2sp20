new Promise(function(resolve, reject) {
    // Anonomous Function runs when Promise is created.
    // Call resolve/reject after 1 second, based on command line argument
    setTimeout(() => {
        if(process.argv[2]) {
            resolve('Single is Finished')
        } else {
            reject(new Error("Single is Terrible, no one gets it!"))
        }
    }, 1000);
}).then(
    result => {
        console.log(result);
    }
).catch(
    error => {
        console.log(error.message);
    }
);
    
console.log('Somewhere down here');
