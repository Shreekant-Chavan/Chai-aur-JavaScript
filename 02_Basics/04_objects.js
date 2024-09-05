// const tinderUser = new Object()  //  {}    // Singleton Object

const tinderUser = {}

tinderUser.id = "abc123"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);  //  {}

const reglarUser = {
    email: "random@google.com",
    fullname: {
        userFullName: {
            firstName: "Shreekant",
            lastName: "Chavan",
        }
    }
}

console.log(reglarUser);
// {
//     email: 'random@google.com',
//     fullname: { userFullName: { firstName: 'Shreekant', lastName: 'Chavan' } }
// }


console.log(reglarUser.fullname);
// { userFullName: { firstName: 'Shreekant', lastName: 'Chavan' } }


console.log(reglarUser.fullname.userFullName);
// { firstName: 'Shreekant', lastName: 'Chavan' }


console.log(reglarUser.fullname.userFullName.firstName);
// Shreekant



const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}

const obj3 = { obj1, obj2 }
console.log(obj3);  //  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


const obj4 = Object.assign( {}, obj1, obj2 )
console.log(obj4);  //  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = { ...obj1, ...obj2}
console.log(obj5);  //  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [
    {
        id: 1,
        email: "a@google.com",
    },
    {
        id: 2,
        email: "b@google.com",
    },
    {
        id: 3,
        email: "c@google.com",
    }
]

console.log(users[0].email);  //  a@google.com
console.log(users[1].email);  //  b@google.com


console.log(tinderUser);  //  { id: 'abc123', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser));  //  [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));  //  [ 'abc123', 'Sammy', false ]


console.log(Object.entries(tinderUser));  //  [ [ 'id', 'abc123' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]


console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //  true
console.log(tinderUser.hasOwnProperty('isLogged'));  //  false



const course = {
    courseName: "JS in Hindi",
    price: 999,
    courseInstructor: "Hitesh",
}

// console.log(course.courseInstructor);

const {courseInstructor} = course
console.log(courseInstructor);  //  Hitesh

const {courseInstructor: instructor} = course
console.log(instructor);  //  Hitesh