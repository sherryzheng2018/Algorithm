function twoNumberSum(array, targetSum) {
    let result = [];
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            let sum = array[i] + array[j];
            if (sum === targetSum && i !== j) {
                result = [array[i], array[j]];
            }
        }
    }
    return result;
}