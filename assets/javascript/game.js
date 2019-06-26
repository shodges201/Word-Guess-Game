var guessText = document.getElementById("guessText");
var guessesRemainingText = document.getElementById("guessesLeft");
var alreadyGuessedText = document.getElementById("lettersGuessed");
var winsText = document.getElementById("numWins");

var wordList = ["baseball", "walk", "popcorn", "triple", "double", "single", "pitch", "outfield", "infield", "shortstop", "catcher"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randNum = Math.floor(Math.random() * wordList.length);
var currentWord = wordList[randNum];
var guessesRemaining = currentWord.length;
var wordDisplay = " ";
var alreadyGuessed = [];
var incorrectGuesses = [];
var correctGuesses = 0;
var winCount = 0;

for(var i = 0; i < currentWord.length; i++){
    wordDisplay = wordDisplay + "_ ";
}

updateUI();

document.onkeyup = function(event){
    var guess = event.key.toLowerCase();

    //if guess hasn't happened already
    if(alreadyGuessed.indexOf(guess) == -1 && alphabet.indexOf(guess) != -1){
        alreadyGuessed.push(guess);
        var inWord = false;
        //check if guess is in word
        for(var i = 0; i < currentWord.length; i++){
            //guess is in the word
            if(currentWord[i] === guess){
                inWord = true;
                var idx = (2*i)+1;
                //replace blank with letter
                wordDisplay = wordDisplay.substring(0, idx) + guess + wordDisplay.substring(idx + 1, wordDisplay.length);
                correctGuesses++;
                updateUI();
            }
        }
        if(!inWord){
            guessesRemaining--;
            incorrectGuesses.push(guess);
            updateUI();
        }
        if(correctGuesses === currentWord.length){
            winCount++;
            newGame();
        }
        if(guessesRemaining === 0){
            newGame();
        }
        
    }

};

function updateUI(){
    guessText.textContent = wordDisplay;
    guessesRemainingText.textContent = guessesRemaining;
    alreadyGuessedText.textContent = incorrectGuesses;
    winsText.textContent = winCount;
}

function newGame(){
    randNum = Math.floor(Math.random() * wordList.length);
    currentWord = wordList[randNum];
    guessesRemaining = currentWord.length;
    wordDisplay = " ";
    alreadyGuessed = [];
    correctGuesses = 0;
    incorrectGuesses = [];
    for(var i = 0; i < currentWord.length; i++){
        wordDisplay = wordDisplay + "_ ";
    }
    updateUI();
}


