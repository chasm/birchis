Birchis::Application.routes.draw do
  get "privacy" => "site#privacy"
  get "terms" => "site#terms"
  
  get "reset/:code" => "password#edit", as: :password
  put "reset/:code" => "password#update"
  patch "reset/:code" => "password#update"
  
  get "login" => "session#new"
  post "login" => "session#create"
  delete "logout" => "session#destroy"
  get "logout" => "session#destroy"
  
  resources :users
  
  root 'site#index'
end
