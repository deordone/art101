// index.js - JavaScript for the Web
// Author: David Ordonez
// Date: 17 November 2023


function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
  }

// click listener for button
$("#make-convo").click(function () {
    // get new fake dialogue
    const newText = generateRandomText();

    // append a new div to our output div with alternating sides
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');

    // clear previous input
    $("#user-input").val("");
});

// input field keypress event listener
$("#user-input").keypress(function (e) {
    if (e.which === 13) { // Check if the Enter key is pressed
        const userText = $("#user-input").val();
        if (userText.trim() !== "") {
            // append a new div to our output div with user input on the right
            $("#output").append('<div class="text"><p>' + userText + '</p></div>');
            // clear the input field
            $("#user-input").val("");
        }
    }
});