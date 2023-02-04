const bubbleSort = (numArray) => {
  for (let i = 0; i < numArray.length - 1; i++) {
    for (let j = 0; j < numArray.length - i - 1; j++) {
      if (numArray[j] > numArray[j + 1]) {
        [numArray[j], numArray[j + 1]] = [numArray[j + 1], numArray[j]];
      }
    }
  }

  return numArray;
};

const result = bubbleSort([3, 6, 4, 5, 1, 2, 9, 8, 7]);
console.log(result);
