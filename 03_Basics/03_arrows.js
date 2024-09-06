// const user = {
//     username: "Shree",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username}, Welcome to Website`);
//         console.log(this);  
//         // {
//         //     username: 'Shree',
//         //     price: 999,
//         //     welcomeMessage: [Function: welcomeMessage]
//         //   }
        
//         //   {
//         //     username: 'Sam',
//         //     price: 999,
//         //     welcomeMessage: [Function: welcomeMessage]
//         //   }
//     }
// }

// user.welcomeMessage();  //  Shree, Welcome to Website
// user.username = "Sam"
// user.welcomeMessage();  //  Sam, Welcome to Website

// console.log(this);  //  {}
// console.log(this);  //  window object => on Browser Console


// function chai() {
//     let username = "Shree"
//     console.log(this.username);  //  Undefined => "this" not usable in "Functions"
// }

// chai()


// const chai = function() {
//     let username = "Shree"
//     console.log(this.username);  //  Undefined => "this" not usable in "Functions"
// }

// chai()


// const chai = () => {
//     let username = "Shree"
//     console.log(this.username);  //  Undefined => "this" not usable in "Functions"
// }

// chai()






// () => {}

const addTwoNum = ( num1, num2 ) => {
    return num1 + num2
}

console.log(addTwoNum(3,6));  //  9


// Implicit Return

const addTwoNumb = ( num1, num2 ) => num1 + num2
console.log(addTwoNumb(3,3));  //  6


const addTwoNumb1 = ( num1, num2 ) => {username: "Shree"}  //  Error => Undefined
console.log(addTwoNumb1(3,3));  //  Undefined


// To prevent this Error "Wrap Object with () "

const addTwoNumbs = ( num1, num2 ) => ({username: "Shree"})
console.log(addTwoNumbs(3,3));  //  { username: 'Shree' }