// Write a function that takes an array and a positive integer and "rotates" the array to the left by the integer
// Modify the original array rather than returning a new one
// There is no need to return from this function

const leftRotation = (arr, positions) => {
    if (arr.length === 0) return;

    while (positions > 0) {
        let num = arr.shift();
        arr.push(num);
        positions--;
    }
};
