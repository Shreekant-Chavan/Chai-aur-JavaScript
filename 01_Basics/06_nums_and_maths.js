// const score = 500
// console.log(score);  // 500

// const balance = new Number(100)
// console.log(balance);  // [Number: 100]

// console.log(balance.toString());  // 100
// console.log(balance.toString().length);  // 3
// console.log(balance.toFixed(2));  // 100.00

// const otherNumber = 12.869
// console.log(otherNumber.toPrecision(2));  // 13

// const otherNumber1 = 125.869
// console.log(otherNumber1.toPrecision(3));  // 126

// const otherNumber2 = 1259.869
// console.log(otherNumber2.toPrecision(2));  // 1.3e+3


// const hundreds = 1000000
// console.log(hundreds.toLocaleString());  //  10,00,000
// console.log(hundreds.toLocaleString("en-IN"));  //  10,00,000


// ++++++++++++++++++++++ Maths ++++++++++++++++++++++

console.log(Math);  //  Object [Math] {}
console.log(Math.abs(-4));  // Convert Negative to Positive Value  => 4

console.log(Math.round(4.2));  //  4

console.log(Math.round(4.6));  //  5

console.log(Math.ceil(4.6));  //  5

console.log(Math.ceil(4.2));  //  5

console.log(Math.floor(4.6));  //  4

console.log(Math.floor(4.2));  //  4

console.log(Math.min(2,4,6,8,10));  //  2

console.log(Math.max(2,4,6,8,10));  //  10

console.log(Math.random());  // Gives the random number between 0 to 1

console.log(Math.random()*10);  //  Gives the random number between 0 to 9 with integers

console.log(Math.random()*10 + 1);  //  Gives the random number between 1 to 9 with integers

console.log(Math.floor((Math.random()*10) + 1 ));  //  Gives the random number between 1 to 9




const min = 10
const max = 20

console.log(Math.floor(Math.random() * ( max - min + 1 ) + min))
