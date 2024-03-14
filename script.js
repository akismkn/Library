const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const dialog = document.querySelector("dialog");

const showButton = document.querySelector(".addBookButton");
// "+" button opens the dialog modally
showButton.addEventListener("click", () => {
    dialog.showModal();
});

const closeButton = document.querySelector(".close");
// "x" button closes the dialog without adding a new book
closeButton.addEventListener("click", () => {
    dialog.close();
})