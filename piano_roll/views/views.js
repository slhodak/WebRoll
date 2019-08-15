import { noteUtils } from '../lib/helpers.js';

const ControlView = {
  createRollHeader() {
    return `
      <div class="rollHeader"> 
        <div class="rollControls">
          <div class="play rollButton"><p>Play</p></div>
          <div class="pause rollButton"><p>Pause</p></div>
          <div class="stop rollButton"><p>Stop</p></div>
        </div>
        <div class="rollClock">
          <p style="display: inline">Clock:</p>
          <div class="time">0</div>
        </div>
      </div>
    `;
  }
};

const GridView = {
  createGrid(divisions) {
    let columns = '';
    for (let i = 0; i < divisions; i++) {
      let column = `<div class="timeColumn" data-column-time=${i}>`;
      for (let j = 87; j > -1; j--) {
        column += `<div class="noteCell ${noteUtils.getNoteByNumber(j)[0]}" data-note=${j}></div>`;
      }
      column += '</div>';
      columns += column;
    }
    return `<div class="editorGrid">${columns}</div>`;
  },
  renderNotes() {
    //  use any notes in model to attach classes to
    //    cells with notes in them (different color)
  }
};

export {
  ControlView,
  GridView
};
