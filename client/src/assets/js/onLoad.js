(async() => {
    const onLoad = async () => {

        const usernameBox = document.querySelector('.username');
        //const usernameBox = stdin.firstChild;
        usernameBox.innerHTML = `${rootUserName}@user>`
        
        socket.emit('setUsername', {username: rootUserName}); // Set Server-Sided Username
        
        await typeLine('-------------------------------------------------', 30);
        await typeLine('\u00A0 \u00A0 \u00A0 \u00A0 ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM    ', 90);
        await typeLine('\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 COPYRIGHT 2075-2075 ROBCO INDUSTRIES', 90);
        await typeLine('\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 -Server 1-', 90);
        await typeLine('-------------------------------------------------', 30);
        await typeLine('Connecting to remote host...', 90);
        await typeLine(`Welcome, ${rootUserName}!`, 90);
        await typeLine("\n", 90);


    };

    window.addEventListener('load', onLoad);
})();