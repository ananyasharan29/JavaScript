//For, while and do while loop

// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

const myStates = [
    "Bihar",
    "Jharkhand",
    "UP", "MP",
    1947,
    "Rajasthan",
    "Maharashtra"
];

// for(let i = 0; i<myStates.length ; i++){
//     if(typeof myStates[i] !== "string") break;
     //if(typeof myStates[i] !== "string") continue;
//     console.log(myStates[i]);
// }

// let i = 0;

// while (i < myStates.length) {
//     console.log(myStates[i]);
//     i++;
// }

let i = 20;

do{
    console.log(i);
    i++;
}while(i < 10);

//do while loop run at least ones even if condition is false