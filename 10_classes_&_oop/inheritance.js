class User {
    constructor(username){
        this.username = username
    }

    logME(){
        console.log(`Usename is ${this.username}`);        
    }
}

class Teacher extends User {
    constructor(username, email, pass){
        super(username)
        this.email = email;
        this.pass = pass;
    }

    addCourse(){
        console.log(`A new Course was added by ${this.username}`);
    }
}

const chai = new Teacher("Chai", "chai@google.com", "Abc123")

chai.addCourse()  //  A new Course was added by Chai


const masalaChai = new User("masalaChai")

// masalaChai.addCourse()  // Error => is not a Function

masalaChai.logME()  //  Usename is masalaChai

chai.logME() //  Usename is Chai  => Inheritance of Parent Node 


console.log(chai === masalaChai);  //  false
console.log(chai === Teacher);  //  false
console.log(chai instanceof Teacher);  //  true
console.log(chai instanceof User);  //  true