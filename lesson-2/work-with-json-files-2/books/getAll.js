const filePath = require("./filePath");

const getAll = async() => {
    const data = await fs.readFile(filePath);
    return JSON.parse(data);
}

module.exports = getAll;