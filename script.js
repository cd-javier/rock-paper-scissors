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
  displayComputerChoice.textContent = "Computer chose: " + computerChoice;
  displayHumanChoice.textContent = "You chose: " + humanChoice;
  gamePlayLog.appendChild(logHeading)
  gamePlayLog.appendChild(displayComputerChoice);
  gamePlayLog.appendChild(displayHumanChoice);
  if (
    (humanChoice === "rock" && computerChoice === "scissors") || // Basic game play
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++; // Score is updated
    displayResult.textContent = getWinPhrase();
    gamePlayLog.appendChild(displayResult);
  } else if (humanChoice === computerChoice) {
    displayResult.textContent = getTiePhrase();
    gamePlayLog.appendChild(displayResult);
  } else {
    computerScore++;
    displayResult.textContent = getLosePhrase();
    gamePlayLog.appendChild(displayResult);
  }
  computerScoreDisplay.textContent = "Computer: " + computerScore;
  humanScoreDisplay.textContent = "Human: " + humanScore;
  scoreLog.appendChild(scoreHeading);
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
logHeading.textContent = "GAME LOG"
const displayComputerChoice = document.createElement("p");
const displayHumanChoice = document.createElement("p");
const displayResult = document.createElement("p");
const finalResult = document.createElement("p");

function displayFinalResult() {
  if (humanScore > computerScore) {
    finalResult.textContent = "You win!";
  } else {
    finalResult.textContent = "You lose!";
  }

  if (humanScore === 5) {
    gamePlayLog.appendChild(finalResult);
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    gamePlayLog.appendChild(finalResult);
    humanScore = 0;
    computerScore = 0;
  }
}

gameChoice.forEach((button) => {
  button.addEventListener("click", () => {
    let humanChoice;
    humanChoice = button.textContent.toLowerCase();
    gamePlayLog.classList.add('logs')
    scoreLog.classList.add('logs')
    playRound(humanChoice, getComputerChoice());
    displayFinalResult();
  });
});
