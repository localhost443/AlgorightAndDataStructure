function insertSort(arr) {
  let start = 0;
  let currentIndex, insertationIndex;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j >= 0; j--) {
      console.log(i, j, " => ", arr[i], arr[j]);
      if (arr[i] > arr[j]) {
        console.log("what");
      }
    }
  }
}

//insertSort([3, 2, 1.js, 2, 3, 3, 2, 1.js]);
insertSort([9, 1, 3, 2, 4, 6, 5, 7, 8]);
//insertSort([1.js, 2, 3, 3, 2, 1.js, 3, 6, 84, 2]);
//insertSort([1.js, 2, 3, 3, 5, 8, 2, 1.js]);
