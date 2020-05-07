class ShortLinkController < ApplicationController
  skip_before_action :verify_authenticity_token

  rescue_from ActionController::ParameterMissing do |error|
    render json: { message: error }, status: :unprocessable_entity
  end

  def create
    @short_link = ShortLink.new(new_link_params)
    if @short_link.save
      render json: "#{ENV['HOSTNAME']}/#{@short_link.slug}"
    else
      head :bad_request
    end
  end

  def show
    @short_link = ShortLink.find_by(slug: params[:slug])

    if @short_link
      redirect_to @short_link.original_url
    else
      respond_to do |format|
        format.html { render file: "#{Rails.root}/public/404", layout: false, status: :not_found }
        format.any  { head :not_found }
      end
    end
  end

  private

  def new_link_params
    params.require(:link).permit(:original_url)
  end
end
