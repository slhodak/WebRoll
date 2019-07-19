const net = require('net');
const { Network } = require('./config');

const client = new net.Socket();

client.connect(Network.tcpPort, Network.tcpTarget, function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('TCP connection closed');
});
