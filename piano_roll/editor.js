//  Editor for sequencer -- View & Controller
let editor = document.createElement('div');
editor.setAttribute('class', 'viewport');
let roll = document.createElement('div');
roll.setAttribute('class', 'roll');
for (let i = 0; i < 88; i++) {
  let note = document.createElement('div');
  note.setAttribute('class', 'noteLine');
  roll.append(note);
}

editor.append(roll);

export default editor;
