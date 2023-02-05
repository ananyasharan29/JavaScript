//Template strings

//" " is the usual way of defining strings
var name = "Ananya";

// '' is usually not always but usually are reserved to define only a single character
var namee = 'Ananya';

// The backslash (\) escape character turns special characters into string characters
var name1 = 'Ananya\'s';
var name2 = "Ananya\"s"; //terrible way

// backticks `` are known as string literals
//no need to escape characters i.e., inject ' or " directly
 var name3 = `Ananya's`;
 var name4 = `Ananya"s`;

//  interpolation
 var fullName = `${name} Sharan`;


//In JavaScript, string treated as arrays
console.log(fullName);
console.log(fullName.charAt(1));
console.log(fullName.endsWith('a'));
console.log(fullName.includes("Ananya"));
console.log(fullName.toUpperCase());

