const accountId = 78677
let accountEmail = "shree@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;

// accountId = 123 // not allowed to change "Const Variable" once declared.


accountEmail = "shree@shree.com"
accountPassword = "Shree123"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


/*
Prefered to not use "var" 
because of issue in "Block Scope & Functional Scope"
*/
