const Book = require("../models/Books");

const saveBook = async (books) => {
    try{
        const book = new Book({
            title: books.title,
            author: books.author,
            body: books.body
        });

        const saveNewBook = await book.save();
        return saveNewBook;
    } catch (error) {
        throw new Error(error);
    }
}

const getBooks = async () => {
    try {
        const books = await Book.find();
        return books;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    saveBook,
    getBooks
}