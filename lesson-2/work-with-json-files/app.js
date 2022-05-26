const books = require("./books");

const invokeAction = async ({action, id, title, author}) =>{
    try {
        switch (action) {
            case "list":
                const allBooks = await books.getAll();
                console.log(allBooks);
                break;
            case "get":
                const oneBook = await books.getById(id);
                console.log(oneBook);
                break;
            case "add":
                const newBook = await books.add(title, author);
                console.log(newBook);
                break;
            case "remove":
                const deleteBook = await books.removeById(id);
                console.log(deleteBook);
                break;
            default:
                console.log("Unknown action");
        }
    } catch (error) {
        console.log(error.message);
    }
}

// invokeAction({action: "list"});
// invokeAction({action: "get", id: "u9kgwNWGi3uUUwh0b8V49"});
// invokeAction({action: "add", title: "Girl genius", author: "Foglio"});
invokeAction({action: "remove", id: "voqn6yyErS4TJbbRc9IbS"});