// O(nlog(n)) time | O(1) space
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => a - b);
    
    let totalSpeed = 0;
    for(let i = 0; i < redShirtSpeeds.length; i++) {
      let rider1 = redShirtSpeeds[i];
      let rider2 = blueShirtSpeeds[fastest ? blueShirtSpeeds.length - 1 - i : i];
      totalSpeed += Math.max(rider1, rider2);
    }
    return totalSpeed;
}