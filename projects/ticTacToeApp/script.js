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
    const placeMarker = () => {
        DOM.getSquares().forEach((square) => {
            square.addEventListener('click', () => {
                square.textContent = markChange();
            })
        })
    }
    const updateBoard = () => {
        for(let i=0;i<9;i++) {
            Gameboard.getBoard()[i] = DOM.getSquares()[i].textContent;
        }
    }
    return {
        placeMarker,
        updateBoard,
    }
})();


DOM.setupBoard();
Controller.placeMarker();