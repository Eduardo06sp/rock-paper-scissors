function game() {
  const choiceButtons = document.querySelectorAll('.game-choice');
  const replayChoices = document.querySelectorAll('.replay-choice');

  let winner = null;
  let currentWinner = null;
  let currentRound = 1;
  let totalRounds = 5;
  let isGameOver = false;
  let computerScore = 0;
  let playerScore = 0;

  for (i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].addEventListener('click', playRound);
  }

  replayChoices.forEach(button => {
    button.addEventListener('click', replay);
  });

  const choices = ['rock', 'paper', 'scissors'];

  function playRound(e) {
    let computerSelection = createComputerPlay(choices);
    let playerSelection = e.target.textContent.toLowerCase();
    let roundNumber = document.querySelector('.number-of-round');

    winner = getRoundWinner(playerSelection, computerSelection);
    showResults(winner);

    if (winner === 'player') {
      playerScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }

    updateGameScore(computerScore, playerScore);
    currentWinner = checkCurrentWinner(computerScore, playerScore);

    currentRound++;
    roundNumber.textContent = currentRound;
    isGameOver = checkGameOver(currentRound, totalRounds);

    if (isGameOver) {
      endGame(currentWinner);

      computerScore = 0;
      playerScore = 0;
      currentRound = 1;
      roundNumber.textContent = 1;
      updateGameScore(0, 0);
      document.querySelector('.round-results p').textContent = 'Awaiting next play...';
    }
  }

  function replay(e) {
    let userInput = e.target.textContent.toLowerCase();

    if (userInput === 'yes') {
    } else if (userInput === 'no') {
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

function updateGameScore(computerScore, playerScore) {
  let computerScoreEl = document.querySelector('.computer-score-number');
  let playerScoreEl = document.querySelector('.player-score-number');

  computerScoreEl.textContent = computerScore;
  playerScoreEl.textContent = playerScore;
}

function checkCurrentWinner(computerScore, playerScore) {
  if (computerScore > playerScore) {
    return 'computer';
  } else if (playerScore > computerScore) {
    return 'player';
  } else {
    return null;
  }
}

function checkGameOver(currentRound, totalRounds) {
  if (currentRound > totalRounds) {
    return true;
  } else {
    return false;
  }
}

function endGame(currentWinner) {
  let outcome = document.querySelector('.outcome');

  if (currentWinner === 'player') {
    outcome.textContent = 'Congratulations! You win the match!';
  } else if (currentWinner === 'computer') {
    outcome.textContent = 'Better luck next time! You lost this match.';
  } else {
    outcome.textContent = 'It\'s a tie!';
  }

}
