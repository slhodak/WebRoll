const { Score, TriggerNode } = require('../server/score.js'); 
const Clock = require('../server/clock.js');

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
  const clock = new Clock(null, 120);
  
  beforeEach(() => {
    clock.ticks = 0;
    jest.useFakeTimers();
  });
  
  it('should have an interval property equal to milliseconds between ticks', () => {
    expect(clock.interval).toBe(31.25);
  });

  it('should begin and stop ticking on command', () => {
    clock.start();
    jest.advanceTimersByTime(clock.interval * 3.5);
    clock.stop();
    expect(clock.ticks).toBe(3);
  });

  it('should tick according to a given tempo', () => {
    let slowClock = new Clock(null, 4, [4, 4]);
    slowClock.start();
    jest.advanceTimersByTime(60000);
    slowClock.stop();
    expect(slowClock.ticks).toBe(64);
    let fastClock = new Clock(null, 120, [4, 4]);
    fastClock.start();
    jest.advanceTimersByTime(60000);
    fastClock.stop();
    expect(fastClock.ticks).toBeGreaterThan(1900);
    expect(fastClock.ticks).toBeLessThan(2000);
  });

  it('should tick according to a given time signature', () => {
    let swingClock = new Clock(null, 40, [6, 8]);
    swingClock.start();
    jest.advanceTimersByTime(6000);
    swingClock.stop();
    expect(swingClock.ticks).toBe(32);
  });

  it('should calculate size of tick loop according to length and time signature', () => {
    let limitedClock = new Clock(null, 100, [3, 4], 4);
    expect(limitedClock.tickLimit).toBe(192);
  });

  it('should loop through tick loop', () => {
    let limitedClock = new Clock(null, 60, [4, 4], 4);
    limitedClock.start();
    jest.advanceTimersByTime(17000);
    limitedClock.stop();
    expect(limitedClock.ticks).toBeGreaterThan(16);
    expect(limitedClock.ticks).toBeLessThan(20);
  });
});

describe('Player', () => {
  test.skip('should query Score event queues on each tick', () => {
    
  });

  test.skip('should send note messages from Score event queues in order', () => {
    
  });
});
