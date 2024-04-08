function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "Rock";
    }
    if (computerChoice === 1) {
        return "Paper";
    }
    if (computerChoice === 2) {
        return "Scissors";
    }
}