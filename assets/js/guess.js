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
let docFruitWord = document.getElementById('fruitWord');
let docCorrectGuess = document.getElementById('correctGuess');
let docWrongGuess = document.getElementById('wrongGuess');
let docLives = document.getElementById('livesLeft');



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
    docFruitWord.innerText = "  " + correctLetters.join("  ");

    //console logging 
    // console.log('randomFruit', randomFruit);
    // console.log('fruitLetters', fruitLetters)
    // console.log('underscore', underscore)
    // console.log('correctLetters', correctLetters)
}

// compares input to answer key
function fruitCheck(letter) {
    let letterCheck = false;
    //if the generated randomword is equal to the letter entered... then variable is true
    for (let i = 0; i < underscore; i++) {
        if (fruitLetters[i] === letter) {
            letterCheck = true;
        }
    }
    //if letterCheck (false)
    if (letterCheck) {
        //check each letter to see if it matches word
        for (let i = 0; i < underscore; i++) {
            if (fruitLetters[i] === letter) {
                correctLetters[i] = letter;
                docFruitWord.innerText = correctLetters.join(' ');
            }
        }
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else {
        wrongGuess.push(letter);
        docWrongGuess.innerText = wrongGuess.join(' ');
        livesRemaining--;
        docLives.innerText = "Lives left: " + livesRemaining;
    }
    // console.log(correctLetters);
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

    if (fruitLetters.toString() === correctLetters.toString()) {
        wins++;
        reset();
        alert("Wow! you've won " + wins + " times!");
    } else if (livesRemaining === 0) {
        losses++;
        reset();
        alert("Yikes... you need to read up on your fruits.");
    }

    // document.getElementById('livesleft').innerText = livesRemaining;
}





game();



//Listens for letter inputs
document.addEventListener('keypress', (event) => {
    let keyWord = String.fromCharCode(event.keyCode);
    fruitCheck(keyWord);
    end();
    console.log(keyWord);
    
});
