
// the counters starting points
var wins = 0;
var losses = 0;
var guessCount = 10;


// letters in array
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// when button is released
document.onkeyup = function(event) {
var userGuess = event.key;

// random generator
var magicLetter = letters[Math.floor(Math.random() * letters.length)];

// when the user guesses correct or not 
if (userGuess == magicLetter) {
wins++;
guessCount = 10;
var correctText = document.getElementById("correct-text");
var reset = document.getElementById("userchoice-text").value = '';
correctText.textContent = "The magic letter was: " + magicLetter;
} else { 
  guessCount--;
}
// after 10 guesses, lose
if (guessCount === 0) {
losses++;
guessCount = 10;
var correctText = document.getElementById("correct-text");
var reset = document.getElementById("userchoice-text").value = '';
correctText.textContent = "The magic letter was: " + magicLetter;
}

// stores the accumlated results
var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var countText = document.getElementById("count-text");

// prints the result of each game
userChoiceText.textContent = "You guessed: " + userGuess;
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
countText.textContent = "Guesses you have left: " + guessCount;
};