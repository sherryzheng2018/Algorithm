// Write function that takes in two strings and returns true if one character away, otherwise false

const oneEditAway = function(str1, str2) {
    // return false if the different of both lengths larger than 1 or equal
    if (Math.abs(str1.length - str2.length) > 1 || str1 === str2) return false;
    let counts = 0;
    let str1Idx = 0;
    let str2Idx = 0;

    while (str1Idx < str1.length && str2Idx < str2.length) {
        // if characters in strings are not a match
        if (str1[str1Idx] !== str2[str2Idx]) {
            // if counts already equals to 1, returen false
            if (counts === 1) return false;
            // if one string is longer, then can only add one character
            if (str1.length > str2.length) {
                str1Idx++;
            } else if (str2.length > str1.length) {
                str2Idx++;
            } else {
                str1Idx++;
                str2Idx++;
            }
            counts++;
        // if characters are the same
        } else {
            str1Idx++;
            str2Idx++;
        }
    }
    return true;
}
