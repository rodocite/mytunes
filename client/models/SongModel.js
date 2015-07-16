// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function() {
    console.log("SongModel init");
  },

  // logger: function(){
  //   console.log('logger');
  // },

  // Triggered in library entry view
  play: function(){
    console.log("SongModel play");
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    console.log("SongModel enqueue");
    this.trigger('enqueue', this)
  },

  dequeue: function(){
    this.trigger('dequeue', this)
  },

  ended: function(){
    console.log('ended in SongModel')
    this.trigger('ended', this)
  }

});
