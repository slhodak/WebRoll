//  Server needed to write and read data from files

const path = require('path');
const express = require('express');
const cors = require('cors');
const wss = require('./websocket');

//  Express Server - Static Files & Bundles

const app = express();
const { Network } = require('./config');

app.use(cors());
app.use(express.static(path.resolve(__dirname, '../dist')));
app.use('/piano_roll', express.static(path.resolve(__dirname, '../piano_roll')));


//  WebSocket Server - Note Event Queue Transmissions

wss.on('listening', () => {
  console.log('WebSocket Server listening on port 4001');
});

wss.on('connection', function connection(ws) {
  console.log('ws connected');
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
 
  ws.send('something');
});


app.listen(Network.httpPort, () => {
  console.log(`Piano roll service available on port ${Network.httpPort}`);
});
