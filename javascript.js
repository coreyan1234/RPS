/**
 * The computer's play. Randomly returns rock, paper, or scissors.
 * @returns a String of either: 
 *  - "Rock"
 *  - "Paper"
 *  - "Scissors"
 */
function computerPlay() {
    // Possible plays:
    const plays = ["Rock", "Paper", "Scissors"]

    return plays[Math.floor(Math.random() * plays.length)];
}
// *** TESTING ***
console.log("Random computer play: " + computerPlay());


/**
 * Plays a single round of Rock Paper Scissors.
 * @param {String} playerSelection The player's play (Case-Insensitive)
 * @param {String} computerSelection The computer's play
 */
function playRound(playerSelection, computerSelection) {
    // Format playerSelection to just a leading capital letter
    let playerSelecFormatted = playerSelection.toLowerCase();
    playerSelecFormatted = playerSelecFormatted.charAt(0).toUpperCase() + playerSelecFormatted.substring(1);

    /*
    Combinations:
    1. Same play
    2. Rock > Scissors
    3. Paper > Rock
    4. Scissors > Paper
    */

    // Draw
    if (playerSelecFormatted === computerSelection) {
        return roundResult("draw", playerSelecFormatted, computerSelection);
    }
    // Rock
    else if (playerSelecFormatted === "Rock") {
        if (computerSelection === "Scissors") {
            return roundResult("win", playerSelecFormatted, computerSelection);
        }
        else if (computerSelection === "Paper") {
            return roundResult("lose", playerSelecFormatted, computerSelection);
        }
    }
    // Paper
    else if (playerSelecFormatted === "Paper") {
        if (computerSelection === "Rock") {
            return roundResult("win", playerSelecFormatted, computerSelection);
        }
        else if (computerSelection === "Scissors") {
            return roundResult("lose", playerSelecFormatted, computerSelection);
        }
    }
    // Scissors
    else if (playerSelecFormatted === "Scissors") {
        if (computerSelection === "Paper") {
            return roundResult("win", playerSelecFormatted, computerSelection);
        }
        else if (computerSelection === "Rock") {
            return roundResult("lose", playerSelecFormatted, computerSelection);
        }
    }
}
// ***TESTING***
console.log(playRound(computerPlay(), computerPlay()))


/**
 * Prints the result of the round
 * @param {String} result The result of the round
 * @param {String} playerSelecFormatted The player's play
 * @param {String} computerSelection The computer's play
 * @returns a String of the round's result (draw, win, lose)
 */
 function roundResult(result, playerSelecFormatted, computerSelection) {
    if (result === "draw") {
        return `Draw! Player and computer both selected ${playerSelecFormatted}`;
    }
    else if (result === "win") {
        return `You Win! ${playerSelecFormatted} beats ${computerSelection}`;
    }
    else if (result === "lose") {
        return `You Lose! ${computerSelection} beats ${playerSelecFormatted}`;
    }
}