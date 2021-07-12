class Mark < ApplicationRecord
  belongs_to :movie
  validates :movie, uniqueness: true
  validates :rating, presence: true
  validates :rating, inclusion: { in: (1..5) }, numericality: { only_integer: true }
end
