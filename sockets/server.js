
// Server with Express
const express = require('express');
const app = express();

const http = require('http');

const server = http.createServer(app);

server.listen(8081);

// Listen connections with socketIO:
const {socketIo} = require("socket.io");
const io = new socketIo();

// Listen the event "connect" and run the function
io.on('connect', function(socket){
    console.log('new connection id:'+ socket.id);
});

io.listen(8080);