// gamePattern[] = an empty aray to hold current game of colors
var gamePattern = [];
// simonColors[] = an array to hold colors for randomnize
var simonColors = ["red", "blue", "green", "yellow"];

var userInputColor = [];

var gameStatus = 'N';   // keep track of the game start
var level = 0;


// detect when key A is pressed
$(document).keypress(function(){
  if(gameStatus == 'N'){
    $("#level-title").text("Level " + level);     // Display the LEVEL h1
    nextColor();                                  // Generate first color
    gameStatus = 'Y';                             // GAME START!!!!
  }
});
getEachUserInput();



function restartGame(){
  level = 0;
  gamePattern = [];
  userInputColor = [];
  gameStatus = 'N';         // keep track of the game start
  level = 0;
}

function checkUserInput(currentPattern){
  if (gamePattern[currentPattern] == userInputColor[currentPattern]){
    console.log("success");
    if (gamePattern.length == userInputColor.length){
      setTimeout(function(){
        nextColor();
      }, 1000);
    }
  }else{
    console.log("wrong");
    playSound("wrong")
    $("body").addClass("game-over");    // add an CSS class to change body

    $("#level-title").text("Game Over. Your last color was " + gamePattern[gamePattern.length-1] + '...');
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);
    restartGame();
  }
}

function getEachUserInput(){

  $(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    userInputColor.push(userChosenColor);
    animatePressed(userChosenColor);
    playSound(userChosenColor);
    checkUserInput(userInputColor.length-1);

    //
    console.log("userChosenColor: " + userChosenColor);
  });
}

function nextColor() {
  userInputColor = [];
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);     // random number from 1-3
  var randomNewColor = simonColors[randomNumber];       // ARandomColor = Color[randomNumber]
  gamePattern.push(randomNewColor);
  animatePressed(randomNewColor);
  playSound(randomNewColor);

  //
  console.log(randomNewColor);
  //
  console.log(gamePattern);

}


function animatePressed(currenColor){
  $("#" + currenColor).addClass("pressed");
  setTimeout(function(){
    $("#" + currenColor).removeClass("pressed");
  }, 100);
}

function playSound(soundName){
  // changing audio to play sound
  var audio = new Audio(("sounds/" + soundName +".mp3"));
  audio.play();
}











// var gameStatus = 'Y';
//
// // while gameStatus == Y
// while (gameStatus == 'Y') {
//   // generate a random color + add the color to the currentGame list
//   nextColor();
//
//   // Play the current sequence of colors to player using currentGame[]
//   var audio;
//   for (var i = 0; i < gamePattern.length; i++) {
//     // changing audio to play sound
//     audio = new Audio("sounds/" + gamePattern[i] + ".mp3");
//     audio.play();
//   }
//
//   // For loop thru the size of the currentGame[] start at index=0
//   for (var i = 0; i < gamePattern.length; i++) {
//     // Player enter/choose a color + play the sound of that color
//     //
//   }
// }
//
// nextColor();


//changing flashing animate button
//$("#" + randomNewColor).fadeIn(100).fadeOut(100).fadeIn(100);

// changing audio to play sound
// var audio = new Audio("sounds/" + randomNewColor + ".mp3");
// audio.play();


// while gameStatus == Y
// generate a random color + add the color to the currentGame list

// Play the current sequence of colors to player using currentGame[]

// For loop thru the size of the currentGame[] start at index=0
// Player enter/choose a color + play the sound of that color

// If the current input color == currentGame[index]
// gameStatus = Y
//else
// gameStatus == N
// break
