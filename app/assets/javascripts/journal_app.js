window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    
    JournalApp.Collections.posts.fetch({
      success: function() {
        var indexView = new JournalApp.Views.PostsIndex({
          collection: JournalApp.Collections.posts
        });
        $('#index-content').html(indexView.render().$el);
        
   
        new JournalApp.Routers.PostsRouter();
        Backbone.history.start();
      }
    });

  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
