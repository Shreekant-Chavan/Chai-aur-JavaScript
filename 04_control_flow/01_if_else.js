// if

const isUserLoggedIn = true

if ( 3 != 2) {
    console.log("executed");
}


// > , < , >= , <= , == , === , != , !==

// if else

const temp = 40

if (temp > 50) {
    console.log("Temprature is Greater than 50");
} else {
    console.log("Temprature is Less than 50");
}


let score = 200

if (score > 100) {
    const power = "fly"
    console.log(`User power : ${power}`);
}

// console.log(`User power : ${power}`); Undefined => Block Scope



// Nested if else

const balance = 1500

if ( balance < 500 ) {
    console.log("Balance is less than 500");
} if ( balance < 750 ) {
    console.log("Balance is less than 750");
} if ( balance <1000 ) {
    console.log("Balance is less than 1000");
} else {
  console.log("Balance is less than 1500");
}




// AND Operator ( && )

// Statemnet / Condition Verification for AND ( && )
// T T => T
// T F => F
// F T => F
// F F => F

let userLoggedIn = true
let creditCard = true

if ( userLoggedIn && creditCard ) {
    console.log("Allowed to buy a Course");
}



//  OR Operator  ( || )

// Statemnet / Condition Verification for OR ( || )
// T T => T
// T F => T
// F T => T
// F F => F

let loggedInfromGoogle = true
let loggedInfromEmail = false
let loggedInfromGuest = false

if ( loggedInfromGoogle || loggedInfromEmail || loggedInfromGuest ) {
    console.log("User logged in");
}



