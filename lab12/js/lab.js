// index.js - Conditional
// Author: David Ordonez
// Date: 24 November 2023

/* Updated sortingHat function with array of houses and descriptions */
function sortingHat(name) {
  // Calculate a checksum or hash based on the name's characters
  const checksum = calculateChecksum(name);

  // Define an array of Hogwarts houses
  const houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];

  // Define an array of corresponding house descriptions
  const houseDescriptions = [
    "Courage, bravery, nerve, and chivalry",
    "Intelligence, creativity, learning, and wit",
    "Ambition, cunning, leadership, and resourcefulness",
    "Hard work, dedication, patience, loyalty, and fair play"
  ];

  // Use the checksum to determine the index of the house
  const houseIndex = checksum % houses.length;

  // Return an object containing the house name and description
  return {
    name: houses[houseIndex],
    description: houseDescriptions[houseIndex]
  };
}

/* Function to calculate checksum based on ASCII values of characters */
function calculateChecksum(str) {
  let checksum = 0;

  for (let i = 0; i < str.length; i++) {
    checksum += str.charCodeAt(i);
  }

  return checksum;
}

/* Event listener for the button click */
var myButton = document.getElementById("button");
myButton.addEventListener("click", function () {
  // Get the input value (user's name)
  var name = document.getElementById("input").value;

  // Call the sortingHat function to get the Hogwarts house and description
  var result = sortingHat(name);

  // Display the result
  var newText = `<p>The Sorting Hat has sorted you into ${result.name}. ${result.description}</p>`;
  document.getElementById("output").innerHTML = newText;
});
