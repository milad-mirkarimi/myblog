class User < ApplicationRecord
  has_many :articles, dependent: :destroy

  has_secure_password

  validates :email, presence: true, uniqueness: true
  validates :fullname, presence: true, length: { maximum: 120 }
end
