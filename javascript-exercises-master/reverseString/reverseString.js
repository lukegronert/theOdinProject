const reverseString = function(str) {
    let answer = '';
    for(let i = (str.length-1); i >=0; i--) {
        answer += str.slice(i, i+1)
    }
    return answer;
}

module.exports = reverseString
