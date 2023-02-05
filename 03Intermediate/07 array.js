//Array is a collection of data.

//Paranthesis(), Brackets[], Braces/curly Braces{}

//Two ways to define and declare Array:
// 1. var name = [ "Ananya", "Parul" ];
// 2. var name = new Array( "Ananya", "Sweta" );

//Access array: console.log(user[0]);

//length method is used to find out the numbers of elements present in array.

// Replacing value in array: user[0]= "Anana";

// pop method removes/dumps the last value from the array. 
// For ex: user.pop();

// push method adds value at the very end of the array. 
// For ex: user.push("Parul");

// unshift method is used to add value at the very front and shift rest values.

// shift method is used to remove value at the very front and shift rest values.

//indexOf method is used to find the  index of the value. 
// if the value is not in the array then it gives -1. 
// For ex: console.log ( user.indexOf ("Ananya"));

//Array.from method is used to covert any string into array.

var countries = ["India", "Japan", "USA", "UAE", "Canada"];

var states = new Array("Bihar", "Uttar Pradesh", "Madhya Pradesh", "Rajasthan");

// console.log(states[0]);

// console.log(states.length);

states[0] = "Punjab";
// console.log(states);

var user = ["Ananya", "ananya.com", 5, 20];
// console.log(user);

user.pop();
user.pop();
// console.log(user);

user.unshift("New One");
// console.log(user);

user.shift();
// console.log(user);

console.log(user.indexOf("ananya.com"));
console.log(user.indexOf("ABCDE"));

console.log(Array.from("Ananya"));