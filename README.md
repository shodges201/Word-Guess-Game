# Word-Guess-Game

The deployed project can be found here: https://shodges201.github.io/Word-Guess-Game/

## Summmary

This word guessing game is a baseball themed hangman game, where the user guesses a letter on their keyboard, and if the letter is in the word it is displayed in the place of one of the blanks, otherwise it is added to the list of incorrect guesses. The user can only guess incorrectly a certain numnber of times before they take a loss for that specific word, and a new set of blanks is displayed for the user to guess.

### Javascript and Jquery

A static array of words, image urls are used to populate the questions with a random word and random image being selected for each successive question. The number of incorrect guesses for each word is exactly the same as the number of letters in that given word. Each time a user presses a key, the program checks the key to make sure it is a letter, and checks if that letter is present in the word. If the letter is present in the word, then the index/indices at which said letter is present in the word is/are stored, and the blank/blanks at that/those positions are replaced with the letter using jquery on the DOM. 
