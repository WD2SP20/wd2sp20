// A callback approach to async
// setTimeout(() => {
//     console.log('This will run after 3 seconds');
//   },3000);

// console.log('I want this to run after the 3 seconds');

delay(3000)
.then(() => {
    console.log('This will run after 3 seconds');
}); 

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}