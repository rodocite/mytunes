// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
    console.log("this.model in SQEV", this.model);

      this.model.enqueue();
      this.model.play();  //play method in songModel
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
