const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
    const newBook = new Book(title, author, pages);
    updateTheLibraryContainer(newBook);
}

function updateTheLibraryContainer(newBook) {
    //create a new card
    const newDiv = document.createElement("div");
    newDiv.className = "card";
    // title transfer to the card
    let text = document.createElement("p");
    text.innerHTML = "<span style='font-weight: bold;'>Title</span><br>" + newBook.title;
    newDiv.appendChild(text);
    // author transfer to the card
    text = document.createElement("p");
    text.innerHTML = "<span style='font-weight: bold;'>Author</span><br>" + newBook.author;
    newDiv.appendChild(text);
    // pages transfer to the card
    text = document.createElement("p");
    text.innerHTML = "<span style='font-weight: bold;'>Pages</span><br>" + newBook.pages;
    newDiv.appendChild(text);
    // transfer the cards inside the library (page)
    const library = document.querySelector(".library");
    library.appendChild(newDiv);
}


const form = document.getElementById("addBookForm");
form.addEventListener("submit", function () {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;

    addBookToLibrary(title, author, pages);
})









// OPEN AND CLOSE DIALOG BUTTONS (+ / X)
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

