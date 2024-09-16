function SetUserName(username) {
    // complex DB Calls
    this.username = username
    console.log("called");
}

function createUser(username, email, pass) {

    SetUserName.call(this, username)

    this.email = email;
    this.pass = pass;
}

const chai = new createUser("chai", "chai@google.com", 123)
console.log(chai);