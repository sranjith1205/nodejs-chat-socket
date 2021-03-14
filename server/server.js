
// Remember this one does not need to be installed. it has a build in module 
const path = require("path");

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
const { static } = require("express");

const app = express();

// this is configuration of express static middleware
app.use(express.static(publicPath));

const port = 3000 || process.env.PORT;
app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
});





