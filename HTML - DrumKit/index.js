

var totalDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < totalDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInner = this.innerHTML;
    playNote(buttonInner);
    keyAnimation(buttonInner);
  });
}

document.addEventListener("keypress", function(event){
  playNote(event.key);
  keyAnimation(event.key);
});


function playNote(key){

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log();
  }
}

function keyAnimation(key){
  var currentKey = document.querySelector("." + key);
  currentKey.classList.add("pressed");

  setTimeout(function(){
    currentKey.classList.remove("pressed");
  }, 100); // 1 seconds
}




//End of File
