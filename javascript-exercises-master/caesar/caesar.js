const caesar = function(str, n) {
    const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const ABC = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let strArr = str.split('');
    let cipher = '';
    for(let i=0;i<strArr.length;i++) {
        if(abc.includes(strArr[i])) {
            let cipherIndex = (abc.indexOf(strArr[i]))+n;
            if(cipherIndex > 25) {
                while(cipherIndex > 25) {
                    cipherIndex -= 26;
                }
                cipher+= abc[cipherIndex];
            } else if(cipherIndex < 0) {
                while(cipherIndex < 0) {
                    cipherIndex+=26;
                }
                cipher+= abc[cipherIndex];
            } else {
                cipher+= abc[cipherIndex];
            }
        } else if (ABC.includes(strArr[i])) {
            let cipherIndex = (ABC.indexOf(strArr[i]))+n;
            if(cipherIndex > 25) {
                while(cipherIndex > 25) {
                    cipherIndex -= 26;
                }
                cipher+= ABC[cipherIndex]
            } else if(cipherIndex < 0) {
                while(cipherIndex < 0) {
                    cipherIndex+=26;
                }
                cipher+= ABC[cipherIndex];
            } else {
                cipher+= ABC[cipherIndex];
            }
        } else {
            cipher += strArr[i];
        }
    }
    return cipher;
}

module.exports = caesar
