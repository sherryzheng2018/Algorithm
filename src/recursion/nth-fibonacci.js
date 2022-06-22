//O(n^2) time | O(n) space - recursive solution
function getNthFib(n) {
    if(n === 1) return 0;
    if(n === 2) return 1;
    if (n > 2) {
      return getNthFib(n - 1) + getNthFib(n - 2);
    }
}
  
  //O(n) time | O(1) space - iterative solution
function getNthFib(n) {
    const lastTwo = [0, 1];
    let counter = 3;
    while (n >= counter) {
      const nextFib = lastTwo[0] + lastTwo[1];
      lastTwo[0] = lastTwo[1];
      lastTwo[1] = nextFib;
      counter++
    } 
    return n > 1 ? lastTwo[1] : lastTwo[0];
}