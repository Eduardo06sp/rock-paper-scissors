function game() {
  const choices = ['rock', 'paper', 'scissors'];

  let computerSelection = '';
  let playerSelection = '';
  let computerScore = 0;
  let playerScore = 0;
  let winner = null;
  let currentWinner = null;

  let currentRound = 1;
  let totalRounds = 5;
  let isGameOver = false;

  while (!(isGameOver)) {
    createComputerPlay(choices);
    getPlayerSelection();

    playRound(playerSelection, computerSelection);
    updateScore(computerScore, playerScore);
    showGameScore(computerScore, playerScore);

    currentRound++;
    isGameOver = checkGameOver(currentRound, totalRounds);
  }

  endGame();
}

game();

function createComputerPlay(choices) {
  randomNum = Math.floor(Math.random() * 3);
  computerSelection = choices[randomNum];
}

function getPlayerSelection() {
  playerSelection = '';

  do {
    playerSelection = prompt('Choose rock, paper or scissors!').toLowerCase();
  } while (!(playerSelection === 'rock' ||
    playerSelection === 'paper' ||
    playerSelection === 'scissors'))
}

function getRoundWinner() {
  if (
    playerSelection === 'rock' &&
    computerSelection === 'scissors'
  ) {
    winner = 'player';
  } else if (
    playerSelection === 'paper' &&
    computerSelection === 'rock'
  ) {
    winner = 'player';
  } else if (
    playerSelection === 'scissors' &&
    computerSelection === 'paper'
  ) {
    winner = 'player';
  } else if (
    playerSelection === computerSelection) {
    winner = null;
  } else {
    winner = 'computer';
  }
}

function updateScore(computerScore, playerScore) {
  if (winner === 'player') {
    playerScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

function showResults() {
  if (winner === 'player') {
    console.log('You won!');
  } else if (winner === 'computer') {
    console.log('You lost.');
  } else {
    console.log('Tied!');
  }
}

function showGameScore(computerScore, playerScore) {
  if (playerScore > computerScore) {
    currentWinner = 'player';
    console.log(`You are leading ${playerScore}-${computerScore}!`);
  } else if (computerScore > playerScore) {
    currentWinner = 'computer';
    console.log(`You are losing ${playerScore}-${computerScore}.`);
  } else {
    currentWinner = null;
    console.log(`You're both tied at ${playerScore}!`);
  }
}

function playRound(playerSelection, computerSelection) {
  getRoundWinner();
  showResults();
}

function checkGameOver(currentRound, totalRounds) {
  if (currentRound > totalRounds) {
    return true;
  } else {
    return false;
  }
}

function endGame() {
  console.log('Game over!');

  if (currentWinner === 'player') {
    console.log('Congratulations! You win the match!');
  } else if (currentWinner === 'computer') {
    console.log('Better luck next time! You lost this match.');
  } else {
    console.log('It\'s a tie!');
  }

  let userInput;
  while (!(userInput === 'yes' || userInput === 'no')) {
    userInput = prompt(
      'Would you like to play again? Please type in "yes" or "no"').toLowerCase();

    if (userInput === 'yes') {
      game();
    } else if (userInput === 'no') {
      console.log('Have a wonderful day!');
    }
  }
}