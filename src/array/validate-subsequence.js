//  O(n) Time | O(1) Space
function isValidSubsequence(array, sequence) {
    let seqIdx = 0;
    for (const element of array) {
        if (seqIdx === sequence.length) break;
        if (sequence[seqIdx] === element) seqIdx++;
    }
    return seqIdx === sequence.length;
}
  
  // O(n) Time | O(1) Space
  function isValidSubsequence(array, sequence) {
    let seqIdx = 0;
    let arrIdx = 0;
    while (arrIdx < array.length && seqIdx < sequence.length) {
      if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
      arrIdx++
    }
    return seqIdx === sequence.length;
}
