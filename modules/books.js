export default class Books {
  constructor() {
    this.books = [];
  }

  add = (book) => {
    this.books.push(book);
  }

  delete = (index) => {
    this.books.splice(index, 1);
    window.localStorage.setItem('bookArray', JSON.stringify(this.books));
    for (let i = 0; i < this.books.length; i += 1) {
      window.localStorage.setItem(i.toString(), JSON.stringify(this.books[i]));
    }
    window.location.reload();
  }

  checkStorage = () => {
    if (window.localStorage.getItem('bookArray') !== null) {
      const newBooks = [];
      const array = JSON.parse(window.localStorage.getItem('bookArray'));
      for (let j = 0; j < array.length; j += 1) {
        newBooks[j] = JSON.parse(window.localStorage.getItem(j.toString()));
      }
      this.books = newBooks;
    }
  }

  store = () => {
    window.localStorage.setItem('bookArray', JSON.stringify(this.books));
    for (let i = 0; i < this.books.length; i += 1) {
      window.localStorage.setItem(i.toString(), JSON.stringify(this.books[i]));
    }
  }

  display(index) {
    return `  
      <div class="title">${this.books[index].title} by ${this.books[index].author}</div>
      <button type="button" class="remove">Remove</button>
    `;
  }
}