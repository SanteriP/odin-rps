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
    playerText = playerSelection.replace(playerSelection[0],playerSelection[0].toUpperCase());
    computerText = computerSelection.replace(computerSelection[0],computerSelection[0].toUpperCase());

    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        return "Invalid choice! Pick either rock, paper or scissors"
    }
    
    if (playerSelection === computerSelection) {
        return `It's a tie! ${playerText} doesn't beat ${computerText}`;
    }

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return `You lost! ${computerText} beats ${playerText}`;
        }

        if (computerSelection === "scissors") {
            return `You win! ${playerText} beats ${computerText}`;
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return `You lost! ${computerText} beats ${playerText}`;
        }

        if (computerSelection === "rock") {
            return `You win! ${playerText} beats ${computerText}`;
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return `You lost! ${computerText} beats ${playerText}`;
        }

        if (computerSelection === "paper") {
            return `You win! ${playerText} beats ${computerText}`;
        }
    }
}

console.log(playRound("Rock",getComputerChoice()));