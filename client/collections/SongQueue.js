// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  // model: SongModel,//?

  initialize: function(params){

    console.log("songQueue init")


    this.listenTo(this, 'enqueue', this.addSong());
    this.listenTo(this, 'dequeue', this.removeSong());
    this.listenTo(this, 'ended', this.playNext());
    //add listeners

  },

  playFirst: function() {
    console.log(this)
    this.at(0).play();
  },

  addSong: function(modelSong) {
    this.add(modelSong);
    this.displayQueue();
    if(this.length === 1) {
      this.playFirst();
    }
  },

  removeSong: function(song) {
    // maybe play next
    this.displayQueue();
    if(this.at(0) === song) {
      this.playNext();
    }
    this.remove(song);
  },

  displayQueue: function() {
    // Check if song was added or removed
    var queue = [];
    queue = this.slice();
    console.log(queue);
  },

  playNext: function() {
    console.log("ended & triggered playNext")
    this.shift();
    if( this.length >= 1 ){
      this.playFirst();
    }
    //check if there is next song
      //if next song
         //remove previous song out of queue
           //play next song
  }
});
