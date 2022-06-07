const Joi = require("joi");

const addBook = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
});

module.exports = {
    addBook
}