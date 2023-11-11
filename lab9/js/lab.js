// index.js - Libraries & jQuery
// Author: David Ordonez
// Date: 13 November 2023


$(".minor-section").append("<button class='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
$(".button-challenge").click(function() {
    // find the closest parent with the class 'minor-section'
    var section = $(this).closest(".minor-section");

    // now add (or subtract) the "special" class to the specific section
    section.toggleClass("special");
});