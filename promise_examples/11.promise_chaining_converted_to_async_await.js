const f = async function() {
  console.log('Start of Function Call of f()');
  let result;
  // Setup the first async promise
  let p = new Promise((resolve, reject) => {
    setTimeout(() => resolve('After 3 Seconds'), 3000);
  });
  // Handle the result
  result = await p;
  console.log(result);
  // Setup the 2nd async promise
  p = new Promise((resolve, reject) => {
    setTimeout(() => resolve('2 Seconds Later'), 2000);
  });
  // Handle the result
  result = await p;
  console.log(result);
  // Setup the 3rd async promise
  p = new Promise((resolve, reject) => {
    setTimeout(() => resolve('1 Second Later'), 1000);
  });
  // Handle the result
  result = await p;
  console.log(result);
  console.log('End of Function Call of f()');
};

f();
