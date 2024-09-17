// ES6

class User {
    constructor(userName, email, pass){
        this.userName = userName;
        this.email = email;
        this.pass = pass
    }

    encryptPass(){
        return `${this.pass}Abc`
    }
    changeInUserName(){
        return `${this.userName.toUpperCase()}`
    }

}

const chai = new User("Chai", "chai@google.com", "123")
console.log(chai.encryptPass());  //  123Abc
console.log(chai.changeInUserName());  //  CHAI


// Behind the Scene of Classes


function User1(userName, email, pass){
    this.userName = userName;
    this.email = email;
    this.pass = pass;
}

User1.prototype.encryptPass = function(){
    return `${this.pass}Abc`
}

User1.prototype.changeInUserName = function() {
    return `${this.userName.toUpperCase()}`
}

const tea = new User1("Tea", "tea@google.com", "123")

console.log(tea.encryptPass());
console.log(tea.changeInUserName());