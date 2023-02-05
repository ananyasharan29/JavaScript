/* 
Define a function that can answer the role of a user 
A user can be on following roles:
admin - with all access 
subadmin - with access to create/delete courses 
testprep - with access to create/delete tests 
user - consume all content 
other - trial user. 

Input: getuserRole(name, role)
*/

// var getUserRole = function (name, role)
  //(we can also defined a function like above mentioned)

function getUserRole(name, role){

    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break; // this is not necessary
        case "subadmin":
            return `${name} is subadmin with access to create/delete courses`;
            break;
        case "testprep":
            return `${name} is testprep with access to create/delete tests`;
            break;
        case "user":
            return `${name} is user to consume all content`;
            break;
        default:
            return `${name} is a trial user`;
            break;
    }
}

console.log(getUserRole("Ananya", "subadmin"));
console.log(getUserRole("Anamika", "admin"));
console.log(getUserRole("abc"));

var getRole = getUserRole("Ananya", "user");
console.log(getRole);