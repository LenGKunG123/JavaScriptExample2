class BookStore {
    constructor() {
        this.stores = [];
    }
    findBookIndex(isbn) {
        return this.stores.findIndex((book) => book.isbn === isbn)
    }
    addNewBook(isbn, stocks) {
        const existingIndex = this.findBookIndex(isbn)
            if(existingIndex !== -1){
                return -1
            }
            const newBook = {isbn: isbn ,stocks: stocks}
            this.stores.push(newBook)
            return stocks
        }
    
    sellBook(isbn, quantity) {
        const index = this.findBookIndex(isbn)
        if(index === -1){
            return -1
        }
        const book = this.stores[index]
        if(book.stocks < quantity){
            return 0
        }
        book.stocks -= quantity
        return quantity
    }

}
module.exports = BookStore;
