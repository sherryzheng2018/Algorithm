class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // O(n) Time | O(n) Space;
  function branchSums(root) {
    let sums = [];
    branchSumsHelper(root, 0, sums);
    return sums;
  }
  
  function branchSumsHelper(node, runningSum, sums) {
    if (!node) return;
    let newRunningSum = runningSum + node.value;
    if (!node.left && !node.right) {
      sums.push(newRunningSum);
      return;
    }
    branchSumsHelper(node.left, newRunningSum, sums);
    branchSumsHelper(node.right, newRunningSum, sums);
  }
  