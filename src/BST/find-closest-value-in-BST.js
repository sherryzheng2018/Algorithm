function findClosestValueInBst(tree, target) {
    return findClosestValueInBstHelper(tree, target, tree.value);
  }
  
  // Avarage: O(log(n)) Time | O(1) Space
  // Worst: O(n) time | O(n) Space;
  function findClosestValueInBstHelper(tree, target, closest) {
    let currentNode = tree;
    while (currentNode !== null) {
      if (Math.abs(currentNode.value - target) < Math.abs(closest - target)) {
        closest = currentNode.value;
      }
      if (currentNode.value < target) {
        currentNode = currentNode.right;
      } else if (currentNode.value > target) {
        currentNode = currentNode.left;
      } else {
        break;
      }
    }
    return closest;
  }
  
  // Recursive approach
  // Avarage: O(log(n)) Time | O(log(n)) Space
  // Worst: O(n) time | O(n) Space;
  function findClosestValueInBstHelper(tree, target, closest) {
    if (tree === null) return closest;
    if (Math.abs(tree.value - target) < Math.abs(closest - target)) {
      closest = tree.value;
    }
    if (target < tree.value) {
      return findClosestValueInBstHelper(tree.left, target, closest);
    } else if (target > tree.value) {
      return findClosestValueInBstHelper(tree.right, target, closest);
    } else {
      return closest;
    }
  }
  
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  