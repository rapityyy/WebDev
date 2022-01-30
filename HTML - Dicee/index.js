
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "images/dice" + randomNumber1 + ".png";
var randomImage2 = "images/dice" + randomNumber2 + ".png";

var header = document.getElementById("title");

if (randomNumber1 < randomNumber2){
  //player 2 win
  header.innerHTML = "Player 2 Wins! 🚩";
}
else if (randomNumber1 > randomNumber2){
  //player 1 win
  header.innerHTML = "🚩 Player 1 Wins!";
}
else{
  //draw
  header.innerHTML = "Draw!";
}

// Then set the title + both images
var images = document.querySelectorAll("img");
images[0].setAttribute("src", randomImage1);
images[1].setAttribute("src", randomImage2);
