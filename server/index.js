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

app.listen(Network.httpPort, () => {
  console.log(`Piano roll service available on port ${Network.httpPort}`);
});

//  WebSocket Server - Note Event Queue Transmissions

wss.on('listening', () => {
  console.log('WebSocket Server listening on port 4001');
});

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  //  Test tone
  ws.send(JSON.stringify([128, 54, 78]));
  function makeTryer() {
    let tries = 3;
    return () => {
      if (tries > 0) {
        setTimeout(() => {
          ws.send(JSON.stringify([144, 54, 78]));
          tries -= 1;
          tryer();
        }, 2000);
      }
    }
  }
  const tryer = makeTryer();
  tryer();
});
