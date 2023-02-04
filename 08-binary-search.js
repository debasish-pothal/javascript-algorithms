const binarySearch = (numArray, num) => {
  let start = 0;
  let end = numArray.length - 1;

  while (start <= end) {
    const mid = Math.round((start + end) / 2);

    if (numArray[mid] > num) {
      end = mid - 1;
    } else if (numArray[mid] < num) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
};

const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6);
console.log(result);
