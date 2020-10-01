import { getRandomThrow, userWins } from './get-random-throw.js';

const playButton = document.querySelector('playButton');
const winnerSpan = document.querySelector('wins');
const lossSpan = document.querySelector('losses');
const drawSpan = document.querySelector('draws');

const resetButton = document.querySelector('resetButton');

let wins = 0;
let losses = 0;
let draws = 0; 


playButton.addEventListener('click', () => {
   
    const randomGuess = getRandomThrow();
  
    const checkedRadioButton = document.querySelector(':checked');
    const userGuess = checkedRadioButton.value;

    let total = wins + losses;

    if (userGuess === randomGuess) {
        draws++;
        drawSpan.textContent = draws;
       
    } else if (userWins(userGuess, randomGuess) === true) {
        wins++;
      
    } else if (userWins(userGuess, randomGuess) === false) {
        losses++;
        lossSpan.textContent = losses;
       
    } 
});

resetButton.addEventListener('click', () => {

});