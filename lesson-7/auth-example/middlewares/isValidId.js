const {isValidObjectId} = require("mongoose");

const { createError } = require("../helpers");

const isValidId = (req, res, next) => {
    const { id } = req.params;
    if(!isValidObjectId(id)) {
        const error = createError(400, "Not id");
        next(error);
        return;
    }
    next();
}

module.exports = isValidId;