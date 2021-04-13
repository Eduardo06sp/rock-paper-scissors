function game() {
  const choiceButtons = document.querySelectorAll('.game-choice');
  const replayChoices = document.querySelectorAll('.replay-choice');
  const endGameModal = document.querySelector('.results');

  let winner = null;
  let currentWinner = null;
  let currentRound = 1;
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
    showResults(playerSelection, computerSelection, winner);

    if (winner === 'player') {
      playerScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }

    updateGameScore(computerScore, playerScore);
    currentWinner = checkCurrentWinner(computerScore, playerScore);

    roundNumber.textContent = currentRound;
    currentRound++;
    isGameOver = checkGameOver(computerScore, playerScore);

    if (isGameOver) {
      endGameModal.classList.add('results-visible');
      endGame(currentWinner);

      computerScore = 0;
      playerScore = 0;
      currentRound = 1;
    }
  }

  function replay(e) {
    let userInput = e.target.textContent.toLowerCase();
    let roundNumber = document.querySelector('.number-of-round');

    if (userInput === 'yes') {
      roundNumber.textContent = 1;
      updateGameScore(0, 0);
      document.querySelector('.round-results p').textContent = 'Awaiting next play...';
      endGameModal.classList.remove('results-visible');
    } else if (userInput === 'no') {
      document.querySelector('.outcome').textContent = 'Have a wonderful day!';
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

function showResults(playerSelection, computerSelection, winner) {
  let roundResults = document.querySelector('.round-results p');

  if (winner === 'player') {
    roundResults.textContent = `Computer chose ${computerSelection}. You won!`;
  } else if (winner === 'computer') {
    roundResults.textContent = `Computer chose ${computerSelection}. You lost!`;
  } else {
    roundResults.textContent = `Computer made the same selection. Tie!`;
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

function checkGameOver(computerScore, playerScore) {
  if (computerScore === 5 || playerScore === 5) {
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
