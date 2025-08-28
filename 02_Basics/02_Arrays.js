const sci_fi = ["Avengers", "Thor", "IronMAN"];
const horror = ["Cojuring", "annabella", "heridetary"];

// sci_fi.push(horror);
// console.log(sci_fi);
// // let's check the length of "sci_fi" array
// console.log(sci_fi.length);
// console.log(sci_fi[3][1]);

// we can use "concat" method to concat both the above array with al elemnts having seperate indices
// const all_movies = sci_fi.concat(horror);
// console.log(all_movies);

const allnew_movies = [...horror, ...sci_fi];///more arrays can be added in the same way
console.log(allnew_movies);

const anotherarr = [1, 2, [2, 3, 4], 5, [5, 6, 7], 8];
console.log(anotherarr);
//we can spread out all the elements usig "flat"
const real_anotherarr = anotherarr.flat(Infinity);
console.log(real_anotherarr);

console.log(Array.isArray("neal"))
console.log(Array.from("neal"))
console.log(Array.from({name: "neal"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));