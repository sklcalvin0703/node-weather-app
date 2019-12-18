console.log('Starting app');

setTimeout(()=>{
    console.log('Inside of callback');
}, 2000); //node can do other things while this 2 seconds are happening

setTimeout(()=>{
    console.log('22');
}, 0);
//even this set to 0 seconds, but it will still run it after all the command


console.log('finishing app');