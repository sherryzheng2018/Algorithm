// O(n^2) time | O(1) space
function firstNonRepeatingCharacter(string) {
    for (let i = 0; i < string.length; i++) {
      let foundDuplicated = false;
      for (let j = 0; j < string.length; j++) {
        if (string[i] === string[j] && j !== i) foundDuplicated = true;
      }
      if (!foundDuplicated) return i;
    }
    return -1;
}
  
  // O(n) time | O(1) space
function firstNonRepeatingCharacter(string) {
    let countingCharacters = {};
    for (const character of string) {
      if (!(character in countingCharacters)) countingCharacters[character] = 0;
      countingCharacters[character]++;
    }
  
    for (let i = 0; i < string.length; i++) {
      const character = string[i];
      if (countingCharacters[character] === 1) return i;
    }
    return -1;
}