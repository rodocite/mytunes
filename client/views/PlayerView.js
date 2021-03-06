// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    console.log("PlayerView init");

  //   var self = this;

  //   this.$el.bind('ended', function(){
  //     self.model.ended();
  //   })

  this.$el.on('ended', (function(){ this.model.ended()}).bind(this) );

  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    console.log("playerview render this", this)
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  },



});
