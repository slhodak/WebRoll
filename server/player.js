const Clock = require('./clock');
const { Score, TriggerNode } = require('./score');

const Player = function(socket, scores = []) {
  this.socket = socket;
  this.clock = new Clock(this, 60, [4, 4], 4);
  this.scores = scores;
};

Player.prototype.addScore = function(score) {
  this.scores.push(score);
};

Player.prototype.start = function() {
  this.clock.start();
};

Player.prototype.checkQueues = function(time) {
  console.log('checking scores...');
  this.scores.forEach(score => {
    let current = score.read(time);
    if (current !== -1) {
      current.events.forEach(event => {
        console.log(event);
        this.socket.send(JSON.stringify({ data: event }));
      });
    }
  });
};

Player.prototype.stop = function() {
  console.log('stopping score loop...');
  this.clock.stop();
};

module.exports = Player;
