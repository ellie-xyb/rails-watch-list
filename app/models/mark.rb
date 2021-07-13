# frozen_string_literal: true

class Mark < ApplicationRecord
  belongs_to :movie
  validates :movie, uniqueness: true
  validates :rating, inclusion: { in: [0, 1] }, numericality: { only_integer: true }
  attribute :rating, :integer, default: 0
end
