const t16 = {
  time: 16,
  events: [
    [144, 64, 127]
  ],
  next: t64
};
const t64 = {
  time: 64,
  events: [
    [128, 64, 127],
    [144, 66, 127]
  ],
  next: t92
};
const t92 = {
  time: 92,
  events: [
    [128, 66, 127]
  ],
  next: t128
};
const t128 = {
  time: 128,
  events: [
    [144, 68, 127],
    [144, 64, 127]
  ],
  next: t178
};
const t178 = {
  time: 178,
  events: [
    [128, 68, 127],
    [128, 64, 127]
  ],
  next: null
};

const sampleScore = {
  triggers: {
    head: t16
  },
  current: score.triggers.head
}

module.exports = sampleScore;
