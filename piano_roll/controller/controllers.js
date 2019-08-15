import { Player } from '../model.js';

const Controller = {
  addHandlers() {
    Controller.enablePlayButton();
    //  enable play button
    //  enable pause button
    //  enable stop button
    //  enable grid cell Button
  },
  enablePlayButton() {
    //  begin roll clock
    let button = document.getElementsByClassName('play')[0];
    button.addEventListener('mousedown', (e) => {
      Player.start();
    });
  },
  enablePauseButton() {
    //  pause roll clock
  },
  enableStopButton() {
    //  stop and reset clock to 0
  },
  enableNoteCell() {
    //  attach to or detach from grid -- this is a sequencer for now
    //  use cell attrs to insert or delete note into/from model
    //  rerender grid from new model
  }
};

export { Controller };
