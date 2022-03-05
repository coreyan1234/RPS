/**
 * The computer's play. Randomly returns rock, paper, or scissors.
 * @returns a String of either: 
 *  - "Rock"
 *  - "Paper"
 *  - "Scissors"
 */
function computerPlay() {
    const plays = ["Rock", "Paper", "Scissors"]
    return plays[Math.floor(Math.random() * plays.length)];
}
// *** TESTING ***
//console.log("Random computer play: " + computerPlay());


/**
 * Plays a single round of Rock Paper Scissors.
 * @param {String} playerSelection The player's play (Case-Insensitive)
 * @param {String} computerSelection The computer's play
 * @returns a String of either "draw", "win", or "lose"
 */
function playRound(playerSelection, computerSelection) {
    // Format playerSelection to just a leading capital letter
    let playerSelecFormatted = playerSelection.toLowerCase();
    playerSelecFormatted = playerSelecFormatted.charAt(0).toUpperCase() + playerSelecFormatted.substring(1);

    /*
    Combinations:
    1. Draw
    2. Rock > Scissors
    3. Paper > Rock
    4. Scissors > Paper
    */
    if (playerSelecFormatted === computerSelection) {
        roundResult("draw", playerSelecFormatted, computerSelection);
        return "draw";
    }
    else if ( (playerSelecFormatted === "Rock" && computerSelection === "Scissors") || 
    (playerSelecFormatted === "Paper" && computerSelection === "Rock") ||
    (playerSelecFormatted === "Scissors" && (computerSelection === "Paper")) ) {
        roundResult("win", playerSelecFormatted, computerSelection);
        return "win"; 
    }
    else {
        roundResult("lose", playerSelecFormatted, computerSelection);
        return "lose";
    }
}
// ***TESTING***
//console.log(playRound(computerPlay(), computerPlay()));


/**
 * Prints the result of the round to the console
 * @param {String} result The result of the round
 * @param {String} playerSelecFormatted The player's play
 * @param {String} computerSelection The computer's play
 */
 function roundResult(result, playerSelecFormatted, computerSelection) {
    if (result === "draw") {
        console.log(`Draw! Player and computer both selected ${playerSelecFormatted}`);
    }
    else if (result === "win") {
        console.log(`You Win! ${playerSelecFormatted} beats ${computerSelection}`);
    }
    else if (result === "lose") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelecFormatted}`);
    }
}


/**
 * Plays multiple rounds of RPS and keeps track of score. Reports a winner and loser at the end
 * @param {Number} numGames The desired number of games to play
 * @returns a String declaring who won more games
 */
function game(numGames) {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i < numGames; i++) {
        let playerSelection = prompt("Type your selection (Rock, Paper, Scissors)");
        let result = playRound(playerSelection, computerPlay());
        if (result === "win") {
            playerScore++;
        }
        else if (result === "lose") {
            computerScore++;
        }
        //playRound(playerSelection, computerPlay());
    }

    if (playerScore > computerScore) {
        return "Player wins!";
    }
    else if (playerScore === computerScore) {
        return "Draw!";
    }
    else {
        return "Computer Wins!"
    }
}
// *** TESTING ***
console.log(game(5));