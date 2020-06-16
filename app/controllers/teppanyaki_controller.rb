class TeppanyakiController < ApplicationController
	before_action :authenticate_user!, :except => [ :index]
  def index

  end

  def form
  end

end
