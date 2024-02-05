let playerScore = 0;
let computerScore = 0;
const result = document.querySelector(".result");
const playerLabel = document.querySelector(".player-score");
const computerLabel = document.querySelector(".computer-score");

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        result.textContent = "Tie";
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore++;
            result.textContent = "You lose, paper beats rock";
        } else {
            playerScore++;
            result.textContent = "You win, rock beats scissors";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            result.textContent = "You win, paper beats rock";
        } else {
            computerScore++;
            result.textContent = "You lose, scissors beat paper";
        }
    } else {
        if (computerSelection === "paper") {
            playerScore++;
            result.textContent = "You win, scissors beat paper";
        } else {
            computerScore++;
            result.textContent = "You lose, rock beats scissors";
        }
    }
    playerLabel.textContent = playerScore;
    computerLabel.textContent = computerScore;
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener('click', () => playRound(button.textContent, getComputerChoice())));