const getComputerChoice = () => {
  const randomChoice = Math.floor(Math.random() * 3 + 1);
  return randomChoice === 1
    ? "rock"
    : randomChoice === 2
    ? "paper"
    : "scissors";
};

const playRound = (playerSelection, computerSelection) => {
  const playerSelectionLow = playerSelection;
  const computerSelectionLow = computerSelection;
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

let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".game-choice");
const textResult = document.querySelector(".result-text");
const playerScoreText = document.querySelector("#left");
const computerScoreText = document.querySelector("#right");

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    console.log(e.target.id);
    const gameResult = playRound(e.target.id, getComputerChoice());
    textResult.textContent = gameResult[0];
    playerScore += gameResult[1];
    computerScore += gameResult[2];

    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
  });
});
