
let books = [
  { id: 1, title: "Book One", author: "Author A" },
  { id: 2, title: "Book Two", author: "Author B" }
];

const bookList = document.getElementById('bookList');
const bookForm = document.getElementById('bookForm');
const titleInput = document.getElementById('title');

function renderBooks() {
  bookList.innerHTML = '';
  books.forEach(book => {
    const li = document.createElement('li');
    li.innerHTML = `${book.title} by ${book.author} <button onclick="deleteBook(${book.id})">Delete</button>`;
    bookList.appendChild(li);
  });
}

bookForm.addEventListener('submit', e => {
  e.preventDefault();
  const newBook = {
    id: books.length ? books[books.length-1].id + 1 : 1,
    title: titleInput.value,
    author: authorInput.value
  };
  books.push(newBook);
  renderBooks();
  bookForm.reset();
});

function deleteBook(id) {
  books = books.filter(book => book.id !== id);
  renderBooks();
}

renderBooks();
