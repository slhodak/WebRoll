const Clock = function(tempo = 120, timeSignature = [4, 4], length = 64) {
  this.tempo = tempo;
  this.interval = 60000 / (tempo * (64 / timeSignature[1]));
  this.ticking = false;
  this.ticks = 0;
  this.tickLimit = length * (64 * (timeSignature[0] / timeSignature[1]));
};

Clock.prototype.begin = function() {
  this.ticking = true;
  setTimeout( () => {
    if (this.ticking) {
      this.tick();
      this.begin();
    }
  }, this.interval);
};

Clock.prototype.tick = function() {
  if (this.ticks === this.tickLimit - 1) {
    this.ticks = 0;
  } else {
    this.ticks += 1;
  }

};

Clock.prototype.stop = function() {
  this.ticking = false;
};

module.exports = Clock;
