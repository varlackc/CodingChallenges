/*
    Fizz Buzz Challenge
*/

var message = "";
var fizzValue = 2;
var buzzValue = 3;

for (var i = 1; i <= 100; i++) {

    //Check to see if Fizz value should be outputed
    if (i % fizzValue == 0) {
        message = "Fizz";
    }
    //Check to see if Buzz value should be outputed
    if (i % buzzValue == 0) {
        message += "Buzz";
    }

    //output the result
    console.log(i + "\t" + message);

    //reset the message value
    message = "";
}