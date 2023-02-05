// Classical way of writing JS

function init(){ //init means initialization
    var firstName = "Ananya";
    function sayFirstName() {
        console.log(firstName);
    }
    sayFirstName();
}

init();
console.log(firstName);
//not defined since the context is over
