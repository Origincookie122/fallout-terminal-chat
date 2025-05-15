const { Server } = require('socket.io');

const io = new Server({
    cors: {
        origin: ["http://127.0.0.1:5500", "http://localhost", "http://localhost:5500", "http://127.0.0.1:5500/client/n"]
    }
});

var connectedSockets = [];

io.on("connection", async (socket) => {
    connectedSockets[`${socket.id}`] = socket;

    socket.on('setUsername', async(data) => {
        socket.data.username = data.username;
        console.log(socket.data.username);
    })

    socket.on('message', async(data) => {
        socket.broadcast.emit('message', data);
    })

    // setTimeout(() => {
    //     socket.emit('message', {
    //         message: "Testing server connection!",
    //         username: "server",
    //         withPrefix: true
    //     })
    // }, 10000)
});

io.listen(3000);