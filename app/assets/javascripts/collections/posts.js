JournalApp.Collections.Posts = Backbone.Collection.extend({
  model: JournalApp.Models.Post,
  url: "/posts"
  
});

JournalApp.Collections.posts = new JournalApp.Collections.Posts(); 

