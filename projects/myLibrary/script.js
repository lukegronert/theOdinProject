let myLibrary = [];

function Book (title, author, pages, haveRead) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.haveRead = haveRead,
    this.info = function() {
        return `${title} by ${author} is ${pages} pages long. You ${haveRead} it.`;
    }
}

const NotW = new Book("Name of the Wind", "Patrick Rothfuss", 500, "have read");
const BookA = new Book("Book A", "Author A", 200, "have not read");
const BookB = new Book("Book B", "Author B", 200, "have read");


function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBookToLibrary(NotW);
addBookToLibrary(BookA);
addBookToLibrary(BookB);

const container = document.querySelector('#grid-container');

myLibrary.forEach((book) => {
    const newDiv = document.createElement('div');
    const titleP = document.createElement('p');
    const authorP = document.createElement('p');
    const pagesP = document.createElement('p');
    const haveReadP = document.createElement('p');
    const details = document.createTextNode(book.info());
    const title = document.createTextNode(book.title);
    const author = document.createTextNode(book.author);
    const pages = document.createTextNode(book.pages);
    const haveRead = document.createTextNode("You " +book.haveRead+ " it.");
    titleP.appendChild(title);
    authorP.appendChild(author);
    pagesP.appendChild(pages);
    haveReadP.appendChild(haveRead);
    newDiv.classList.add('card');
    newDiv.appendChild(titleP);
    newDiv.appendChild(authorP);
    newDiv.appendChild(pagesP);
    newDiv.appendChild(haveReadP);
    container.appendChild(newDiv);
});