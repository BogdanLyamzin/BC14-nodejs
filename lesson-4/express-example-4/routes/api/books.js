const express = require("express");
const {nanoid} = require("nanoid");

const books = require("../../data/books");

const router = express.Router();

router.get("/", (req, res)=> {
    res.json(books);
});

router.get("/:id", (req, res)=> {
    const {id} = req.params;
    const book = books.find(item => item.id === id);
    if(!book){
        res.status(404).json({
            message: "Not found"
        });
        return;
    }
    res.json(book);
})

router.post("/", (req, res)=> {
    const newBook = {...req.body, id: nanoid()};
    books.push(newBook);
    res.status(201).json(newBook);
});

module.exports = router;