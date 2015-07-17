// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  initialize: function() {
    this.listenTo(this.model, 'remove', this.remove)
  },

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {

      this.model.dequeue();
    }
  },


  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
