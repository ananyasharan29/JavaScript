//Show user a signout button if he is authenticated
//otherwise show him option to Login/Signup

var authenticated = true;

// if(authenticated){
//     console.log("SignOut");
// }else{
//     console.log("Login");
// }

authenticated ? console.log("SignOut") : console.log("Login");