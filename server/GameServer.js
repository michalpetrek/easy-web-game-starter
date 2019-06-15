

class GameServer 
{

	constructor(socket, database) 
	{
		console.log('+ Starting GameServer...');

		this.socket = socket;
		this.database = database;
	}

	recieveSocketData(socket, data)
	{
		console.log('+ GameServer recieved data: ', data);
		socket.emit('game', 'Run Forrest, run!');

		// let planets;
		// this.database.query("SELECT * FROM planet").then( rows => {
		// 	planets = rows;
		// 	console.log('planets ::: ', planets);
		// });

	}

}

module.exports = GameServer;