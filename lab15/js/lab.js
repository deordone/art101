// index.js - AJAX
// Author: David Ordonez
// Date: 4 December 2023

$('#activate').click(function(){
// Using the core $.ajax() method
    $.ajax({
        url: 'https://yesno.wtf/api',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            // Handle the successful response here
            // You can either parse the JSON data structure or convert it to a string using JSON.stringify
            // In this example, we are using JSON.stringify to convert the data to a string
            var outputString = JSON.stringify(data);

            // Display the result in the output div (assuming the div has an ID of 'outputDiv')
            $('#output').text(outputString);
        },
        error: function (error) {
            // Handle the error here
            console.error('Error fetching data:', error);
        }
    });
});