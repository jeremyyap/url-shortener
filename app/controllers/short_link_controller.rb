class ShortLinkController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    short_link = ShortLink.new(new_link_params)
    if short_link.save
      render json: { slug: 'Testing' }
    else
      head :bad_request
    end
  end

  def show
    short_link = ShortLink.find_by(slug: params[:slug])
    redirect_to short_link.original_url
  end

  private

  def new_link_params
    params.require(:link).permit(:original_url)
  end
end
