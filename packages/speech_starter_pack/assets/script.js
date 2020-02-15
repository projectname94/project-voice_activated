document.addEventListener("DOMContentLoaded", init);

function init(){
  if (annyang) {
    var commands = {
      'hello': iSaidHello
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