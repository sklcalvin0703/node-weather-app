var asyncAdd = (a,b) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (typeof a === 'number' && typeof b === 'number'){
                resolve(a+b);
            }else{
                reject('Arguments must be number');
            }
        },1500);
    });
};
asyncAdd('n',2).then((res)=>{
    console.log('Resullts: ', res);
    return asyncAdd(res,'33');
}).then((res)=>{
    console.log(res);
}).catch((errorMessage)=>{ //using catch when chaining promises
    console.log(errorMessage);
});
// var somePromise = new Promise((resolve, reject)=>{   
//     setTimeout(()=>{
//         //resolve('Hey It worked');
//         reject('unable to fulfill promise');
//     }, 2500);

// });
// //cannot call the callback twice

// somePromise.then((message)=>{ //can pass in two function, success(resolve) or handle failure(reject)
//     console.log('Success: ', message);
// }, (errorMessage)=>{
//     console.log('Error: ', errorMessage);
// });