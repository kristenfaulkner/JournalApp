JournalApp.Routers.PostsRouter = Backbone.Router.extend({
  initialize: function() {
    // render index 
    this.$showEl = $('#show-content');
  },
  
  routes: {
    "posts/new": "postNew",
    "posts/:id": "postShow",
    "posts/:id/edit": "postEdit"
  },

  postShow: function (id) {
    
    var post = JournalApp.Collections.posts.get(id);
    
    var showView = new JournalApp.Views.PostShow({
      model: post
    });

    this._swapShowView(showView);
  },
  
  postEdit: function(id) {
    var post = JournalApp.Collections.posts.get(id);
    var formView = new JournalApp.Views.PostForm({
      model: post
    });
    this._swapShowView(formView);
  },

  _swapIndexView: function (newView) {
     if (this.currentIndexView) {
       this.currentIndexView.remove();
     }

     this.$indexEl.html(newView.render().$el);

     this.currentIndexView = newView;
   },
   
   _swapShowView: function (newView) {
      if (this.currentShowView) {
        this.currentShowView.remove();
      }

      this.$showEl.html(newView.render().$el);

      this.currentShowView = newView;
    },
    
    postNew: function() {
      var post = new JournalApp.Models.Post();
      var formView = new JournalApp.Views.PostForm({
        model: post
      });
      this._swapShowView(formView);
    }
    
});