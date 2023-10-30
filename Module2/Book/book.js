// const { template } = require('@babel/core')
// const {re} = require("@babel/core/lib/vendor/import-meta-resolve");
class Book {
  constructor(isbn, title = "untitled", ebook = false) {
    this.title = title;
    this.isbn = isbn;
    this.ebook = ebook;
    this.authors = [];
  }
  addAuthor(fn, ln) {
    const newAuthor = { firstname: fn, lastname: ln };
    this.authors.push(newAuthor);
    return this.authors.length;
  }
  getFirstAuthor() {
    return this.authors.find((author) => author === this.authors[0]);
  }
  getCoAuthors() {
    return this.authors.filter((author) => author !== this.authors[0]);
  }
  findAuthor(firstname, lastname) {
    return this.authors.find(
      (author) =>
        author.firstname.toLowerCase() === firstname.toLowerCase() &&
        author.lastname.toLowerCase() === lastname.toLowerCase()
    );
  }
  hasEbook() {
    return this.ebook;
  }
}
module.exports = Book;
