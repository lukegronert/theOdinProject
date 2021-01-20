const DOM = (() => {
    return {
        gameboard: document.querySelector("#gameboard"),
        newSquare: () => {
            const square = document.createElement('div');
            square.classList.add('square');
            return square;
        },
        setupBoard: () => {
            for(let i = 0; i<9;i++) {
                gameboard.appendChild(DOM.newSquare());
            }
        },
        getSquares: () => {
            return this.gameboard.querySelectorAll('.square')
        }
    }
})();

const Gameboard = (() => {
    const board = ['','','','','','','','',''];
    const getBoard = () => {
        return board;
    }
    return {
        getBoard
    }
})();

const Controller = (() => {
    let mark = 'O'
    const markChange = () => {
        if(mark === 'X') {
            mark = 'O'
            return mark
        } else {
            mark = 'X'
            return mark
        }
    }
    const updateBoard = () => {
        for(let i=0;i<9;i++) {
            Gameboard.getBoard()[i] = DOM.getSquares()[i].textContent;
        }
    }
    const placeMarker = () => {
        DOM.getSquares().forEach((square) => {
            square.addEventListener('click', () => {
                if(square.textContent == '') {
                    square.textContent = markChange();
                    updateBoard();
                    checkWinner();
                }
            })
        })
    }
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
            if(Gameboard.getBoard()[winConditions[i][0]] == 'X' && Gameboard.getBoard()[winConditions[i][1]] == 'X' && Gameboard.getBoard()[winConditions[i][2]] == 'X') {
                return alert('X WINS');
            } else if(Gameboard.getBoard()[winConditions[i][0]] == 'O' && Gameboard.getBoard()[winConditions[i][1]] == 'O' && Gameboard.getBoard()[winConditions[i][2]] == 'O') {
                return alert('O WINS');
            }
        }
    }
    return {
        placeMarker,
        updateBoard,
        checkWinner
    }
})();


DOM.setupBoard();
Controller.placeMarker();