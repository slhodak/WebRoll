const path = require('path');
const express = require('express');
const cors = require('cors');
const wss = require('./websocket');
const player = require('./player')();

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
  ws.on('message', function incoming(message) {
    //  one websocket server has all the scores
    //  multiple websocket clients will request them
    //  use this message to determine which score is read
    if (message === 'start') {
      player.start();
    } else if (message === 'stop') {
      player.stop();
    }
  });

  player.addSocket(ws);
});
