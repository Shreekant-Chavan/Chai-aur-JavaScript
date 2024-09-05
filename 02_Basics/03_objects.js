// Objects

// Singleton
// Object.create

// Object Literals


const mySym = Symbol("key1")


const JsUser = {
    name: "Shreekant",
    "full Name" : "Shreekant Chavan",
    [mySym]: "key1",
    age: 22,
    location: "Mumbai",
    email: "shree@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}


console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full Name"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.email = "shree@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "shree@microsoft.com"
console.log(JsUser);

JsUser.greetings = function() {
    console.log("Hello JS User!");
}

JsUser.greetingsTwo = function() {
    console.log(`Hello JS User!, ${this.name}`);
}

console.log(JsUser.greetings);  //  [Function (anonymous)]
console.log(JsUser.greetings());  //  Hello JS User!        undefined

console.log(JsUser.greetingsTwo());  //  Hello JS User!, Shreekant           undefined