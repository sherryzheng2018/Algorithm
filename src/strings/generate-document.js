// O(n + m) time - where n is the number of characters,
// m is the length of document
// O(c) space - where c is the number of unique characters in the string
function generateDocument(characters, document) {
  let characterCounts = {}
  for (const character of characters) {
      if (!(character in characterCounts)) characterCounts[character] = 0;
      characterCounts[character]++;
  }
  for (const character of document) {
      if (!(character in characterCounts) || characterCounts[character] === 0) return false;
      characterCounts[character]--;
  }
  return true;
}