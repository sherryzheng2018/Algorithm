// Write a function to take a string and return true if 
// it contains valid sets of matching brackets, else return false

var validBrackets = function(str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char === '(' || char === "[" || char === "{") {
            stack.push(char);
            continue;
        }

        if (char === ")") {
            if (stack.pop() !== "(") {
                return false;
            }
            continue;
        }

        if (char === "]") {
            if (stack.pop() !== "[") {
                return false;
            }
            continue;
        }

        if (char === "}") {
            if (stack.pop() !== "{") {
                return false;
            }
            continue;
        }
    }
    return stack.length === 0;
};