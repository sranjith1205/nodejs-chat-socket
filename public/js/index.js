// it is similar to io.on('connection', (socket) => {
// auto connected when server is up  - this callback fun used to identify the server
// connect
const socket = io();
socket.on('connect', function(client) {
    console.log('Connected to server');
    socket.emit('createEmail', {
        to: 'sranjith1205@gmail.com',
        text: 'Hi Mike, yeah!! How are you??'
    })
});

// here, used to identify when server connect is down using below callback
socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on("newEmail", (mail) => {
    console.log('new email', mail);
})