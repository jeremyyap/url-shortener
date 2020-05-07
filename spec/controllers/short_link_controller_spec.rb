require 'rails_helper'

RSpec.describe ShortLinkController, type: :controller do
  let (:short_link) { ShortLink.create(original_url: 'https://www.google.com') }

  describe '#create' do
    it 'returns HTTP 422 when the link parameter is missing' do
      post :create
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end

  describe '#show' do
    it 'redirects from the short link to the original URL' do
      get :show, params: { slug: short_link.slug }
      expect(response).to redirect_to short_link.original_url
    end

    it 'returns HTTP 404 when the link is invalid' do
      get :show, params: { slug: short_link.slug * 2 }
      expect(response).to have_http_status(:not_found)
    end
  end
end
