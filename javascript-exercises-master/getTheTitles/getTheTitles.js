const getTheTitles = function(arr) {
    let titles = [];
    arr.map((book) => titles.push(book.title))
    return titles;
}

module.exports = getTheTitles;
