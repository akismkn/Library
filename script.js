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
    const library = document.querySelector(".library");
    //create a new card
    const newDiv = document.createElement("div");
    newDiv.className = "card";
    // title transfer to the card
    let text = document.createElement("p");
    text.innerHTML = "<span style='font-weight: bold;'>Title:</span><br>" + newBook.title;
    newDiv.appendChild(text);
    // author transfer to the card
    text = document.createElement("p");
    text.innerHTML = "<span style='font-weight: bold;'>Author:</span><br>" + newBook.author;
    newDiv.appendChild(text);
    // number of pages transfer to the card
    text = document.createElement("p");
    text.innerHTML = "<span style='font-weight: bold;'>Pages:</span><br>" + newBook.pages;
    newDiv.appendChild(text);
    // read or not read button transfer to the card
    const readButton = document.createElement("button");
    readButton.innerText = "READ";
    readButton.className = "readButton";
    newDiv.appendChild(readButton);
    // READ/NOT-READ BUTTON UPDATE WITH CLICK
    readButton.addEventListener("click", () => {
        if (readButton.innerText === "READ") {
            readButton.innerText = "NOT READ";
            readButton.classList.add("redColor");
        } else {
            readButton.innerText = "READ";
            readButton.classList.remove("redColor");
        }
    });
    // delete button transfer to the card
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "DELETE"
    deleteButton.className = "deleteButton";
    newDiv.appendChild(deleteButton);
    // DELETE BUTTON REMOVES CARD FROM THE PAGE
    deleteButton.addEventListener("click", () => {
        library.removeChild(newDiv)
    })
    // transfer the cards inside the library (page)
    library.appendChild(newDiv);
}

// adds the inputs into a new book
const form = document.getElementById("addBookForm");
form.addEventListener("submit", function () {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;

    addBookToLibrary(title, author, pages);
})

// OPEN AND CLOSE DIALOG - BUTTONS(+ / X)
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