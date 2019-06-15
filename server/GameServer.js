

class GameServer 
{

	constructor(socket) 
	{
		console.log('+ Starting GameServer...');

		this.socket = socket;
	}

	recieveSocketData(socket, data)
	{
		console.log('+ GameServer recieved data: ', data);

		socket.emit('game', 'Run Forrest, run!');
	}

}

module.exports = GameServer;