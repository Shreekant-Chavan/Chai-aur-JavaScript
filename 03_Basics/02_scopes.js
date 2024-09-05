// Global Scope & Block Scope

let a = 300  // ( "Global Scope" => It can be use anywhere )
console.log(a);  // 300


if (true) {
    let a = 10  //  ( "Block Scope" => It's Value can use only in thier Scope )
    const b = 20  //  ( "Block Scope" => It's Value can use only in thier Scope )
    var c = 30  
    console.log("INNER :" , a);  // a = 10 
}

console.log(a);  //  Error = a is not defined  ( functional scope )
console.log(b);  //  Error = b is not defined  ( functional scope )
console.log(c);  // 30  ( Global Scope)