function margeArray(n, m) {
  let boo = [];
  let i = 0;
  let j = 0;
  while (i < n.length && j < m.length) {
    if (n[i] < m[j]) {
      boo.push(n[i]);
      i++;
    } else {
      boo.push(m[j]);
      j++;
    }
  }
  while (i < n.length) {
    boo.push(n[i]);
    i++;
  }
  while (j < m.length) {
    boo.push(m[j]);
    j++;
  }
  return boo;
}

function cutByHalf(arr) {
  if (arr.length <= 1) return arr;
  const half = Math.floor(arr.length / 2);
  const firstHalf = cutByHalf(arr.slice(0, half));
  const secondHalf = cutByHalf(arr.slice(half));
  return margeArray(firstHalf, secondHalf);
}

console.log(cutByHalf([3, 4, 5, 6]));
