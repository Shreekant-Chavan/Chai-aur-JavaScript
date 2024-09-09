// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
}


for (let i = 0; i <= 10; i++) {
    // console.log(`Inner loop value ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Outer loop value ${j} & inner loop value ${i}`);
        // console.log( i + '*' + j + '=' + ( i*j ) );
    }   
}

let myArray = ['flash', 'batman', 'superman']

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}



//  Break & Continue 

for (let index = 1; index <= 20 ; index++) {
    if ( index == 7 ) {
        console.log(`Detected "7"`);
        break;
    }
    console.log(`Value of i is ${index}`);
}
// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Value of i is 5
// Value of i is 6
// Detected "7"


for (let index = 1; index <= 20 ; index++) {
    if ( index == 7 ) {
        console.log(`Detected "7"`);
        continue;  //  Ek khoon maaf 
    }
    console.log(`Value of i is ${index}`);
}

// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Value of i is 5
// Value of i is 6
// Detected "7"
// Value of i is 8
// Value of i is 9
// Value of i is 10
// Value of i is 11
// Value of i is 12
// Value of i is 13
// Value of i is 14
// Value of i is 15
// Value of i is 16
// Value of i is 17
// Value of i is 18
// Value of i is 19
// Value of i is 20