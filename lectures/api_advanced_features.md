# API advanced features

<!-- 
Start by showing exmample that is in the starter pack, bring up eliza and it's novelty, what it illuminated about humans expectations for computers/companionships

https://www.youtube.com/watch?v=RMK9AphfLco
-->

<!-- Explain front end 
  - button to start
  - indication that it is listening
  - indication that a result is processed
  - an indication if the computer can't respond
  - a way to exit the interaction
-->


<!-- So before we jump into any of the javascript on the back end can anyone tell me what an event listener is, what is a callback? -->

An event listener is a type of callback that can be used to identify interactions with the document. These are added using the following syntax:
```javascript

document.body.addEventListener('click', functionName);

```

Annyang has a series of library specific callbacks to make it easier to produce an interaction that follows the five states of feedback that we outlined.

You have encountered one in the starter pack already.

Below are a few callbacks that we think will be useful for implementing the five states of feedback and for debuging
 
If you are feeling adventurous, feel free to take a look at the full [Annyang Doc](https://github.com/TalAter/annyang/blob/master/docs/README.md)

Each one of these callbacks will be defined in your initialize function

<!-- heading back to the front end lets go over the the front end and identify the states of feedback that are present.
-->

## States of feedback for example application:

### 1. Show ready state
The 'Talk to me' Button is not disabled and is a call to action for the user.

### 2. Begin Input
Annyang will not start listening until the user clicks on the 'talk to me' button.

### 3. Acknowledge received input
A gif of an ear with a rainbow of information emmiting into it is display when `annyang` recognizing speech/sound.

### 4. Show output
A response appears underneath the prompt that the code is responding to.

### 5. Error State
A negative response appears in red when the computer doesn't understand (can't respond to) what you have said.

<!-- So now that we know what each element of the front end does we can go back into our javascript and define some global variable for elements that we will need to access between many functions -->


<!-- Go Over Global variable by talking about what elements we will be interacting within the javascript file -->

<!-- 
  add click event listener to start annyang

  disable the button when annyang starts

  show ear gif on soundstart

  result function

  show that working

  define result function

  annyang.abort() in result function

  button remove class disabled

  you said doesn't clear, where should we clear it?

  gif of ear immediately appear when you click regardless of whether sound is detected.

  - start annyang function, clears disabled state and display of gif

  - get annyang to stop with button

  - showing output,
  - two types of output, response and error
  - start with response
  - develop generic function to put response into html
  - use generic response to handle callback for resultNoMatch 
 -->  



## start
Fired as soon as the browser's Speech Recognition engine starts listening.

```javascript

annyang.addCallback('start', startFunction);

```

An important thing to remember is that this will only fire when you call
```javascript
annyang.start();
```

## soundstart
Fired as soon as any sound (possibly speech) has been detected.

This will be useful for state 2, Begining an input

```javascript

annyang.addCallback('soundstart', soundStarted);

```

## result
Fired as soon as some speech was identified. 

This will be useful for state 3, Acknowledge received input

```javascript

annyang.addCallback('result', resultFunction);

```

## resultMatch
Fired when annyang was able to match between what the user said and a registered command. This would be great for state 4 if you wanted to include some preprocessing before producing your output, e.g. comparing what the user said to the commamd text you were expecting.

The Callback functions for this event will be called with three arguments in the following order, in this case we've named them userSaid, commandText, and phrases:

- The phrase the user said that matched a command.
- The command that was matched.
- An array of possible alternative phrases the user might have said.

```javascript

annyang.addCallback('resultMatch', resultMatch);

function resultMatch(userSaid, commandText, phrases){
  console.log(userSaid); // sample output: 'hello'
  console.log(commandText); // sample output: 'hello (there)'
  console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']
}

```

## resultNoMatch
Fired when what the user said didn't match any of the registered commands. This would be a great callback to use for state 5, your error state.

Callback functions for this event will be called with an array of possible phrases the user might have said as the first argument.

```javascript

annyang.addCallback('resultNoMatch', resultNoMatch);

function resultNoMatch(phrases){
  console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']
}

```