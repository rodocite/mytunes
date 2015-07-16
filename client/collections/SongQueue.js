// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  // model: SongModel,//?

  initialize: function(params){

    console.log("songQueue init")

  },

  playFirst: function() {
    this.trigger('play', this);
  },

  addSong: function(modelSong) {
    this.add(modelSong);
    console.log("addSong in SQ")
    this.displayQueue();
    if(this.length < 2) {
      this.playFirst();
    }

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
