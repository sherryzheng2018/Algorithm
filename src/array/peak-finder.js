// A peak is defined as a location in the array 
// where the value is greater than every number to the left 
// and every number to the right. Return the value found at the array's peak

const peakFinder = function(nums) {
// if there is only one element in the array, return the number;
  if (nums.length === 1) {
    return nums[0];
  }
// if there are more than one number
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    // find the middle index of the array
    let mid = Math.floor((left + right)/2);
    // if the middle number is larger than the number next to it
    if (nums[mid] > nums[mid + 1]) {
      // means all the numbers left will be larger than right side, so point the mid number as the right number;
      right = mid;
    } else if (nums[mid] < nums[mid + 1]) { //else if the mid number is smaller, means all numbers right will be larger than left;
      left = mid + 1; // point the mid number as the left number;
    }  
  }
  return nums[left];
};
