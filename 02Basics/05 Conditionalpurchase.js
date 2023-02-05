// User is only allowed to make a payment when 
// logged in 
// email verified
// cardInfo Valid 
// If anyone missing, stop purchase

var isLoggedIn = true;
var emailVerified = true;
var cardInfo = true;

// if(isLoggedIn){
//     console.log("Logged In Success");
//     if(emailVerified){
//         console.log("Email is Verified");
//         if(cardInfo){
//             console.log("You can make a purchase");
//         }
//     }
// }

if(isLoggedIn && emailVerified && cardInfo){
    console.log("User is allowed to make a purchase");
}else{
    console.log("User is not allowed to make a purchase");
}