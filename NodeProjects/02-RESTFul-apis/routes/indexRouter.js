const express = require("express");
const router = express.Router();
const booksController = require("../controllers/Book.controller");

router.get("/products", (_, res) => {
    try{
        const products = booksController.getBooks();
        res.status(200).json({
            message: "Handling GET requests to /products",
            products
        });
    } catch (err){
        res.status(500).json({
            message: err.message
        });
    }
})

router.post("/product", (req, res) => {
    
    try{
        const book = req.body;
        const newBook = booksController.saveBook(book);
        res.status(201).json({
            message: "Handling POST requests to /product",
            newBook
        });
    } catch (err){
        res.status(500).json({
            message: err.message
        });
    }
});

router.get("/product/:productId", (req, res) => {

});

router.patch("/product/:productId", (req, res) => {

});

router.delete("/product/:productId", (req, res) => {});

module.exports = router;