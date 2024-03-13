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

function displayLibrary() {
    myLibrary.forEach(function (book) {
        console.table(book);
    })
}

const addBookButton = document.querySelector(".addBookButton");
addBookButton.addEventListener("click", function () {
    // Create the form element
    const form = document.createElement("form");

    // Create and append the label and input elements for the title, author, pages, and read status
    const inputs = [
        { label: "Title:", name: "title", type: "text" },
        { label: "Author:", name: "author", type: "text" },
        { label: "Pages:", name: "pages", type: "number" },
        { label: "Read:", name: "read", type: "checkbox" }
    ];

    inputs.forEach(input => {
        const label = document.createElement("label");
        label.textContent = input.label;
        form.appendChild(label);

        const inputElement = document.createElement("input");
        inputElement.type = input.type;
        inputElement.name = input.name;
        form.appendChild(inputElement);
    });

    // Create and append the submit button 
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);

    // Append the form to the body
    document.body.appendChild(form);

    // Add form submission event listener
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        // Retrieve form data
        const formData = new FormData(form);
        const title = formData.get("title");
        const author = formData.get("author");
        const pages = formData.get("pages");
        const read = formData.get("read") === "on"; // Convert "on" to true, false otherwise

        // Create a new Book object and add it to the library
        const newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook);

        // Remove the form
        form.remove();
    });
});

function displayLibrary() {
    myLibrary.forEach(function (book) {
        console.table(book);
    });
}

