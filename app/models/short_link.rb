class ShortLink < ApplicationRecord
  before_validation :add_url_protocol
  after_initialize :set_defaults

  SLUG_LENGTH = 7
  # TODO: Might want to reduce the charset to improve readability
  # e.g. 0 vs O, 1 vs I
  SLUG_CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.chars.freeze

  private

  def set_defaults
    self.slug ||= random_unique_slug
  end

  def random_unique_slug
    # TODO: Not guaranteed to be unique - race condition between here and saving
    slug = random_slug
    slug = random_slug while ShortLink.exists?(slug: slug)
    slug
  end

  def random_slug
    (0...SLUG_LENGTH).map { SLUG_CHARS.sample }.join
  end

  def add_url_protocol
    uri = URI.parse(original_url)

    self.original_url = 'https://' + original_url unless uri.scheme
  end
end
