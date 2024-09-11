const coding = [ "js", "java", "cpp", "rb", "python"]

coding.forEach( function (val) {
    console.log(val);
})

// js
// java  
// cpp   
// rb    
// python

coding.forEach( (item) => {
    console.log(item);
})

// js
// java  
// cpp   
// rb    
// python


function printMe(item) {
    console.log(item);
}

coding.forEach(printMe)

// js
// java  
// cpp   
// rb    
// python


coding.forEach( (item, index, array) => {
    console.log(item, index, array);
} )


// js 0 [ 'js', 'java', 'cpp', 'rb', 'python' ]
// java 1 [ 'js', 'java', 'cpp', 'rb', 'python' ]
// cpp 2 [ 'js', 'java', 'cpp', 'rb', 'python' ]
// rb 3 [ 'js', 'java', 'cpp', 'rb', 'python' ]
// python 4 [ 'js', 'java', 'cpp', 'rb', 'python' ]


const myCoding = [
    {
        languageName: "JavScirpt",
        languageFileName: "js",
    },
    {
        languageName: "Java",
        languageFileName: "java",
    },
    {
        languageName: "Python",
        languageFileName: "py",
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
} )

// js
// java
// py