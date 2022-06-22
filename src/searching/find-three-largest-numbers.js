//O(n) time || O(1) space
function findThreeLargestNumbers(array){
    const finalResult = [null, null, null];
    for (const num of array) {
      findThreeLargestNumbersHelper(finalResult, num);
    }
    return finalResult;
}
  
function findThreeLargestNumbersHelper(finalResult, num){
    if (finalResult[2] === null || num > finalResult[2]) {
      update(finalResult, num, 2);
    } else if (finalResult[1] === null || num > finalResult[1]) {
      update(finalResult, num, 1);
    } else if (finalResult[0] === null || num > finalResult[0]) {
      update(finalResult, num, 0);
    }
}
  
function update(array, num, i) {
    for (let j = 0; j <= i; j++) {
      if (j === i) {
        array[j] = num;
      } else {
        array[j] = array[j + 1];
      }
    }
}