
//const socket = io.connect('http://dominio');
const socket = io.connect();

socket.on('newUser', function(userdata){
    alert("Hi new user:"+ userdata.user+" I am the server.");
});

socket.on('newMessage', function(userdata){
    $('#messagesBox').append('<p><strong>'+  userdata.user +':</strong> '+ userdata.message +'</p>');
});

function login(){
    email = $('#form #email').val();
    user = $('#form #username').val();
    // Send info of user in current connection:
    socket.emit('userdata', {email: email, user: user});
    alert('login '+ email +' '+ user);
}

function sendMessage(){
    message = $('#message').val();
    user = $('#form #user').val();
    socket.emit('send_message', {message: message, user: user});
}