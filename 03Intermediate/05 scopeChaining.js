var name = "Ananya";

console.log("Line number 3", name);

function sayName(){
    var name = "Parul";
    console.log("Line number 7", name);

     sayNameTwo();

    function sayNameTwo(){
        var name = "Anana";
        console.log("Line number 13", name);
    }
}
sayName();

//In JS, "{}" this is Scope and this is true for global scale
// You can loosely say that where is {} curly braces, there is truly a scope


