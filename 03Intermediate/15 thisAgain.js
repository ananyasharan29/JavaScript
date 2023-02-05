// For all regular function calls, this points to window ( or global) object. 
// In case of node, points to global empty object.

console.log(this);

var user = {
    firstName : "Ananya",
    courseCount : 5,
    getCourseCount : function(){
        console.log("LINE 10", this);
        function sayHello(){
            console.log("Hello");
            console.log("LINE 13", this);
        }
        sayHello();
    },
};
user.getCourseCount(); // Not a regular Function
                       // Through an object


// function sayHello(){
//     console.log("Hello");
// }
// sayHello(); //regular function