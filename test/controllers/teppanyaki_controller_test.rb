require 'test_helper'

class TeppanyakiControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get teppanyaki_index_url
    assert_response :success
  end

end
