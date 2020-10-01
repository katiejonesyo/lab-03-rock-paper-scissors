// import functions and grab DOM elements
import { getRandomThrow, userWins } from './get-random-throw.js';

const playButton = document.querySelector('playButton');
const winnerSpan = document.querySelector('wins');
const lossSpan = document.querySelector('losses');
const drawSpan = document.querySelector('draws');

const resetButton = document.querySelector('resetButton');

let wins = 0;
let losses = 0;
let draws = 0; 


