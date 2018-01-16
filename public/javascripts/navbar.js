var app = angular.module("navbar", ["firebase"]);
app.controller("navBarCtrl", function ($firebaseArray) {
    var course = this;
    var userID = document.querySelector("#navid").innerHTML;
    console.log(userID);
    var courseRef = firebase.database().ref("user/" + userID + "/courses");
    course.courses = $firebaseArray(courseRef);
});