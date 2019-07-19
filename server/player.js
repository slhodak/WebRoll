const Clock = require('./clock');
const { Score, TriggerNode } = require('./score');


const Player = function(socket, clock, scores) {
  //  player checks scores' events when clock ticks
  //  if any events are due to be played, send them to the Synthesizer via the WebSocket

};

module.exports = Player;
