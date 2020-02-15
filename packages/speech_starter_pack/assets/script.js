document.addEventListener("DOMContentLoaded", initialize);

function initialize(){
  if (annyang) {
    var commands = {
      // explicit
      'hello': iSaidHello,
      // single variable
      'greetings :name': greet,
      // splat
      'hi to *names': iSaidHiToMultiplePeople,
      // optional command
      '(please) say hello to me': iSaidHello
    }

    annyang.addCommands(commands);

    annyang.start();

    annyang.addCallback('result', function(phrases) {
      document.getElementById('input_text').innerHTML = phrases;
    });
  }
}

function iSaidHello(){
  alert('hello');
}

function greet(name){
  alert("greetings " + name);
}

function iSaidHiToMultiplePeople(names){
  alert('hi to ' + names);
}