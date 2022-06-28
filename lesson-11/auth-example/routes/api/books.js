const express = require("express");

const {books: ctrl} = require("../../controllers");

const {ctrlWrapper} = require("../../helpers");

const {auth, validation, isValidId} = require("../../middlewares");

const {schemas} = require("../../models/book");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getAll));

router.get("/:id", auth, isValidId, ctrlWrapper(ctrl.getById));

router.post("/", auth, validation(schemas.addBook), ctrlWrapper(ctrl.add));

router.put("/:id", auth, isValidId, validation(schemas.addBook), ctrlWrapper(ctrl.updateById));

router.patch("/:id/favorite", auth, isValidId, validation(schemas.updateFavorite), ctrlWrapper(ctrl.updateFavorite));

router.delete("/:id", auth, isValidId, ctrlWrapper(ctrl.removeById));

module.exports = router;