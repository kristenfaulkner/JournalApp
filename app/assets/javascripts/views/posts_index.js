JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts/index"],
  
  render: function() {
    var t = this.template( {posts: this.collection} );
    this.$el.html(t);
    return this;
  },
  
  initialize: function() {
    var view = this;
    this.listenTo(this.collection, "add remove change:title reset", this.render);
  },
  
  
  
});


//

// var $posts = JournalApp.fetch()
// $posts.each(function(post) {
//   this.$el.append(render_individual(post).$el;)
// })