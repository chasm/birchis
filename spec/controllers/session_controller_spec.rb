require 'spec_helper'

describe SessionController do
  subject(:user) { Fabricate(:user) }
  
  describe "POST #create" do
    it "logs an authenticated user in and redirects to site#index"
    
    it "redisplays the login form for authentication failures"
    
    it "sets code and expires_at for a password reset request"
  end
end