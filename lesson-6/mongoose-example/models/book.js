const {Schema, model} = require("mongoose");
const Joi = require("joi");

const genres = ["love", "fantastic"];
const isbnRegexp = /[0-9]{3}-[0-9]{1}-[0-9]{3}-[0-9]{5}-[0-9]{1}/;

const bookSchema = Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    favorite: {
        type: Boolean,
        default: false
    },
    genre: {
        type: String,
        enum: genres,
        required: true
    },
    isbn: {
        type: String,
        match: isbnRegexp,
        required: true,
        unique: true
    }
}, {versionKey: false, timestamps: true});

const addBook = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    favorite: Joi.boolean(),
    genre: Joi.string().valid(...genres).required(),
    isbn: Joi.string().pattern(isbnRegexp).required()
});

const updateFavorite = Joi.object({
    favorite: Joi.boolean().required()
})

const schemas = {
    addBook,
    updateFavorite
}

const Book = model("book", bookSchema);
// categories => category
// mice => mouse

module.exports = {
    Book, 
    schemas
};