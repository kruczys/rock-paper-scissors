const getComputerChoice = () => {
  const randomChoice = Math.floor(Math.random() * 3 + 1);
  return randomChoice === 1
    ? "Rock"
    : randomChoice === 2
    ? "Paper"
    : "Scissors";
};

const playRound = (playerSelection, computerSelection) => {
  const playerSelectionLow = playerSelection.toLowerCase();
  const computerSelectionLow = computerSelection.toLowerCase();
  let result = ["", 0, 0];

  switch (playerSelectionLow) {
    case "rock":
      switch (computerSelectionLow) {
        case "rock":
          result = "draw";
          break;
        case "paper":
          result = "loose";
          break;
        case "scissors":
          result = "win";
          break;
      }
      break;
    case "paper":
      switch (computerSelectionLow) {
        case "rock":
          result = "win";
          break;
        case "paper":
          result = "draw";
          break;
        case "scissors":
          result = "loose";
          break;
      }
      break;
    case "scissors":
      switch (computerSelectionLow) {
        case "rock":
          result = "loose";
          break;
        case "paper":
          result = "win";
          break;
        case "scissors":
          result = "draw";
          break;
      }
      break;
  }

  return result === "draw"
    ? ["You draw", 0, 0]
    : result === "win"
    ? [`You win! ${playerSelectionLow} beats ${computerSelectionLow}`, 1, 0]
    : [`You loose! ${computerSelectionLow} beats ${playerSelectionLow}`, 0, 1];
};

const game = (rounds) => {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i <= rounds; i++) {
    const computerPlay = getComputerChoice();
    const playerPlay = window.prompt("What is your choice? ");
    const roundResult = playRound(playerPlay, computerPlay);
    playerScore += roundResult[1];
    computerScore += roundResult[2];

    console.log(
      roundResult[0],
      `Your score: ${playerScore}, SI score: ${computerScore}`
    );
  }
};

let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".game-choice");
const textResult = document.querySelector(".result-text");
const playerScoreText = document.querySelector("#left");
const computerScoreText = document.querySelector("#right");

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    const gameResult = playRound(e.target.id, getComputerChoice());
    textResult.textContent = gameResult[0];
    playerScore += gameResult[1];
    computerScore += gameResult[2];

    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
  });
});
