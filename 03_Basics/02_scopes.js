// Global Scope & Block Scope

let a = 300  // ( "Global Scope" => It can be use anywhere )
console.log(a);  // 300


if (true) {
    let a = 10  //  ( "Block Scope" => It's Value can use only in thier Scope )
    const b = 20  //  ( "Block Scope" => It's Value can use only in thier Scope )
    var c = 30  
    console.log("INNER :" , a);  // a = 10 
}

// console.log(a);  //  Error = a is not defined  ( functional scope )
// console.log(b);  //  Error = b is not defined  ( functional scope )
// console.log(c);  // 30  ( Global Scope)



function one() {
    const username = "Shreekant"

    function two() {
        const website = "Youtube"
        console.log(username);
    }

    // console.log(website);  //  Block Scope => It won't run cause "website" is defined under the function two() and it's not accesible over the function

    two()
}

one()


if (true) {
    const username = "Shreekant"
    if (username === "Shreekant") {
        const website = " Youtube"
        console.log( username + website );
    }
    // console.log(website);  //  Block Scope
}

// console.log(username);  //  Block Scope


// +++++++++++++++++++++++++ Intresting +++++++++++++++++++++++++


addOne(5)  // This function value accesible before function declaration

function addOne(num) {
    return num + 1
}



const addTwo = function (num) {  //  This function value can't accesible before function declaration,  also called as "Hoisting"
    return num + 1
}

addTwo(5)