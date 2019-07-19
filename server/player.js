const Clock = require('./clock');
const { Score, TriggerNode } = require('./score');


const Player = function(socket) {
  this.socket = socket;
  this.clock = new Clock(this);
  this.scores = [];
};

Player.prototype.start = function() {
  this.clock.begin();
};

Player.prototype.checkQueues = function() {
  //  player checks scores' events when clock ticks
  //  if any events are due to be played, send them to the Synthesizer via the WebSocket
};

Player.prototype.stop = function() {
  this.clock.stop();
};


module.exports = Player;
