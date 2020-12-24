const repeatString = function(str, num) {
    let answer = '';
    if (num<0) {
        answer = 'ERROR';
    } else {
        while(num > 0) {
            answer+=str;
            num--;
        }
    }
    return answer;
}

module.exports = repeatString
