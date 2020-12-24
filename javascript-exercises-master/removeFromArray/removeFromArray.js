const removeFromArray = function(...args) {
    let arr = args[0];
    let answer = [];
    arr.forEach((item) => {
        if(!args.includes(item)) {
            answer.push(item);
        }
    })
    return answer;
}

module.exports = removeFromArray
