// computer makes random choice of rock, paper, or scissors
// player inputs rock, paper, or scissors
// based on player choice, return win, lose, or draw

const game = function() {
    let playerScore = 0;
    let computerScore = 0;
    const playAgain = function() {
        const again = prompt('Play again? y/n').toLowerCase();
        if(again === "n") {
            return console.log('Thanks for playing!')
        } else if(again === "y") {
            game();
        } else {
            console.log('Please enter y or n!');
            playAgain();
        }
    }
    const afterPoint = function() {
        console.log('Player: ' +playerScore)
        console.log('Computer: ' +computerScore)
        if(playerScore === 5) {
            console.log('Player Wins!')
            playAgain();
        } else if (computerScore === 5) {
            console.log('Computer Wins!')
            playAgain();
        } else {
            playRound();
        }
    }
    const playRound = function() {
        const choice = ["rock", "paper", "scissors"];
        const computerPlay = function() {
            return choice[Math.round(Math.random()*2)];
        };
        let computerSelection = computerPlay();
        let playerSelection = prompt("Choose your move: ").toLowerCase();
        if (computerSelection == playerSelection) {
            console.log('Draw! You both chose ' + computerSelection + '!');
            return playRound();
        }
        if(playerSelection == "paper") {
            if (computerSelection == "rock") {
                console.log("You win! Paper beats rock!")
                playerScore++;
                afterPoint();
            } else {
                console.log("You lose! Scissors beats paper!")
                computerScore++;
                afterPoint();
            }
        } else if (playerSelection == "rock") {
            if (computerSelection == "paper") {
                console.log("You lose! Paper beats rock!")
                computerScore++;
                afterPoint();
            } else {
                console.log("You win! Rock beats scissors!")
                playerScore++;
                afterPoint();
            }
        } else if (playerSelection == "scissors") {
            if(computerSelection == "paper") {
                console.log("You win! Scissors beats paper!")
                playerScore++;
                afterPoint();
            } else {
                console.log("You lose! Rock beats scissors!")
                computerScore++;
                afterPoint();
            }
        } else {
            console.log("Please enter rock, paper, or scissors :)");
        }
    }
    playRound();
}

game();