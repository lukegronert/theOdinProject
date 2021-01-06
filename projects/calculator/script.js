console.log("CONNECTED");

// const zero = document.querySelector("#0");
// const one = document.querySelector("#1");
// const two = document.querySelector("#2");
// const three = document.querySelector("#3");
// const four = document.querySelector("#4");
// const five = document.querySelector("#5");
// const six = document.querySelector("#6");
// const seven = document.querySelector("#7");
// const eight = document.querySelector("#8");
// const nine = document.querySelector("#9");
// const plus = document.querySelector("#plus");
// const minus = document.querySelector("#minus");
// const times = document.querySelector("#multiply");
// const dividedBy = document.querySelector("#divide");
// const equal = document.querySelector("#equal");
// const decimal = document.querySelector("#decimal");
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear');
const equalBtn = document.querySelector('.equal');
const display = document.querySelector('#display');

let value1 = '';
let value2 = '';
let operator = '';

clearBtn.addEventListener('click', () => clear());

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
            display.textContent += button.textContent;
    })
})

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        value1 = display.textContent;
        operator = button.textContent;
        display.textContent = '';
    })
});

equalBtn.addEventListener('click', () => {
    value2 = display.textContent;
    let answer = operate(Number(value1), operator, Number(value2));
    display.textContent = answer;
    value1 = answer;
    operator = '';
});

const clear = () => {
    display.textContent = '';
    value1 = '';
    value2 = '';
    operator = '';
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
    } else {
        return divide(a,b)
    }
}
