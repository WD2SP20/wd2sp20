new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
}).then(result => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), result * 2000);
    });
}).then(result => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), result * 2000);
    });
}).then(result => {
    console.log(result);
});