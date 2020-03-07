document.addEventListener("DOMContentLoaded", initialize);

var button = document.getElementById('button');
var stop_button = document.getElementById('stop_button');
var input_container = document.getElementById('input_text');
var output_container = document.getElementById('output_container');

function initialize(){
  if (annyang) {
    var commands = {
      'hello (computer)': sayHello,
      'how (are) you (doing)': computerState,
      'I am feeling *splat': questionFeeling
    }

    annyang.addCommands(commands);

    // Click Handler to start annyang
    button.addEventListener('click', startListening);
    // Click Handler to abort annyang
    stop_button.addEventListener('click', abort);

    // You'll notice there are two 'start' functions,

    // One to start listening, and one that fires after annyang succesfully starts

    // The reason we wait to disable the start button, and enable the stop button on
    // annyang 'start' is to account for instances in which the the user doesn't allow 
    // access to the microphone
    annyang.addCallback('start', startFunction);
    annyang.addCallback('soundstart', soundStarted);
    annyang.addCallback('result', resultFunction);
    annyang.addCallback('resultNoMatch', resultNoMatch);
  }
}

function startListening(){
  // removing classes and input text content to 'reset' state of application
  document.body.classList.remove('result_ready'); 
  document.getElementById('input_text').innerHTML = '';

  // starting annyang
  annyang.start();
}

function startFunction(){
  // disabling button and enabling stop button
  button.classList.add('disabled');
  stop_button.classList.remove('disabled');
}

function soundStarted(){
  // show ear gif once sound starts
  document.getElementById('listening').classList.add('visible');
}

function resultFunction(phrases){
  // show result arrow once sound starts
  document.body.classList.add('result_ready'); 

  // loop through 'phrases' and insert string into 'input text' using 'insertAdjacentHTML'
  // full documentation of this function can be found: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
  for (var i = 0; i < phrases.length; i++) {
    input_container.insertAdjacentHTML('beforeend', (i + 1) + '. ' + phrases[i] + '<br>');
  }

  // call function which 'aborts' annyang
  abort();
}

function abort(){
  // reset state of ear gif
  document.getElementById('listening').classList.remove('visible');

  // enable button so the user can restart the application
  button.classList.remove('disabled');

  // disable stop button
  stop_button.classList.add('disabled');

  // stop annyang
  annyang.abort()
}

function sayHello(){
  generateText('Hello human', false);
}

function computerState(){
  generateText("Not the best :(", false); 
}

function questionFeeling(splat){
  generateText("Why are you feeling " + splat + '?', false);   
}

function resultNoMatch(){
  generateText('I dont have something to say to that', true);
}

function generateText(text, error){
  // create var 'div' and create element 'div';
  // createElement can be used for any html element
  // full documentation for this function can be found: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
  var div = document.createElement('div');

  // add message class to message
  div.classList.add('message');

  // if the second argument passed to generateText is true, also add an error class to div
  if (error){
    div.classList.add('error');
  }

  // set innerHTML of div to contain the text (first argument) passed to generateText
  div.innerHTML = text;

  // append div to output_container
  output_container.appendChild(div);

  // wait 500 miliseconds and then add the visible class to the div (this class changes the opacity and animates the message in)
  // full documentation of the setTimeout function can be found: https://www.w3schools.com/jsref/met_win_settimeout.asp
  setTimeout(function(){
    div.classList.add('visible');
  }, 500)
}