function computerPlay() {
    let roll = Math.random();
    if (roll < 1/3) {
        return "Rock";
    } else if (roll < 2/3) {
        return "Paper";
    } else {
        return "Scissors";
    }
}