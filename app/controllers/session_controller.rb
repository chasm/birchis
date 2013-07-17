class SessionController < ApplicationController
  
  def new
  end

  def create
    if params[:password].blank?
      user = User.find_by(email: params[:email])
      
      if user
        user.code = SecureRandom.urlsafe_base64
        user.expires_at = Time.now + 4.hours
        user.save
      end
    else
      user = User.authenticate(params[:email], params[:password])
      
      if user
        session[:user_id] = user.id
        redirect_to root_url
      end
    end

    render :new
  end

  def destroy
    session[:user_id] = nil
    redirect_to login_url
  end
end
