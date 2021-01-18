const Gameboard = (() => {
    const board = [];
    const gameboard = document.querySelector("#gameboard");
    const newSquare = () => {
        const square = document.createElement('div');
        square.classList.add('square');
        return square;
    }
    const setupBoard = () => {
        for(let i = 0; i<9;i++) {
            gameboard.appendChild(newSquare());
        }
    };
    return {
        setupBoard
    }
})();

Gameboard.setupBoard();