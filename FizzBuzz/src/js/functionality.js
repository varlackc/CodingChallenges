/*
    Fizz Buzz Challenge
*/

$(document).ready(function() {


    $('#submitButton').click(function() {

        //Declare Variables
        var message = "";
        var fizzValue = parseInt($('#fizzValue').val());
        var buzzValue = parseInt($('#buzzValue').val());
        var startValue = parseInt($('#startingValue').val());
        var endValue = parseInt($('#endingValue').val());
        var result = "";

        console.log("Fizz Value: " + fizzValue);
        console.log("Buzz Value" + buzzValue);

        // Loop to improve
        for (var i = startValue; i <= endValue; i++) {
            //Check to see if Fizz value should be outputed
            if (i % fizzValue == 0) {
                message = " - Fizz";
            }
            //Check to see if Buzz value should be outputed
            if (i % buzzValue == 0) {
                message += " - Buzz";
            }
            result += ("<p Class='textPad'>" + i + message + "</p>"); //output the result
            message = ""; //reset the message value
        }
        result += "<br/>";

        // JavaScript 
        $('#details').html(result);
    });

    $('#clearButton').click(function() {
        $('#details').html(" ");
    });
});