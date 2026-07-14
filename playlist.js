// Constructor function that creates a new Playlist object.
// It sets up the playlist name, an empty list of songs, and no current song.
function Playlist(name) {
// "this" refers to the specific Playlist object being created.
// Stores the name of this playlist.
  this.name = name;
// Creates an empty array where songs will be stored.
  this.songs = [];
// Starts with no song playing, so the value is null.
  this.currentSong = null;
}


// This method adds a new song to the playlist.
// songTitle is the name of the song being added.
Playlist.prototype.addSong = function(songTitle) {
  // "this" refers to the current playlist object.
  // push() adds the new song to the end of the songs array.
  this.songs.push(songTitle);
};


// This method plays the first song in the playlist.
Playlist.prototype.playFirst = function() {
 // Checks if the playlist has at least one song.
  if (this.songs.length > 0) {

    // Sets the currentSong property to the first song in the array.
    this.currentSong = this.songs[0];

    // Displays the song that is currently playing.
    console.log("Now playing:", this.currentSong);
  }
};


// This method skips the current song and moves to the next song.
Playlist.prototype.skipSong = function() {


  // Checks if there is more than one song available.
  if (this.songs.length > 1) {

    // shift() removes the first song from the array.
    this.songs.shift();

    // After removing the first song, the next song becomes the current song.
    this.currentSong = this.songs[0];

    // Displays the new song that is playing.
    console.log("Skipped! Now playing:", this.currentSong);
  } else {

    // Runs when there are no additional songs available.
    console.log("No more songs to skip.");
  }
};

// This method displays information about the playlist.
Playlist.prototype.listSongs = function() {

  // Shows the playlist name using the current object's name property.
  console.log("Playlist:", this.name);

  // join(", ") converts the songs array into a readable string.
  console.log("Songs:", this.songs.join(", "));
};



// New method added to extend the Playlist object's behavior.
// This method removes a song from the playlist.
Playlist.prototype.removeSong = function(songTitle) {

  // filter() creates a new array without the song that matches songTitle.
  this.songs = this.songs.filter(song => song !== songTitle);

  // Displays which song was removed.
  console.log("Removed:", songTitle);
};


// Improvement suggestion:
// A future improvement could be adding a method that searches for songs
// or allows users to reorder songs in the playlist.


// Creating a new Playlist object called myMix.
let myMix = new Playlist("My Chill Mix");


// Adding songs to the playlist using the addSong() method.
myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");

// Plays the first song in the playlist.
myMix.playFirst();

// Skips the first song and plays the next one.
myMix.skipSong();

// Displays the playlist name and remaining songs.
myMix.listSongs();

// Testing the new removeSong() method.
myMix.removeSong("Evening Jazz");

// Displays the updated playlist after removing a song.
myMix.listSongs();
