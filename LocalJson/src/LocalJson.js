
/**
 * This JavaScript File Sends Json Data To The Front End
 */

 // Data
 var jcontent ={
     "firstName": "James",
     "lastName": "Bond"
 }

 // send data to the page using the DOM access
 var output = document.getElementById('output');
 output.innerHTML = jcontent.firstName + " " +jcontent.lastName;

 console.log("New Content");