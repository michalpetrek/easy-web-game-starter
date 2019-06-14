//'use strict'

const GameServer = require('./server/GameServer.js');

const express = require('express')
const path = require('path');
const router = express.Router();

const app = express()
const port = 3000

const game = new GameServer();

router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname+'/client/index.html'))
});

app.use('/', 		router)
app.use('/css', 	express.static(path.join(__dirname+'/clieny/css')))
app.use('/images', 	express.static(path.join(__dirname+'/client/images')))
app.use('/js', 		express.static(path.join(__dirname+'/client/js')))

app.listen(port, () => {})