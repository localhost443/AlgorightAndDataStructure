
class Node {
  constructor(val) {
    if (!this.val) {
      this.val = val;
    }
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current) {
      if (current.next) {
        newTail = current;
        current = current.next;
      } else {
        break;
      }
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (this.head === this.tail || !this.head) {
      this.head = null;
      this.tail = null;
    } else {
      if (this.head.next) {
        let tmp = this.head;
        this.head = this.head.next;
        this.length--;
        return tmp;
      }
    }
  }
  unshift(val) {
    let node = new Node(val);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }
  get(num) {
    if (num >= this.length) {
      return null;
    } else {
      let current = this.head;
      for (let i = 0; i < num; i++) {
        current = current.next;
      }
      return current;
    }
  }
  check(num, val) {
    if (num >= this.length || !val) {
      return false;
    } else {
      return true;
    }
  }
  set(num, val) {
    if (!this.check(num, val)) {
      return null;
    } else {
      let current = this.head;
      let tmp = null;
      for (let i = 0; i <= num; i++) {
        if (i === num) {
          tmp = current.val;
          current.val = val;
        }
      }
      return tmp;
    }
  }
  insert(num, val) {
    if (num >= this.length || !val) {
      return null;
    } else {
      let node = new Node(val);
      let current = this.head;
      for (let i = 0; i < num; i++) {
        if (i === num - 1) {
          node.next = current;
          current.next = node;
        }
        current = current.next;
      }
      return this;
    }
  }
  remove(num) {
    if (num >= this.length) return false;
    let current = this.head;
    for (let i = 0; i <= num; i++) {
      if (i === num) {
      }
    }
  }
}

let a = new SinglyLinkedList("hello");
a.push("world");
a.push("how");
a.push("are");
a.push("you");
a.pop();
console.log(a);
a.insert(1, "war");
// a.next = new Node("world");
// a.next.next = new Node("wow, Joss toh");
// console.log(a);
