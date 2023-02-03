const caesarCipher = (str, num) => {
  num = num % 26;

  return str
    .split("")
    .map((char) => {
      if (char === " ") return " ";

      let code = char.charCodeAt() + num;

      if (code > 122) code = code - 26;

      return String.fromCharCode(code);
    })
    .join("");
};

const result = caesarCipher("zoo keeper", 2);
console.log(result);
