// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    console.log("SQV init");

    this.render();
  },

  render: function(newQueue){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/

    this.$el.children().detach();

    this.$el.html('<th>Queue</th>')

    if(newQueue){
      this.$el.html('<th>Queue</th>').append(
        newQueue.map(function(song){
          return new SongQueueEntryView({model: song}).render();
        })
      )
    }

  },

  displayQueue: function(newQueue){
    this.model = newQueue;
    this.render(newQueue);
  }


});
