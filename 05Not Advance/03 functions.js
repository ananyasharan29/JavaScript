// Another way of calling a function
// the function that calling itself immediately after it's declaration without wait to somebody to call 

// Self Executing Anonymous function
// self executing means no body should call it
// Anonymous means it shouldn't have a name

// function sayHello(){
//     console.log("I say Hello");
//     console.log("I again say Hello");
// }

// sayHello();

// wrap the whole function into paramthesis "()"
(function(){
        console.log("I say Hello");
        console.log("I again say Hello");
    })();

//    It's another name is IIFE(Immediately Invoked Function Expression).