let score = "33abc"  // string

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);  // number
console.log (valueInNumber);  // NaN ( Not A Number )



// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0



let isLoggedIn = "Shree"

let booleanIsLoggedIn = Boolean (isLoggedIn)
console.log(booleanIsLoggedIn);


// 1 => true ; 0 => false
// "" => false
// "Shree" => true



let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);



// let score = null  // null

// console.log(typeof score);  // object
// console.log(typeof (score));  // object

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);  // number
// console.log (valueInNumber);  // 0


// let score = undefined  // undefined

// console.log(typeof score);  // undefined
// console.log(typeof (score));  // undefined

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);  // number
// console.log (valueInNumber);  // NaN ( Not A Number )


// let score = true  // boolean

// console.log(typeof score);  // boolean
// console.log(typeof (score));  // boolean

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);  // number
// console.log (valueInNumber);  // 1


// let score = "Shree"  // string

// console.log(typeof score);  // string
// console.log(typeof (score));  // string

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);  // number
// console.log (valueInNumber);  // NaN ( Not A Number )