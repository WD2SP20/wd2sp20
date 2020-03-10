"use strict"
new Promise((resolve, reject) => {
    if(process.argv[2] == 1)
      reject(new Error('First Error!'));
    else
        setTimeout(() => resolve('This will run after 3 seconds'), 3000);
})
.then(result => {
    console.log(result);
    return new Promise((resolve, reject) => {
        if(process.argv[2] == 2)
            reject(new Error('Second Error!'));
        else
            setTimeout(() => resolve('This will run 2 seconds later'), 2000);
    });
})
.then(result => {
    console.log(result);
    return new Promise((resolve, reject) => {
        if(process.argv[2] == 3)
            reject(new Error('Third Error!'));
        else
            setTimeout(() => resolve('This will run 1 second later (Total of 6 seconds)'), 1000);
    });
})
.then(result => console.log(result))
.catch(error => console.log(error.message));