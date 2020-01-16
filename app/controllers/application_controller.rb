class ApplicationController < ActionController::Base
  before_action :current_user

  def set_user
    session[:user_uuid] ||= SecureRandom.uuid
    User.find_or_create_by uuid: session[:user_uuid]
  end

  def current_user
    @current_user ||= set_user
  end
end
