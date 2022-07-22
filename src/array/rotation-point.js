// Write a function that takes in an array of sorted strings and returns the index of its rotation point if it has one, else return -1

var rotationPoint = function(words) {
    let left = 0;
    let right = words.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (words[mid] < words[mid - 1]) {
            return mid;
        }

        if (words[left] > words[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
};
