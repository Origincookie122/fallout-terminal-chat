const { Server } = require('socket.io');

const handleEvent = require('./utils/eventHandler.js');

const io = new Server({
    cors: {
        origin: ["http://127.0.0.1:5500", "http://localhost", "http://localhost:5500", "http://127.0.0.1:5500/client/n"]
    }
});

//var connectedSockets = [];

io.on("connection", async (socket) => {
    socket.data.username = "unknown";
    //connectedSockets[`${socket.id}`] = socket;

    socket.onAny((eventName, ...args) => {
        handleEvent(io, socket, eventName, ...args);
    });

    socket.on('disconnect', () => {
        console.log(`${socket.data.username} disconnected from the server!`);
    });
});

io.listen(3000);