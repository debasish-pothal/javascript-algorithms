const reverseArray = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start += 1;
    end -= 1;
  }

  return arr;
};

console.log(reverseArray([1, 2, 3, 4, 5]));
