const {nanoid} = require("nanoid");

const updateBooks = require("./updateBooks");
const getAll = require("./getAll");

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

module.exports = add;