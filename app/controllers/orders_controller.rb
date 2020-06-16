class OrdersController < ApplicationController

  before_action :set_order, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token
  # GET /orders
  # GET /orders.json
  def index
    userId = current_user.id

    # @orders = Order.where(user_id = @userId)
    @orders = Order.where(user_id: userId)
    # @orders = Order.find_by(user_id: userId)
    respond_to do |format|
      format.json {
        render :json => @orders,
        include: :user
      }

      format.html
    end
  end
  
  

  # GET /orders/1
  # GET /orders/1.json
  def show
  end

  # GET /orders/new
  def new
    @order = Order.new
  end

  # GET /orders/1/edit
  def edit
  end

  # POST /orders
  # POST /orders.json
  def create
    @order = Order.new(order_params)

    @order.user = current_user


    respond_to do |format|
      if @order.save
        format.html { redirect_to @order, notice: 'Order was successfully created.' }
        format.json { render :show, status: :created, location: @order }
      else
        format.html { render :new }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /orders/1
  # PATCH/PUT /orders/1.json
  def update
    respond_to do |format|
      if @order.update(order_params)
        format.html { redirect_to @order, notice: 'Order was successfully updated.' }
        format.json { render :show, status: :ok, location: @order }
      else
        format.html { render :edit }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /orders/1
  # DELETE /orders/1.json
  def destroy
    @order.destroy
    respond_to do |format|
      format.html { redirect_to orders_url, notice: 'Order was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def order_params
      params.require(:order).permit(:sliced_lamb, :tiger_prawns, :dory_fish, :baby_kailan, :mixed_vegetables, :sliced_chicken, :kagoshima_japanese_wagyu_sirloin_steak, :lobster_red_wine_sauce_and_yuzu_kosho, :iberico_pork_pluma, :japanese_steamed_rice, :table, :user_id)
    end
end
