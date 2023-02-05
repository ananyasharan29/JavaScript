//For Each loop
//this is not considered technically as a loop but the method on the array
//For each goes through automatically with each element

const myStates = [
    "Bihar",
    "Jharkhand",
    "UP", "MP",
    1947,
    "Rajasthan",
    "Maharashtra"
];

// var i = 0;

// for(;;){
//     if(i > 3) break;
//     console.log(i);
//     i++;
//}

myStates.forEach((s) => (console.log(s)));