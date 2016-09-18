angular.module("myApp")
  .service("BookService", BookService);

function BookService () {
  this.value = "I am a book service!";
  this.books = [
    {
      id: 1,
      title: "Harry Potter 1",
      author: "J.K Rowling"
    },
    {
      id: 2,
      title: "Harry Potter 2",
      author: "J.K Rowling"
    },
    {
      id: 3,
      title: "Harry Potter 3",
      author: "J.K Rowling"
    }
  ]
}

BookService.prototype.getBooks = function () {
  return this.books;
}

BookService.prototype.getBook = function (id) {
  return this.books.find((book) => book.id === id);
}