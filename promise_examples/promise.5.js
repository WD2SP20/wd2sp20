// setTimeout(() => {
//     console.log('This will run after 3 seconds');
//     setTimeout(() => {
//         console.log('This will run 2 seconds later');
//         setTimeout(() => {
//             console.log('This will run 1 second later (Total of 6 seconds)');
//         },1000);
//     },2000);
// },3000);
"use strict"
new Promise((resolve, reject) => {
    setTimeout(() => resolve('This will run after 3 seconds'), 3000);
})
.then(result => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('This will run 2 seconds later'), 2000);
    });
})
.then(result => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('This will run 1 second later (Total of 6 seconds)'), 1000);
    });
})
.then(result => console.log(result));

console.log('Do I understand async timing?');