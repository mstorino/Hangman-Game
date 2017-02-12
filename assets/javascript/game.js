
// document.onkeyup = function (event) {
//           console.log("you pressed the " + event.key + " key");
//       }

// array of words to use in Hangman

// var words = ['cat', 'dog', 'frog', 'bunny'];

// var wordsLength = words.length;

// var wordsDashes = "";


// for (var i = 0; i < wordsLength; i++) {

// 	wordsDashes = words[i];
// 	console.log(wordsDashes);
// }

// word list
var words = ["cat", "dog", "cow", "reindeer"];


// choose random word from list

var currentWord = words[Math.floor(Math.random() * words.length)];

console.log(currentWord);

// lives
var lives = 5;
console.log (lives);

var numberOfLives = document.getElementById("numberOfLives");
numberOfLives.innerHTML = "You have " + lives + "lives left";
