const express = require("express");

const {books: ctrl} = require("../../controllers");

const {ctrlWrapper} = require("../../helpers");

const {validation, isValidId} = require("../../middlewares");

const {schemas} = require("../../models/book");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", isValidId, ctrlWrapper(ctrl.getById));

router.post("/", validation(schemas.addBook), ctrlWrapper(ctrl.add));

router.put("/:id", isValidId, validation(schemas.addBook), ctrlWrapper(ctrl.updateById));

router.patch("/:id/favorite", isValidId, validation(schemas.updateFavorite), ctrlWrapper(ctrl.updateFavorite));

router.delete("/:id", isValidId, ctrlWrapper(ctrl.removeById));

module.exports = router;