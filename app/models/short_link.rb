class ShortLink < ApplicationRecord
  after_initialize :set_defaults

  SLUG_LENGTH = 7
  # TODO: Might want to reduce the charset to improve readability
  # e.g. 0 vs O, 1 vs I
  SLUG_CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.chars.freeze

  def set_defaults
    self.slug ||= random_unique_slug
  end

  private

  def random_unique_slug
    # TODO: Not guaranteed to be unique - race condition between here and saving
    slug = random_slug
    slug = random_slug while ShortLink.exists?(slug: slug)
    slug
  end

  def random_slug
    (0...SLUG_LENGTH).map { SLUG_CHARS.sample }.join
  end
end
