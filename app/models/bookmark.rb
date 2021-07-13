# frozen_string_literal: true

class Bookmark < ApplicationRecord
  # validates :comment, length: { minimum: 6 }
  validates :rating, inclusion: { in: (0..5) }, numericality: { only_integer: true }
  validates :comment, length: { minimum: 6 }
  attribute :rating, default: 0
  belongs_to :list
  belongs_to :movie
  validates_uniqueness_of :movie, scope: :list
end
