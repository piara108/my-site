require 'test_helper'

class WelcomeControllerTest < ActionController::TestCase
  test "should get aboutme" do
    get :aboutme
    assert_response :success
  end

  test "should get blog" do
    get :blog
    assert_response :success
  end

  test "should get tutorials" do
    get :tutorials
    assert_response :success
  end

end
