const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 4001 });

module.exports = wss;