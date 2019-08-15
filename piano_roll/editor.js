//  Editor for sequencer -- View & Controller
import { ControlView, GridView } from './views/views.js';
import { Controller } from './controller/controllers.js';

//  Editor = entire module
//    - Interface to alter Grid Division and Time Signature

const Editor = function(length = 16, timeDivision = [1, 8], timeSignature = [4, 4]) {
  this.length = length;
  this.timeDivision = timeDivision;
  this.timeSignature = timeSignature;

  this.divisions = this.numberOfDivisions(length, timeDivision);
  this.grid = GridView.createGrid(this.divisions);
  this.header = ControlView.createRollHeader();
};

Editor.prototype.numberOfDivisions = function(length, timeDivision) {
  return (timeDivision[1] * length) / timeDivision[0];
};

export default Editor;
