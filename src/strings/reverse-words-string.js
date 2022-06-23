// O(n) time | O(n) space
function reverseWordsInString(string) { // example: string = 'hello world'
  let words = []; // use the empty list to store the words; example: words = ['world', ' ', 'hello']
  let startOfWord = 0; // keep track of our stored word
  for (let i = 0; i < string.length; i++) {
    const character = string[i];
    if (character === ' ') { // loop throught the string until we hit the first space
      // the charaters before the space is the first word we want to add to the list
      words.push(string.slice(startOfWord, i)); // use slice() to add that word into the words list
      startOfWord = i; // starting point moves to i
    } else if (string[startOfWord] === ' ') {
      words.push(' '); // add space into the words list
      startOfWord = i;
    }
  }
  words.push(string.slice(startOfWord)); //add the last word into words list 
  reverseList(words); // reverse the list
  return words.join(''); 
}
  
  
function reverseList(list) {
  let start = 0,
    end = list.length - 1;
  while (start < end) {
    let temp = list[start];
    list[start] = list[end];
    list[end] = temp;
    start++;
    end--;
  }
}
  