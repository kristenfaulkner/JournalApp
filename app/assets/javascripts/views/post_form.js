JournalApp.Views.PostForm = Backbone.View.extend({
  template: JST["posts/form"],
  
  render: function() {
    var renderedContent = this.template({
      post: this.model
    }); 
    this.$el.html(renderedContent);
    return this;
  },
  
  events: {
    "submit form" : "submit"
  },

  submit: function(event) {
    var view = this;
    event.preventDefault();
    
    var params = $(event.currentTarget).serializeJSON();
    if (this.model.isNew()){
      JournalApp.Collections.posts.create(params["post"], {
        wait: true,
        success: function(response){
          Backbone.history.navigate('/', { trigger: true });
        },
        error: function(model, response){
          alert("Sorry, it looks like one of your fields is incorrect. Please try again.")
          view.render();
        }
      });
    } else {
      this.model.save(params["post"], {
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