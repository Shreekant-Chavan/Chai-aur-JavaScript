class User {
    constructor (username){
        this.username = username
    }

    logME(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){  // static used for stopped the access of using method/properties
        return `123`
    }
}

const Shree = new User ("Shree")
// console.log(Shree.createId());  //  123


class Teacher extends User {
    constructor (username, email) {
        super(username)
        this.email = email
    }
}

const iPhone = new Teacher("iPhone", "i@Phone.com")
iPhone.logME()  //  Username: iPhone
console.log(iPhone.createId());  //  static used for stopped the access of using method/properties