// index.js - Anon Functions and Callbacks
// Author: David Ordonez
// Date: 6 November 2023


function isEven(x) {
    var result = (x % 2 == 0)
    return result;
}

console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

var array = [100, 35, 65, 54, 14, 98, 7]
console.log("My array", array);

var checkArray = array.map(isEven);
console.log("Test of evenness of array:", checkArray);

var checkArray = array.map(function(x){
    return x ** 0.5;
})

console.log("Squareroot of array:", checkArray)

// Original array
var originalArray = "Original Array: " + array.join(", ");

// Check evenness of the array
var evennessResults = "Evenness of Array: " + array.map(isEven).join(", ");

// Square roots of the array
var squareRootResults = "Square Roots of Array: " + array.map(function(x) {
    return x ** 0.5;
}).join(", ");

// Combine all results
var mapResults = originalArray + "<br>" + evennessResults + "<br>" + squareRootResults;

// Use jQuery to select the element by its ID and set the HTML content
$("#output").html(mapResults);