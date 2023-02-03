const harmlessRansomNote = (noteText, magazineText) => {
  const magazineMap = magazineText.split(" ").reduce((counts, word) => {
    counts[word] = (counts[word] || 0) + 1;
    return counts;
  }, {});

  return noteText.split(" ").every((word) => {
    if (!magazineMap[word]) return false;
    magazineMap[word] -= 1;
    return true;
  });
};

const possible = harmlessRansomNote(
  "this is a secret",
  "this is the magazine text that has a secret"
);

console.log(possible);
