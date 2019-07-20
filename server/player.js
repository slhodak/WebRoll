const Clock = require('./clock');
const { Score, TriggerNode } = require('./score');

const Player = function(score) {
  this.clock = new Clock(this, 60, [4, 4], 4);
  this.sockets = [];
  this.score = score;
};

Player.prototype.addSocket = function(socket) {
  socket.uid = this.sockets.length;
  this.sockets.push(socket);
  socket.send(JSON.stringify({ uid: socket.uid }));
};

Player.prototype.addScore = function(score) {
  this.scores.push(score);
};

Player.prototype.start = function() {
  this.clock.start();
};

Player.prototype.checkQueue = function(time) {
  console.log('checking scores...');
  let current = this.score.read(time);
  if (current !== -1) {
    current.events.forEach(event => {
      console.log(event);
      this.socket.send(JSON.stringify({ event }));
    });
  }
};

Player.prototype.stop = function() {
  console.log('stopping score loop...');
  this.clock.stop();
};

module.exports = () => {
  return new Player();
}
