//we will work with arrays

//declaring array
const myarray = [2 ,5 ,7 ,9];
// console.log(myarray[2]);

let arr = new Array(2,3,5,4,8)
// console.log(arr);

// Array Methods

let myarray2 = [2, 3, 4 ,5 ,6]
console.log("original array : ", myarray2);
myarray2.push(8)
console.log(myarray2);
myarray2.pop()//it simply pops the out last element from the array
console.log(myarray2);

myarray2.unshift(1);
console.log(myarray2);
myarray2.shift();
console.log(myarray2);

const newarr = myarray2.join();
// console.log(`original array: ${myarray2}`);// this converts the type of aray to string as its string interpoltion
console.log("original array: ", myarray2);
console.log(newarr);

//slice and splice are two important methods
//slice => deep copies of the array
//splice => shallow copies of the array

console.log("A", myarray2);
myn1 = myarray2.slice(1, 3);// the range is not included as well as no changes are done to original array
console.log(myn1);
console.log("A", myarray2);

console.log("B", myarray2);
myn2 = myarray2.splice(1, 3)//includes range but creates shallow copies hence affecting the original array
console.log(myn2);
console.log("B", myarray2);

