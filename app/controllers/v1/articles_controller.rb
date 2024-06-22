class V1::ArticlesController < ApplicationController
  before_action :authorize_request, only: [ :create ]

  def index
    @articles = Article.all
    render :index
  end

  def show
    @article = Article.includes(:sections).find(params[:id])
    render :show
  end

  def create
    @article = Article.new(article_params)
    @article.user = @current_user
    if @article.save
      render :show, status: :created
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  private

  def article_params
    params.require(:article).permit(:title, :description, sections_attributes: %i(title text image))
  end
end
