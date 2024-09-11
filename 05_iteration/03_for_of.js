//  for of

const arr = [ 1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}
// 1
// 2
// 3
// 4
// 5


const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Each char is H
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is
// Each char is W
// Each char is o
// Each char is r
// Each char is l
// Each char is d
// Each char is !


//  Maps

const map = new Map();
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("IN", "India")  //  Filter only unique "key-value" pair & show's in order that you had given 


console.log(map);

// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   }

for (const key of map) {
    console.log(key);
}

// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]


for (const [key, value] of map) {
    console.log(key, ": - ", value);
}

// IN : -  India
// USA : -  United States of America
// Fr : -  France


let myObj = {
    game1: "NFS",
    game2: "Spiderman"
}

for (const [key, value] of myObj) {
    console.log(key, ": - ", value);  //  for of is not made for "Objects", It works on Arrays Only
}


