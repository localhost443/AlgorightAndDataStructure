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
  while(i<n.length) {
    boo.push(n[i])
    i++;
  }
  while(j<m.length) {
    boo.push(m[j])
    j++;
  }
  return boo;
}

margeArray([3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 4, 6, 8]);
