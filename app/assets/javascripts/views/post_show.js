JournalApp.Views.PostShow = Backbone.View.extend({
  events: {
    'click .hide-me': 'remove',
    "click button.delete-post" : "deletePost"// ,
//     'click .edit-me': "edit"
  },
  
  attributes: {
    id: 'content-template'
  },
  
  template: JST["posts/show"],
  
  render:  function() {
    var renderedContent = this.template({
      post: this.model
    });
    this.$el.html(renderedContent);

    return this;
  },
  
  // edit: function() {
  //   Backbone.history.navigate('/posts/edit', { trigger: true });
  // },
  
  deletePost: function(event) {
    var view = this;
    event.preventDefault();
    var id = $(event.currentTarget).data("id");
    var model = new JournalApp.Models.Post({"id": id});
    model.destroy({
      success: function(){
        view.model.collection.remove(model);
        view.$el.remove();
        Backbone.history.navigate('/', { trigger: true });
      }
    })
  }
  // initialize:
  // events:
  // deletePost:
  
});