class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  isEmpty = () => !Boolean(this.size);

  enqueu = value => {
    let oldLast = this.first;
    this.last = new QueueNode(value);
    if (this.isEmpty()) this.first = this.last;
    else oldLast.next = this.last;
    this.size++;
  };

  deEnqueu = () => {
    if (this.isEmpty()) {
      this.last == null;
      return null;
    } else {
      let item = this.first.value;
      this.first = this.first.next;
      this.size--;
      return item;
    }
  };
}

const queue = new Queue();

queue.enqueu(1);
queue.enqueu(2);
console.log(queue);
