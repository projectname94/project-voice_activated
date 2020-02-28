# Manipulating the DOM

<!-- 

	index.html

	<meta utf-8
	<meta viewport

	<link 

		h1{
		color:red;
		}


	<script src="script.js" ></script>

	- react to actions in browser
	- click, scroll, speech

	- signify a reaction: changing the html and css on the html page

	- html document

	- javascript output: html document


	<button id="myButton" class="important"></button>

	<p class="important">first paragraph</p>
	<p>second paragraph</p>
	<p>third paragraph</p>

	// individual element:
	var specialButton = document.getElementById("myButton");

	var myParagraphs = document.querySelectorAll("p");
	var importantElements = document.querySelectorAll(".important");

	
	// classes // application of an existing static style

	specialButton.classList.add("big")
	specialButton.classList.remove("big")

	// inline

	specialButton.style.color = "#f00";
	specialButton.style.backgroundColor = "#0f0";


	// but this all still with ids

	importantElements.forEach(function(p){
	
		// restyle each paragraph
		p.style.color = "#00f";

	})



	// variables 


	var strings = "my string"
	var myNumber = 1.2;
	var boolean = true | false;

	var arrays = ["first",[2, 2],true,"strings"];

	var myObject = {
		key : "value",
		name : "Lukas",
		height: 6.2

	}

	// functions are a list of commands that we want to execute


	function myFunction(){
		console.log("command")
	}


	//

	var myNumber = 6;


	for(var i = 0; i < importantElements.length; i++){
		importantElements[i].style.fontSize = 15 + (i*10) + "px";
	}



 -->


## DOM Selection
The &ldquo;Document Object Model&rdquo; is a way of accessing the structure of an html element via Javascript. It&rsquo;s primary access point is the `document`, which you can use to select any part of your html (similar to CSS):

Select an element by Id and save it for later:

```javascript
	
var myElement = document.getElementById("myId");

```

Select all matching elements via class or element type:

```javascript
	
var myElements = document.querySelectorAll(".myClass");
var myParagraphs = document.querySelectorAll("#myId p");

```

To traverse a class of elements you can use the `forEach` method:

```javascript

var myParagraphs = document.querySelectorAll("#myId p");

myParagraphs.forEach(function(p){
	// p now can be used to reference EACH paragraph item
	console.log(p)

})

```


## DOM Manipulation

### Classes

To change the class associated with an element you can use the `classList` property:

- To add a class: `myElement.classList.add('myClass')`
- To remove a class: `myElement.classList.remove('myClass')`
- To check if a class exists: `myElement.classList.contains('myClass')` (returns true or false)

### Inline Style

To change the inline CSS of an element you may access that elements style property:

```javascript

var myElement = document.getElementById("myId");

myElement.style.backgroundColor = "red";

var green = 200;
var blue = 100;

myElement.style.color = "rgb(255," + 200 + " ," + 100 + ")";

```