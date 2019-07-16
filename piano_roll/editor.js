//  Editor for sequencer -- View & Controller

//  Editor = entire module
//    - Interface to alter Grid Division and Time Signature

//  Create Grid
//    Grid populates based on model data
//    Grid edits alter model
//    TODO: Generate based on grid division, t/s, and length (in bars for now)
function createGrid(length = 16, timeDivision = [1, 8], timeSignature = [4, 4]) {
  let grid = document.createElement('div');
  //  create grid
  //  fill grid with divisions(length, timedivision) rows of divs.
  let n = numberOfDivisions(length, timeDivision);

}

function numberOfDivisions(length, timeDivision) {
  return ((64 * timeDivision[0]) / timeDivision[1]) * length;
}

//  Insert into Grid Container

export default editor;
