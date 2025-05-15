socket.on('message', async(data) => {
    var messageText = data.message;
    var messagePrefix = data.withPrefix;
    addLine(data.username, messageText, messagePrefix);
});

function sendMessage(username, message, withPrefix) {
    socket.emit('message', {
        message,
        username,
        withPrefix
    })
}