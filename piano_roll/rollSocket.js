import config from './config.js';
import { ControlView } from './views/views.js';

const socket = new WebSocket(`${config.rollWSHost}:${config.rollWSPort}`, 'roll');

socket.onopen = (open) => {
  console.log("Opened connection to Roll WebSocket Server");
};

socket.onmessage = (message) => {
  let data = JSON.parse(message.data);
  if (data.tick) {
    ControlView.updateTickClock(data.tick);
  }
  console.log('Received message from roll websocket server:', data);
};
