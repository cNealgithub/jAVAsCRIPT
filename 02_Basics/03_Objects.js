//in js objects via costructors are singleton
//Object.create;//is a way to create objects

const mysym = Symbol("myKey1")

const jsuser = { //second and prefered way to create objects
  //key : Value
    Name: "Neal",
    "fullName": "Neal chakravarty",
    [mysym]: "Key1",
    city: "Ranchi",
    Age: 20,
    Email: "neal05@outlook.com",
    isloggedin: true,
    pastlogins: ["Monday", "wednesday", "thursday"]  
}

//there aretwo ways to access object values using keys:-
//first one
// console.log(jsuser.Name);
// //second one (the default way for accesing symbol datatype variables/values)
// console.log(jsuser["fullName"]);
// console.log(jsuser[mysym]);

jsuser.Email = "neal@microsoft.com";
//we can freeze the object to avoid fuether updates in its values via "freeze" method
// Object.freeze(jsuser);
jsuser.Email = "naman@gmail.com";
console.log(jsuser.Email);

jsuser.welcome = function () {
    return "Hello Js-User"; // (Also fixed the typo!)
}
console.log(jsuser.welcome()); // Now logs the returned string

jsuser.welcome2 = function () {
    console.log(`Hello js-User: ${jsuser.Name}`); 
}
console.log(jsuser.welcome2());
