// Initialize Firebase
var config = {
	apiKey: "AIzaSyAO7BFw9UhofcCw2tuWY2CfVCq1wqCnLyk",
	authDomain: "sdfasdf-d0632.firebaseapp.com",
	databaseURL: "https://sdfasdf-d0632.firebaseio.com",
	storageBucket: "sdfasdf-d0632.appspot.com",
};

firebase.initializeApp(config);

// Create a variable to reference the database

var database = firebase.database();

 //$(document).on('click', 'button', function() {
 	$("#input").on('submit',function(){
 	var tName=$("#name").val()
 	var destination=$("#destination").val()
 	var time=$("#time").val()
 	var frequency=$("#frequency").val()
 	})

