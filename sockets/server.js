
// Server with Express
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });


// Show our index.html 
app.use(express.static('public'));

io.on("connection", (socket) => {
    // ...
    console.log('new connection id:'+ socket.id);

    //io.on('userdata', function(data){     //test
    socket.on('userdata', function(data){
        console.log('email: '+ data.email +' user: '+ data.user);
    });


    // Server response
    socket.on('userdata', function(data){
        console.log('[Server] New user connected, hi, I am: email: '+ data.email +' user: '+ data.user);
        // Send a emit to all users connected:
        io.emit('newUser', {user: data.user});
    });

    // Send message
    socket.on('send_message', function(data){
        console.log('[Server] New message, User: '+ data.user +' sended this message: '+ data.message);
        // Send a emit to all users connected:
        io.emit('newMessage', {user: data.user, message: data.message});
    });
});

httpServer.listen(8080);