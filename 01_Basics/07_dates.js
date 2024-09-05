// Dates

let myDate = new Date()
console.log(myDate);  //  2024-09-05T09:47:37.278Z

console.log(myDate.toString());  //  2024-09-05T09:50:57.565Z
// Thu Sep 05 2024 15:20:57 GMT+0530 (India Standard Time)

console.log(myDate.toDateString());  //  Thu Sep 05 2024


console.log(myDate.toISOString());  //  2024-09-05T09:53:37.676Z


console.log(myDate.toJSON());  //  2024-09-05T09:54:17.878Z


console.log(myDate.toLocaleString());  //  5/9/2024, 3:25:21 pm


console.log(myDate.toLocaleDateString());  //  5/9/2024

console.log(typeof myDate);  //  object

let myCreatedDate = new Date(2024, 0, 23)
console.log(myCreatedDate);  //  2024-01-22T18:30:00.000Z

console.log(myCreatedDate.toLocaleString());  //  23/1/2024, 12:00:00 am


let myCreatedDate1 = new Date(2024, 0, 23, 5, 20)
console.log(myCreatedDate1.toLocaleString());  //  23/1/2024, 5:20:00 am


let myCreatedDate2 = new Date("2024-01-23")  // YYYY-MM-DD
console.log(myCreatedDate2.toLocaleDateString());  //  23/1/2024


let myCreatedDate3 = new Date("01-23-2024")  //  MM-DD-YYYY
console.log(myCreatedDate3.toLocaleDateString());  //  23/1/2024


let myTimeStamp = Date.now()
console.log(myTimeStamp);  //  1725531558600

console.log(myCreatedDate3.getTime());  //  1705948200000
console.log(Math.floor(Date.now()/1000));  //  1725531930


let newDate = new Date()
console.log(newDate);  //  2024-09-05T10:28:18.484Z

console.log(newDate.getDay());  //  4
console.log(newDate.getMonth());  //  8
console.log(newDate.getFullYear());  //  2024
console.log(newDate.getMilliseconds());  //  849
console.log(newDate.getSeconds());  //  58
console.log(newDate.getMinutes());  //  2
console.log(newDate.getHours());  // 16

newDate.toLocaleString('default', {
    weekday: "long",
})