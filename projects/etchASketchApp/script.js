console.log('CONNECTED');
const grid = document.querySelector('#grid');
const clearBtn = document.querySelector('#clear');
const newGridBtn = document.querySelector('#newGridBtn');
let size = 4;
const redBtn = document.querySelector('#red');
const blackBtn = document.querySelector('#black');
let drawColor = "black";

function createGrid () {
    for (let i=0; i<size*size; i++) {
        let box = document.createElement('div');
        box.classList.add('gridBox');
        grid.appendChild(box);
    }
    boxes = document.querySelectorAll('.gridBox');
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.style.background = drawColor;
        })
    });
};

redBtn.addEventListener('click', () => {
    drawColor = "red";
})

blackBtn.addEventListener('click', () => {
    drawColor = "black";
})

function styleGrid() {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

// Clears away drawings
clearBtn.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.style.background = 'white';
    });
});

// Asks user for desired dimension of grid
newGridBtn.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.remove();
    });
    size = prompt('What dimensions would you like your Etch-A-Sketch to be? 1-100');
    while(size > 100) {
        size = prompt('Please enter a number between 1-100.');
    }
    createGrid();
    styleGrid();
});

createGrid();
styleGrid();