require 'test_helper'

class WelcomeControllerTest < ActionController::TestCase
  test "should get resume" do
    get :resume
    assert_response :success
  end

end
