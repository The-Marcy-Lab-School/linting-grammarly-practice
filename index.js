class Book  {
 constructor(title,  author, genre) {
    this.title = title;
    this.author = author
    this.genre = genre;
    }
} 

class Library {
  #books = [];
  constructor(name) {
    this.name = name;
  }
  addBook( book) {
      if ( !(book instanceof Book)){
      console.log ("book must be a valid Book instance")
      return;
    }
  this.#books.push(book);
  }
  getBooks() {
    return [...this.#books]
  }
  }