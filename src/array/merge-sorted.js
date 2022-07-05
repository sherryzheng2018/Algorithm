// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function (arr1, arr2) {
    let result = [];
    
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        let num1 = arr1[i];
        let num2 = arr2[j];

        if (num1 < num2) {
            result.push(num1);
            i++;
        } else {
            result.push(num2);
            j++;
        }
    }

    while (i < arr1.length) {
        let num1 = arr1[i];
        result.push(num1);
        i++;
    }

    while (j < arr2.length) {
        let num2 = arr2[j];
        result.push(num2);
        j++;
    }

    return result;
};
