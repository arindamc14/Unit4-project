module API
	class OrdersController < ApplicationController
		def create

			@order = Order.new(order_params)

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
end

