// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    let wordsList = str.split(' ');
    let result = [];
    for (let i = 0; i < wordsList.length; i++) {
        let word = wordsList[i].split('');
        word[0] = word[0].toUpperCase();
        result.push(word.join(''));
    }
    return result.join(' ');
};
