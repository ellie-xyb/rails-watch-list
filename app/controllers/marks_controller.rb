# frozen_string_literal: true

class MarksController < ApplicationController
  before_action :find_mark, only: [:update]
  # disable csrf for rails route
  skip_before_action :verify_authenticity_token, only: %i[create update]

  def index
    @marks = Mark.where('rating = 1')
  end

  def create
    @mark = Mark.new(mark_create_params)
    @movie = Movie.find(params[:movie_id].to_i)
    @mark.movie = @movie
    @mark.rating = 1
    @mark.save
  end

  def update
    @mark.update(mark_update_params)
  end

  private

  def find_mark
    @mark = Mark.find(params[:id])
  end

  def mark_create_params
    params.require(:mark).permit(:movie_id)
  end

  def mark_update_params
    params.require(:mark).permit(:rating)
  end
end
