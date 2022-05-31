const express = require("express");

const books = require("./books")

const app = express();

app.set("json spaces", 8);

app.get("/", (req, res)=> {
    res.send("<h2>Главная страница</h2>")
});

app.get("/books", (req, res) =>{
    // res.json(null);
    // res.send(null);
    res.json(books);
    // res.send(books);
})

app.listen(3000);