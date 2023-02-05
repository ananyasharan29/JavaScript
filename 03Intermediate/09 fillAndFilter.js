//fill method fills all the values of the given array with the passing element, which passes through parameter

var testArray = [1, 2, 4, 6, 3, 7, 8, 5];

console.log(testArray.fill("a", 2, 5));

//Here the first argument is what you want to fill it up
//the second argument is what should be our start position/index
//the third argument is what should be our end position/index

// In most of the programming, whenever you are passing up a range, start range is
// inclusive and end range is exclusive.

// filter method is used to (delete stuff or) build new/another array from a given array
// where everything that is filtered out (not deleted) satisfies the condition given in ( )
// of filter.

const myNumber = [23, 32, 43, 35, 65, 73, 44, 55];

const result = myNumber.filter((num) => num < 55);

console.log(result);

var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];
console.log(users.slice(1, 4));

//In slice() method, first argument is starting index and second is endig index
//if we pass one argument means we sliced of one value, rest of all as is it

users.splice(1, 3, "Hi", "Bye");
console.log(users);

//we can't write splice() method like this  "console.log(users.splice())""
//It is a wrong syntax for splice() method

//In splice() method, first argument is start value but second is not end value
//Second is the count value in this case
//Third argument is the element which will gonna insert after deletion of the value from start to count value
//Similarly, forth and fifth, etc can inserted after third 
