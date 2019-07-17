import Editor from './editor.js';

const editor = new Editor();
const container = `<div class="gridContainer">${editor.grid}</div>`;

document.getElementsByClassName('pianoRoll')[0].innerHTML = container;
