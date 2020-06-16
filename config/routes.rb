Rails.application.routes.draw do
  devise_for :users, controllers: { profiles: "profiles" }
  root 'teppanyaki#index'
  get '/form', to: 'teppanyaki#form', as: 'form'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
