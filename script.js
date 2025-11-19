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
    });
});

const runningScore = document.querySelector('#runningScore');

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("It's a tie.")
    } else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            console.log("You lose! Paper beats Rock.")
            computerScore++
        } else {
            console.log("You win! Rock beats Scissors.")
            humanScore++
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            console.log("You lose! Scissors beats Paper.")
            computerScore++
        } else {
            console.log("You win! Paper beats Rock.")
            humanScore++
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            console.log("You lose! Rock beats Scissors.")
            computerScore++
        } else {
            console.log("You win! Scissors beats Paper.")
            humanScore++
        }
    }
}


