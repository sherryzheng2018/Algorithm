// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

var commonElement = function(arrA, arrB) {

    for (let i = 0; i < arrA.length; i++) {
        let numA = arrA[i];
        for (let j = 0; j < arrB.length; j++) {
            let numB = arrB[j];
            if (numA === numB) {
                return numA;
            }
        }
    }
};


var commonElement = function(arrA, arrB) {
    var element = {};

    for (let i = 0; i < arrA.length; i++) {
        let num = arrA[i];
        element[num] = true;
    }

    for (let i = 0; i < arrB.length; i++) {
        let num = arrB[i];
        if (element[num] === true);
        return num;
    }
};

var commonElement = function(arrA, arrB) {
    let elements = new Set();

    for (let i = 0; i < arrA.length; i++) {
        let num = arrA[i];
        elements.add(num);
    }

    for (let i = 0; i < arrB.length; i++) {
        let num = arrB[i];
        if (elements.has(num)) return num;
    }
};