console.log("CONNECTED");

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear');
const equalBtn = document.querySelector('.equal');
const display = document.querySelector('#display');
const calculation = document.querySelector('#calculation-display')

let value1 = '';
let value2 = '';
let answer = 'n';
let operator = '';

clearBtn.addEventListener('click', () => clear());

// numberButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//             display.textContent += button.textContent;
//     })
// })

//when user presses an operator
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // When user uses operator to find answer and perform another operation on the answer
        if(operator == '=') {
            display.textContent = '';
            operator = button.textContent;
            answer = '';
            updateCalculation();
        } else if (value1 != '') {
            value2 = display.textContent;
            answer = operate(Number(value1), operator, Number(value2));
            display.textContent = answer;
            updateCalculation();
            operator = button.textContent;
            value1=answer;
            value2 = '';
        //When user performs operation on first number
        } else {
            value1 = display.textContent;
            operator = button.textContent;
            display.textContent = '';
            updateCalculation();
        }
    })
});

// when user presses a number
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // if an operator button was used to get answer, this will clear the display, while keeping the answer as first value of next operation
        if (operator == '=' && display.textContent != '') {
            display.textContent = '';
            value1 = '';
            operator = '';
            display.textContent = button.textContent;
        } else if (display.textContent == '') {
            display.textContent += button.textContent
        } else if (value1 == answer) {
            display.textContent = '';
            display.textContent += button.textContent;
            updateCalculation();
            value2 = '';
            answer = '';
        } else {
        // when user starts a new operation
            display.textContent += button.textContent;
        }
    })
})

equalBtn.addEventListener('click', () => {
    value2 = display.textContent;
    answer = operate(Number(value1), operator, Number(value2));
    display.textContent = answer;
    updateCalculation();
    value1=answer;
    //allows operatorButton eventListener to differentiate between when an operation was executed through pressing '=' or an operator button
    operator = equalBtn.textContent;
    value2 = '';
    console.log(value1);
});

const clear = () => {
    display.textContent = '';
    value1 = '';
    value2 = '';
    operator = '';
    updateCalculation();
}

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function operate(a, operator, b) {
    if(operator === '+') {
        return add(a,b)
    } else if (operator === '-') {
        return subtract(a,b)
    } else if (operator === '*') {
        return multiply(a,b)
    } else if (operator === '/') {
        return divide(a,b)
    } else {
        console.log('No operator!!!!')
    }
}

const updateCalculation = function() {
    calculation.textContent = `${value1} ${operator} ${value2}`;
}

