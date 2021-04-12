function game() {
  const choiceButtons = document.querySelectorAll('.game-choice');

  for (i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].addEventListener('click', playRound);
  }

  const choices = ['rock', 'paper', 'scissors'];

  let winner = null;
  let currentWinner = null;

  let currentRound = 1;
  let totalRounds = 5;
  let isGameOver = false;

  let computerScore = 0;
  let playerScore = 0;


  function playRound(e) {
    let computerSelection = createComputerPlay(choices);
    let playerSelection = e.target.textContent.toLowerCase();

    winner = getRoundWinner(playerSelection, computerSelection);
    showResults(winner);

    if (winner === 'player') {
      playerScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }

    showGameScore(computerScore, playerScore);

    currentRound++;
    isGameOver = checkGameOver(currentRound, totalRounds);

    if (isGameOver) {
      endGame();
    }
  }
}

game();

function createComputerPlay(choices) {
  randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function getPlayerSelection(e) {
  playerSelection = e.target.textContent.toLowerCase();
}

function getRoundWinner(playerSelection, computerSelection) {
  if (
    playerSelection === 'rock' &&
    computerSelection === 'scissors'
  ) {
    return 'player';
  } else if (
    playerSelection === 'paper' &&
    computerSelection === 'rock'
  ) {
    return 'player';
  } else if (
    playerSelection === 'scissors' &&
    computerSelection === 'paper'
  ) {
    return 'player';
  } else if (
    playerSelection === computerSelection) {
    winner = null;
  } else {
    return 'computer';
  }
}

function showResults(winner) {
  let roundResults = document.querySelector('.round-results p');

  if (winner === 'player') {
    roundResults.textContent = 'You won!';
  } else if (winner === 'computer') {
    roundResults.textContent = 'You lost.';
  } else {
    roundResults.textContent = 'Tied!';
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