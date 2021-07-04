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
    multiply: (...args) => {
        return args.reduce((acc, curr) => {
            return acc * curr;
        })
    },
    divide: (...args) => {
        return args.reduce((acc, curr) => {
            return acc / curr;
        })
    }
}

function caesarCypher(str, key) {
    const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const ABC = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const strArr = str.split('');
    const cypherArr = [];
    for(let i=0; i<strArr.length; i++) {
        if(abc.includes(strArr[i])) {
            if(abc.indexOf(strArr[i]) + key > 25) {
                cypherArr.push(abc[abc.indexOf(strArr[i])+key-25])
            } else {
                cypherArr.push(abc[abc.indexOf(strArr[i])+key])
            }
        } else if(ABC.includes(strArr[i])) {
            if(ABC.indexOf(strArr[i]) + key > 25) {
                cypherArr.push(ABC[ABC.indexOf(strArr[i])+key-25])
            } else {
                cypherArr.push(ABC[ABC.indexOf(strArr[i])+key])
            }
        } else {
            cypherArr.push(strArr[i]);
        }
    }
    return cypherArr.join('');
}

function analyze(...args) {
    let object = {};
    object.average = (args.reduce((acc, curr) => {
        return acc + curr
    }))/args.length;

    object.minimum = (args.reduce((acc,curr) => {
        return Math.min(acc,curr);
    }))

    object.maximum = (args.reduce((acc,curr) => {
        return Math.max(acc,curr);
    }))

    object.length = args.length;
    
    return object;
}

exports.capitalize = capitalize;
exports.reverseString = reverseString;
exports.calculator = calculator;
exports.caesarCypher = caesarCypher;
exports.analyze = analyze;