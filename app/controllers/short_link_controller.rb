class ShortLinkController < ApplicationController
  def create

  end

  def show
    short_link = ShortLink.find_by(slug: params[:slug])
    redirect_to short_link.original_url
  end
end
