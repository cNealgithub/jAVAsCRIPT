//we will be trying to convert datatypes ofvariables from one type to another in this code file

let score = null
console.log("the type of score :", typeof score);
let newscore = Number(score)
console.log("After conversion :: score type :", typeof newscore)
console.log(newscore);

// "75" => 75
//  "75ada" => NaN (Not a Number)
// undefined => NaN
// Null => 0

let loggedin = "String"
console.log(typeof loggedin);
let boolinnumber = Boolean(loggedin)
console.log(typeof boolinnumber);
console.log(boolinnumber);

// true => 1; false => 0
// 1 => true; 0 => false
// 4 => true
// "" => false
// " " => true
//"String" => true


let age = 75
console.log(typeof age);
let newage = String(age)
console.log(typeof newage);
console.log(newage);

// 75 => "75"
console.log("string and number conversions:-");
 let val = 33
 let negval = -val
 console.log(negval);
 console.log("1" + 2);
 console.log(1 + "2");
 //confusing part
 console.log(Number("1") + 2 + 3);
 console.log(1 + "2" + 3);
 console.log(1 + 2 + "3");
 
 
 
 
 
 

