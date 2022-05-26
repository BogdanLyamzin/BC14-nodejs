const fs = require("fs/promises");
const path = require("path");
const {nanoid} = require("nanoid");

/*
1. Получить все книги.
2. Получить одну книгу по id.
3. Добавить книгу.
4. Удалить книгу по id.
*/

const filePath = path.join(__dirname, "books.json");

const updateBooks = async (books) => {
    await fs.writeFile(filePath, JSON.stringify(books, null, 2));
}

const getAll = async() => {
    const data = await fs.readFile(filePath);
    return JSON.parse(data);
}

const getById = async (id) => {
    const books = await getAll();
    const result = books.find(item => item.id === id);
    if(!result){
        return null;
    }
    return result;
}

const add = async (title, author) => {
    const books = await getAll();
    const newBook = {
        title,
        author,
        id: nanoid()
    };
    books.push(newBook);
    await updateBooks(books);
    return newBook;
}

const removeById = async (id) => {
    const books = await getAll();
    const idx = books.findIndex(item => item.id === id);
    if(idx === -1) {
        return null;
    }
    const [result] = books.splice(idx, 1);
    await updateBooks(books);
    return result;
}

module.exports = {
    getAll,
    getById,
    add,
    removeById,
}