# frozen_string_literal: true

class BookmarksController < ApplicationController
  before_action :find_list, only: %i[new create]
  def new
    @bookmark = Bookmark.new
  end

  def create
    @bookmark = Bookmark.new(set_params)
    @bookmark.list = @list
    if @bookmark.save
      redirect_to list_path(@list)
    else
      render :new
    end
  end

  private

  def find_list
    @list = List.find(params[:list_id])
  end

  def set_params
    params.require(:bookmark).permit(:comment, :movie_id)
  end
end
