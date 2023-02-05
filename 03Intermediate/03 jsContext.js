// sayHello();

// function sayHello(){
//     console.log("Hello");
// }

if(2 === 2){
    console.log("This is true");
}

var myName = "Ananya";
if(myName === window.myName){
    console.log("This is again a true statement");
}

/* when code runs in the browser's
  console, then window is the global
  context that's why above code
  doesn't gives error.
  */

/*when code is executed by node.js in
   vs code, here window is not defined
   that's why above code gives error.
   Here, global context differs but there
   is always a global context in js engine
*/

