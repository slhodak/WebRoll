const Clock = function(tempo = 120, timeSignature = [4, 4]) {
  this.tempo = tempo;
  this.interval = 60000 / (tempo * (64 / timeSignature[1]));
  this.ticking = false;
  this.ticks = 0;
};

Clock.prototype.begin = function() {
  this.ticking = true;
  setTimeout( () => {
    if (this.ticking) {
      debugger;
      this.tick();
      this.begin();
    }
  }, this.interval);
};

Clock.prototype.tick = function() {
  this.ticks += 1;
};

Clock.prototype.stop = function() {
  this.ticking = false;
};

module.exports = {
  Clock
};
