require "application_system_test_case"

class OrdersTest < ApplicationSystemTestCase
  setup do
    @order = orders(:one)
  end

  test "visiting the index" do
    visit orders_url
    assert_selector "h1", text: "Orders"
  end

  test "creating a Order" do
    visit orders_url
    click_on "New Order"

    fill_in "Baby kailan", with: @order.baby_kailan
    fill_in "Dory fish", with: @order.dory_fish
    fill_in "Iberico pork pluma", with: @order.iberico_pork_pluma
    fill_in "Japanese steamed rice", with: @order.japanese_steamed_rice
    fill_in "Kagoshima japanese wagyu sirloin steak", with: @order.kagoshima_japanese_wagyu_sirloin_steak
    fill_in "Lobster red wine sauce and yuzu kosho", with: @order.lobster_red_wine_sauce_and_yuzu_kosho
    fill_in "Mixed vegetables", with: @order.mixed_vegetables
    fill_in "Sliced chicken", with: @order.sliced_chicken
    fill_in "Sliced lamb", with: @order.sliced_lamb
    fill_in "Table", with: @order.table
    fill_in "Tiger prawns", with: @order.tiger_prawns
    fill_in "User", with: @order.user_id
    click_on "Create Order"

    assert_text "Order was successfully created"
    click_on "Back"
  end

  test "updating a Order" do
    visit orders_url
    click_on "Edit", match: :first

    fill_in "Baby kailan", with: @order.baby_kailan
    fill_in "Dory fish", with: @order.dory_fish
    fill_in "Iberico pork pluma", with: @order.iberico_pork_pluma
    fill_in "Japanese steamed rice", with: @order.japanese_steamed_rice
    fill_in "Kagoshima japanese wagyu sirloin steak", with: @order.kagoshima_japanese_wagyu_sirloin_steak
    fill_in "Lobster red wine sauce and yuzu kosho", with: @order.lobster_red_wine_sauce_and_yuzu_kosho
    fill_in "Mixed vegetables", with: @order.mixed_vegetables
    fill_in "Sliced chicken", with: @order.sliced_chicken
    fill_in "Sliced lamb", with: @order.sliced_lamb
    fill_in "Table", with: @order.table
    fill_in "Tiger prawns", with: @order.tiger_prawns
    fill_in "User", with: @order.user_id
    click_on "Update Order"

    assert_text "Order was successfully updated"
    click_on "Back"
  end

  test "destroying a Order" do
    visit orders_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Order was successfully destroyed"
  end
end
