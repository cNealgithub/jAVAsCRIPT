const score = 400;
console.log(score);

// const balance = new Number(400000)
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toLocaleString('en-IN'));
// console.log(balance.toFixed(2));//ADDS DECIMAL AND ZEROS AFTERACTUAL NUMBER

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(5));

const hundreds = 1000000

console.log(hundreds.toLocaleString('en-IN'));

console.log("--------------------------------------MATHS PART------------------------------------------");
console.log(Math);
// console.log(Math.abs(-45));//only converts -ive nums to +ive
// console.log(Math.round(9.8));
// console.log(Math.round(9.4));
// console.log(Math.ceil(9.4));//will lways round off to the higher value
// console.log(Math.floor(9.8));//will always round off number to the lower value
// console.log(Math.max(44, 5, 87, 0));
// console.log(Math.min(12, 45, 58, 2));

console.log(Math.random());
console.log((Math.random() * 10)+1);
console.log(Math.round(Math.random() * 10)+1);

const min = 10
const max = 30

console.log(Math.floor(Math.random() * (max - min + 1)) + min)











