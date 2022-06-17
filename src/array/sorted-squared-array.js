// O(nlog(n)) Time  | O(n) Space where n is the length of the input array;
function sortedSquaredArray(array) {
    let result = [];
    for (const element of array) {
        result.push(element * element);
    }

    result.sort((a, b) => a - b);
    return result;
}