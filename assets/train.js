


  var config = {
    apiKey: "AIzaSyCxTXLVSIL5hQDK0FF7N42Vfpjw2nJFk6c",
    authDomain: "train-time-6cd1a.firebaseapp.com",
    databaseURL: "https://train-time-6cd1a.firebaseio.com",
    storageBucket: "train-time-6cd1a.appspot.com",
  };

firebase.initializeApp(config);

// Create a variable to reference the database

var database = firebase.database();

 //$(document).on('click', 'button', function() {
 	$("#input").on('submit',function(event){
 		event.preventDefault();
 	var tName=$("#name").val()
 	var destination=$("#destination").val()
 	var time=$("#time").val()
 	var frequency=$("#frequency").val()
 	//push firebase
database.ref().push({
		tName:tName,
		destination:destination,
		time:time,
		frequency:frequency,
});
})
//database -entire project, child added in firebase would be the newest, latest, object added to the bottom
// snapshot is just all the info added when the even fired.
database.ref().on("child_added", function(snapshot){
console.log(snapshot.val());

var row = $("<tr>")

var name= snapshot.val().tName
row.append("<td>" + name + "</td>")

var destination= snapshot.val().destination
row.append("<td>" + destination + "</td>")

var time= moment(snapshot.val().time, "HH:mm")
//row.append("<td>" + time + "</td>")

var frequency= parseInt(snapshot.val().frequency)
row.append("<td>" + frequency + "</td>")

var minutesAway = frequency - (time.diff(moment(), 'minutes') % frequency) //remainder "modulo"
var nextArrival = moment().add(minutesAway, 'minutes').format('HH:mm');  // converts from milliseconds from 1970

row.append("<td>" + nextArrival + "</td>")

row.append("<td>" + minutesAway + "</td>")



$("#trains").append(row);

});




