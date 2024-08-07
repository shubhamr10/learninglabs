const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author :{
        type: String,
        required: true
    },
    body: String,
    date: {
        type: Date,
        default: Date.now
    }
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;