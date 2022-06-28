// Write code to create a function that accepts an array of numbers, 
// finds the largest two numbers, and returns the product of the two

// solution 1
var productOfLargestTwo = function(arr) {
    let sorted = arr.sort((a, b) => b - a);
    return sorted[0] * sorted[1];
};


// solution 2
var productOfLargestTwo = function(arr) {
    let firstLargest = null;
    let secondLargest = null;
    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];
        if (currentNumber > firstLargest || firstLargest === null) {
            secondLargest = firstLargest;
            firstLargest = currentNumber;
        } else if (currentNumber > secondLargest || secondLargest === null) {
            secondLargest = currentNumber;
        }
    }

    return firstLargest * secondLargest;
}