const user = {
    userName: "Shreekant",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        console.log("Got user's details from DataBase");
        console.log(`UserName: ${this.userName}`);  // "this" use for current Context
        // UserName: Shreekant
        console.log(this);
        // {
        //     userName: 'Shreekant',
        //     loginCount: 8,
        //     signedIn: true,
        //     getUserDetails: [Function: getUserDetails]
        //   }
    }
}


console.log(user.userName);  //  Shreekant
console.log(user.getUserDetails());
// Got user's details from DataBase
// undefined

console.log(this);  //  {}


function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this
}

const userOne = new User("Shree", 11, true)
const userTwo = new User("ChaiAurCode",8,false)
// When we don't use "new" keyword when we pass another value it override on new value
// But when we use "new" keyword it Constructor Function it gives the new Instance(new copy)

//  "new" => when use "new" keyword it creates empty object {} -> which is called Instance

// Steps => 
//     1. Creates an empty Object{}
//     2. Constructor function has been called (Coz of "new")
//     3. Your all arguments are injected in "this" keyword
//     4. Gets function output.

console.log(userOne);
console.log(userTwo);