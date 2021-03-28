//BubbleSort without any help of others

function bubbleSort(arr) {
  let a = 0;
  let end = arr.length;
  let noswap = true;
  for (let i = end; i > 0; i--) {
    console.log("pass");
    a++;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, "**", arr[j], arr[j + 1], "**");
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noswap = false;
      }
    }
    console.log(a);
    if (noswap === true) break;
  }

  return arr;
}
//bubbleSort([3, 2, 1.js, 2, 3, 3, 2, 1.js]);
bubbleSort([9, 1, 2, 3, 4, 5, 6, 7, 8]);
//bubbleSort([1.js, 2, 3, 3, 2, 1.js, 3, 6, 84, 2]);
//bubbleSort([1.js, 2, 3, 3, 5, 8, 2, 1.js]);
