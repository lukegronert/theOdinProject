console.log('CONNECTED');
const grid = document.querySelector('#grid');
const clearBtn = document.querySelector('#clear');
const newGridBtn = document.querySelector('#newGridBtn');
let gridSize = 16;

const addBoxes = () => {
    for(let i = 0; i<gridSize; i++) {
        let newBox = grid.appendChild(document.createElement('div'));
        newBox.classList.add('columnBox');
        newBox.addEventListener('mouseover', () => {
            newBox.style.background = 'black';
        })
        const clearGrid = () => {
            newBox.style.background = "white";
        }
        clearBtn.addEventListener('click', () => {
            clearGrid();
        })
    }
}

// Need to clear away old divs first (??)
// newGridBtn.addEventListener('click', () => {
//     userInput = prompt("How long do you want the sides?");
//     gridSize = userInput*userInput;
//     addBoxes();
// })

addBoxes();