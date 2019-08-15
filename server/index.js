const path = require('path');
const express = require('express');
const cors = require('cors');
const wss = require('./websocket');
const player = require('./player')();

process.title = 'WebRoll';

//  Express Server - Static Files & Bundles

const app = express();
const { Network } = require('./config');

app.use(cors());
app.use(express.static(path.resolve(__dirname, '../dist')));
app.use('/piano_roll', express.static(path.resolve(__dirname, '../piano_roll')));

app.post('/start', (req, res) => {
  if (player.start()  >= 0) {
    res.status(200).send({ message: 'Started player'});
  } else {
    res.status(400).send({ message: 'Could not start player'});
  }
});

app.post('/stop', (req, res) => {
  console.log(req.query);
  if (player.stop(req.query.reset === 'true' ? true : false)  >= 0) {
    res.status(200).send({ message: 'Stopped player'});
  } else {
    res.status(400).send({ message: 'Could not stop player'});
  }
});

app.listen(Network.httpPort, () => {
  console.log(`Piano roll service available on port ${Network.httpPort}`);
});

//  WebSocket Server - Note Event Queue Transmissions

wss.on('listening', () => {
  console.log(`WebSocket Server listening on port ${Network.wsPort}`);
});

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(transmission) {
    let message = JSON.parse(transmission);
    if (message.message === 'route') {
      player.routeSocketToScore(message.socket, message.scoreName);
    } else if (message.message === 'start') {
      player.start();
    } else if (message.message === 'stop') {
      player.stop();
    }
  });

  player.addSocket(ws);
});
