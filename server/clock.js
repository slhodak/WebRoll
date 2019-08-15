const Clock = function(player, tempo = 120, timeSignature = [4, 4], length = 64) {
  this.player = player;
  this.tempo = tempo;
  this.timeSignature = timeSignature;
  this.length = length;
  this.interval = 60000 / (this.tempo * (64 / this.timeSignature[1]));
  this.ticking = false;
  this.ticks = 0;
  this.tickLimit = length * (64 * (timeSignature[0] / timeSignature[1]));
};

Clock.prototype.start = function() {
  if (this.ticking === true) {
    return -1;
  } else {
    this.ticking = true;
    this.tick();
    return 0;
  }
};

Clock.prototype.tick = function() {
  setTimeout(() => {
    if (this.ticking) {
      if (this.ticks === this.tickLimit - 1) {
        this.ticks = 0;
      } else {
        this.ticks += 1;
      }
      if (this.player) {
        this.player.sendNoteEvents(this.ticks);
        this.player.rollSocket.send(JSON.stringify({ tick: this.ticks }));
      }
      this.tick();
    }
  }, this.interval);
  console.log(`Handling tick: ${this.ticks}`);
};

Clock.prototype.stop = function(reset) {
  if (this.ticking === false) {
    return -1;
  } else {
    if (reset) {
      console.log('resetting clock');
      this.ticks = 0;
    }
    this.ticking = false;
    return 0;
  }
};

module.exports = Clock;
