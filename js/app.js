const choices = ['rock', 'paper', 'scissors'];

let computerSelection = '';
let playerSelection = '';

function createRandomNum(max) {
  return Math.floor(Math.random() * max);
}

function createComputerPlay() {
  computerSelection = choices[createRandomNum(3)];
}