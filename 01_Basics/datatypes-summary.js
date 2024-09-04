// Data Types - 
// 1. Primitives 
// 2. Reference ( Non-Primitives )


// 1. Primitives : 

// 7 Types => String, Number, Boolean, BigInt, Undefined, Null, Symbol


let userName = "Shreekant"  // String
const score = 100  // number
const scoreValue = 100.69  // number

const isLoggedIn = false // Boolean
const outsideTemp = null  // Null
let userEmail;  // Undefined
let userEmailId = undefined  // Undefined


const id = Symbol('123')
const anotherId = Symbol('123')

console.log( id === anotherId );  // false

const bigNumber = 6969696969696969696969n



// 2. Reference ( Non-Primitives ) :

// 3 Types => Array, Object, Functions
// [], {}, ()

let heros = ["Shaktiman", "Naagraj", "Doga"]
let myObj = {
    name : "Shreekant",
    age : 18,
}


const myFunction = function() {
    console.log("Hello World!");
}





console.log(typeof bigNumber);  // BigInt
console.log(typeof outsideTemp);  // Object
console.log(typeof scoreValue);  // Number
console.log(typeof userName);  // String
console.log(typeof userEmail);  // Undefined
console.log(typeof isLoggedIn);  // Boolean
console.log(typeof id);  // Symbol
console.log(typeof anotherId);  // Symbol
console.log(typeof heros);  // Object
console.log(typeof myObj);  // Object
console.log(typeof myFunction);  // Function




// ++++++++++++++++++++++++++++++++++++++++

// Stack ( Primitive ), Heap ( Reference / Non-Primitive )


let youtubeName = "Shreekant-Chavan.com"
let anotherName = youtubeName
anotherName = "Flamboy-Gaming.com"

console.log(youtubeName);
console.log(anotherName);


let userOne = {
    email : "shree@shree.com",
    upi : "user@ybl" 
}

let userTwo = userOne

userTwo.email = "shree@google.com"

console.log(userOne);
console.log(userTwo);