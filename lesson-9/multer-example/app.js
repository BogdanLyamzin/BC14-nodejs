const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs/promises");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const tempDir = path.join(__dirname, "temp");

const multerConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, tempDir);
    },
    filename: (req, file, cb)=> {
        cb(null, file.originalname);
    },
    limits: {

    }
});

const upload = multer({
    storage: multerConfig
})

const books = [];

// upload.fields([{name: "image", maxCount: 1}])
// upload.array("image", 12);
app.get("/api/books", async(req, res)=> {
    res.json(books);
});

const booksDir = path.join(__dirname, "public", "books");
app.post("/api/books", upload.single("image"), async (req, res)=> {
    try {
        const {filename} = req.file;
        const newDir = path.join(booksDir, filename);
        await fs.rename(req.file.path, newDir);
        const image = path.join("books", filename);
        const newBook = {
            ...req.body,
            image
        };
        books.push(newBook);
        res.status(201).json(newBook);
    } catch (error) {
        if(error.message.includes("no such file or directory")) {
            await fs.unlink(req.file.path);
        }
    }

});

app.listen(3000);