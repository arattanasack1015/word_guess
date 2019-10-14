//Fruit Array
const fruit = ['orange', 'peach', 'watermelon', 'pineapple', 'pomegranate', 'dragonfruit', 'banana', 'strawberry'];


//Empty variables to store values later
let randomFruit = "";
let fruitLetters = []
let underscore = 0;
let correctLetters = [];
let wrongGuess = [];

//Counter Variables
let wins = 0;
let losses = 0;
let livesRemaining = 9;

// DOM
let docFruitWord = document.getElementsByClassName('fruitWord');
let docCorrectGuess = document.getElementsByClassName('correctGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');
let docLives = document.getElementsByClassName('life');



// game
function game() {
    // RNG from fruit array
    randomFruit = fruit[Math.floor(Math.random() * fruit.length)];

    // converts word into letter array 
    fruitLetters = randomFruit.split("");

    // stores length of word in underscore, for later use
    underscore = fruitLetters.length;

    // creates underscores for each letter
    for (let i = 0; i < underscore; i++) {
        correctLetters.push("_");
    }

    //showing the "_" within HTML
    docFruitWord[0].innerHTML = "  " + correctLetters.join("  ");

    //console logging 
    console.log('randomFruit', randomFruit);
    console.log('fruitLetters', fruitLetters)
    console.log('underscore', underscore)
    console.log('correctLetters', correctLetters)
}

// compares input to answer key
function fruitCheck(letter) {
    let letterCheck = false;
    //if the generated randomword is equal to the letter entered... then variable is true
    for (let i = 0; i < underscore; i++) {
        if (fruitLetters[i] == letter) {
            letterCheck = true;
        }
    }
    //if letterCheck (false)
    if (letterCheck) {
        //check each letter to see if it matches word
        for (let i = 0; i < underscore; i++) {
            if (fruitLetters[i] == letter) {
                correctLetters[i] = letter;
            }
        }
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else {
        wrongGuess.push(letter);
        docWrongGuess[0].innerHTML = wrongGuess.join(' ');
        livesRemaining--;
        livesRemaining.toString();
        docLives[0].innerHTML = livesRemaining.join(' ');
    }
    console.log(correctLetters);
}

// reset
function reset() {
    livesRemaining = 9;
    wrongGuess = [];
    correctLetters = [];
    game()
}

function end() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + livesRemaining)

    if (fruitLetters.toString() == correctLetters.toString()) {
        wins++;
        reset();
        alert("Wow! you've won " + wins + " times!");
    } else if (livesRemaining === 0) {
        losses++;
        reset();
        alert("Yikes... you need to read up on your fruits.");
    }
}





game();



//Listens for letter inputs
document.addEventListener('keypress', (event) => {
    let keyWord = String.fromCharCode(event.keyCode);
    fruitCheck(keyWord);
    end();
    console.log(keyWord);
    
});
