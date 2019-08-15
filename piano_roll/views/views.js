import { noteUtils } from '../lib/helpers.js';

const ControlView = {
  createRollHeader() {
    return `
      <div class="rollHeader"> 
        <div class="rollControls">
          <button class="play rollButton">Play</button>
          <button class="pause rollButton">Pause</button>
          <button class="stop rollButton">Stop</button>
          <button class="createScore rollButton">New Part</button>
        </div>
        <div class="rollClock">
          <p style="display: inline">Clock:</p>
          <div class="time">0</div>
        </div>
      </div>
    `;
  },
  updateTickClock(tick) {
    document.getElementsByClassName('time')[0].innerText = tick;
  }
};

const ScoreRouterView = {
  renderScoreRouter(router) {
    //  blank version uses default (empty) score and placeholder text for synth?
    //  blank version displays "create scores and synths to route"?
    //  use score routes model from server to rerender view
    //  how to create a score?
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
