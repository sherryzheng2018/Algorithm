// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
    if (strA.length !== strB.length) return false;

    let letterAMap = {};
    let letterBMap = {};
    for (let i = 0; i < strA.length; i++) {
        let strALetter = strA[i];
        let strBLetter = strB[i];

        letterAMap[strALetter] = (letterAMap[strALetter] || 0) + 1;
        letterBMap[strBLetter] = (letterBMap[strBLetter] || 0) + 1;
    }

    for (const key in letterAMap) {
        if (letterAMap[key] !== letterBMap[key]) return false;
    }

    return true;
};
