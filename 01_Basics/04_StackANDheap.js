// in js there are two broad category of datatypes
// 1) Primitive type => follows call by value ; stoed in stack : copy of the value is passed 
// 2) Non-Primitive type/reference type => follows call by reference : stored in heap : direct memory reference is passed 

//example of Primitive datatype:- :: the value in base variable will not change as a copy is passed
let email = "neal620@outlook.com"
let newemail = email
console.log(newemail);
newemail = "naman7878@gmail.com"
console.log(email);
console.log(newemail);

//example of Non-Primitive:- :: the value of bae variable will change as reference of memory is passed from heap
let aman = {
    useremail:"amankumar@gmail.com",
    upi:"aman@sbi"
}

let newaman = aman
console.log(aman.useremail);

newaman.useremail = "amanrawat789@outlook.com"
console.log(aman.useremail);
console.log(newaman.useremail);
console.log("abhinav raj ki testing");



