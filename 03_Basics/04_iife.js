// Immediately Invoked Function Expression ( IIFE )


(function chai() {      //  Named iife
    console.log(`DB CONNECTED`);
}) ();  //  After execution of iife " ; " it's imp for next execution


( () => {    //  Unamed iife
    console.log(`DB CONNECTED`);
}) ();


( (username) => {   //  iife with Parameters
    console.log(`DB CONNECTED to ${username}`);
}) ("Shree");