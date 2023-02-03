const isPalindrome = (str) => {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) return false;
    start += 1;
    end -= 1;
  }

  return true;
};

const result = isPalindrome("abba");
console.log(result);
