import config from './config.js';

const Player = {
  start() {
    fetch(`${config.host}:${config.port}/start`, {
      method: 'POST'
    })
      .then(response => response.json())
      .then(data => {
        console.log(`Response from player: ${data.message}`);
      })
      .catch(err => console.log(err));
  },
  stop(reset) {
    fetch(`${config.host}:${config.port}/stop${reset ? '?reset=true' : '?reset=false'}`, {
      method: 'POST'
    })
      .then(response => response.json())
      .then(data => {
        console.log(`Response from player: ${data.message}`);
      })
      .catch(err => console.log(err));
  }
};

export { Player };
