//when you define a simple object, there are some properties attached to the entire object
//and when a method is defined inside the object, there are properties attached to the method
//all these properties are known as prototype properties

const info = {
    firstName : "Ananya",
    lastName : "Sharan",
    role : "Admin",
    courseCount : 2,
    getInfo : function(){
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses
        `);
    },
};

// Here we can access getInfo function by copy pasting but the other way is to choose binding property

const dj = {
    firstName : "Rocky",
    lastName : "DJ",
    role : "Sub-Admin",
    courseCount : 5,
};

info.getInfo();
// dj.getInfo();

info.getInfo.bind(dj)(); //simpler way 

var djInfo = info.getInfo.bind(dj);
djInfo();
// Bind always gives you a reference back and you have to run that reference 