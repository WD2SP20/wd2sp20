setTimeout(() => {
  console.log('This will run after 3 seconds');
    setTimeout(() => {
      console.log('This will run 2 seconds later');
        setTimeout(() => {
          console.log('This will run 1 second later (Total of 6 seconds)');
        },1000);
    },2000);
},3000);
