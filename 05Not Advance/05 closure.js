// function init(){
//     var firstName = "Ananya";
//     console.log("I am init");
//     function sayFirstName() {
//         console.log(firstName);
//     }
//     return sayFirstName;
// }

// var value = init();
// value(); //closure

function doAddition(x){
    return function(y){
        return x + y;
    };
}

var add = doAddition(4);
console.log(add(5));

console.log(doAddition(5)(5));

// doAddition()()() //curring 