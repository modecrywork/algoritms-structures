function bubleSort(arr) {
  for (let i = 0, endI = arr.length; i < endI; i++) {
    let wasSwap = false;
    for (let j = 0, endJ = endI - i; j < endJ; j++) {
      if (arr[j] > arr[j + 1]) {
        let swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
        wasSwap = true;
      }
    }
    if (wasSwap) break;
  }
}

const array = [8, 4, 5, 6, 7];
bubleSort(array);
console.log(array);
