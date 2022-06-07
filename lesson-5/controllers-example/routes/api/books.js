const express = require("express");

const {books: ctrl} = require("../../controllers");

const {ctrlWrapper} = require("../../helpers");

const {validation} = require("../../middlewares");

const {addBook} = require("../../schemas/books");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", validation(addBook), ctrlWrapper(ctrl.add));

router.put("/:id", validation(addBook), ctrlWrapper(ctrl.updateById));

router.delete("/:id", ctrlWrapper(ctrl.removeById));

module.exports = router;