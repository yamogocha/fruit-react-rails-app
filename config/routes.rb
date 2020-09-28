Rails.application.routes.draw do
  root to: 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :fruits, only: [:index, :create, :destroy, :update]
  end
end
