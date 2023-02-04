const twoSum = (numArray, sum) => {
  const numHash = new Map();

  for (const num of numArray) {
    const rem = sum - num;

    if (numHash.has(rem)) {
      return [num, rem];
    }

    numHash.set(num, true);
  }

  return [];
};

const result = twoSum([1, 6, 4, 5, 3, 3], 7);
console.log(result);
