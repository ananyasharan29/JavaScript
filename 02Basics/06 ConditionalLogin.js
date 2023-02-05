// Allow user to access course is he is:
// logged in from google
// logged in from email 
// logged in from facebook

var email = true;
var facebook = false;
var google = false;

if(email || facebook || google){
    console.log("Login Success");
}else{
    console.log("Invalid Info");
}