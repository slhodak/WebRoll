import config from './config.js';

const socket = new WebSocket(`${config.rollWSHost}:${config.rollWSPort}`, 'roll');

socket.onopen = (open) => {
  console.log("Opened connection to Roll WebSocket Server");
};

socket.onmessage = (message) => {
  let data = JSON.parse(message.data);
  //  get updates on tick time
  console.log('Received message from roll websocket server:', data);
};
