const WebSocket = require('ws');
const { Network } = require('./config');

const wss = new WebSocket.Server({ port: Network.wsPort });

module.exports = wss;
