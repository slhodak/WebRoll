const path = require('path');
const express = require('express');
const cors = require('cors');
const wss = require('./websocket');
const Player = require('./player');
let player;
const { Score } = require('./score');


//  Express Server - Static Files & Bundles

const app = express();
const { Network } = require('./config');

app.use(cors());
app.use(express.static(path.resolve(__dirname, '../dist')));
app.use('/piano_roll', express.static(path.resolve(__dirname, '../piano_roll')));

app.listen(Network.httpPort, () => {
  console.log(`Piano roll service available on port ${Network.httpPort}`);
});

//  WebSocket Server - Note Event Queue Transmissions

wss.on('listening', () => {
  console.log(`WebSocket Server listening on port ${Network.wsPort}`);
});

wss.on('connection', function connection(ws) {
  player = new Player(ws);

  ws.on('message', function incoming(message) {
    if (message === 'start') {
      player.start();
    } else if (message === 'stop') {
      player.stop();
    }
  });

});
