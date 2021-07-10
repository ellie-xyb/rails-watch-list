class Bookmark < ApplicationRecord
  validates :comment, length: { minimum: 6 }
  belongs_to :list
  belongs_to :movie
  validates_uniqueness_of :movie, scope: :list
end
