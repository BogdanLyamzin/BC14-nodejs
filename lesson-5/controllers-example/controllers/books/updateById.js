const books = require("../../models/books");

const { createError } = require("../../helpers");

const updateById = async (req, res) => {
    const { id } = req.params;
    const result = await books.updateById(id, req.body);
    if (!result) {
        throw createError(404);
    }
    res.json(result);
}

module.exports = updateById;