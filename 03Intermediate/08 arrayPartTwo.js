// function isEven(element){
// var isEven = function (element){

var isEven = (element) => { 
    //Sometimes we don't need to write the function Keyword instead of this we can write "=>"  Arrow function 

    // if(element % 2 === 0){
    //     return true;
    // } return false;

    return element % 2 === 0;
    //It is required to have a return keyword in arrow function
    //If we don't put the return keyword here it gives the undefined output

}

// console.log(isEven(2));
// console.log(isEven(3));

//There is another function here that is "Callback function" 
//Callback function doesn't have any name but they are very helpful for some situations 
// which needs to handle in about a seconds.

// var result = [2, 4, 6, 8].every(isEven);
// console.log(result);

//every() method is used to check every element in the array

// var result = [2, 4, 6, 8].every((e) => {
//     return e %2 === 0;
// });
// console.log(result);

var result = [2, 4, 6, 8].every((e) => e % 2 === 0);
console.log(result);

//When you use (), you don't need to write return Keyword
//But when you use {}, You have to write return keyword



