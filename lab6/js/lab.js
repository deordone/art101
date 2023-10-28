// index.js - Arrays & Objects
// Author: David Ordonez
// Date: 30 October 2023

// Define Variables
var myTransport = ["Dream Car","Loop Bus","Metro Bus","Ride from friends","Bike"];

// Create an object for my main ride
var myMainRide = {
    make: "Nissan",
    model: "GT-R",
    color: "Black",
    year: 2012,

    // Function to calculate age of my ride
    age: function() {
        return 2023 - this.year;
    }
};

// output

document.writeln("My modes of transportation: " + myTransport + "<br>");

document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");