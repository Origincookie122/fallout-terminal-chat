module.exports = async(io, socket, data) => {
    
    if(!data) return;
    if(!data.username) return;
    if(!data.message) return;
    if(!data.withPrefix) return; // Need to better handle this sanitation(Blocks false values);

    const sanitized = String(data.message).replace(/[<>]/g, '');

    if(sanitized == '') return;

    data.message = sanitized;

    data.username = socket.data.username;

    socket.broadcast.emit('message', data);
};