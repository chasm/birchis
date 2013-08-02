require File.expand_path('../boot', __FILE__)

# Pick the frameworks you want:
require "action_controller/railtie"
require "action_mailer/railtie"
require "sprockets/railtie"


# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(:default, Rails.env)

module Birchis
  class Application < Rails::Application
    
    config.generators do |g|
      g.orm :mongo_mapper
    end
    
  end
end
