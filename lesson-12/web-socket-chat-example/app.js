const ws = new require("ws");

const wsServer = new ws.Server({port: 5000});

const users = [];

wsServer.on("connection", (newUser) => {
    users.push(newUser);
    newUser.on("message", (message)=> {
        const data = JSON.parse(message);
        const newData = JSON.stringify(data);
        users.forEach(user => {
            if(newUser !== user){
                user.send(newData);
            }
        })
    })
})