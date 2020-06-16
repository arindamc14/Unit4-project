require 'test_helper'

class OrdersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @order = orders(:one)
  end

  test "should get index" do
    get orders_url
    assert_response :success
  end

  test "should get new" do
    get new_order_url
    assert_response :success
  end

  test "should create order" do
    assert_difference('Order.count') do
      post orders_url, params: { order: { baby_kailan: @order.baby_kailan, dory_fish: @order.dory_fish, iberico_pork_pluma: @order.iberico_pork_pluma, japanese_steamed_rice: @order.japanese_steamed_rice, kagoshima_japanese_wagyu_sirloin_steak: @order.kagoshima_japanese_wagyu_sirloin_steak, lobster_red_wine_sauce_and_yuzu_kosho: @order.lobster_red_wine_sauce_and_yuzu_kosho, mixed_vegetables: @order.mixed_vegetables, sliced_chicken: @order.sliced_chicken, sliced_lamb: @order.sliced_lamb, table: @order.table, tiger_prawns: @order.tiger_prawns, user_id: @order.user_id } }
    end

    assert_redirected_to order_url(Order.last)
  end

  test "should show order" do
    get order_url(@order)
    assert_response :success
  end

  test "should get edit" do
    get edit_order_url(@order)
    assert_response :success
  end

  test "should update order" do
    patch order_url(@order), params: { order: { baby_kailan: @order.baby_kailan, dory_fish: @order.dory_fish, iberico_pork_pluma: @order.iberico_pork_pluma, japanese_steamed_rice: @order.japanese_steamed_rice, kagoshima_japanese_wagyu_sirloin_steak: @order.kagoshima_japanese_wagyu_sirloin_steak, lobster_red_wine_sauce_and_yuzu_kosho: @order.lobster_red_wine_sauce_and_yuzu_kosho, mixed_vegetables: @order.mixed_vegetables, sliced_chicken: @order.sliced_chicken, sliced_lamb: @order.sliced_lamb, table: @order.table, tiger_prawns: @order.tiger_prawns, user_id: @order.user_id } }
    assert_redirected_to order_url(@order)
  end

  test "should destroy order" do
    assert_difference('Order.count', -1) do
      delete order_url(@order)
    end

    assert_redirected_to orders_url
  end
end
