const name = "Shreekant"
const repoCount = 69

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} & my repo count is ${repoCount}`);  // Method Called "String Interpolation"

// another way to declare string

const gameName = new String ("Shreekantac")

console.log(gameName[0]);
console.log(gameName.__proto__);  // {}




console.log(gameName.length);  // 11
console.log(gameName.toUpperCase());  // SHREEKANTAC
console.log(gameName.charAt(2));  //  r 
console.log(gameName.indexOf("e"));  //  3


const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(-8, 5)
console.log(anotherString);


const newStringOne = "    Shree     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shree.com/shree%20chavan"
console.log(url.replace("%20" , "-"));

console.log(url.includes("shree"));  // true
console.log(url.includes("sundar"));  // false

const newGameName = "Shree-AC-com"
console.log(newGameName.split("-"));
// split convert string to an array 
// [ "Shree", "AC", "com"] 