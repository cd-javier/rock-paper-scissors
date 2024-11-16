# ROCK PAPER SCISSORS

First JavaScript project for The Odin Project Foundations course.

The goal is to create a game where the user plays the classic **rock paper scissors** against the computer.

## Pseudocode

    Get computer's choice
        Create an array of different choices (rock, paper, scissors)
        Return a single choice at random
    Get human's choice
        Prompt to get the choice
        Check that the choice matches a possibility
            If it doesn't, ask again
            If it does, return
    Declare players score variables
    Declare function to play a single round
        Decide which player wins
        Add points to their score
        Announce which player won the round and show score
    Declare function to play five games
        Loop 5 rounds
            Announce which round you're playing
            Play round
        Announce winner 


## Challenges

### Validating the user's entry

#### Problem
Initially I checked that the user had entered a valid value inside of the `playRound()` function, which resulted in errors. Even after the user entered a valid value, the function continued considering the first one, and there was only one chance to reenter a value.

#### Solution
Check the user's entry inside of the `getHumanChoice()` function. If the entry doesn't match one of the three possibilities (using `.toLowerCase` avoid making it case-specific), the function restarts.
Through this, I discovered a function can call itself inside of an `if` statement.


### Basic `if` syntax

#### Problem
When checking the user's entry, it always showed that he answer was wrong. My thought process of "If it's not 'rock', 'paper', ***or*** scissors..." translated into:

    humanChoice.toLowerCase() !== "rock" ||
    humanChoice.toLowerCase() !== "paper" ||
    humanChoice.toLowerCase() !== "scissors"

#### Solution
Obviously, according to that logic, it will always be wrong, because it will **always** be different than one of the three options, it can't be all of them at the same time. `||` had to be replaced by `&&`:

    humanChoice.toLowerCase() !== "rock" &&
    humanChoice.toLowerCase() !== "paper" &&
    humanChoice.toLowerCase() !== "scissors"