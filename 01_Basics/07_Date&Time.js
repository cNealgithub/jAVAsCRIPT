// Date and Time in Javascript

let myDate = new Date();
// console.log(myDate);
// console.log(typeof(myDate));
//we can use some methods to format or get the date in a formatted way
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.getTimezoneOffset());

// let myCurrentDate = new Date(2024, 1, 25);
let myCurrentDate = new Date(2024, 1, 25, 13, 35);
// console.log(myCurrentDate);
// console.log(myCurrentDate.toLocaleString());
// console.log(myCurrentDate.toString());
// console.log(myCurrentDate.toLocaleTimeString());

// -----------------Now let's work with Time---------------------
let mycreatedDate = new Date("01-30-2012");
console.log(mycreatedDate);
console.log(mycreatedDate.toLocaleString());

let mytimestap = Date.now();
console.log(mytimestap);
console.log(myCurrentDate.getTime());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})