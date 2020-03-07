document.addEventListener("DOMContentLoaded", initialize);

var button = document.getElementById('button');
var stop_button = document.getElementById('stop_button');
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
 document.body.classList.remove('result_ready'); 
 document.getElementById('input_text').innerHTML = '';
 annyang.start();
}

function startFunction(){
  button.classList.add('disabled');
  stop_button.classList.remove('disabled');
}

function soundStarted(){
  document.getElementById('listening').classList.add('visible');
}

function resultFunction(phrases){
  document.body.classList.add('result_ready'); 
  for (var i = 0; i < phrases.length; i++) {
    document.getElementById('input_text').insertAdjacentHTML('beforeend', (i + 1) + '. ' + phrases[i] + '<br>');
  }
  abort();
}

function abort(){
  document.getElementById('listening').classList.remove('visible');
  button.classList.remove('disabled');
  stop_button.classList.add('disabled');
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
  var div = document.createElement('div');
  div.classList.add('message');
  if (error){
    div.classList.add('error');
  }
  div.innerHTML = text;
  output_container.appendChild(div);
  setTimeout(function(){
    div.classList.add('visible');
  }, 500)
}