const BookService = require("../services/Book");

const saveBook = (book) => {
    try{
        // perform validation here
        return BookService.saveBook(book);
    } catch (err){
        throw new Error(err);
    }
}

const getBooks = (page = 1, limit = 10) => {
    try{
        // perform pagination validation here
        return BookService.getBooks();
    } catch (err){
        throw new Error(err);
    }
}

module.exports = {
    saveBook,
    getBooks
}