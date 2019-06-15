

import GameClient from './game/GameClient.js'

const socket = io();
const game = new GameClient(socket);

socket.on('message', function(data){
	console.log('> i recieved from server', data);
});

socket.on('game', function(data){
	game.recieveSocketData(data);
});

socket.on('disconnect', function(){
		console.log('> socket disconnect');
});

socket.emit('message', { 'text': 'Hello, i am client'});


document.addEventListener("DOMContentLoaded",function(){

	console.log("Init game client...");

	game.startGame();

});