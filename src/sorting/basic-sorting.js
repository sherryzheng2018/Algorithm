// bubble sort
// Average: O(n^2) time | O(1) space;
// Best: O(n) time | O(1) space;
// Worst: O(n^2) time | O(1) space;
function bubbleSort(array) {
    let isSorted = false;
    while(!isSorted) {
      isSorted = true;
      for (let i = 0; i < array.length - 1; i++) {
          for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
              const temp = array[i];
              array[i] = array[j];
              array[j] = temp;
              isSorted = false;
            }
        }
      } 
    }
    return array;
}
  

// insertion sort
// Average: O(n^2) time | O(1) space;
// Best: O(n^2) time | O(1) space;
// Worst: O(n^2) time | O(1) space;
function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j >= 0 && array[j] > array[j + 1]; j--) {
            const temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}

// selection sort
// Average: O(n^2) time | O(1) space;
// Best: O(n) time | O(1) space;
// Worst: O(n^2) time | O(1) space;
function selectionSort(array) {
    let start = 0;
    while (start < array.length - 1) {
        let smallestIdx = start;
        for (let i = start + 1; i < array.length; i++) {
            if (array[smallestIdx] > array[i]) {
                smallestIdx = i;
            }
        }
        const temp = array[smallestIdx];
        array[smallestIdx] = array[start];
        array[start] = temp;
        start++;
    }
    return array;
}