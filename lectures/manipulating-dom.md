# Manipulating the DOM


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