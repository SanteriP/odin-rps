"use strict";

let scoreLimit = 5;
let playerScore = 0;
let computerScore = 0;

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

const selectionButtonsContainer = document.querySelector("#player-buttons");
const menuButtonsContainer = document.querySelector("#menu-buttons");
const selectionButtons = document.querySelectorAll(".player-selection");
const buttons = document.querySelectorAll("button");
const replayButton = document.querySelector("#menu-button1");
const textField1 = document.querySelector("#text-field-1");
const textField2 = document.querySelector("#text-field-2");
const textField3 = document.querySelector("#text-field-3");

//animation scripts

buttons.forEach((button) => {
    button.addEventListener('mousedown', () => {
        button.style.transform = "scale(1)";
        button.style.backgroundColor = "white";
        
    });
    document.addEventListener('mouseup', () => {
        setTimeout(() => {
            button.style.transform = "";
            button.style.backgroundColor = "";
        }, "50");
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = "";
        button.style.backgroundColor = "";
    });
})

//functionality scripts

selectionButtons.forEach((selectionButton) => {
    selectionButton.addEventListener('click', (e) => {
        gameStatusUpdater(playRound(selectionButton.textContent,getComputerChoice()));
    });
});

replayButton.addEventListener('click', () => {
    resetGame();
});

function gameStatusUpdater(roundResult) {
    if (roundResult.includes("lose")) {
        computerScore++;
    }

    if (roundResult.includes("win")) {
        playerScore++;
    }

    if(playerScore < scoreLimit && computerScore < scoreLimit) {
        if (roundResult.includes("tie")) {
            textField1.textContent = roundResult;
            textField2.textContent = `Your score: ${playerScore}`;
            textField3.textContent = `Opponent's score: ${computerScore}`;
            return;
        }

        if (roundResult.includes("lose")) {
            textField1.textContent = roundResult;
            textField2.textContent = `Your score: ${playerScore}`;
            textField3.textContent = `Opponent's score: ${computerScore}`;
            return;
        }

        if (roundResult.includes("win")) {
            textField1.textContent = roundResult;
            textField2.textContent = `Your score: ${playerScore}`;
            textField3.textContent = `Opponent's score: ${computerScore}`;
            return;
        }

        // Invalid choice
        textField1.textContent = roundResult;
    }
    else if (playerScore >= scoreLimit) {
        textField1.textContent = `The game has finished!`;
        textField2.textContent = `You win with a score of ${playerScore} - ${computerScore}!`
        textField3.textContent = `Nicely done!`;
        selectionButtonsContainer.style.display = "none";
        menuButtonsContainer.style.display = "block";
    }
    else if (computerScore >= scoreLimit) {
        textField1.textContent = `The game has finished!`;
        textField2.textContent = `You lose with a score of ${playerScore} - ${computerScore}...`;
        textField3.textContent = `Better luck next time!`;
        selectionButtonsContainer.style.display = "none";
        menuButtonsContainer.style.display = "block";
    }
}

function resetGame() {
    textField1.textContent = `Welcome to Rock, Paper, Scissors`;
    textField2.textContent = `Make a choice and hope for the best`;
    textField3.textContent = `Click on any button to begin`;
    selectionButtonsContainer.style.display = "block";
    menuButtonsContainer.style.display = "none";
    playerScore = 0;
    computerScore = 0;
}