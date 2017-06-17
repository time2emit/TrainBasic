// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDoUOVilUh7kiZjI3mCaPpLe5hvyexsP3E",
    authDomain: "train-61722.firebaseapp.com",
    databaseURL: "https://train-61722.firebaseio.com",
    projectId: "train-61722",
    storageBucket: "train-61722.appspot.com",
    messagingSenderId: "573738985039"
  };
firebase.initializeApp(config);
var database = firebase.database();

// Fire function on submit button click to grab user inputs 
$("#submit-button").on("click", function(event) {
  event.preventDefault();
  // Grabs user input
  var trainName = $("#train-name").val().trim();
  var destination = $("#destination").val().trim();
  var firstTrain = $("#first-train").val().trim();
  var frequency = $("#frequency").val().trim();
  frequency = parseInt(frequency);
  console.log(trainName);
  console.log(destination);
  console.log(firstTrain);
  console.log(frequency);

// Store user inputs in firebase
  database.ref().push( {
    trainName: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency
  });
});

// Retrieve user input from firebase
  database.ref().on("child_added", function(snapshot) {
    var trainName = snapshot.val().trainName;
    var destination = snapshot.val().destination;
    var firstTrain = snapshot.val().firstTrain;
    var frequency = snapshot.val().frequency;

//moment conversions

    var firstTrainConverted = moment(firstTrain, "hh:mm").subtract(1, "years");
      console.log(firstTrainConverted);
    var currentTime = moment();
      console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
    // Difference between the times
    var diffTime = moment().diff(moment(firstTrainConverted), "minutes");
      console.log("DIFFERENCE IN TIME: " + diffTime);
    // Time apart (remainder)
    var tRemainder = diffTime % frequency;
      console.log(tRemainder);
    // Minute Until Train
    var tMinutesTillTrain = frequency - tRemainder;
      console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
      console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
    var showNextTrain = moment(nextTrain).format("hh:mm");

// Make a row to be appended to the HTML table dynamically
    var row = $("<tr class='text-center'>");
    row.append($("<td class='text-center'>").html(trainName));
    row.append($("<td class='text-center'>").html(destination));
    row.append($("<td class='text-center'>").html(frequency));
    row.append($("<td class='text-center'>").html(showNextTrain));
    row.append($("<td class='text-center'>").html(tMinutesTillTrain));



// Actually append row to the HTML
    $("#table-body").append(row);

    });