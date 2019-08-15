import { Player } from '../model.js';

const Controller = {
  addHandlers() {
    Controller.enablePlayButton();
    Controller.enablePauseButton();
    Controller.enableStopButton();
    //  enable grid cell Button
  },
  enablePlayButton() {
    let button = document.getElementsByClassName('play')[0];
    button.addEventListener('mousedown', (e) => {
      Player.start();
    });
  },
  enablePauseButton() {
    let button = document.getElementsByClassName('pause')[0];
    button.addEventListener('mousedown', (e) => {
      Player.stop(false);
    });
  },
  enableStopButton() {
    let button = document.getElementsByClassName('stop')[0];
    button.addEventListener('mousedown', (e) => {
      Player.stop(true);
    });
  },
  enableNoteCell() {
    //  attach to or detach from grid -- this is a sequencer for now
    //  use cell attrs to insert or delete note into/from model
    //  rerender grid from new model
  }
};

export { Controller };
