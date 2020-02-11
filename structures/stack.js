class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  isEmpty = () => !Bollean(this.size);

  push = value => {
    let oldFirst = this.root;
    this.root = new StackNode(value);
    this.root.next = oldFirst;
    this.size++;
  };

  pop = () => {
    if (this.isEmpty()) return null;
    let oldFirst = this.root;
    this.root = oldFirst.next;
    this.size--;
    return oldFirst;
  };
}

let stackInstance = new Stack();
stackInstance.push(1);
stackInstance.push(2);
stackInstance.push(3);
console.log(stackInstance.root);

console.log(stackInstance.size);
