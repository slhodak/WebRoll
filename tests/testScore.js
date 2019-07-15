import { Score, TriggerNode } from '../piano_roll/score.js'; 

//  Add a testing framework

let score = new Score();

score.insertEvent(15, [128, 2, 3]);
score.insertEvent(20, [144, 2, 3]);
score.insertEvent(16, [128, 5, 15]);
score.insertEvent(24, [144, 5, 14]);
score.insertEvent(16, [128, 15, 15]);
score.insertEvent(22, [144, 15, 12]);

score.removeEvent(16, [127, 5, 15]);

let node = score.triggers.head;
while (node) {
  console.log(node);
  node = node.next;
}