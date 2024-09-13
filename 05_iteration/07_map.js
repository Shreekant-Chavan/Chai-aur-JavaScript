let myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const newNums = myNums.map( (items) => {
    return items + 10
})

console.log(newNums);  //  [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]


// Multiple Chaining

const newNumbs = myNums
    .map( (num) => num * 10 )  //  [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]
    .map( (num) => num + 1 )  //  [ 11, 21, 31, 41, 51, 61, 71, 81, 91, 101 ]
    .filter ( (num) => num >= 40 )  //  [ 41, 51,  61, 71, 81, 91, 101 ]

console.log(newNumbs);