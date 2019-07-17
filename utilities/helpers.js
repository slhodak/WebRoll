const noteUtils = {
  noteDict: {
    0: ['A'],
    1: ['A#', 'Bb'],
    2: ['B'],
    3: ['C'],
    4: ['C#', 'Db'],
    5: ['D'],
    6: ['D#', 'Eb'],
    7: ['E'],
    8: ['F'],
    9: ['F#', 'Gb'],
    10: ['G'],
    11: ['G#', 'Ab']
  },
  getNoteByNumber(number) {
    return noteUtils.noteDict[number % 12];
  }
};

export {
  noteUtils
}
