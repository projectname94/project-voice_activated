# API Introduction

For this workshop we will be using the [Annyang Speech Recognition Library](https://www.talater.com/annyang/).

The starter pack already has this library loaded in, but there are a few notes we'd like to cover:

## Structure

To initialize Annyang, we have four key steps:

### 1. check if the library is loaded:
```javascript

if(annyang){

	// your code here

}

```

### 2. create a list of commands and match them to their functions:
```javascript

if(annyang){
	// your commands:
	var commands = {
		'my first command' : firstFunction,
		'my second command' : secondFunction
	}
}

// your functions:
function firstFunction(){
	alert('first command!');
}

function secondFunction(){
	alert('second command!');
}

```

### 3. add your commands to the annyang object:
```javascript

if(annyang){

	var commands = {
		'my first command' : firstFunction,
		'my second command' : secondFunction
	}

	annyang.addCommands(commands);

}

```

### 4. Tell Annyang to start listening:
```javascript

if(annyang){

	var commands = {
		'my first command' : firstFunction,
		'my second command' : secondFunction
	}

	annyang.addCommands(commands);

	annyang.start();

}

```

## Commands

At its core, Annyang tries to match verbal commands with functions. There are a few ways Annyang does this:


### Explicit match:
The verbal command matches a fixed statement and outputs a function.

```javascript

var commands = {

	'this is a command' : myFunction

}

function myFunction(){
	alert('this is the response!')
}

```

### Named Variables
Named variables allow for a command to have different outputs depending on one or more predefined variables in a fixed statement.

```javascript

var commands = {

	'My name is :name' : myName,
	'My first name is :name and my lastname is :lastname' : myWholeName

}

function myName(name){
	alert(name)
}

function myWholeName(name, lastname){
	alert(name, lastname)
}

```

### Splats
Splats are similiar to Named variables, except they must occur at the end of a commmand and their length is open-ended.

```javascript

var commands = {

	'My best friends are *names' : myBestFriends

}

function myBestFriends(names){
	alert(names)
}


```


### Optional Phrases
Annyang also allows for optional parts of commands to allow for semantic differences:

```javascript

var commands = {

	'(please) say hello to me' : greeting

}

function greeting(){
	alert("i say hello back")
}


```
