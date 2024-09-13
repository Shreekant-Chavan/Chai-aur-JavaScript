const myNums = [ 1, 2, 3]

const myTotal = myNums.reduce( function ( acc, currval ) {
    console.log(`accumulator value : ${acc} and current value : ${currval}`);
    // accumulator value : 0 and current value : 1
    // accumulator value : 1 and current value : 2
    // accumulator value : 3 and current value : 3
    return acc + currval  //  6
}, 0)

console.log(myTotal);


const myTotal1 = myNums.reduce( ( acc, currval ) => {
    return acc + currval
},0 )

console.log(myTotal1);  //  6


const shoppingCart = [
    {
        itemName: "JS Course",
        itemPrice: 2999,
    },
    {
        itemName: "py Course",
        itemPrice: 1999,
    },
    {
        itemName: "Data Science Course",
        itemPrice: 12999,
    },
    {
        itemName: "AI/ML Course",
        itemPrice: 9999,
    },
    {
        itemName: "Mobile Dev Course",
        itemPrice: 4999,
    },
]


const priceToPay = shoppingCart.reduce( ( acc, item ) => ( acc + item.itemPrice ),0)

console.log(priceToPay);  //  32995