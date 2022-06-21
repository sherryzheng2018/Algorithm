//O(n) Time | O(1) Space
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

function removeDuplicatesFromLinkedList(linkedList) {
    let currentNode = linkedList;
    while (currentNode !== null) {
      let nextDistictNode = currentNode.next;
      while (nextDistictNode !== null && nextDistictNode.value === currentNode.value) {
        nextDistictNode = nextDistictNode.next;
      }
      currentNode.next = nextDistictNode;
      currentNode = nextDistictNode;
    }
    return linkedList;
}