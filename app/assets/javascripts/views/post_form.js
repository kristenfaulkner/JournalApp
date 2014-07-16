JournalApp.Views.PostForm = Backbone.View.extend({
  template: JST["posts/form"],
  
  render: function() {
    this.params = (this.params || {});
    var renderedContent = this.template({post: this.params["post"]});
    this.$el.html(renderedContent);
    return this;
  },
  
  events: {
    "submit form" : "submit"
  },

  submit: function(event) {
    var view = this;
    event.preventDefault();
    
    this.params = $(event.currentTarget).serializeJSON();
    if (this.model.isNew()){
      JournalApp.Collections.posts.create(this.model, {
        wait: true,
        success: function(response){
          Backbone.history.navigate('/', { trigger: true });
        },
        error: function(model, response){
          view.$el.append('Sorry, error');
          alert("Sorry, it looks like one of your fields is incorrect. Please try again.")
          view.render();
        }
      });
    } else {
      this.model.save(this.params["post"], {
        success: function(){
          Backbone.history.navigate('/', { trigger: true });
        },
        error: function(model, response){
          var errors = JSON.parse(response.responseText);
          alert(errors);
          view.render();
        }
      })
    }
  }
  
});