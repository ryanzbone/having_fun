class ApplicationController < ActionController::Base
  before_filter :set_user

  def set_user
    session[:user_uuid] ||= SecureRandom.uuid
    User.find_or_create_by uuid: session[:user_uuid]
  end
end
