function getComputerChoice() {
  const gameChoices = ["rock", "paper", "scissors"];
  return gameChoices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let humanChoice = prompt('Choose between "Rock", "Paper", or "Scissors', "");

  if (
    (humanChoice.toLowerCase() !== "rock" &&
      humanChoice.toLowerCase() !== "paper" &&
      humanChoice.toLowerCase() !== "scissors") ||
    humanChoice === null
  ) {
    alert("Hmm... that wasn't an option. Try again.");
    humanChoice = getHumanChoice();
  }
  return humanChoice.toLowerCase();
}

let computerScore = 0;
let humanScore = 0;

function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    alert(`You win this round!
        Your score: ${humanScore}
        Computer's score: ${computerScore}`);
  } else if (humanChoice === computerChoice) {
    alert(`You tied!
        Your score: ${humanScore}
        Computer's score: ${computerScore}`);
  } else {
    computerScore++;
    alert(`The computer lost this one!
        Your score: ${humanScore}
        Computer's score: ${computerScore}`);
  }
}

function playFiveRounds() {
  for (i = 1; i <= 5; i++) {
    if (i === 1) {
      alert("Let's play some Rock, Paper, Scissors!");
    }

    alert("ROUND " + i);

    playRound();
  }

  if (humanScore > computerScore) {
    alert("Congratulations, you win!");
  } else if (humanScore < computerScore) {
    alert("You lose, try again!");
  } else {
    alert("You tied!");
  }
}

playFiveRounds();
