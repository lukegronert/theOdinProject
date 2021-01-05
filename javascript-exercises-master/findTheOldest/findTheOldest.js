let findTheOldest = function(arr) {
    let answer = arr.sort((a,b) => {
        if(!a.hasOwnProperty('yearOfDeath')) {
            let aAge = (new Date()).getFullYear() - a.yearOfBirth;
            let bAge = b.yearOfDeath - b.yearOfBirth;
            if(aAge > bAge) {
                return -1
            } else {
                return 1
            }
        } else if (!b.hasOwnProperty('yearOfDeath')) {
            let aAge = a.yearOfDeath - a.yearOfBirth;
            let bAge = (new Date()).getFullYear() - b.yearOfBirth;
            if(aAge > bAge) {
                return -1
            } else {
                return 1
            }
        } else {
            let aAge = a.yearOfDeath - a.yearOfBirth;
            let bAge = b.yearOfDeath - b.yearOfBirth;
            if(aAge > bAge) {
                return -1
            } else {
                return 1
            }
        }
    });
    return answer[0]
}

module.exports = findTheOldest
