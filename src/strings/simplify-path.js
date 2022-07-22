// Write a function that takes in an absolute file path and simplifies it

var simplifyPath = function(path) {
    let stack = [];
    let pathArray = path.split('/');

    for (let i = 0; i < pathArray.length; i++) {
        if (pathArray[i] === '.' || pathArray[i] === '') {
            continue;
        } else if (pathArray[i] === '..') {
            if (!stack.length) {
                continue;
            }
            stack.pop();
        } else {
            stack.push(pathArray[i]);
        };
    }
    return '/' + stack.join('/');
};
