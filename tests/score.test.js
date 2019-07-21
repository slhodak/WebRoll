const { Score, TriggerNode } = require('../server/score.js'); 

describe('Score Functions', () => {

  const score = new Score();
  
  beforeAll(() => {
    score.insertEvent(16, [144, 2, 3]);
    score.insertEvent(64, [128, 2, 3]);
    score.insertEvent(64, [144, 5, 15]);
    score.insertEvent(92, [128, 5, 14]);
    score.insertEvent(128, [144, 15, 15]);
    score.insertEvent(178, [128, 15, 12]);
    
    score.removeEvent(16, [144, 2, 3]);
    score.removeEvent(64, [128, 2, 3]);
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
