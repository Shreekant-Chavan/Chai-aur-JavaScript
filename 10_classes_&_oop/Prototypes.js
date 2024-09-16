// let myName = "Shree     "
// let myChannel = "Chai        "

// console.log(myName.trueLenght);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "Sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.shree = function(){
    console.log("Shree is present in all objects");
}

Array.prototype.heyShree = function(){
    console.log("Shree says Hello");
}

heroPower.shree()  //  Shree is present in all objects
myHeros.shree()  //  Shree is present in all objects


myHeros.heyShree()  //  Shree says Hello
// heroPower.heyShree()  //  Error




// ++++++++++++++++++++++ Inheritance +++++++++++++++++++++++++++++


const User = {
    name: "Shree",
    emailId: "Shree@google.com"
}


const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignmet: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport, 
}

Teacher.__proto__ = User


// Mordern Syntax


Object.setPrototypeOf(TeachingSupport, Teacher)



let anotherUserName = "Chai Aur Code      "

String.prototype.trueLenght = function() {
    console.log(`${this}`);
    console.log(`True lenght is: ${this.trim().length}`);
}

anotherUserName.trueLenght()
"SHREEKANT".trueLenght()
"Chai".trueLenght()