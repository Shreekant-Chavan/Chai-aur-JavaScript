let userEmail = "s@shree.ai"

if ( userEmail ) {
    console.log("Got user Email");
} else {
    console.log("Don't have User's Email");
}


// falsy values =>

// false, 0, -0, 0n ( BigInt ), "", null, undefined, NaN


// truthy values =>

// "0", "false", " ", [], {}, function(){}


if ( userEmail.length === 0 ) {
    console.log("Array is empty");
}


const emptyObj = {}

if ( Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}





// Nullish Coalescing Operatoe ( ?? ) : null undefined

let val1

val1 = 5 ?? 10  //  5
val1 = null ?? 10  //  10
val1 = undefined ?? 25  //  25
val1 = null ?? 10 ?? 25   //  10



console.log(val1);



//  Terniary Operator

// Condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("Greater than 80") : console.log("Less than 80");