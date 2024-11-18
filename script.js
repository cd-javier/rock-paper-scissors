function getComputerChoice() {
  // The computer chooses at random between the three options
  const gameChoices = ["rock", "paper", "scissors"];
  return gameChoices[Math.floor(Math.random() * 3)];
}

function getWinPhrase() {
  // Create an array of different phrases to cheer the user
  const phrases = [
    "You win this one, you're the best!",
    "You win! Victory is yours! Your fingers are magic!",
    "You win! Winner winner chicken dinner!",
    "You win! Take a bow, champion!",
    "You win! You crushed it like a pro gamer!",
    "You win! The crowd goes wild (in your head)!",
    "You win! Bow before the Rock Paper Scissors master!",
    "You win! The game can't handle your brilliance!",
  ];
  return phrases[Math.floor(Math.random() * 8)]; // Choose one at random
}
function getLosePhrase() {
  const phrases = [
    "You lost this one, you're a loser!",
    "You lost, you suck!",
    "You lost! Defeat! Better luck next time, noob!",
    "You lost! Ouch, you just got schooled!",
    "You lost! Maybe try closing your eyes next time?",
    "You lost! Did you even try?",
    "You lost! The computer just flexed on you.",
    "You lost! Maybe this isn't your thing.",
  ];
  return phrases[Math.floor(Math.random() * 8)];
}
function getTiePhrase() {
  const phrases = [
    "Tied... boriiiiing.",
    "Tied! How original.",
    "Tied! It's a draw! How thrilling... not.",
    "Tied! You both must be psychics.",
    "Tied! Nobody wins. Nobody cares.",
    "Tied! A thrilling battle of equals.",
    "Tied! Are you two long-lost twins or what?",
    "Tied! The suspense... or lack thereof.",
  ];
  return phrases[Math.floor(Math.random() * 8)];
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
  displayComputerChoice.textContent = "Computer chose: " + computerChoice; // Create text that will be displayed
  displayHumanChoice.textContent = "You chose: " + humanChoice;
  gamePlayLog.appendChild(logHeading); // Display text
  gamePlayLog.appendChild(displayComputerChoice);
  gamePlayLog.appendChild(displayHumanChoice);
  if (
    (humanChoice === "rock" && computerChoice === "scissors") || // Basic game play
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++; // Update Score
    displayResult.textContent = getWinPhrase(); // Update cheer display
  } else if (humanChoice === computerChoice) {
    displayResult.textContent = getTiePhrase();
  } else {
    computerScore++;
    displayResult.textContent = getLosePhrase();
  }
  gamePlayLog.appendChild(displayResult); // Display cheer
  computerScoreDisplay.textContent = "Computer: " + computerScore; // Update score displays
  humanScoreDisplay.textContent = "Human: " + humanScore;
  scoreLog.appendChild(scoreHeading); // Display scores
  scoreLog.appendChild(computerScoreDisplay);
  scoreLog.appendChild(humanScoreDisplay);
}

const gameChoice = document.querySelectorAll(".game-choice");

const scoreLog = document.querySelector("#score-log");
const scoreHeading = document.createElement("h2");
scoreHeading.textContent = "SCORE";
const computerScoreDisplay = document.createElement("p");
const humanScoreDisplay = document.createElement("p");

const gamePlayLog = document.querySelector("#game-play-log");
const logHeading = document.createElement("h2");
logHeading.textContent = "GAME LOG";
const displayComputerChoice = document.createElement("p");
const displayHumanChoice = document.createElement("p");
const displayResult = document.createElement("p");
displayResult.classList.add("italics");
const finalResult = document.createElement("p");
finalResult.classList.add("final-result");

const restartContainer = document.querySelector("#restart-container");
const restartButton = document.createElement("button");
restartButton.textContent = "Restart";

function endGame() {
  if (humanScore > computerScore) {
    finalResult.textContent = "YOU WIN!";
  } else {
    finalResult.textContent = "YOU LOSE!";
  }

  restartContainer.appendChild(restartButton);
  gamePlayLog.appendChild(finalResult);
}

gameChoice.forEach((button) => {
  button.addEventListener("click", () => {
    if (humanScore < 5 && computerScore < 5) {
      let humanChoice;
      humanChoice = button.textContent.toLowerCase();
      gamePlayLog.classList.add("logs");
      scoreLog.classList.add("logs");
      playRound(humanChoice, getComputerChoice());
    } else {
      endGame();
    }
  });
});

restartButton.addEventListener("click", () => {
  scoreLog.textContent = "";
  gamePlayLog.textContent = "";
  scoreLog.classList.toggle("logs");
  gamePlayLog.classList.toggle("logs");
  restartContainer.removeChild(restartButton);
  computerScore = 0;
  humanScore = 0;
});
