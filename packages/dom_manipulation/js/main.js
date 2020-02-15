document.addEventListener("DOMContentLoaded", init);

function init(){
  document.getElementById('button1').addEventListener('click', makeBoxesRed);
  document.getElementById('button2').addEventListener('click', makeBoxesBlue);
  document.getElementById('button3').addEventListener('click', makeOneBoxGreen);
  document.getElementById('button4').addEventListener('click', resetBoxes);
}

function makeBoxesRed(){
  document.querySelectorAll('.demo_box').forEach((element)=>{
    element.classList.remove('blue');
    element.classList.add('red');
  });
}

function makeBoxesBlue(){
  document.querySelectorAll('.demo_box').forEach((element)=>{
    element.classList.remove('red');
    element.classList.add('blue');
  });
}

function makeOneBoxGreen(){
  document.getElementById('third_box').classList.add('green');
}

function resetBoxes(){
  document.querySelectorAll('.demo_box').forEach((element)=>{
    element.className = 'demo_box';
  });
}