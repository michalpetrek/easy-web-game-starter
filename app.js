

const Database = require('./server/lib/Database.js');
const GameServer = require('./server/GameServer.js');

const path = require('path');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const socket = require('socket.io')(http);


let port = 3000;
let dbConfig = {
	host: '10.0.0.101',
	user: 'devel',
	password: '23',
	database: 'spacegame'
};


const database = new Database(dbConfig);
const server = new GameServer(socket, database);

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