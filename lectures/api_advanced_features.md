# API advanced features

An event listener is a type of callback that can be used to identify interactions with the document. These are added using the following syntax:
```javascript

document.body.addEventListener('click', functionName);

```

Annyang has a series of library specific callbacks to make it easier to produce an interaction that follows the five states of feedback that we outlined.

Below are a few callbacks that we think should be used. 

These will also be useful for debuging
 
If you are feeling adventurous, feel free to take a look at the full [Annyang Doc](https://github.com/TalAter/annyang/blob/master/docs/README.md)

Each one of these callbacks will be defined in your initialize function

## start
Fired as soon as the browser's Speech Recognition engine starts listening.

```javascript

annyang.addCallback('start', startFunction);

```

An important thing to remember:
if you call,
```javascript
annyang.start();
```
in your initialize function, this will only fire once

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

function resultMatch(phrases){
  console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']
}

```