import Editor from './editor.js';
import { Controller } from './controller/controllers.js';

const editor = new Editor();
const pianoRoll = `
  <div class="rollContainer">
    ${editor.header}
    <div class="gridContainer">${editor.grid}</div>
  </div>`;

document.getElementsByClassName('pianoRoll')[0].innerHTML = pianoRoll;

Controller.addHandlers();
