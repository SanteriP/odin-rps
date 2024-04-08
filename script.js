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
    let playerText = playerSelection.replace(playerSelection[0],playerSelection[0].toUpperCase());
    let computerText = computerSelection.replace(computerSelection[0],computerSelection[0].toUpperCase());

    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        return "Invalid choice! Pick either rock, paper or scissors"
    }
    
    if (playerSelection === computerSelection) {
        return `It's a tie! ${playerText} doesn't beat ${computerText}`;
    }

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return `You lose! ${computerText} beats ${playerText}`;
        }

        if (computerSelection === "scissors") {
            return `You win! ${playerText} beats ${computerText}`;
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return `You lose! ${computerText} beats ${playerText}`;
        }

        if (computerSelection === "rock") {
            return `You win! ${playerText} beats ${computerText}`;
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return `You lose! ${computerText} beats ${playerText}`;
        }

        if (computerSelection === "paper") {
            return `You win! ${playerText} beats ${computerText}`;
        }
    }
}

function playGame() {
    let roundCount = 5;
    let playerScore = 0;
    let computerScore = 0;
    let roundResult = "";

    for(let round = 1; round <= roundCount; round++) {
        roundResult = playRound(prompt("Rock, paper or scissors?"),getComputerChoice());
        console.log(roundResult);
        if (roundResult.includes("tie")) {
            console.log(`Your score: ${playerScore}`);
            console.log(`Opponent's score: ${computerScore}`);
            continue;
        }

        if (roundResult.includes("lose")) {
            computerScore++;
            console.log(`Your score: ${playerScore}`);
            console.log(`Opponent's score: ${computerScore}`);
            continue;
        }

        if (roundResult.includes("win")) {
            playerScore++;
            console.log(`Your score: ${playerScore}`);
            console.log(`Opponent's score: ${computerScore}`);
            continue;
        }

    }
}

playGame();