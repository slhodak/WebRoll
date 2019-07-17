//  Editor for sequencer -- View & Controller

//  Editor = entire module
//    - Interface to alter Grid Division and Time Signature

const Editor = function(length = 16, timeDivision = [1, 8], timeSignature = [4, 4]) {
  this.length = length;
  this.timeDivision = timeDivision;
  this.timeSignature = timeSignature;

  this.divisions = this.numberOfDivisions(length, timeDivision);
  this.grid = this.createGrid(this.divisions);
  //  Insert into Grid Container
};

Editor.prototype.numberOfDivisions = function(length, timeDivision) {
  return (timeDivision[1] * length) / timeDivision[0];
};

Editor.prototype.createGrid = function(divisions) {
  //  Create Grid
  //    Grid populates based on model data
  //    Grid edits alter model
  let columns = '';
  for (let i = 0; i < divisions; i++) {
    let column = `<div class="timeColumn" data-column-time=${i}>`;
    for (let j = 1; j < 89; j++) {
      column += `<div class="noteCell" data-note=${i}></div>`;
    }
    column += '</div>';
    columns += column;
  }
  return `<div class="editorGrid">${columns}</div>`;
};

export default Editor;
