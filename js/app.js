const choices = ['rock', 'paper', 'scissors'];

let computerSelection = '';
let playerSelection = '';

function createRandomNum(max) {
  return Math.floor(Math.random() * max);
}

function createComputerPlay() {
  computerSelection = choices[createRandomNum(3)];
}

function getPlayerSelection() {
  playerSelection = '';

  while (!(
    playerSelection === choices[0] ||
    playerSelection === choices[1] ||
    playerSelection === choices[2])) {
    playerSelection = prompt('Choose rock, paper or scissors!').toLowerCase();
  }
}

function playRound() {
  createComputerPlay();
  getPlayerSelection();
}