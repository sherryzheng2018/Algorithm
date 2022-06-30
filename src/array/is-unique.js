// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
    let numberMap = {};

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];

        if (numberMap[currentNum] === true) {
            return false;
        }
        numberMap[currentNum] = true;
    }
    return true;
};
