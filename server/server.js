
// Remember this two does not need to be installed. it has a build in module 
const path = require("path");
const http = require('http');

// __dirname - to reference to the current directory 
// (C:\Users\rs281\OneDrive - DXC Production\Desktop\ranjith\nodejs\nodejs-chat\server)
// console.log('__dirname -->', __dirname)

/**
 * public folder only for client side
 * path.join() -  method joins all given path segments together
 */
// console.log(__dirname + '/../public'); // C:\Users\rs281\OneDrive - DXC Production\Desktop\ranjith\nodejs\nodejs-chat\server/../public
const publicPath  = path.join(__dirname,  '../public'); //C:\Users\rs281\OneDrive - DXC Production\Desktop\ranjith\nodejs\nodejs-chat\public
// console.log(publicPath);

const express = require('express');
const socketIO = require('socket.io');
const { Socket } = require("dgram");

const app = express();

const port = 3000 || process.env.PORT;
/**
 * it is similar to app.listenlisten(port, () => {
    console.log(`Server is up on port ${port}`)
});
 * Http is actually used behind the scenes for express
 */
const server = http.createServer(app);

// Here, we have access to the server via server variable
const io = socketIO(server);


// this is configuration of express static middleware
app.use(express.static(publicPath));

// io.on() - register an event listener
io.on('connection', (socket) => {
    console.log('New user connected');
    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });

    socket.emit('newEmail', {
        from: 'mike@dxc.com',
        text: 'Hi Ranjith, What a surprise!!'
    });

    socket.on('createEmail', function(mail)  {
        console.log('createEmail', mail)
    });
});
server.listen(port, () => {
    console.log(`Server is up on port ${port}`)
});





 