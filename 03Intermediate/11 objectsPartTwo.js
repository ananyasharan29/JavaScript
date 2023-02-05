var user = {
    firstName : "Ananya",
    lastName : "Sharan",
    role : "Admin",
    LoginCount : 20,
    googleLoggedIn : true,
    facebookLoggedIn : false,
    courseList : [],
    buyCourses : function() {
        this.courseList.push(courseList); //here this means user
    },
    getCourseCount : function() {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    },
};

var courseList = true;
console.log(user.firstName);

console.log(user.getCourseCount());
user.buyCourses("React JS course");
user.buyCourses("Angular course");
console.log(user.getCourseCount());