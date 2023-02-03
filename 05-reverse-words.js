const reverseWords = (str) =>
  str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");

const result = reverseWords("this is a string of words");
console.log(result);
