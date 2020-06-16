class TeppanyakiController < ApplicationController
	skip_before_action :verify_authenticity_token
	before_action :authenticate_user!, :except => [ :index]
  def index

  end

  def form
  end

end
