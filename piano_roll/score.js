//  Model

const Score = function (tempo = 100) {
  this.tempo = tempo;
  this.triggers = {
    head: null
  };
};

Score.prototype.insertEvent = function (time, event) {
  let curr = this.triggers.head;
  if (!curr) {
    this.triggers.head = new TriggerNode(time, event);
  } else if (curr.time > time) {
    this.triggers.head = new TriggerNode(time, event);
    this.triggers.head.next = curr;
  } else {
    let searching = true;
    while(searching) {
      if (curr.time === time) {
        curr.events.push(event);
        searching = false;
      } else if (curr.next) {
        if (curr.next.time > curr.time) {
          let savedNext = curr.next;
          curr.next = new TriggerNode(time, event);
          curr.next.next = savedNext;
          searching = false;
        } else {
          curr = curr.next
        }
      } else {
        curr.next = new TriggerNode(time, event);
        searching = false;
      }
    }
  }
};

const TriggerNode = function (time, event) {
  this.time = time;
  this.events = [];
  if (event) {
    this.events.push(event);
  }
  this.next = null;
};
