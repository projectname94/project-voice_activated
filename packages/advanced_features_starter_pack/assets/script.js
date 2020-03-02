document.addEventListener("DOMContentLoaded", initialize);

var button = document.getElementById('button');
var stop_button = document.getElementById('stop_button');
var output_container = document.getElementById('output_container');

function initialize(){
  if (annyang) {
    var commands = {
      'hello (computer)': sayHello,
      'how (are) you (doing)': computerState
    }

    annyang.addCommands(commands);

    annyang.addCallback('result', function(phrases) {
      for (var i = 0; i < phrases.length; i++) {
        document.getElementById('input_text').insertAdjacentHTML('beforeend', (i + 1) + '. ' + phrases[i] + '<br>');
      }
    });

    button.addEventListener('click', startListening);
    stop_button.addEventListener('click', abort);

    annyang.addCallback('start', startFunction);
    annyang.addCallback('soundstart', soundStarted);
    annyang.addCallback('result', resultFunction);
    annyang.addCallback('resultNoMatch', resultNoMatch);
  }
}

function startListening(){
 document.body.classList.remove('result_ready'); 
 annyang.start();
 document.getElementById('input_text').innerHTML = '';
}

function startFunction(){
  button.classList.add('disabled');
  stop_button.classList.remove('disabled');
}

function soundStarted(){
  document.getElementById('listening').classList.add('visible');
}

function resultFunction(){
  document.body.classList.add('result_ready'); 

  abort();
}

function abort(){
  document.getElementById('listening').classList.remove('visible');
  button.classList.remove('disabled');
  stop_button.classList.add('disabled');
  annyang.abort()
}

function sayHello(){
  var text = 'Hello';
  generateText(text, false);
}

function computerState(){
  var text = "Not the best :(";
  generateText(text, false); 
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