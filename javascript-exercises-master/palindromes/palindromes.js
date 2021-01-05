const palindromes = function(word) {
    let newWord = word.toLowerCase().replace(/[^A-Za-z]/g, "");
    let wordArr = newWord.split('');
    wordArr.reverse();
    let reversedWord = wordArr.join("");
    return reversedWord == newWord;
}

module.exports = palindromes
