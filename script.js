"use strict";

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock";
    }
    if (computerChoice === 1) {
        return "paper";
    }
    if (computerChoice === 2) {
        return "scissors";
    }
}

function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    // Capitalize first word of both player,
    // and computer choices for presentation
    let playerCapitalized = 
      playerSelection.replace(playerSelection[0],playerSelection[0].toUpperCase());
    let computerCapitalized = 
      computerSelection.replace(computerSelection[0],computerSelection[0].toUpperCase());

    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        return "Invalid choice! Pick either rock, paper or scissors"
    }
    
    if (playerSelection === computerSelection) {
        return `It's a tie! ${playerCapitalized} doesn't beat ${computerCapitalized}`;
    }

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return `You lose! ${computerCapitalized} beats ${playerCapitalized}`;
        }
        else {
            return `You win! ${playerCapitalized} beats ${computerCapitalized}`;
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return `You lose! ${computerCapitalized} beats ${playerCapitalized}`;
        }
        else {
            return `You win! ${playerCapitalized} beats ${computerCapitalized}`;
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return `You lose! ${computerCapitalized} beats ${playerCapitalized}`;
        }
        else {
            return `You win! ${playerCapitalized} beats ${computerCapitalized}`;
        }
    }
}

function playGame() {
    let roundCount = 5;
    let round = 1;
    let playerScore = 0;
    let computerScore = 0;
    let roundResult = "";

    while(round <= roundCount) {
        roundResult = playRound(prompt("Rock, paper or scissors?"),getComputerChoice());
        if (roundResult.includes("tie")) {
            console.log(roundResult);
            console.log(`Your score: ${playerScore}`);
            console.log(`Opponent's score: ${computerScore}`);
            continue;
        }

        if (roundResult.includes("lose")) {
            computerScore++;
            console.log(roundResult);
            console.log(`Your score: ${playerScore}`);
            console.log(`Opponent's score: ${computerScore}`);
            round++;
            continue;
        }

        if (roundResult.includes("win")) {
            playerScore++;
            console.log(roundResult);
            console.log(`Your score: ${playerScore}`);
            console.log(`Opponent's score: ${computerScore}`);
            round++;
            continue;
        }

        // Invalid choice
        console.log(roundResult);
    }

    // Tie state
    if (playerScore === computerScore) {
        console.log("The game has finished!\ŋ"
        + "You tied with a score of " + playerScore + " - " + computerScore + "!\n"
        + "Perhaps it's time for a rematch!");
    }

    // Lose state
    if (playerScore < computerScore) {
        console.log("The game has finished!\n"
        + "You lose with a score of " + playerScore + " - " + computerScore + "...\n"
        + "Better luck next time!");
    }

    // Win state
    if (playerScore > computerScore) {
        console.log("The game has finished!\n"
        + "You win with a score of " + playerScore + " - " + computerScore + "!\n"
        + "Nicely done!");
    }

    return "Something went wrong along the way, because this text should NEVER be printed";
}

playGame();