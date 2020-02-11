function swap(arr, i, j) {
  let swap = arr[i];
  arr[i] = arr[j];
  arr[j] = swap;
}

function coctailSort(arr) {
  let left = (firstSwap = 0);
  let right = (lastSwap = arr.length - 1);

  while (left < right) {
    for (let i = left; i < right; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i + 1, i);
        lastSwap = i;
      }
    }
    right = lastSwap;

    for (let i = right; i > left; i--) {
      if (arr[i] < arr[i - 1]) {
        swap(arr, i - 1, i);
        firstSwap = i;
      }
    }
    left = firstSwap;
  }
  return arr;
}

const array = [4, 6, 9, 0, 2, 7, 33];
console.log(array);
console.log(coctailSort(array));
