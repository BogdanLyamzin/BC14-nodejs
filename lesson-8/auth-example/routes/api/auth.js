const express = require("express");

const router = express.Router();

const {auth: ctrl} = require("../../controllers");

const {ctrlWrapper} = require("../../helpers");

const {auth, validation} = require("../../middlewares");

const {schemas} = require("../../models/user");

/*
1. Регистрация.
2. Аутентификация (логин).
3. Получение текущего пользователя (current).
4. Выход (logout).
*/

// signup
router.post("/register", validation(schemas.registerUser), ctrlWrapper(ctrl.register))

// signin
router.post("/login", validation(schemas.loginUser), ctrlWrapper(ctrl.login));

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

// signout
router.get("/logout", auth, ctrlWrapper(ctrl.logout));

module.exports = router;