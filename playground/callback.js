var getUser = (id, callback) =>{
    var user = {
        id: id,
        name: 'Vikram'
    };
    setTimeout(()=>{
        callback(user);
    },3000);
    
};

//setTimeout = (callback, delay) =>{
//
//}

getUser(31, (user)=>{
    console.log(user);
}); //callback -> we want to run when the user data comes back 