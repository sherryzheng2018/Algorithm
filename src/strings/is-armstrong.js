// Write a function that takes a positive integer 
// and returns true if the integer is an armstrong number, else return false. 
// To find out if a number is an armstrong number, 
// take each individual digit and raise it to the power of the length of the entire number 
// and add the digits. If the sum equals the original number, the number is an armstrong number

var isArmstrong = function(num) {
    let numString = num.toString(); // same as use String(num);
    let power = numString.length; // turn the number to a string and get the length of the string
    let sum = 0;

    for (let i = 0; i < power; i++) {
       let digit = numString[i];
       sum += digit ** power;
    }
    return sum === num;
};
