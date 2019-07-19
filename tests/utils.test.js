import { noteUtils } from '../piano_roll/lib/helpers.js';

describe('Utilities Tests', () => {
  describe('getNoteByNumber', () => {
    it('should return an array', () => {
      expect(noteUtils.getNoteByNumber(52)).toBeInstanceOf(Array);
    });
  
    it('should calculate the correct note name by its number', () => {
      expect(noteUtils.getNoteByNumber(0)).toEqual(['A']);
    });
  });
});