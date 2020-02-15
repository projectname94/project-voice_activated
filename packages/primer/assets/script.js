/* This is your javascript file */

/* this is a comment */
// this is also a comment

// find the button from our index.html with its id "click_me"
// store the button with the name "myButton" for later
var myButton = document.getElementById("click_me");

// create a function named "Clicked" and store it for later
function Clicked(event){
	// on click, the browser displays an alert:
	alert('clicked!');

	// then it disables the button:
	myButton.setAttribute('disabled', true);

}

// link the button and our function to happen on click:
myButton.addEventListener('click', Clicked);