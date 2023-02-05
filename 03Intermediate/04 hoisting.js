// Global context - which is collencting information for everything and about everything.
// Window object is tied majorly with the browser.
//Execution Context - is happen with every line of code that we want to execute.

//Three major features in execution context are : -
// 1. Variable Object
// 2. Scope Chain
// 3. this ("this" key word is actually very special in JS only, majorly not found in other language)

// There are two rules in Execution context, that we have to follow :
// 1. Function declaration are scanned and made available.
// 2. Variable declarations are scanned and made undefined.

tipper("85");
function tipper(a){
    // var bill = a;
    var bill = parseInt(a);//It changes the string into number.
    console.log(bill + 5);
}

tipper(5);
tipper("a"); // It gives NaN error


var bigTipper = function(a){
    var bill = parseInt(a);
    console.log(bill + 15);
};
bigTipper("200");

// var name = "Ananya";
console.log(name);
var name = "Ananya";

function sayName(){
    var name = " Miss Sharan";
    console.log(name);
}
sayName();

console.log(name);