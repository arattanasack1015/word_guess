//Array for fruits
const fruit = ['orange', 'peach', 'watermelon', 'pineapple', 'pomegranate', 'dragonfruit', 'banana', 'strawberry'];

//Global Variables
let randomFruit = "";
let fruitLetters = []
let underScore = [];
let blanksAndCorrect = [];
let wrongGuess = [];

//Counter Variables
let wins = 0;
let losses = 0;
let guessesRemaining = 9;

// DOMs
docfruitWord = document.getElementsByClassName('fruitWord');


//Main Game
    let underScoreLength = () => {
        for(let i = 0; i < randomFruit.length; i++) {
            underScore.push(' _ ');
            docfruitWord[0].innerHTML = underScore.join(' ');
        }
        return underScore;
    }
function wordGame() {
    randomFruit = fruit[Math.floor(Math.random() * fruit.length)];

    fruitLetters = randomFruit.split("");
}

// function checkLetters(letter) {
//     var fruitLetters = false;
//     for (var i = 0; i < underScore; i++) {
//         if (randomFruit[i] == letter) {
//             fruitLetters = true;
//         }
//     }
//     if (fruitLetters) {
//         for (var i = 0; i < underScore; i++) {
//             if (randomFruit[i] == letter) {
//                 blanksAndCorrect[i] = letter;
//             }
//         }
//     }
//     else {
//         wrongGuess.push(letter);
//         guessesRemaining--;
//     }
//     console.log(blanksAndCorrect);

// }



wordGame()

// //check for keyup, and convert to lowercase then store in guesses
// document.onkeyup = function (event) {
//     var guesses = String.fromCharCode(event.keyCode).toLowerCase();
//     //check to see if guess entered matches value of random word
//     checkLetters(guesses);
//     //process wins/loss 
//     // complete();
//     //store player guess in console for reference 
//     console.log(guesses);

//     //display/store incorrect letters on screen
