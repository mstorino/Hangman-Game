// variable list 
var wordList = [
    "for",
    "the",
    "it",
    "up",
    "in",
    "she"
]

var hangmanWord = "";
var lettersInHangmanWord= [];
var numBlanks = 0;
var letterBlanks = [];
var numGuesses = 10;


function startGame(){
    // 1. select random word
    hangmanWord = wordList[Math.floor(Math.random() * wordList.length)];

    console.log(hangmanWord);

    // 2. break up word into letters

    lettersInHangmanWord = hangmanWord.split("");

    console.log(lettersInHangmanWord);

    // 3. replace letters with spaces by figuring out the number of spaces

    numBlanks = lettersInHangmanWord.length;

    console.log(numBlanks);

    // 4. add spaces for blanks in html

    for(var i = 0; i < numBlanks; i++){
            letterBlanks.push("_ ");
        }

    console.log(letterBlanks);

    document.getElementById('word-blank').innerHTML = letterBlanks.join(" ");
        // why is this necessary / why does it take away the comma?

    document.getElementById('guesses-left').innerHTML = numGuesses;

}

// take in the letter typed

document.onkeyup = function(letterTyped){
    
    var letterGuessed = String.fromCharCode(letterTyped.keyCode);
    
    console.log("this is the letter I typed", letterGuessed);

 // compare against letter in the word

    for (var i = 0; i < lettersInHangmanWord.length; i++) {
        if (letterGuessed === lettersInHangmanWord[i]){
            console.log("this is a letter in the word");
        } else {
            console.log("this is not a letter in the word");
        }
    }
    
}

// compare letter typed to letters in word


startGame();