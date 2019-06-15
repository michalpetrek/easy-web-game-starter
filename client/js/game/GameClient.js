
export default class GameClient
{
	constructor(socket)
	{
		console.log('+ Creating instance of game client...');

		this.socket = socket;
	}

	startGame()
	{
		console.log('+ Start GameClient...');

		this.socket.emit('game', { 'start': 'i am ready'});
	}

	recieveSocketData(data)
	{
		console.log('+ GameClient recieved data from GameServer: ', data);
	}
}