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
  console.log("Computer chose: " + computerChoice);
  if (
    (humanChoice === "rock" && computerChoice === "scissors") || // Basic game play
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++; // Score is updated
    console.log("You won");
  } else if (humanChoice === computerChoice) {
    console.log("You tied");
  } else {
    computerScore++;
    console.log("You lost");
  }
  console.log("Your score: " + humanScore + " | Computer score: " + computerScore);
}

const gameChoice = document.querySelectorAll(".game-choice");
let humanChoice;

gameChoice.forEach((button) => {
  button.addEventListener("click", () => {
    humanChoice = button.textContent.toLowerCase();
    console.log("You chose: " + humanChoice);
  });
});

const playButton = document.querySelector("#play-button");
playButton.addEventListener("click", () => {
  playRound(humanChoice, getComputerChoice());
});
