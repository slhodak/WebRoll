const Clock = require('./clock');
const { Score, TriggerNode } = require('./score');


const Player = function(socket, scores = []) {
  this.socket = socket;
  this.clock = new Clock(this);
  this.scores = scores;
};

Player.prototype.addScore = function(score) {
  this.scores.push(score);
};

Player.prototype.start = function() {
  this.clock.begin();
};

Player.prototype.checkQueues = function(time) {
  this.scores.forEach(score => {
    let current = score.read(time);
    if (current) {
      current.events.forEach(event => {
        this.socket.send(event);
      });
    }
  });
};

Player.prototype.stop = function() {
  this.clock.stop();
};

module.exports = Player;
