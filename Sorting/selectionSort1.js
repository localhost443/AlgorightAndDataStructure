function selectionSort(arr) {
  for (let i = 0; i <= arr.length; i++) {
    let swap = false;
    let min = arr[i];
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      console.log(arr[j]);
      if (min > arr[j]) {
        console.log("Small found");
        minIndex = j;
        min = arr[j];
        swap = true;
      }
    }
    if (i !== minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    if (swap === false) break;
    console.log("****");
    console.log(arr);
  }
}

//selectionSort([3, 2, 1.js, 2, 3, 3, 2, 1.js]);
selectionSort([9, 1, 2, 3, 4, 5, 6, 7, 8]);
//selectionSort([1.js, 2, 3, 3, 2, 1.js, 3, 6, 84, 2]);
//selectionSort([1.js, 2, 3, 3, 5, 8, 2, 1.js]);
