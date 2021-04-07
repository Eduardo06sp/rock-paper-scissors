const choices = ['rock', 'paper', 'scissors'];

let computerSelection = '';

function createRandomNum(max) {
  return Math.floor(Math.random() * max);
}

function createComputerPlay() {
  computerSelection = possibilities[createRandomNum(3)];
}