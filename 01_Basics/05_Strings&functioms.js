//strings are primitive data types in js and are stored in stack memor and values are passed as copies
const githubname = "neahCgithub";
let repos = 8;
// Bad practise of lgging strings together
console.log(githubname + " has "+ repos + " repos.");
// in oder time we must use string interpolation
console.log(`My github account name is ${githubname} and i have ${repos} repos `);

//methods of strings
const gamename = new String("GodOfWars")
const str1 = "Euro  "
const str2 = "Truck"
const str3 = " Simulator 2"
console.log(gamename);

console.log(gamename[2]);
console.log(gamename.length);
console.log(gamename.charAt(5));
let secondgamename = str1.concat(str2, str3);
console.log(secondgamename);
console.log(str3);
console.log(str3.trim());//removes trailing spaces
console.log(secondgamename.includes("Truck"));
console.log(secondgamename.includes(str2));







