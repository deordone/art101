// index.js - JSON & APIs
// Author: David Ordonez
// Date: 8 December 2023

$.ajax({
    url: "https://xkcd.com/614/info.0.json", // Append the comic number to get JSON data
    type: "GET",
    dataType: "json",
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
    error: function (jqXHR, textStatus, errorThrown) {
        // Handling errors
        console.log("Error:", textStatus, errorThrown);
    },
});