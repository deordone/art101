// index.js - JavaScript Events and Forms
// Author: David Ordonez
// Date: 20 November 2023

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  return inputString.split('').sort().join('');
}

// Generates a random anagram for a given string.
function generateAnagram(inputString) {
  const shuffled = inputString.split('').sort(() => 0.5 - Math.random()).join('');
  return shuffled !== inputString ? shuffled : generateAnagram(inputString);
}

// click listener for button
$("#submit").click(function () {
  // Create an array to store input values
  const inputValues = [];

  // Loop through each input field with class "user-input"
  $(".user-input").each(function () {
      const inputValue = $(this).val();
      const sortedValue = sortString(inputValue);
      const anagram = generateAnagram(inputValue);

      // Push the original, sorted, and anagram values to the array
      inputValues.push({ original: inputValue, sorted: sortedValue, anagram: anagram });
  });

  // Create new <p> elements for each result and append to the output div
  $("#output").empty(); // Clear existing content

  inputValues.forEach((value, index) => {
      const resultText = `Input ${index + 1}: Original - ${value.original}, Sorted - ${value.sorted}, Anagram - ${value.anagram}`;
      $("#output").append(`<p>${resultText}</p>`);
  });
});
