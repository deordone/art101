// index.js - JSON & APIs
// Author: David Ordonez
// Date: 8 December 2023

$('#activate').click(function () {
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (from the api docs)
        url: "https://cors.bridged.cc/https://xkcd.com/614/info.0.json", // Use cors.bridged.cc as a proxy
        // The data to send (will be converted to a query string)
        data: {
            // here is where any data required by the api 
            // goes (check the api docs)
            id: 614,
            api_key: "info.0.json",
        },
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType: "json",
        // What do we do when the api call is successful
        // all the action goes in here
        success: function (comicObj) {
            // Process the received data and add it to the webpage
            console.log(comicObj);

            // Adding a title to the webpage
            $("#output").append("<h2>" + comicObj.title + "</h2>");

            // Creating an image tag and setting its attributes
            const $comicImage = $("<img>");
            $comicImage.attr("src", comicObj.img);
            $comicImage.attr("alt", comicObj.alt);
            $comicImage.attr("title", comicObj.alt);

            // Adding the image tag to the webpage
            $("#output").append($comicImage);
        },
        // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) {
            // Handling errors
            console.log("Error:", textStatus, errorThrown);
        },
    });
});

