// O(nlog(n)) Time - where n is the length of the array
// O(1) Space 
function minimumWaitingTime(queries) {
    queries.sort((a, b) => a - b);
    let minWaitingTime = 0;
    for (let i = 0; i < queries.length; i++) {
      minWaitingTime += queries[i] * (queries.length - 1 - i);
    }
    return minWaitingTime;
}
  