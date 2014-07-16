class PostsController < ApplicationController
  
  def create
    @post = Post.new(post_params)
    if @post.save
      render :json => @post
    else
      render :json => @post.errors.full_messages, status: 422
    end
  end
  
  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render :json => @post
  end
  
  def index
    @posts = Post.all
    render :json => @posts
  end
  
  def show
    @post = Post.find(params[:id])
    redner :json => @post
  end
  
  def post_params
    params.require(:post).permit(:title, :body)
  end
end
