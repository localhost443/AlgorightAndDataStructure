//I couldnet implement it myself. So , I wil try it later.

function q1(arr, pvt = 0, start = 0, end = 0) {
  if (end === 0) end = arr.length - 1;
  let realpvt = pvt;
  let foundBefore = false;
  while (start + 1 <= end) {
    if (arr[pvt] >= arr[start]) {
      realpvt++;
      if (foundBefore == true) {
        [arr[realpvt], arr[start]] = [arr[start], arr[realpvt]];
      }
    }
    if (arr[pvt] < arr[start]) {
      foundBefore = true;
    }
    start++;
  }
  [arr[realpvt], arr[pvt]] = [arr[pvt], arr[realpvt]];
  return realpvt;
}
function quicksort(arr, left = 0, right = arr.length - 1) {
  if (left < left) {
    return;
  }
  console.log(arr);
  let pvtindex = q1(arr, left, right);
  quicksort(arr, left, pvtindex - 1);
  quicksort(arr, pvtindex + 1, right);
  return arr;
}
//let z = q1([9, 3, 2, 5, 2, 6, 2, 1.js, 4]);
let z = quicksort([9, 3, 2, 5, 2, 6, 2, 1, 4]);
//console.log(z);
// let b = q1(z[0], 0, 1.js, 3);
// console.log(b);
// let c = q1(z[0], 5, 6, 7);
// console.log(c);
