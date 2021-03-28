class Node {
  constructor(value) {
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
    if (!this.root.root) {
      this.root = n;
      return this;
    } else {
      let z = this.root;
      if (z.root) {
        let ki = 0;
        while (true) {
          ki++;
          if (ki >= 100) break;
          if (value >= z.root) {
            if (!z.right) {
              z.right = n;
              return this;
            } else {
              z = z.right;
            }
          } else if (value < z.root) {
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
    return z;
  }
  find(value) {
    if (!this.root.root) return null;
    if (!value) return null;
    let current = this.root;
    let z = 0;
    while (current) {
      z++;
      if (current.root === value) {
        return current;
      } else {
        if (value > current.root) {
          current = current.right;
        } else {
          current = current.left;
        }
      }
    }
    return false;
  }
  lookup(value, n = null) {
    if (!value || !this.root.root) return false;
    if (n === null) n = this.root;
    if (n) {
      if (n.root === value) {
        console.log("found");
        return n;
      } else if (n.right) {
        this.lookup(value, n.right);
      } else if (n.left) {
        this.lookup(value, n.left);
      } else {
        return false;
      }
    }
  }
  breathFirstSearch() {
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push(this.root);
    console.log(queue.length);
    console.log(queue);
    while (queue.length) {
      node = queue.shift();
      data.push(node.root);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  depthFirstSearchPreOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (node.right) traverse(node.right);
      data.push(node.root);
      if (node.left) traverse(node.left);
    }
    traverse(current);
    return data;
  }
}

let a = new BinarySearchTree(100);
// let b = new BinarySearchTree(10);
// a.insert();
a.insert(10);
a.insert(9);
a.insert(99);
a.insert(98);
a.insert(101);
a.insert(106);
a.insert(120);
a.insert(95);
a.insert(101);
a.insert(20);
a.insert(21);
a.insert(23);
a.insert(99);
a.insert(99);
a.insert(26);
a.insert(99);
a.insert(99);
a.insert(99);
a.insert(99);
a.insert(99);
a.insert(0);
a.insert(-3);
a.insert(4);
a.insert(-4);
a.find(4);
a.lookup(7);
a.lookup();
// Expression statement is not assigned or called
let z = a.breathFirstSearch();
console.log(z);
z = a.depthFirstSearchPreOrder();
console.log(z);

// b.insert(2);
// b.insert(2);
