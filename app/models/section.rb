class Section < ApplicationRecord
  belongs_to :article

  validates :text, presence: true

  before_save :sanitize_text

  ALLOWED_TAGS = %w[p b i em strong ul ol li h2 h3 blockquote a br pre code].freeze
  ALLOWED_ATTRIBUTES = %w[href target rel].freeze

  private

  def sanitize_text
    self.text = ActionView::Base.safe_list_sanitizer.sanitize(
      text,
      tags: ALLOWED_TAGS,
      attributes: ALLOWED_ATTRIBUTES
    )
  end
end
