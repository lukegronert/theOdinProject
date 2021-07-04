function capitalize(str) {
    const firstLetter = str.slice(0,1);
    const restOfString = str.slice(1);
    const capitalFirstLetter = firstLetter.toUpperCase();
    return capitalFirstLetter + restOfString;
}

function reverseString(str) {
    const arr = str.split('');
    const reverseArr = [];
    for(i = arr.length-1; i>=0; i--) {
        let newLetter = arr.pop();
        reverseArr.push(newLetter);
    }
    return reverseArr.join('');
}

const calculator = {
    add: (...args) => {
        return args.reduce((acc, curr) => {
            return acc + curr;
        })
    },
    subtract: (...args) => {
        return args.reduce((acc, curr) => {
            return acc - curr;
        })
    },
    multiply: () => {

    },
    divide: () => {

    }
}

exports.capitalize = capitalize;
exports.reverseString = reverseString;
exports.calculator = calculator;