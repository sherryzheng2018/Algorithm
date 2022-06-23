// splict() -> turn the string into a new array;
// reverse() -> reverse the array;
// join() -> join all the elements into a string
// O(n) Time | O(1) Space;
function reverseString(string) {
    let splitString = string.split('');
    for (let i = 0; i < splitString.length; i++) {
      let end = splitString.length - 1 - i;
      if (i <= end) {
        let temp = splitString[i];
        splitString[i] = splitString[end];
        splitString[end] = temp;
      }
    }
    return splitString.join('');
}
  
  //create an empty string to store the new reversed string;
  //iterate from the last character of the string until the index hits 0;
  //add looped character into the new string;
  //return the reversed string
  // O(n) Time | O(n) Space;
function reverseString(string) {
    let newString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}
  
console.log(reverseString('hello'));
  