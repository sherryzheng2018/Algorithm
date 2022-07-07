// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

var permutationSubstring = function(str, sub) {
    let elements = {};

    for (let i = 0; i < sub.length; i++) {
        let subLetter = sub[i];

        if (subLetter in elements) {
            elements[subLetter]++;
        } else {
            elements[subLetter] = 1;
        }
    }

    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (letter in elements) {
            elements[letter]--;
        }
    }

    for (let key in elements) {
        if (elements[key] > 0) {
            return false;
        }
    }
    return true;
};
