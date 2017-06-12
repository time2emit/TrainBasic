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





//   // Creates local "temporary" object for holding employee data
//   var newEmp = {
//     name: empName,
//     role: empRole,
//     start: empStart,
//     rate: empRate
//   };
//   // Uploads employee data to the database
//   database.ref().push(newEmp);
//   // Logs everything to console
//   console.log(newEmp.name);
//   console.log(newEmp.role);
//   console.log(newEmp.start);
//   console.log(newEmp.rate);
//   // Alert
//   alert("Employee successfully added");
//   // Clears all of the text-boxes
//   $("#employee-name-input").val("");
//   $("#role-input").val("");
//   $("#start-input").val("");
//   $("#rate-input").val("");
// });
// // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
// database.ref().on("child_added", function(childSnapshot, prevChildKey) {
//   console.log(childSnapshot.val());
//   // Store everything into a variable.
//   var empName = childSnapshot.val().name;
//   var empRole = childSnapshot.val().role;
//   var empStart = childSnapshot.val().start;
//   var empRate = childSnapshot.val().rate;
//   // Employee Info
//   console.log(empName);
//   console.log(empRole);
//   console.log(empStart);
//   console.log(empRate);
//   // Prettify the employee start
//   var empStartPretty = moment.unix(empStart).format("MM/DD/YY");
//   // Calculate the months worked using hardcore math
//   // To calculate the months worked
//   var empMonths = moment().diff(moment.unix(empStart, "X"), "months");
//   console.log(empMonths);
//   // Calculate the total billed rate
//   var empBilled = empMonths * empRate;
//   console.log(empBilled);
//   // Add each train's data into the table
//   $("#employee-table > tbody").append("<tr><td>" + empName + "</td><td>" + empRole + "</td><td>" +
//   empStartPretty + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");
// });
