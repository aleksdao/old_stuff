var app = require('express')();
var socketio = require('socket.io');

var server = app.listen(3000);
var io = socketio.listen(server);

app.get('/', function(req, res, next) {
	res.sendFile(__dirname + '/index.html');
})

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

// app.listen(3000, function() {
// 	console.log("listening on *:3000")
// });