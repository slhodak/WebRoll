const { Score, TriggerNode } = require('../server/score.js'); 
const { Clock } = require('../server/clock.js');

describe('Score Functions', () => {

  const score = new Score();
  
  beforeAll(() => {
    score.insertEvent(15, [128, 2, 3]);
    score.insertEvent(20, [144, 2, 3]);
    score.insertEvent(16, [128, 5, 15]);
    score.insertEvent(24, [144, 5, 14]);
    score.insertEvent(16, [128, 15, 15]);
    score.insertEvent(22, [144, 15, 12]);
    
    score.removeEvent(16, [127, 5, 15]);
  });

  test('should insert event trigger nodes', () => {
    expect(score.triggers.head).toBeInstanceOf(TriggerNode);
  });
  
  test('should insert trigger nodes between later and earlier ones', () => {
    let node = score.triggers.head;
    let invalidOrder = false;
    while(node.next) {
      if (node.next.time < node.time) {
        invalidOrder = true;
      }
      node = node.next;
    }
    expect(invalidOrder).toBe(false);
  });

  test('should remove values from the queue', () => {
    let node = score.triggers.head;
    let last;
    while(node) {
      if (!node.next) {
        last = node;
      }
      node = node.next;
    }
    expect(last.time).toBe(24);
  });
});

describe('Clock', () => {
  const clock = new Clock(120);
  
  beforeEach(() => {
    jest.useFakeTimers();
  });
  
  it('should have an interval property equal to milliseconds between ticks', () => {
    expect(clock.interval).toBe(31.25);
  });

  it('should begin and stop ticking on command', () => {
    clock.begin();
    jest.advanceTimersByTime(clock.interval * 3.5);
    clock.stop();
    expect(clock.ticks).toBe(3);
  })

  it('should tick according to a given tempo', () => {
    clock.begin();
    jest.advanceTimersByTime(60000);
    clock.stop();
    expect(clock.ticks).toBe(120 * 64);
  });

  it.skip('should loop through a maximum of ticks', () => {

  });
});

describe('Score message events', () => {
  test.skip('should send note events in sequence in time with the Clock', () => {

  });
});