import config from './config.js';

const socket = new WebSocket(`${config.rollWSHost}:${config.rollWSPort}`, 'roll');

socket.onopen = (open) => {
  console.log("Opened connection to Roll WebSocket Server");
  //  tell the roll socket who this is (not a synth)
};

socket.onmessage = (message) => {
  let data = JSON.parse(message.data);
  console.log('Received message from roll websocket server:', data);
};
