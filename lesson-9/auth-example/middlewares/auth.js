const jwt = require("jsonwebtoken");

const {User} = require("../models/user");

const {createError} = require("../helpers");

/*
1. Извлечь из заголовков запроса заголовок Authorization.
2. Разделить заголовок на 2 слова - в первом должно быть "Bearer", а 
во втором - токен.
3. Проверить, равно ли первое словое "Bearer". 
    - если да - переходим к пункту 4;
    - если нет - возвращаем ответ с кодом 401 - Unauthorized;
4. Проверяем, мы ли выдавали токен (проверяем, что он был зашифрован с помощью
    нашего секретного ключа):
    - если да - извлекаем из ответа id пользователя и переходим к пункту 5;
    - если нет - возвращаем ответ с кодом 401 - Unauthorized;
5. Находим в базе данных пользователя с таким id:
    - если он есть - прикрепляем к объекту Request эти данные и передаем обработку дальше:
        req.user = user;
        next();
    - если нет - возвращаем ответ с кодом 401 - Unauthorized;
*/

const {SECRET_KEY} = process.env;

const auth = async (req, res, next)=> {
    try {
        const {authorization = ""} = req.headers;
        const [bearer, token] = authorization.split(" ");
        if(bearer !== "Bearer"){
            throw createError(401);
        }
        const {id} = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(id);
        if(!user || !user.token){
            throw createError(401);
        }
        req.user = user;
        next();
    } catch (error) {
        if(error.message === "Invalid signature"){
            error.status = 401;
        }
        next(error);
    }
}

module.exports = auth;