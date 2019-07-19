const noteUtils = {
  noteDict: {
    0: ['A'],
    1: ['As', 'Bb'],
    2: ['B'],
    3: ['C'],
    4: ['Cs', 'Db'],
    5: ['D'],
    6: ['Ds', 'Eb'],
    7: ['E'],
    8: ['F'],
    9: ['Fs', 'Gb'],
    10: ['G'],
    11: ['Gs', 'Ab']
  },
  getNoteByNumber(number) {
    return noteUtils.noteDict[number % 12];
  }
};

export {
  noteUtils
}
