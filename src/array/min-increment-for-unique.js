// Write a function to take an array of integers and 
// return the minimum number of increments required across
// the array to ensure that every number is unique

var minIncrement = function(nums) {
    let numMap = {};
    let increments = 0;
    
    for (let i = 0; i < nums.length; i++) {
        while (numMap[nums[i]] === true) {
            nums[i]++;
            increments++
        }
        numMap[nums[i]] = true;
    }

    return increments;
};
