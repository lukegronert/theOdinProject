const sumAll = function(x,y) {
    if(typeof(x) === "number" && typeof(y) === "number" && x>0 && y> 0) {
        answer = 0;
        if(x < y) {
            for (let i = x; i<=y; i++) {
                answer += i;
            }
        } else {
            for (let j = y; j<=x; j++) {
                answer += j;
            }
        }
        return answer;
    } else {
        return "ERROR";
    }
}

module.exports = sumAll
