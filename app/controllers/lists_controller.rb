# frozen_string_literal: true

class ListsController < ApplicationController
  before_action :find_list, only: %i[show destroy]

  def index
    @lists = List.all
  end

  def show
    @movies = @list.movies
  end

  def new
    @list = List.new
  end

  def create
    @list = List.new(set_params)
    if @list.save
      redirect_to list_path(@list)
    else
      render :new
    end
  end

  def destroy
    @list.delete
    redirect_to lists_path
  end

  private

  def find_list
    @list = List.find(params[:id])
  end

  def set_params
    params.require(:list).permit(:name, :bg_url)
  end
end
