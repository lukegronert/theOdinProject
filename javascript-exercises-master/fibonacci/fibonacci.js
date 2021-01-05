const fibonacci = function(n) {
    let arr = [1];
    if(n < 1) {
        return "OOPS";
    } else {
        for(let i=0; i<n;i++) {
            if(arr.length === 1) {
                arr.push(1);
            } else {
                arr.push(arr[i]+arr[i-1])
            }
        }
        return arr[n-1];
    }
}

module.exports = fibonacci
