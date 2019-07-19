import Editor from '../piano_roll/editor';

describe('Editor Tests', () => {
  
  it('should get the correct number of divisions for a given bar length and subdivision value', () => {
    const editor = new Editor();
    let n = editor.numberOfDivisions(1, [1, 4]);
    expect(n).toBe(4);
  });
  
  it('should add the number of divisions to a property on the editor instance', () => {
    const editor = new Editor(1, [1, 4]);
    expect(editor.divisions).toBe(4);
  });

  
});

