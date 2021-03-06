# frozen_string_literal: true

class Movie < ApplicationRecord
  validates :title, uniqueness: true, presence: true
  validates :overview, presence: true
  has_many :bookmarks
  has_one :mark, dependent: :destroy
  has_one :bookmark, -> { joins(:list) }
end
