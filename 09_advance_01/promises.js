const promiseOne = new Promise( function(resolve, reject) {
    // Do an async calls
    // DB Calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is Completed");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})


// Another way

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 completed");
        resolve()
    },1000)
}).then(function(){
    console.log("Async task 2 resolved");
})


// Another way

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName:"Shree", emailId:"shree@google.com"})
    },2000)
})

promiseThree.then(function(user){
    console.log(user);
})


//  Another Way

const promiseFour =  new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({userName:"Shreekant",pass:"123"})
        } else {
            reject("ERROR: Something Went Wrong!")
        }
    },1000)
})


promiseFour.then( (user) => {
    console.log(user);
    return user.userName
}).then( (userName) => {
    console.log(userName);
}).catch( function(error){
    console.log(error);
}).finally( () => {
    console.log("Promise either resolve or rejected!");
})



const promiseFive = new Promise( function(resolve, reject) {
    setTimeout( function(){
        let error = false
        if (!error) {
            resolve({userName:"JavaScript", pass:"12345"})
        } else {
            reject("ERROR : JS Something Went Wrong")
        }
    },1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}




// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);    
//     }
// }

// getAllUsers()




fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
    
})