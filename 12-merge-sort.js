const merge = (arr1, arr2) => {
  const arr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    arr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    arr.push(arr2[j]);
    j++;
  }

  return arr;
};

const mergeSort = (numArray) => {
  if (numArray.length < 2) {
    return numArray;
  }

  const mid = Math.floor(numArray.length / 2);
  const firstArr = numArray.slice(0, mid);
  const secondArr = numArray.slice(mid);

  return merge(mergeSort(firstArr), mergeSort(secondArr));
};

const result = mergeSort([3, 6, 4, 5, 1, 2, 9, 8, 7]);
console.log(result);
