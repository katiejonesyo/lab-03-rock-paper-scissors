export function getRandomThrow() {
    const randomNumber = Math.ceil(Math.random() * 3);

    let computerChoice;

    if (randomNumber === 1) {
        computerChoice = 'rock';
    } else if (randomNumber === 2) {
        computerChoice = 'paper';
    } else if (randomNumber === 3) {
        computerChoice = 'scissors';
    }
    return computerChoice;
}


export function userWins(userGuess, computerChoice) {
    if (userGuess === 'rock' && computerChoice === 'rock') {
        return 'draw';
    } else if (userGuess === 'rock' && computerChoice === 'paper') {
        return 'lose';
    } else if (userGuess === 'rock' && computerChoice === 'scissors') {
        return 'win';
    } else if (userGuess === 'paper' && computerChoice === 'rock') {
        return 'win';
    } else if (userGuess === 'paper' && computerChoice === 'scissors') {
        return 'lose';
    } else if (userGuess === 'paper' && computerChoice === 'paper') {
        return 'draw';
    } else if (userGuess === 'scissors' && computerChoice === 'rock') {
        return 'lose';
    } else if (userGuess === 'scissors' && computerChoice === 'paper') {
        return 'win';
    } else if (userGuess === 'scissors' && computerChoice === 'scissors') {
        return 'draw';
    }
}