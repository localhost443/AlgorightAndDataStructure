//BubbleSort without any help of others

function bubbleSort(arr) {
  let end = arr.length - 1;
  for (let i = end; i > 0; i--) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}
bubbleSort([3, 2, 1, 2, 3, 3, 2, 1]);
//bubbleSort([1.js, 2, 3, 3, 2, 1.js, 3, 6, 84, 2]);
//bubbleSort([1.js, 2, 3, 3, 5, 8, 2, 1.js]);
