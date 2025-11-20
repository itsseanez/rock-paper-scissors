let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3); //returns random integer from 0-2
    let computerChoice;
    switch (choice) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
    }
    return computerChoice;
};

let humanChoice = '';
const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        humanChoice = choice.textContent;
        playRound(humanChoice, getComputerChoice());
        runningScore.textContent = `Human Score: ${humanScore} -- Computer Score: ${computerScore}`;
        if (humanScore >= 5 || computerScore >= 5) {
            if (humanScore >=5) {
                gameWinner.textContent = "You win human";
            } else {
                gameWinner.textContent = "You lose human... Try again next time.";
            }
        }
    });
});

const runningScore = document.querySelector('#runningScore');
const gameWinner = document.querySelector('#gameWinner');

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        gameWinner.textContent = "It's a tie.";
    } else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            gameWinner.textContent = "You lose! Paper beats Rock.";
            computerScore++
        } else {
            gameWinner.textContent = "You win! Rock beats Scissors.";
            humanScore++
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            gameWinner.textContent = "You lose! Scissors beats Paper.";
            computerScore++
        } else {
            gameWinner.textContent = "You win! Paper beats Rock.";
            humanScore++
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            gameWinner.textContent = "You lose! Rock beats Scissors.";
            computerScore++
        } else {
            gameWinner.textContent = "You win! Scissors beats Paper.";
            humanScore++
        }
    }
}


