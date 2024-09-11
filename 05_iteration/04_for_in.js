let myObj = {
    js: "JavaScirpt",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple",
}

for (const key in myObj) {
    console.log(key);
}

// js
// cpp  
// rb   
// swift


for (const key in myObj) {
    console.log(myObj[key]);
}

// JavaScirpt
// C++
// Ruby
// Swift by Apple


for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

// js shortcut is for JavaScirpt
// cpp shortcut is for C++
// rb shortcut is for Ruby
// swift shortcut is for Swift by Apple


const programming = ["js", "py", "cpp", "rb", "java"]

for (const key in programming) {
    console.log(key);   //  for-in on "arrays" gives the indices of array not value of array
}

// 0
// 1
// 2
// 3
// 4


for (const key in programming) {
    console.log(programming[key]);
}

// js
// py
// cpp
// rb
// java

