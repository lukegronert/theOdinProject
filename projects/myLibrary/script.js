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


function addBookToLibrary(book) {
    myLibrary.push(book);
}

const container = document.querySelector('#grid-container');
const newBookBtn = document.querySelector('#newBookBtn');
const form = document.querySelector('form');

newBookBtn.addEventListener('click', () => {
    form.classList.toggle("noDisplay");
})

let bookNum = 0;
function displayNewBook(book) {
    book.idNum = bookNum;
    //Create elements for the card
    const newDiv = document.createElement('div');
    const titleP = document.createElement('p');
    const authorP = document.createElement('p');
    const pagesP = document.createElement('p');
    const haveReadP = document.createElement('p');
    //Create text nodes with book info
    const title = document.createTextNode(book.title);
    const author = document.createTextNode("By: " +book.author);
    const pages = document.createTextNode("Length: " +book.pages);
    const haveRead = document.createTextNode("You " +book.haveRead+ " it.");
    //Put text nodes in <p> elements
    titleP.appendChild(title);
    authorP.appendChild(author);
    pagesP.appendChild(pages);
    haveReadP.appendChild(haveRead);
    //give the card .card styles
    newDiv.classList.add('card');
    titleP.classList.add('cardTitle');
    authorP.classList.add('cardAuthor');
    pagesP.classList.add('cardPages');
    haveReadP.classList.add('cardHaveRead');
    //Add all <p> elements to card
    newDiv.appendChild(titleP);
    newDiv.appendChild(authorP);
    newDiv.appendChild(pagesP);
    newDiv.appendChild(haveReadP);
    //Add card to main container
    container.appendChild(newDiv);
    //Create buttons for card
    const readButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    readButton.classList.add('readBtn');
    deleteButton.classList.add('deleteBtn');
    const readButtonText = document.createTextNode(`Read`);
    const deleteButtonText = document.createTextNode('Delete');
    readButton.appendChild(readButtonText);
    deleteButton.appendChild(deleteButtonText);
    //Add eventListeners
    readButton.addEventListener('click', () => {
        if(haveReadP.textContent == "You have read it.") {
            haveReadP.textContent = "You have not read it.";
            book.haveRead = "have not read";
        } else {
            haveReadP.textContent = "You have read it.";
            book.haveRead = "have read";
        }
    })
    deleteButton.addEventListener('click', function() {
        //Deletes the parent node of the clicked deleteButton
        deleteButton.parentNode.parentNode.removeChild(deleteButton.parentNode);
        //Removes book from myLibrary that has same title as the newDiv titleP
        myLibrary = myLibrary.filter((book) => book.title != titleP.textContent);
    })
    newDiv.appendChild(readButton);
    newDiv.appendChild(deleteButton);
    bookNum++;
}

function submitForm() {
    let title = form.title.value;
    let author = form.author.value;
    let pages = form.pages.value;
    let haveRead = '';
    if(form.haveRead == "yes") {
        haveRead = "have read"
    } else {
        haveRead = "have not read"
    }
    const book = new Book(title, author, pages, haveRead);
    addBookToLibrary(book);
    displayNewBook(book);
    resetForm();
}

function resetForm() {
    form.reset();
    form.classList.toggle("noDisplay");
}

addBookToLibrary(NotW);
displayNewBook(NotW);

// Form validation
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');

const titleError = document.querySelector('#titleError');
const authorError = document.querySelector('#authorError');
const pagesError = document.querySelector('#pagesError');

form.addEventListener('submit', (event) => {
    if (!title.validity.valid || !author.validity.valid || !pages.validity.valid) {
        showError();
        event.preventDefault();
    } else {
        submitForm();
        event.preventDefault();
    }
})

title.addEventListener('input', () => {
    if(title.validity.valid) {
        titleError.textContent = '';
        titleError.className = '';
    } else {
        showError()
    }
})

author.addEventListener('input', () => {
    if(author.validity.valid) {
        authorError.textContent = '';
        authorError.className = '';
    } else {
        showError()
    }
})

pages.addEventListener('input', () => {
    if(pages.validity.valid) {
        pagesError.textContent = '';
        pagesError.className = '';
    } else {
        showError()
    }
})

function showError() {
    if (title.validity.valueMissing) {
        titleError.textContent = 'Please enter a title.';
        titleError.className = 'activeError';
    } else if (title.validity.tooLong) {
        titleError.textContent = 'Title must be under 20 characters.';
        titleError.className = 'activeError';
    } else if (author.validity.valueMissing) {
        authorError.textContent = 'Please enter a name for the author.';
        authorError.className = 'activeError';
    } else if (author.validity.patternMismatch) {
        authorError.textContent = 'Please only use letter for the author name.';
        authorError.className = 'activeError';
    } else if (author.validity.tooLong) {
        authorError.textContent = 'Author name must be under 20 characters.';
        authorError.className = 'activeError';
    } else if (pages.validity.valueMissing) {
        pagesError.textContent = 'Please enter the amount of pages.';
        pagesError.className = 'activeError';
    } else if (pages.validity.patternMismatch) {
        pagesError.textContent = 'Please enter only numbers under 99999.';
        pagesError.className = 'activeError';
    } 
}
