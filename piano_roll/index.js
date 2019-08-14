import Editor from './editor.js';

const editor = new Editor();
const pianoRoll = `
  <div class="rollContainer">
    ${editor.header}
    <div class="gridContainer">${editor.grid}</div>
  </div>`;

document.getElementsByClassName('pianoRoll')[0].innerHTML = pianoRoll;
