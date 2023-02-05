var User = {
    name : "",
    getUserName : function(){
        console.log(`User name is : ${this.name}`);
    },
};

var anana = Object.create(User);
console.log(anana);
anana.name = "Ananya Sharan";
anana.getUserName();

// Another way
var ana = Object.create(User, {
    name : {value: "Anamika"},
    courseCount : {value: 3},
});

ana.getUserName();
