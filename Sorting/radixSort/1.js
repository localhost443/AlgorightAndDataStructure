function getDigit(n, i = -1) {
  n = n.toString();
  if (i === -1) return n.length;
  let m = n.length - (i + 1);
  let val = parseInt(n[m]);
  return isNaN(val) ? 0 : val;
}

function mostDigits(nums) {
  let num = 0;
  for (let i = 0; i < nums.length; i++) {
    if (getDigit(nums[i]) > num) {
      num = getDigit(nums[i]);
    }
  }
  return num;
}

function raDix(arr) {
  let maxDigit = mostDigits(arr);
  console.log(maxDigit);
  for (let i = 0; i <= maxDigit; i++) {
    let bucket = [[], [], [], [], [], [], [], [], [], []];
    for (let j = 0; j < arr.length; j++) {
      let z = getDigit(arr[j], i);
      bucket[z].push(parseInt(arr[j]));
    }
    arr = [].concat.apply([], bucket);
  }
  return arr;
}

// let z = -1234;
// getDigit(z);
raDix([1, 2, 3, 4, 11, 111, 22, 33, 45412441, 2, 3, 11, 23, 4555]);
