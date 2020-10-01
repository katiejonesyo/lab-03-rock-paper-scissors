import { getRandomThrow, userWins } from './get-random-throw.js';

const playButton = document.querySelector('#playButton');
const winnerSpan = document.querySelector('#winnerSpan');
const lossSpan = document.querySelector('#lossesSpan');
const drawSpan = document.querySelector('#drawSpan');
const resetButton = document.querySelector('#resetButton');

let wins = 0;
let losses = 0;
let draws = 0; 


playButton.addEventListener('click', () => {   
    const randomGuess = getRandomThrow();  
    const checkedRadioButton = document.querySelector(':checked');
    const userGuess = checkedRadioButton.value;

    if (userGuess === randomGuess) {
        draws++;
        drawSpan.textContent = draws;       
    } else if (userWins(userGuess, randomGuess) === 'win') {
        wins++;        
        winnerSpan.textContent = wins;

    } else if (userWins(userGuess, randomGuess) === 'lose') {
        losses++;
        lossSpan.textContent = losses;
    } 
});


resetButton.addEventListener('click', () => {
    //Reset variable states
    wins = 0;
    losses = 0;
    draws = 0; 
    //Write back varibles to spans
    drawSpan.textContent = draws;
    winnerSpan.textContent = wins;
    lossSpan.textContent = losses;
});