

var config = {
     apiKey: "AIzaSyALIT1HHFylOgmFjIkEZ6ARQ0m4nz1mBSk",
    authDomain: "mock-p.firebaseapp.com",
    databaseURL: "https://mock-p.firebaseio.com",
    projectId: "mock-p",
    storageBucket: "mock-p.appspot.com",
    messagingSenderId: "1025411237159"
};

firebase.initializeApp(config);

var trainData = firebase.database();

// 2. Populate Firebase Database with initial data 
// 3. Button for adding trains
$("#submitButton").on("click", function() {

  // Grabs user input
  var trainName = $("#time-button").val().trim();
  var destination = $("#destination-input").val().trim();
  var firstTrain = $("#first-train-input").val().trim();
  var frequency = $("#frequency-input").val().trim();

  // Creates local "temporary" object for holding train data
  var newTrain = {

    name: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency
  };

  // Uploads train data to the database
  trainData.ref().push(newTrain);

  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.firstTrain);
  console.log(newTrain.frequency);

  // Alert
  alert("Train successfully added");

  // Clears all of the text-boxes
  $("#time-button").val("");
  $("#destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");

  return false;
});

$("#first-row").html(trainName);

