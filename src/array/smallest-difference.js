// Write a function that takes in two sorted arrays and returns
// a pair of numbers (one from each array) with the smallest difference

var smallestDifference = function(arr1, arr2) {
    let arr1Idx = 0;
    let arr2Idx = 0;
    let smallestDiff = Infinity;
    let bestPair = [];
    
    while (arr1Idx < arr1.length && arr2Idx < arr2.length) {
        let arr1Val = arr1[arr1Idx];
        let arr2Val = arr2[arr2Idx];
        let currentDiff = Math.abs(arr1Val - arr2Val);
        if (currentDiff < smallestDiff) {
            smallestDiff = currentDiff;
            bestPair = [arr1Val, arr2Val];

            if (smallestDiff === 0) {
                return bestPair;
            } 
        }

        if (arr1Val < arr2Val) {
            arr1Idx++;
        } else if (arr2Val < arr1Val) {
            arr2Idx++;
        }
    }  
    return bestPair;
};
