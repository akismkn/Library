const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const title = prompt("Enter the title of the book:");
    const author = prompt("Enter the author of the book:");
    const pages = prompt("Enter the number of pages:");
    const read = confirm("Have you read this book?");

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}


const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".addBookButton");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
    dialog.showModal();
  });
  
  // "Close" button closes the dialog
  closeButton.addEventListener("click", () => {
    dialog.close();
  });