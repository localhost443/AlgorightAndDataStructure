class Node {
  constructor(value) {
    this.root = value ? value : null;
    this.root = value;
    this.right = null;
    this.left = null;
  }
}
class BinarySearchTree {
  constructor(value) {
    if (value) {
      this.root = new Node(value);
    } else {
      this.root = new Node();
    }
  }
  insert(value) {
    let n = new Node(value);
    if (!value) {
      return false;
    }
    if (!this.root) {
      this.root = value;
      return this;
    } else if (this.root) {
      let z = this.root;
      while (true) {
        if (value > this.root) {
          if (!z.right) {
            z.right = n;
            return this;
          } else {
            z = z.right;
          }
        } else if (value < this.root) {
          if (!z.left) {
            z.left = n;
            return this;
          } else {
            z = z.left;
          }
        }
      }
    }
  }
}

let a = new BinarySearchTree();
let b = new BinarySearchTree(10);
a.insert();
a.insert();
a.insert(1);
// b.insert(2);
// b.insert(2);
