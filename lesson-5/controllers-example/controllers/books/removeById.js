const books = require("../../models/books");

const { createError } = require("../../helpers");

const removeById = async (req, res) => {
    const { id } = req.params;
    const result = await books.removeById(id);
    if (!result) {
        throw createError(404);
    }
    res.json({
        "message": "book deleted"
    });
}

module.exports = removeById;