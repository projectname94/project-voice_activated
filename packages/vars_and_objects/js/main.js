// Defining a variable outside of 
// a specific function allows it to be 
// accessible in every function

var target_element,
    commands,
    original_text;

document.addEventListener("DOMContentLoaded", init);

function init(){
  original_text = 'This is the element that you wil see manipulated.';
  target_element = document.getElementById('target_element');
  commands = {
    'the_number_1': 1,
    'say_hi': 'hello!',
    'round_corners': roundCorners,
    'set_background_color': setBackground,
    'change_box_content': changeBoxContent,
    'add_box_content': addBoxContent,
    'reset_box': resetBox
  }
}

function roundCorners(){
  target_element.classList.add('round_corners');
}

function setBackground(){
  target_element.classList.add('new_color');
}

function changeBoxContent(){
  target_element.innerHTML = 'New Content For The Box.';
}

function addBoxContent(){
  // Possible options for position:
  // 'beforebegin': Before the element itself.
  // 'afterbegin': Just inside the element, before its first child.
  // 'beforeend': Just inside the element, after its last child.
  // 'afterend': After the element itself.

  target_element.insertAdjacentHTML('beforeend', ' Additional content without replacing what is already there.');
}

function resetBox(){
  target_element.innerHTML = original_text;
  target_element.className = 'content';
}