const Clock = require('./clock');

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
  this.router[socket.uid] = [];
  socket.send(JSON.stringify({ uid: socket.uid }));
};

Player.prototype.addScore = function(name = this.scores.size, score) {
  this.scores[name] = score;
  this.scores.size += 1;
};

Player.prototype.routeSocketToScore = function(socketId, scoreName) {
  this.router[socketId].push(scoreName);
};

Player.prototype.start = function() {
  this.clock.start();
};

Player.prototype.sendNoteEvents = function(time) {
  //  access every score for each socket
  this.sockets.forEach(socket => {
    //  check each score for due event lists
    this.router[socket.uid].forEach(scoreName => {
      let current = this.scores[scoreName].read(time);
      if (current !== -1) {
        //  send each due event
        current.events.forEach(event => {
          socket.send(JSON.stringify({ event }));
        });
      }
    });
  });
};

Player.prototype.stop = function() {
  console.log('stopping score loop...');
  this.clock.stop();
};

module.exports = () => {
  return new Player();
}
