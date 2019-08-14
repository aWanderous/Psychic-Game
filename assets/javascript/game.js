var wins = 0;
var losses = 0;
var guessCount = 10;
var guessed = 0;

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


document.onkeyup = function(event) {
var userGuess = event.key;


var magicLetter = letters[Math.floor(Math.random() * letters.length)];

if (userGuess == magicLetter) {
wins++;
guessCount = 10;
var correctText = document.getElementById("correct-text");
var reset = document.getElementById("userchoice-text").value = '';
} else {
  guessCount--;
}

if (guessCount === 0) {
losses++;
guessCount = 10;
var correctText = document.getElementById("correct-text");
var reset = document.getElementById("userchoice-text").value = '';
}

var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var countText = document.getElementById("count-text");


userChoiceText.textContent = "You guessed: " + userGuess;
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
countText.textContent = "Guesses you have left: " + guessCount;
correctText.textContent = "The magic letter was: " + magicLetter;
};