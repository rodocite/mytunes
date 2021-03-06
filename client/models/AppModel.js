// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    console.log("appmodel init");

    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    this.listenTo(params.library, 'play', function(song){
      this.set('currentSong', song);
    });

    this.listenTo(params.library, 'enqueue', function(song){
      this.get('songQueue').addSong(song);
    });

    this.listenTo(params.library, 'ended', function(song){
      // this.set('currentSong', song);
      console.log('ended in appModel')
      this.get('songQueue').removeSong(song);
    });

    // this.listenTo(params.library, 'dequeue', function(song){
    //   // this.set('currentSong', song);
    // });

    //listenTo stop
      // this.set('currentSong', song);
  }

});
    // params.library.on('play', function(song){

    //   this.set('currentSong', song);
    // }, this);
