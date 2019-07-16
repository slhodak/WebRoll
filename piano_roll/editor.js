//  Editor for sequencer -- View & Controller

//  Editor = entire module
//    - Interface to alter Grid Division and Time Signature

const Editor = function(length, timeDivision, timeSignature) {
  this.length = length;
  this.timeDivision = timeDivision;
  this.timeSignature = timeSignature;

  //  Create Grid
  //    Grid populates based on model data
  //    Grid edits alter model
  //    TODO: Generate based on grid division, t/s, and length (in bars for now)
  this.createGrid = function(length = 16, timeDivision = [1, 8], timeSignature = [4, 4]) {
    let grid = document.createElement('div');
    //  create grid
    //  fill grid with divisions(length, timedivision) rows of divs.
    let n = numberOfDivisions(length, timeDivision);
  
  };
  this.numberOfDivisions = function(length, timeDivision) {
    return (timeDivision[1] * length) / timeDivision[0];
  };

  //  Insert into Grid Container
  
}

export default Editor;
