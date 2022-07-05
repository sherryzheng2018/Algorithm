// solution 1
var multiplyInto20 = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] * arr[j] === 20 && i !== j) {
        return true;
      } 
    }
  }
  return false;
};

// solution 2
var multiplyInto20 = function(arr) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    let targetNum = 20 / currentNum;

    if (map[targetNum]) {
      return true;
    }
    map[currentNum] = true;
  }
  return false
}
