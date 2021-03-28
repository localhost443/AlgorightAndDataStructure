class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.lenght = 0;
  }
  push(value) {
    let n = new Node(value);
    console.log(n);
    if (!this.head) {
      this.head = n;
      this.tail = this.head;
      this.previous = null;
    } else {
      n.previous = this.tail;
      this.tail.next = n;
      this.tail = this.tail.next;
    }
    this.lenght++;
    return this;
  }
  pop() {
    let tmp = null;
    if (this.lenght === 0) {
      return null;
    } else if (this.lenght === 1) {
      this.head = null;
      this.tail = null;
    } else {
      tmp = this.tail.value;
      this.tail = this.tail.previous;
      this.tail.next = null;
    }
    this.lenght--;
    return tmp;
  }
  shift() {
    let tmp = null;
    if (this.lenght === 0) {
      return tmp;
    } else if (this.lenght === 1) {
      tmp = this.head.value;
      this.head = null;
      this.tail = null;
    } else {
      tmp = this.head;
      this.head = this.head.next;
      this.head.previous = null;
    }
    this.lenght--;
    return tmp.value;
  }
  unshift(value) {
    let n = new Node(value);
    if (this.lenght === 0) {
      this.push(value);
    } else {
      this.head.previous = n;
      n.next = this.head;
      n.previous = null;
      this.head = n;
    }
    this.lenght++;
    return this;
  }
  get(number) {
    let tmp = this.head;
    if (this.lenght <= number) {
      return false;
    } else {
      let half = Math.floor(this.lenght / 2);
      //I am too lazy to implement backward, But I am sure I can do this. So skipping this;
      for (let i = 0; i <= number; i++) {
        if (i + 1 === number) {
          return tmp.value;
        }
        tmp = tmp.next;
      }
      return tmp;
    }
  }
  insert(number, value) {
    if (number >= this.lenght) {
      return false;
    } else {
      let tmp = new Node(value);
      let h = this.head;
      for (let i = 0; i <= number; i++) {
        //Working with this now , No worries about the fucking future <3
        if (i === number) {
          tmp.previous = h;
          tmp.next = h.next;
        }
        h = h.next;
      }
    }
  }
}
let a = new DoublyLinkedList();
a.push("hello");
a.push("world");
a.push("doom");
