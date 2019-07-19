const net = require('net');
const http = require('http');
const crypto = require('crypto');
const { Network } = require('./config');

const magic = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';

const tcpServer = net.createServer();

tcpServer.on('connection', (socket) => {
  socket.on('data', (chunk) => {
    if (/Sec-WebSocket-Key/.test(chunk) === true) {
      console.log(chunk.toString());
      const shasum = crypto.createHash('sha1');
      console.log('#### handshake phase 1\n');
      //  Parse the incoming GET request for it's key
      const key = chunk.toString().match(/Sec-WebSocket-Key:\s.+/g)[0].split(': ')[1];
      console.log('Key: ' + key);
      shasum.update(key + magic);
      //  Create the needed base64 encoded response
      const hash = shasum.digest('hex');
      const accept = Buffer.from(hash).toString('base64');
      console.log('Accept: ' + accept);

      //  Write the appropriate response
      var data = 'HTTP/1.1 101 WebSocket Protocol Handshake\r\n'
      + 'Upgrade: websocket\r\n'
      + 'Connection: Upgrade\r\n'
      + `Sec-WebSocket-Accept:' ${accept}\r\n`;
      + `Sec-WebSocket-Protocol: chat`

      if (socket.write(data)) {
        console.log('sent where?');
      };
      socket.pipe(socket);

      //  Wait for the WebSocket to reply
    } else {
      console.log('#### handshake complete');
      socket.write("hey socket!");
      socket.pipe(socket);
      // let data;
      // try {
      //   data = JSON.parse(chunk);
      // } catch (e) {
      //   console.log('JSON parse error: ' + e);
      // }
      // if (data) {
      //   socket.pipe(socket);
      // }
    }
  });

  socket.on('end', () => {
    console.log('Closing TCP connection');
  });
});

tcpServer.listen(Network.tcpPort, Network.host, () => {
  console.log(`TCP Server listening on port ${Network.tcpPort}`);
});

