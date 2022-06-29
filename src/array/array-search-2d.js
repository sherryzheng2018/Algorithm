// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

var arraySearch2D = function(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === 'X') {
                count++;
            }
        }
    }
    return count;
};

console.log(
    arraySearch2D(
        ['X','O','O','O'],
        ['O','O','O','O'],
        ['X','X','X','X'],
        ['X','O','O','O'],
    )
)
