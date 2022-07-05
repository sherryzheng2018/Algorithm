// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

var arrayIntersection = function(arr1, arr2) {
    let map = {};
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        let num = arr1[i];

        if (!map[num]) {
            map[num] = 1;
        } else {
            map[num]++;
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        let num = arr2[i];

        if (map[num]) {
            result.push(num);
            map[num]--;
        }
    }

    return result;
};
