//  Editor for sequencer -- View & Controller

//  Editor = entire module
//    - Interface to alter Grid Division and Time Signature

const Editor = function(length = 16, timeDivision = [1, 8], timeSignature = [4, 4]) {
  this.length = length;
  this.timeDivision = timeDivision;
  this.timeSignature = timeSignature;

  //  Create Grid
  //    Grid populates based on model data
  //    Grid edits alter model
  //    TODO: Generate based on grid division, t/s, and length (in bars for now)
  this.divisions = this.numberOfDivisions(length, timeDivision);
  this.grid = this.createGrid(length, timeDivision, timeSignature);
  //  Insert into Grid Container
};

Editor.prototype.numberOfDivisions = function(length, timeDivision) {
  return (timeDivision[1] * length) / timeDivision[0];
};

Editor.prototype.createGrid = function(length, divisions, timeSignature) {
  //  create grid
  let grid = document.createElement('div');
  //  fill grid with divisions(length, divisions) rows of divs.
  let columns = '';
  for (let i = 0; i < this.divisions; i++) {
    let column = `<div class="timeColumn" data-id=${i}>`;
    for (let j = 1; j < 89; j++) {
      column += `<div class="noteCell" data-note=${i}></div>`;
    }
    column += '</div>';
    columns += column;
  }
  grid.innerHTML = columns;
};

export default Editor;
