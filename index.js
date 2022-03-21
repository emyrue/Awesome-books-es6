import {Book} from './modules/book.js';
import Books from './modules/books.js';

const booksSection = document.querySelector('.books');
const newTitle = document.getElementById('new-title');
const newAuthor = document.getElementById('new-author');
const add = document.getElementById('add');
const book1 = new Book('First Book', 'First Author');
const book2 = new Book('Second Book', 'Second Author');
const book3 = new Book('Third Book', 'Third Author');
const bookList = new Books();
bookList.add(book1);
bookList.add(book2);
bookList.add(book3);
bookList.checkStorage();

for (let k = 0; k < bookList.books.length; k += 1) {
  const newElement = document.createElement('div');
  newElement.className = 'new-book';
  newElement.innerHTML = bookList.display(k);
  booksSection.appendChild(newElement);
}

for (let i = 0; i < bookList.books.length; i += 1) {
  const removeButton = document.querySelectorAll('.remove');
  removeButton[i].addEventListener('click', () => {
    bookList.delete(i);
  });
}

add.addEventListener('click', () => {
  bookList.add(new Book(newTitle.value, newAuthor.value));
  bookList.store();
});