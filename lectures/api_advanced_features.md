# API advanced features

<!-- 
Start by showing example that is in the starter pack, bring up eliza and it's novelty, what it illuminated about humans expectations for computers/companionships

https://www.youtube.com/watch?v=RMK9AphfLco
-->

<!-- \
  
starting a php server
php -S localhost:8000
 -->

<!-- 
Explain front end 
  - button to start
  - indication that it is listening
  - indication that a result is processed
  - an indication if the computer can't respond
  - a way to exit the interaction
-->


<!-- So before we go any further can anyone tell me what an event listener is, what is a callback? -->

An event listener is a type of callback that can be used to identify interactions with the document. These are added using the following syntax:
```javascript

document.body.addEventListener('click', functionName);

```

A callback is a function that is to be executed after another function has finished executing — hence the name ‘call back’.

In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions. Functions that do this are called higher-order functions. Any function that is passed as an argument is called a callback function.

Annyang has a series of library specific callbacks that fire upon the completion of certain function. These will make it easier to produce an interaction that follows the five states of feedback that we discussed.

<!-- You have encountered one already in the speech starter pack -->

Below are a few callbacks that we think will be useful for implementing the five states of feedback and for debuging
 
If you are feeling adventurous, feel free to take a look at the full [Annyang Doc](https://github.com/TalAter/annyang/blob/master/docs/README.md)

Each one of these callbacks will be defined in your initialize function

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

<!-- heading back to the front end lets  identify the states of feedback that are present.
-->

## States of feedback for example application:

### 1. Show ready state
The 'Talk to me' Button is not disabled and is a call to action for the user.

### 2. Begin Input
Annyang will not start listening until the user clicks on the 'talk to me' button.

### 3. Acknowledge received input
A gif of an ear with a rainbow of information emmiting into it is display when `annyang` recognizes speech/sound.

### 4. Show output
A response appears underneath the prompt that the code is responding to.

### 5. Error State
A negative response appears in red when the computer doesn't understand (can't respond to) what you have said.

<!-- So now that we know what each element of the front end does we can go back into our javascript and define some global variable for elements that we will need to access between many functions -->

<!-- Ok so first things first what do we notice is missing within our initialize function?
- annyang.start(), on the front end annyang didn't start listening until i clicked the button so, 
- lets add a click event to the button, and define a function that starts annyang -->

<!-- 
Next we want to make sure that the button is disabled after it's clicked, let's add the class .disabled in our start function
 -->

<!-- 
  Next we want to 
  show ear gif on soundstart,
  in order to do that, we add the .visible class to #listening
-->

<!--
  whats next? before we can create our generateText function we have one more step, defining the result function so that we can prompt the user to look down by revealing the arrow and populating the #input_text using insertAdjacentHTML in a for loop and adding the class .result_ready to the body
-->

<!--
  so now we have the problem that the button is still disabled, annyang hasn't stopped listening.

  We've gone through it once, but need to be able to do it again.

  lets create an abort function 
  to cover these two problems
  
  if we want to clear the text we should do that in the start function, because it essentially is a restart

  let's do a bit more cleanup before we get to generateText()

  what else is wrong here compared to the initial example

  gif of ear immediately appear when you click regardless of whether sound is detected.
  
  lets make sure to remove that visible class from #listening
  
  lets also take out the resultready class from the body when annyang starts to clear the arrow image

  next lets show some output,
  - two types of output, response and error
  - start with response

  generateText(two, arguments)
  var div = document.createElement('div');
  div.classList.add('message');

  div.innerHTML = text;

  output_container.appendChild(div);
  setTimeout(function(){
    div.classList.add('visible');
  }, 500)

  now what about errors,

  here is where the resultNoMatch callback is super useful, 

  we can use the same generateText function but no we can look at the second argument named error

  i can use this to set a conditional to add a second class to my message div

  error
  
  finally, the last thing we haven't done is make the stop button work.

  first we have to make sure we enable (remove disabled class) and disable it once annyang has aborted it 

  and add a click handler and tie that to the function abort();
 -->  