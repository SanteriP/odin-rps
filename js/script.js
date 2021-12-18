function computerPlay() {
    let roll = Math.random();
    if (roll < 1/3) {
        return "rock";
    } else if (roll < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats rock!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats paper!";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    while(playerScore < 5 && computerScore < 5) {
        let playerSelection = prompt("Rock, papers or scissors?").toLowerCase();
        let result = playRound(playerSelection,computerPlay());
        if(result.includes("win")) {
            playerScore += 1;
            console.log(result);
            console.log(`The score is: Player ${playerScore} | ${computerScore} Computer`);
        } else if (result.includes("lose")) {
            computerScore += 1;
            console.log(result);
            console.log(`The score is: Player ${playerScore} | ${computerScore} Computer`);
        } else {
            console.log(result);
            console.log(`The score is: Player ${playerScore} | ${computerScore} Computer`);
        }
    }

    if(playerScore === 5) {
        console.log("Congratulation, you won the game!");
    } else {
        console.log("You lost the game! Try again!");
    }
}