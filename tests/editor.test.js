import Editor from '../piano_roll/editor';

describe('Editor Tests', () => {
  const editor = new Editor();

  it('should get the correct number of divisions for a given bar length and subdivision value', () => {
    let n = editor.numberOfDivisions(1, [1, 4]);
    expect(n).toBe(4);
  });
});

