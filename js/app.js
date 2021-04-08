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

  function updateScore() {
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

  function showGameScore() {
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
    updateScore();
    showResults();
    showGameScore();

    currentRound++;
  }

  function checkGameOver() {
    if (currentRound > totalRounds) {
      isGameOver = true;
    } else {
      isGameOver = false;
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

  while (!(isGameOver)) {
    createComputerPlay();
    getPlayerSelection();
    playRound(playerSelection, computerSelection);
    checkGameOver();
  }

  endGame();
}

game();