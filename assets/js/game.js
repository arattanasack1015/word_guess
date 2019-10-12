//Generates an Array of fruits
const fruit = ['orange', 'peach', 'watermelon', 'pineapple', 'pomegranate', 'dragonfruit', 'banana', 'strawberry'];
//Randomly picks from array
let randNum = Math.floor(Math.random() * fruit.length);
let choosenWord = fruit[randNum];
let correctGuess = [];
let wrongGuess = [];

// DOM
let docUnderScore = document.getElementsByClassName('underScore');

//Generates underscores according to choosenWord
let underScore = [];
let underScoreLength = () => {
    for(let i = 0; i < choosenWord.length; i++) {
        underScore.push(' _ ');
        docUnderScore[0].innerHTML = underScore.join(' ');
    }
    return underScore;
}
console.log(choosenWord, underScoreLength());
//Listens for letter inputs
document.addEventListener('keypress', (event) => {
let keyWord = String.fromCharCode(event.keyCode);
//Adds correct letter to array
    if(choosenWord.indexOf(keyWord) > -1) {

        correctGuess.push(keyWord);
        underScore[choosenWord.indexOf(keyWord)] = keyWord;
        if(underScore.join(' ') == choosenWord) {
            alert('You got it!');
        }
    } 
    //Adds wrong guess to array
    else {
        wrongGuess.push(keyWord);
        console.log(wrongGuess);
    }
});