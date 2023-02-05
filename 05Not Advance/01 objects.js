//It is recommended to use upper case variable name when you create such type of prototype

var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    // this is the another way of defining an object/
    // that is called functional approach to define an object
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
    };
};

// Inject some of the propery later the object creation
User.prototype.getFirstname = function(){
    console.log(`Your first name is : ${this.firstName}`);
};
// whenever there is a constructor involved usually there is a "new" keyword involved

// when you want to create an object through this functional way, it is necessary to have "new" keyword
var anana = new User("Ananya", 4);
anana.getCourseCount();  //this proof that every object is unique and
// and every single function that is running here is also unique


//Way of writing better code using prototypes
if (anana.hasOwnProperty("firstName")) {
    anana.getFirstname();
}
// anana.getFirstname();
// console.log(anana);

var parul = new User("Parul", 8);
parul.getCourseCount();
parul.getFirstname();
// console.log(parul);

// "new" keyword is responsible for :-
// 1. for using above syntax
// 2. for invoking the constructor and creating a unique instance in every single time

