JournalApp::Application.routes.draw do

  root :to => "root#root"
    
  resources :posts 
end
