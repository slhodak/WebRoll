//  Model

const Score = function (tempo = 100) {
  this.tempo = tempo;
  this.triggers = {
    head: null
  };
  this.current = this.triggers.head;
};

Score.prototype.read = function(time) {
  console.log(time);
  if (this.current.time === time) {
    if (this.current.next) {
      this.current = this.current.next;
    } else {
      this.current = this.triggers.head;
    }
    return this.current;
  }
  return -1;
}

Score.prototype.insertEvent = function (time, event) {
  let curr = this.triggers.head;
  if (!curr) {
    this.triggers.head = new TriggerNode(time, event);
    this.current = this.triggers.head;
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
        if (curr.next.time > time) {
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

Score.prototype.removeEvent = function (time, event) {
  //  travel to event time
  let curr = this.triggers.head;
  let last;
  while(curr.time !== time) {
    last = curr;
    curr = curr.next;
  }

  //  remove event
  curr.events.forEach((nodeEvent, index) => {
    if (nodeEvent[0] == event[0] && nodeEvent[1] === event[1]) {
      curr.events.splice(index, 1);
    }
  });

  //  if the events array is empty, remove node
  if (curr.events.length < 1) {
    last.next = curr.next;
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

module.exports = {
  Score,
  TriggerNode
}
