const choice = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;
const container = document.querySelector('div');
const roundResults = document.querySelector('#roundResults');

const score = document.createElement('div');

const playerDisplay = document.createElement('p');
playerDisplay.textContent = "Player: " + playerScore;
score.appendChild(playerDisplay)

const computerDisplay = document.createElement('p');
computerDisplay.textContent = "Computer: " + computerScore;
score.appendChild(computerDisplay)

container.appendChild(score);

const computerPlay = function() {
    return choice[Math.floor(Math.random()*3)];
};

const winningDisplay = () => {
    roundResults.style.color = "green";
}

const losingDisplay = () => {
    roundResults.style.color = "red";
}

const drawDisplay = () => {
    roundResults.style.color = "grey";
}

const playAgain = () => {
    buttons.forEach((button) => {
        button.style.display = "none";
    });
    setTimeout(() => {
        let decision = prompt("Would you like to play again? y/n");
        if(decision === "y") {
            playerDisplay.style.color = "black";
            computerDisplay.style.color = "black";
            playerScore = 0;
            computerScore = 0;
            playerDisplay.textContent = "Player: " + playerScore;
            computerDisplay.textContent = "Computer: " + computerScore;
            roundResults.textContent = "Let the Battle Begin Again!" 
            roundResults.style.color = "black";
            buttons.forEach((button) => {
                button.style.display = "inline";
            });
        } else {
            roundResults.style.color = "black";
            return roundResults.textContent = "Thank you for playing!";
        }
    }, 1000)
}

const afterPoint = () => {
    playerDisplay.textContent = "Player: " + playerScore;
    computerDisplay.textContent = "Computer: " + computerScore; 
    if(playerScore == 5) {
        playerDisplay.style.color = "green";
        computerDisplay.style.color = "red";
        playerDisplay.textContent = "Player: " + playerScore;
        computerDisplay.textContent = "Computer: " + computerScore; 
        playAgain();
    } else if(computerScore == 5) {
        playerDisplay.style.color = "red";
        computerDisplay.style.color = "green";
        playerDisplay.textContent = "Player: " + playerScore;
        computerDisplay.textContent = "Computer: " + computerScore; 
        playAgain();
    }
}

const playRound = (computerSelection, playerSelection) => {
    const roundInfo = () => {
        roundResults.textContent = "Player chooses: " + playerSelection.toUpperCase() + "! Computer chooses: " + computerSelection.toUpperCase() + "!";
    }
    if (computerSelection === playerSelection) {
        drawDisplay();
        roundInfo();
        afterPoint();
    } else if (playerSelection == 'rock') {
        if(computerSelection == 'paper') {
            losingDisplay();
            roundInfo();
            computerScore += 1;
            afterPoint();
        } else {
            winningDisplay();
            roundInfo();
            playerScore += 1;
            afterPoint();
        }
    } else if (playerSelection == 'paper') {
        if(computerSelection == 'scissors') {
            losingDisplay();
            roundInfo();
            computerScore += 1;
            afterPoint();
        } else {
            winningDisplay();
            roundInfo();
            playerScore += 1;
            afterPoint();
        }
    } else if (playerSelection == 'scissors') {
        if(computerSelection == 'rock') {
            losingDisplay();
            roundInfo();
            computerScore += 1;
            afterPoint();
        } else {
            winningDisplay();
            roundInfo();
            playerScore += 1;
            afterPoint();
        }
    }
}

const game = () => {
    console.log('Let the game begin!');
    let playerSelection = buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.textContent.toLowerCase();
            let computerSelection = computerPlay();
            playRound(computerSelection, playerSelection);
        });
    });
};

game();