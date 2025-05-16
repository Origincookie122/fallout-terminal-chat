module.exports = async (io, socket, data) => {
    if(!socket.data.username == "unknown") return;
    socket.data.username = data.username;
    console.log(socket.data.username);
}