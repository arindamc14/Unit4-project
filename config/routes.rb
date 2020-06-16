Rails.application.routes.draw do
  resources :orders
  resources :menus
  devise_for :users, controllers: { profiles: "profiles" }
  root 'teppanyaki#index'
  get '/form', to: 'teppanyaki#form', as: 'form'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # namespace :api, defaults: {format: 'json'} do
  # 	resources :orders, only: [:create]
  # end

  # match '*path', to: 'teppanyaki#form', via: :all
end
