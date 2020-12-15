const newBtn = document.querySelector('#btn-new');
const popupForm = document.querySelector('#popup-form');
const closeForm = document.querySelector('#btn-exit');
const addBookBtn = document.querySelector('#btn-add');
const display = document.querySelector('#display');

let myLibrary = [];

function Book(title, author, length) {
    this.title = title;
    this.author = author;
    this.length = length;
    this.info = function() {
        console.log(this.title + ' by ' + this.author + ' is ' + this.length + ' pages long.')
    }
}

const nameOfTheWind = new Book('Name of the Wind', 'Patrick Rothfuss', 800)
const theWayOfKings = new Book('The Way of Kings', 'Brandon Sanderson', 1100)
const wordsOfRadiance = new Book('Words of Radiance', 'Brandon Sanderson', 1200)

function addBookToLibrary(title, author, length) {
    const mybook = new Book(title, author, length);
    myLibrary.push(mybook);
}

addBookToLibrary(nameOfTheWind);
addBookToLibrary(theWayOfKings);
addBookToLibrary(wordsOfRadiance);

function viewLibrary() {
    console.log(myLibrary)
}