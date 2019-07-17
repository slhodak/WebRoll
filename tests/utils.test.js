import { noteUtils } from '../piano_roll/lib/helpers.js';

describe('Utilities Tests', () => {
  it('should calculate the correct note name by its number', () => {
    expect(noteUtils.getNoteByNumber(0)).toEqual(['A']);
  });
});