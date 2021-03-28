//BubbleSort without any help of others

function bubbleSort(arr) {
  let end = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}
bubbleSort([3, 2, 1, 2, 3, 3, 2, 1]);
bubbleSort([1, 2, 3, 3, 2, 1, 3, 6, 84, 2]);
bubbleSort([1, 2, 3, 3, 5, 8, 2, 1]);
