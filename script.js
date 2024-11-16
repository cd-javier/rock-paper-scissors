function getComputerChoice() { // The computer chooses at random between the three options
  const gameChoices = ["rock", "paper", "scissors"];
  return gameChoices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let humanChoice = prompt('Choose between "Rock", "Paper", or "Scissors', ""); // The player is asked to choose

  if ( // Check that the user has entered a valid answer
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

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") || // Basic game play
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++; // Score is updated
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
  for (i = 1; i <= 5; i++) { // Play 5 rounds
    if (i === 1) {
      alert("Let's play some Rock, Paper, Scissors!"); // Initial message
    }

    alert("ROUND " + i); // Announce the round

    playRound(getHumanChoice(), getComputerChoice()); // Play game with getHumanChoice() and getComputerChoice() as arguments
  }

  if (humanScore > computerScore) { // Decide the final winner looking at the scores
    alert("Congratulations, you win!");
  } else if (humanScore < computerScore) {
    alert("You lose, try again!");
  } else {
    alert("You tied!");
  }
}

playFiveRounds();
