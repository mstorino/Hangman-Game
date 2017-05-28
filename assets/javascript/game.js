// variable list 
var wordList = [
    "for",
    "the",
    "it",
    "up",
    "in",
    "she"
]

var imgList = [
    // "<img src='assets/images/hangmanImg1.png' alt='img1'>",
    "<img src='assets/images/hangmanImg2.png' alt='img2'>",
    "<img src='assets/images/hangmanImg3.png' alt='img3'>",
     "<img src='assets/images/hangmanImg4.png' alt='img4'>",
      "<img src='assets/images/hangmanImg5.png' alt='img5'>",
       "<img src='assets/images/hangmanImg6.png' alt='img6'>",
        "<img src='assets/images/hangmanImg7.png' alt='img7'>"
]

//solution
var hangmanWord = "";
var imgRandom = "";

//break up word into individual letters
var lettersInHangmanWord= [];

//show number of blanks
var numBlanks = 0;

//hold blanks
var blanksAndAnswers = [];

//hold wrong letters
var wrongGuesses = [];

//Game Score
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 10;

//Game State
function resetState(){
    numGuesses = 10;
    lettersInHangmanWord = [];
    numBlanks = 0;
    blanksAndAnswers = [];
    wrongGuesses = [];
}

function selectImg(){
    imgRandom = imgList[Math.floor(Math.random() * imgList.length)];
    console.log(imgRandom);
    document.getElementById('selectImg').innerHTML = imgRandom;
}
//When Game Starts, select word, break it into letters, replace letters with blanks, display blanks and number of guesses left

function startGame(){
    

    resetState();

    // 1. select random word
    hangmanWord = wordList[Math.floor(Math.random() * wordList.length)];

    console.log("hangman word " + hangmanWord);

    // 2. break up word into letters

    lettersInHangmanWord = hangmanWord.split("");

    // 3. replace letters with spaces by figuring out the number of spaces

    numBlanks = lettersInHangmanWord.length;

    // 4. add spaces for blanks in html

    for(var i = 0; i < numBlanks; i++){
            blanksAndAnswers.push("_ ");
        }

    document.getElementById('guesses-left').innerHTML = numGuesses;

    document.getElementById('word-blank').innerHTML = blanksAndAnswers.join(" ");

    //this is important so the old guesses aren't showing up on the screen on a new turn

    document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");

    selectImg();
}

//compare letters to see if guesses are correct
function checkLetters(letterGuessed){

    var letterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (letterGuessed === lettersInHangmanWord[i]) {
            letterInWord = true;
        }
    }

    //Determine where letterGuessed is in the lettersInHangmanWord array by running for loop and if lettersInHangmanWord[i] === letter guessed then replace blanksAndAnswers[i] with the letterGuessed. 

    if(letterInWord) {
        for (i = 0; i < numBlanks; i++) {
            if (lettersInHangmanWord[i] === letterGuessed) {
                blanksAndAnswers[i] = letterGuessed;
            }
        }
    } else {
        wrongGuesses.push(letterGuessed);
        numGuesses--;
    }
}

function roundComplete(){
    
    //update scoreboard everytime a letter is guessed

    document.getElementById('guesses-left').innerHTML = numGuesses;

    document.getElementById('word-blank').innerHTML = blanksAndAnswers.join(" ");

    document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");

    //when the string of letters guessed equals the hangman word string or the numGuesses equal 0 change the scoreboard and restart the game. This runs every time a letter is typed.

    if (lettersInHangmanWord.toString() === blanksAndAnswers.toString()){
        winCounter++;
        document.getElementById('win-counter').innerHTML = winCounter;
        document.getElementById('winBanner').innerHTML = "Hooray! You won. The word was <span class = 'tomato'> '" + hangmanWord + "'</span>. Try again with a new word.";

        startGame();

    } else if (numGuesses === 0) {
        lossCounter++
        document.getElementById('loss-counter').innerHTML = lossCounter;
        document.getElementById('winBanner').innerHTML = "Too Bad. You didn't get it this time. The word was <span class = 'tomato'> '" + hangmanWord + "' </span> . Try again with a new word!";
        startGame();
    }
}

startGame();

//capture letter typed by user and make it lowercase

document.onkeyup = function(letterTyped){
    
    var letterGuessed = String.fromCharCode(letterTyped.keyCode).toLowerCase();    
    // console.log("this is the letter I typed", letterGuessed);
    checkLetters(letterGuessed);
    roundComplete();
    
}