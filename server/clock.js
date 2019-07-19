const Clock = function(tempo) {
  this.tempo = tempo;
  this.interval = (tempo / 60) / 64 * 1000;
  this.ticking = false;
  this.ticks = 0;
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
  this.ticks += 1;
};

Clock.prototype.stop = function() {
  this.ticking = false;
};

module.exports = {
  Clock
};
