/*
    Fizz Buzz Challenge
*/

var message = "";
var fizzValue = parseInt($('#fizzValue').val()); //2;
var buzzValue = 3;
var result = "";

console.log("Fizz Value: " + fizzValue);

$(document).ready(function() {
    $('#submitButton').click(function() {
        // Code to display values
        for (var i = 1; i <= 100; i++) {

            //Check to see if Fizz value should be outputed
            if (i % fizzValue == 0) {
                message = " - Fizz";
            }
            //Check to see if Buzz value should be outputed
            if (i % buzzValue == 0) {
                message += " - Buzz";
            }

            //output the result
            console.log(i + "\t" + message);
            result += (i + message + "<br/>");

            //reset the message value
            message = "";
        }
        result += "<br/>";

        // JavaScript 
        $('#details').html(result);
    });
});