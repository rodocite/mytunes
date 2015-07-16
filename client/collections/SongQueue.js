// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  initialize: function(){
  },

  play: function() {

  },

  addSong: function(modelSong) {
    this.push(modelSong);
    console.log("addSong")
    this.displayQueue();
  },

  removeSong: function(modelSong) {
    // iterate through queue?
      // find song at correct position?
        // remove song
    this.remove(modelSong);
    this.displayQueue();
  },

  displayQueue: function() {
    var queue = [];
    queue = this.slice();
    console.log(queue);
  }



});
