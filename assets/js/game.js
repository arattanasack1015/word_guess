//Generates an Array of fruits
const fruit = ['orange', 'peach', 'watermelon', 'pineapple', 'pomegranate', 'dragonfruit', 'banana', 'strawberry'];
//Randomly picks from array
let randNum = Math.floor(Math.random() * fruit.length);
let choosenWord = fruit[randNum];
let correctGuess = [];
let wrongGuess = [];
let fruitLetter = choosenWord.split("");


//Counter Variables
let wins = 0;
let losses = 0;
let guessesRemaining = 9;

// DOM
let docFruitWord = document.getElementsByClassName('fruitWord');
let docCorrectGuess = document.getElementsByClassName('correctGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');


//Generates underscores according to choosenWord
let underScore = [];
let underScoreLength = () => {
    for(let i = 0; i < choosenWord.length; i++) {
        underScore.push(' _ ');
        docFruitWord[0].innerHTML = underScore.join(' ');
    }
    return underScore;
}
console.log(choosenWord, underScoreLength());


//Listens for letter inputs
document.addEventListener('keypress', (event) => {
let keyWord = String.fromCharCode(event.keyCode);


//Adds correct letter to array
    // if(choosenWord.indexOf(keyWord) > -1) {

    //     correctGuess.push(keyWord);
    //     docFruitWord[0].innerHTML = underScore.join(' ');

    // } 
    // //Adds wrong guess to array
    // else {
    //     wrongGuess.push(keyWord);
    //     docWrongGuess[0].innerHTML = wrongGuess.join(' ');
    //     guessesRemaining--;
    // }

let containsLetter = false;
    for (let i = 0; i < fruitLetter.length; i++) {
        if(fruitLetter[i] == keyWord){
            containsLetter = true;
            correctGuess.push(keyWord);
            docFruitWord[0].innerHTML = underScore.join(' ');
        }
    }
    console.log('keyWord', keyWord);
});



console.log('correctGuess', correctGuess);
console.log('wrongGuess', wrongGuess);
console.log('fruitLetter', fruitLetter);