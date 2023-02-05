// Object describes in {} while array in []
//Objects are more flexible and optimized as compared to array
// By key, we can access anything from object 
//In {}, LHS is Key and RHS is Value

var user = {
    firstName : "Ananya",
    lastName : "Sharan",
    role : "Admin",
    LoginCount : 20,
    googleLoggedIn : true,
    facebookLoggedIn : false,
};

//There is two way to access an object :
console.log(user.firstName);
console.log(user["lastName"]);

//we can manipulate/change the value as well
console.log(user.LoginCount);
user.LoginCount = 30;
console.log(user.LoginCount);

console.log(user); //dump out all the things

//console.table() gives the table format
console.table(user);