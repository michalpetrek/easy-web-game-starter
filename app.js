
const GameServer = require('./server/GameServer.js');

const path = require('path');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const socket = require('socket.io')(http);

const port = 3000;

const server = new GameServer(socket);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/client/index.html');
});

app.use('/css', 	express.static(path.join(__dirname+'/clieny/css')) );
app.use('/images', 	express.static(path.join(__dirname+'/client/images')));
app.use('/js', 		express.static(path.join(__dirname+'/client/js')));

socket.on('connection', function(socket){
	console.log('> a user connected');
	socket.emit('message','Welcome...');

	socket.on('message', function(data){
		console.log('> i recieved message from client: ', data);
	});

	socket.on('game', function(data){
		server.recieveSocketData(socket, data);
	});

	socket.on('disconnect', function(){
		console.log('> user disconnected');
	});

});

http.listen(port, function(){
	console.log('Server listening on *:', port);
});