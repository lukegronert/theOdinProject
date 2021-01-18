function Book(title, author, pages, haveRead) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.haveRead = haveRead,
    this.info = function() {
        console.log(`${title} by ${author} is ${pages} long. You ${haveRead} it.`);
    };
}

const NotW = new Book("Name of the Wind", "Patrick Rothfuss", 500, "have read");