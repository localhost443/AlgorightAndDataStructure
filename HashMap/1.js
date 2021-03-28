class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(value) {
    let total = 0;
    const WeirdPrime = 31;
    for (let i = 0; i < Math.min(value.length, 100); i++) {
      let char = value[i];
      let k = char.charCodeAt(0) - 96;
      total = (total * WeirdPrime + k) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    if (!key) return false;
    let hashedKey = this._hash(key);
    if (!this.keyMap[hashedKey]) {
      this.keyMap[hashedKey] = [];
      this.keyMap[hashedKey].push([key, value]);
    }
    return this;
  }
  get(key) {
    if (!key) return false;
    let hashedKey = this._hash(key);
    if (this.keyMap[hashedKey][0] && this.keyMap[hashedKey][0][0] === key) {
      return this.keyMap[hashedKey][0][1];
    } else return undefined;
  }
  keys() {
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i][0][0]) {
        console.log(this.keyMap[i][0][0]);
      }
    }
  }
}
let b = new HashTable(53);
b.set("hello", "Sohan");
b.set("bolbona", "gari");
b.set("sanu", "Nugam");
b.set("okay", "Bihar");
b.get("hello");
b.get("bolbona");
b.get("sanu");
b.get("okay");
