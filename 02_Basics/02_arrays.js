const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);  //  [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]


console.log(marvel_heros[3][0]);  //  Superman



// Concation

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);  //  [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]


// Spread Operator

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);  //  [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]


const another_array = [ 1, 2, 3, [4, 5], 6, 7, [1, 2, 3, [4, 5, 6, [7, 8, 9, 10]]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);  // [ 1, 2,  3, 4, 5, 6, 7, 1, 2,  3, 4, 5, 6, 7, 8, 9, 10 ]



console.log(Array.isArray("Shree"));  //  false
console.log(Array.from("Shree"));  //  [ 'S', 'h', 'r', 'e', 'e' ]
console.log(Array.from({name: "Shree"}));  //  []


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //  [ 100, 200, 300 ]