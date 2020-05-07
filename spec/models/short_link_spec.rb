require 'rails_helper'

RSpec.describe ShortLink, type: :model do
  it 'is not valid when original_url is nil' do
    short_link = ShortLink.new
    expect(short_link).to_not be_valid
  end

  it 'is not valid when original_url is empty' do
    short_link = ShortLink.new(original_url: '')
    expect(short_link).to_not be_valid
  end

  it 'is not valid when original_url is missing hostname' do
    short_link = ShortLink.new(original_url: 'http://')
    expect(short_link).to_not be_valid
  end

  it 'prepends https:// if protocol is missing' do
    short_link = ShortLink.new(original_url: 'www.google.com')
    expect(short_link.original_url).to eq('https://www.google.com')
  end

  it 'does not prepend https if protocol is present' do
    short_link = ShortLink.new(original_url: 'http://www.google.com')
    expect(short_link.original_url).to eq('http://www.google.com')
  end

  it 'generates a random slug' do
    short_link = ShortLink.new(original_url: 'www.google.com')
    expect(short_link.slug).not_to be_empty
  end
end
