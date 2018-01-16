var app = angular.module("navbar", [firebase]);
app.controller("navBarCtrl", function ($scope) {
    var userID="2015kucp1030";
    var courseRef = firebase.database().ref("user/"+userID+"/courses");
    var course = this;
    course.courses = $firebaseArray(courseRef);
});