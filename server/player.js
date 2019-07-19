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
  //  player checks scores' events when clock ticks
  //  send due events to synth via socket
  this.scores.forEach(score => {
    //  returns a trigger event (and increments score current) if score current is due
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
