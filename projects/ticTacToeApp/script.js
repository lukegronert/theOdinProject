const DOM = (() => {
    return {
        gameboard: document.querySelector("#gameboard"),
        newGameButton: document.querySelector('#newGameButton'),
        player1: document.querySelector('#player1'),
        player2: document.querySelector('#player2'),
        p1trophy: document.querySelector('#p1trophy'),
        p2trophy: document.querySelector('#p2trophy'),
        //Create a new square for the gameboard
        newSquare: () => {
            const square = document.createElement('div');
            square.classList.add('square');
            return square;
        },
        //Put 9 squares together for gameboard
        setupBoard: () => {
            for(let i = 0; i<9;i++) {
                gameboard.appendChild(DOM.newSquare());
            }
        },
        //return the 9 squares that make up the gameboard
        getSquares: () => {
            return this.gameboard.querySelectorAll('.square')
        },
        getPlayers: () => {
            return document.querySelectorAll('.player');
        }
    }
})();

const Gameboard = (() => {
    //array that holds the marks on the board, used later to check for win conditions
    const board = ['','','','','','','','',''];
    //returns the board array
    const getBoard = () => {
        return board;
    }
    return {
        getBoard
    }
})();

const Controller = (() => {
    //mark starts as 'O' because the mark changes and then is applied when user clicks square
    let mark = 'X'
    //changes the mark on each move
    const markChange = () => {
        if(mark === 'X') {
            mark = 'O'
            return mark
        } else {
            mark = 'X'
            return mark
        }
    }
    //fills the array index with the same mark as the corresponding square index
    const updateBoard = () => {
        for(let i=0;i<9;i++) {
            Gameboard.getBoard()[i] = DOM.getSquares()[i].textContent;
        }   
    }
    const playerChange = () => {
        if(mark === 'X') {
            DOM.player1.classList.toggle('currentPlayer');
            DOM.player2.classList.toggle('currentPlayer');
        } else {
            DOM.player2.classList.toggle('currentPlayer');
            DOM.player1.classList.toggle('currentPlayer');
        }
    }
    //When user clicks, place their mark, update the board array, and check for win conditions
    const placeMarker = () => {
        DOM.getSquares().forEach((square) => {
            square.addEventListener('click', () => {
                if(player1.classList.contains('winner') || player2.classList.contains('winner')) {
                    return
                } else if(square.textContent == '') {
                    square.textContent = mark;
                    markChange();
                    updateBoard();
                    playerChange();
                    checkWinner();
                }
            })
        })
    }
    //lists win conditions and checks for them with 'X' and then 'O'
    const checkWinner = () => {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for(let i=0; i<8;i++) {
            //checks for X win
            if(Gameboard.getBoard()[winConditions[i][0]] == 'X' && Gameboard.getBoard()[winConditions[i][1]] == 'X' && Gameboard.getBoard()[winConditions[i][2]] == 'X') {
                DOM.player2.classList.toggle('currentPlayer');
                DOM.p1trophy.style.display = "inline";
                return DOM.player1.classList.toggle('winner');
                //Checks for O win
            } else if(Gameboard.getBoard()[winConditions[i][0]] == 'O' && Gameboard.getBoard()[winConditions[i][1]] == 'O' && Gameboard.getBoard()[winConditions[i][2]] == 'O') {
                DOM.player1.classList.toggle('currentPlayer');
                DOM.p2trophy.style.display = "inline";
                return DOM.player2.classList.toggle('winner');
            //If every square is filled and there is no winner, alert Draw
            }
        }
        if(Gameboard.getBoard().every((mark) => mark != '')) {
            return alert('Draw');
        }
    }

    const boardReset = () => {
        //reset squares to blank
        DOM.getSquares().forEach((square) => {
            square.textContent = '';
        })
        //Reset board array to have empty values
        Controller.updateBoard();
        //Reset first move's mark to 'X'
        if(mark == 'O') {
            markChange();
        }
    }
    //New Game Button
    DOM.newGameButton.addEventListener('click', () => {
        //Reset board
        boardReset();
        mark = 'X';
        DOM.p1trophy.style.display = 'none';
        DOM.p2trophy.style.display = 'none';
        //Check which player the game ended on and give Player 1 first turn
        if(!player1.classList.contains('currentPlayer')) {
            player1.classList.toggle('currentPlayer')
            player2.classList.remove('currentPlayer')
        }
        //Remove winner class
        if(player1.classList.contains('winner')) {
            player1.classList.remove('winner');
        } else if(player2.classList.contains('winner')) {
            player2.classList.remove('winner');
        }
    })
    //Let users change player names by clicking on the name
    DOM.getPlayers().forEach((player) => {
        player.addEventListener('click', () => {
            let name = prompt('Enter your name: (10 characters or less)');
            if (name.length === 0) {
                alert('You must enter a name!')
            } else if(name.length <= 10) {
                player.textContent = name;
            } else {
                alert('That name is too long!')
            }
        })
    })
    
    return {
        placeMarker,
        updateBoard,
    }
})();

DOM.setupBoard();
Controller.placeMarker();
