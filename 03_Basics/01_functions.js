function sayMyName() {
    console.log("S");
    console.log("R");
    console.log("E");
    console.log("E");
    console.log("K");
    console.log("A");
    console.log("N");
    console.log("T");
}

// sayMyName();

// function addTwoNums(number1, number2) {
//     console.log(number1 + number2);
// }


addTwoNums(2, 5)  //  7
addTwoNums(2, "5")  //  25
addTwoNums(2, "a")  //  2a
addTwoNums(2, null)  //  2

function addTwoNums(number1, number2) {
    let result = number1 + number2
    return result
}

const result = addTwoNums( 2, 8 )

console.log( "Result :", result);  //  Result : 10



function loginUserMessage(username) {
    return `${username} just logged in`
}

console.log(loginUserMessage("Shreekant"))  //  Shreekant just logged in




function loginUserMessage1(username = "Shree") {
    if (username === undefined) {
        console.log("Please enter a Username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage1())  //  Please enter a Username 