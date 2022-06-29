// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

// O(nlog(n)) time | O(1) space;
var mostSongsInPlaylist = function(arr) {
  let songList = arr.sort((a, b) => a - b);
  let totalSongs = 0;
  let totalMin = 0;
  for (let i = 0; i < songList.length; i++) {
    let currentSumDuration = songList[i];
    if (totalMin + currentSumDuration <= 60) {
      totalMin += currentSumDuration;
      totalSongs++;
    }
  }
  return totalSongs;
};
