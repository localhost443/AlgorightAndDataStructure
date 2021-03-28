//Max Binary Heap Class <3
class BinarySearch {
  constructor(value) {
    value ? (this.root = [value]) : (this.root = []);
  }

  cns(a, b) {
    if (this.root[a] < this.root[b]) {
      [this.root[b], this.root[a]] = [this.root[a], this.root[b]];
      return true;
    }
    return false;
  }

  findParent(index) {
    return Math.floor((index - 1) / 2);
  }
  findChildren(index) {
    return [index * 2, index * 2 + 1];
  }
  insert(value) {
    let z = this.root.push(value);
    z--;
    let p = this.findParent(z);
    while (true) {
      if (p >= 0) {
        if (this.cns(p, z)) z = p;
        else break;
      } else break;
    }
    return this;
  }
  extractMax() {
    [this.root[0], this.root[this.root.length - 1]] = [
      this.root[this.root.length - 1],
      this.root[0],
    ];
    this.root.pop();
    let m = 0;
    let root = 0;
    let child = this.findChildren(0);
    let counter = 0;
    while (true) {
      if (counter === 100) {
        console.log(counter);
        break;
      }
      counter++;
      if (this.root[child[0]] && this.root[child[1]]) {
        m = this.root[child[0]] < this.root[child[1]] ? child[1] : child[0];
        this.cns(root, m);
        child = this.findChildren(m);
        root = m;
      } else if (this.root[child[0]] && !this.root[child[1]]) {
        if (this.root[child[0]] < this.root[m]) {
          this.cns(m, child[0]);
          child = this.findChildren(child[0]);
        } else break;
      } else if (this.root[child[1]] && !this.root[child[0]]) {
        if (this.root[child[1]] < this.root[m]) {
          this.cns(m, child[1]);
          child = this.findChildren(child[1]);
        } else break;
      } else {
        break;
      }
    }
  }
}

let a = new BinarySearch(10);
a.insert(41);
a.insert(39);
a.insert(33);
a.insert(18);
a.insert(27);
a.insert(12);
a.extractMax();

console.log(a);
