Rails.application.routes.draw do
  root 'teppanyaki#index'
  get '/form', to: 'teppanyaki#form', as: 'form'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
