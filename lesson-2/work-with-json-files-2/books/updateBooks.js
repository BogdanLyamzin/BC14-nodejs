const filePath = require("./filePath");

const updateBooks = async (books) => {
    await fs.writeFile(filePath, JSON.stringify(books, null, 2));
}

module.exports = updateBooks;