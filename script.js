function getComputerChoice() {
  // The computer chooses at random between the three options
  const gameChoices = ["rock", "paper", "scissors"];
  return gameChoices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let humanChoice = prompt('Choose between "Rock", "Paper", or "Scissors', ""); // The player is asked to choose

  if (
    // Check that the user has entered a valid answer
    (humanChoice.toLowerCase() !== "rock" &&
      humanChoice.toLowerCase() !== "paper" &&
      humanChoice.toLowerCase() !== "scissors") ||
    humanChoice === null
  ) {
    alert("Hmm... that wasn't an option. Try again.");
    humanChoice = getHumanChoice(); // If it isn't valid, we restart the function
  }
  return humanChoice.toLowerCase(); // We turn the answer to lowercase to not be case-sensitive
}

let computerScore = 0;
let humanScore = 0;

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

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") || // Basic game play
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++; // Score is updated
    alert(`${getWinPhrase()}
        Your score: ${humanScore}
        Computer's score: ${computerScore}`);
  } else if (humanChoice === computerChoice) {
    alert(`${getTiePhrase()}
        Your score: ${humanScore}
        Computer's score: ${computerScore}`);
  } else {
    computerScore++;
    alert(`${getLosePhrase()}
        Your score: ${humanScore}
        Computer's score: ${computerScore}`);
  }
}

function playFiveRounds() {
  for (i = 1; i <= 5; i++) {
    // Play 5 rounds
    if (i === 1) {
      alert("Let's play some Rock, Paper, Scissors!"); // Initial message
    }

    alert("ROUND " + i); // Announce the round

    playRound(getHumanChoice(), getComputerChoice()); // Play game with getHumanChoice() and getComputerChoice() as arguments
  }

  if (humanScore > computerScore) {
    // Decide the final winner looking at the scores
    alert("Congratulations, you win!");
  } else if (humanScore < computerScore) {
    alert("You lose, try again!");
  } else {
    alert("You tied!");
  }
}

playFiveRounds();
