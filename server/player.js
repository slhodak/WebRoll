const Clock = require('./clock');
const { Score, TriggerNode } = require('./score');
const Helpers = require('./helpers');

const Player = function(clock, scores) {
  this.clock = clock || new Clock(this, 60, [4, 4], 4);
  if (clock) {
    this.clock.player = this;
  }
  this.router = {};
  this.sockets = [];
  this.scores = scores || { size: 0 };
};

Player.prototype.addSocket = function(socket) {
  socket.uid = this.sockets.length;
  this.sockets.push(socket);
  socket.send(JSON.stringify({ uid: socket.uid }));
};

Player.prototype.addScore = function(name = this.scores.size, score) {
  this.scores[name] = score;
  this.scores.size += 1;
};

Player.prototype.start = function() {
  this.clock.start();
};

Player.prototype.checkQueues = function(time, queues) {
  console.log('checking scores...');
  for (let score in this.scores) {
    if (Helpers.indexOf(queues, score) > -1) {
      let current = this.scores[score].read(time);
      if (current !== -1) {
        current.events.forEach(event => {
          console.log(event);
          //  to each socket... need to define the interface better. Routing?
          this.sockets.send(JSON.stringify({ event }));
        });
      }
    }
  }
};

Player.prototype.stop = function() {
  console.log('stopping score loop...');
  this.clock.stop();
};

module.exports = () => {
  return new Player();
}
