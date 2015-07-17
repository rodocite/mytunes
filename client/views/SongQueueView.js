// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.collection.on('add', this.addOne, this);
    this.render();
  },

  render: function(newQueue){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.html('<th>Song Queue</th>');
    this.collection.each(this.addOne, this);
  },

  addOne: function(song){
    var node = new SongQueueEntryView({model: song});
    this.$el.append(node.render());
  }


});
