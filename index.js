// Generating random number 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// creates random dice image name by concatenating
var randomDiceImage = "images/dice" + randomNumber1 + ".png";

// Generating code for random Dice 1
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);

// Generating random number 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// creates random dice image name by concatenating
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

// Generating code for random Dice 2
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

// to avoid draw situation
var randomNumber3 = Math.floor(Math.random() * 6);

// Change title
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🍾 Boyfriend Wins!"
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTM = "GirlFriend Wins! 🍾"
} else {
  document.querySelector("h1").innerHTML = "🍾DRAW🍾"
}
