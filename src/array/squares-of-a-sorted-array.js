// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

// solution 1 - less efficient
var sortedSquares = function(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * arr[i]);
    }
    return result.sort((a, b) => a - b);
};

// solution 2
var sortedSquares = function(arr) {
    let result = new Array(arr.length);

    let left = 0;
    let right = arr.length - 1;
    let i = result.length - 1;

    while (left <= right) {
        let leftNum = arr[left];
        let rightNum = arr[right];

        if (Math.abs(leftNum) > Math.abs(rightNum)) {
            result[i] = leftNum * leftNum;
            left++;
        } else {
            result[i] = rightNum * rightNum;
            right--;
        }

        i--;
    }
    return result;
}