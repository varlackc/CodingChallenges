/*
    Fizz Buzz Challenge
*/

$(document).ready(function() {


    $('#submitButton').click(function() {

        //Declare Variables
        var message = "";
        var result = "";

        console.log("Game of Life Test");

        // JavaScript 
        $('#details').html(result);
    });

    $('#clearButton').click(function() {
        $('#details').html(" ");
    });
});