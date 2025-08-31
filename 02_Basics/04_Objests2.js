// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "12td";
tinderUser.Name = "Saksham";
tinderUser.age = 25;
tinderUser.isloggedin = false;

// console.log(tinderUser);
//we can do nesting in objects,
anyuser = {
    Name : "Aditya",
    Age : 20,
    fullName : {
        userfullname: {
            firstname: "Adityaaaaa",
            lastname: "Kashyap"
        }
    }
}
 console.log(anyuser);
 console.log(anyuser.Name);
 console.log(anyuser.fullName);
 console.log(anyuser.fullName.userfullname);
 console.log(anyuser.fullName.userfullname.lastname);
 
 obj1 = {1:"a", 2:"b"};
 obj2 = {3:"c", 4:"d"};
 obj3 = {5:"e", 6:"f"};

//  obj4 = {obj1, obj3}
obj4 = Object.assign{onj3, obj1, obj2};

 console.log(obj4);
 