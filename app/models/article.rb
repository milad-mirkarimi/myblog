class Article < ApplicationRecord
  belongs_to :user
  has_many :sections, dependent: :destroy

  validates :title, presence: true, length: { maximum: 100 }
  validates :description, presence: true, length: { maximum: 500 }

  accepts_nested_attributes_for :sections, allow_destroy: true
end
