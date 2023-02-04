const fibonacci = (n) => {
  let result = [];

  for (let i = 0; i < n; i++) {
    result.push(i <= 1 ? 1 : result[i - 1] + result[i - 2]);
  }

  return result;
};

const fibonacci2 = (n) => {
  if (n <= 2) {
    return 1;
  } else {
    return fibonacci2(n - 1) + fibonacci2(n - 2);
  }
};

const result = fibonacci2(9);
console.log(result);
