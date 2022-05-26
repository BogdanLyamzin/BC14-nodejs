const updateBooks = require("./updateBooks");
const getAll = require("./getAll");

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

module.exports = removeById;