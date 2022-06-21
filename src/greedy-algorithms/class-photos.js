// O(nlog(n)) Time | O(1) Space
function classPhotos(redShirtHeights, blueShirtHeights) {
    //sort the two lines
    //check the first height of each color line
    //if red first is taller, then every other one in red should be taller than the one in blue with the same position, if not return false
    redShirtHeights.sort((a, b) => a - b);
    blueShirtHeights.sort((a, b) => a - b);
  
    const firstRow = redShirtHeights[0] > blueShirtHeights[0] ? 'Blue' : 'Red';
    for (let i = 0; i < blueShirtHeights.length; i++) {
      if (firstRow === 'Blue') {
        if (redShirtHeights[i] <= blueShirtHeights[i]) return false;
      } else if(redShirtHeights[i] >= blueShirtHeights[i]) return false;
    }
    return true;
}
  